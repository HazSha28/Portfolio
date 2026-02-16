const fs = require('fs');
const path = require('path');

// Platform API configurations
const PLATFORMS = {
  leetcode: {
    username: 'kit27csbs11',
    apiUrl: 'https://leetcode.com/graphql',
    query: `query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
      userContestRanking(username: $username) {
        rating
        attendedContestsCount
        globalRanking
      }
    }`,
    extractData: (data) => {
      const submitStats = data.data?.matchedUser?.submitStats?.acSubmissionNum || [];
      const easy = submitStats.find(s => s.difficulty === 'Easy')?.count || 0;
      const medium = submitStats.find(s => s.difficulty === 'Medium')?.count || 0;
      const hard = submitStats.find(s => s.difficulty === 'Hard')?.count || 0;
      const totalSolved = easy + medium + hard;
      
      return {
        rating: Math.round(data.data?.userContestRanking?.rating || 0),
        solved: totalSolved,
        problemsByDifficulty: { easy, medium, hard },
        acceptance: ((totalSolved / (totalSolved + 50)) * 100).toFixed(2)
      };
    }
  },
  codeforces: {
    username: 'Hazeena',
    apiUrl: 'https://codeforces.com/api/user.info?handles=Hazeena',
    extractData: (data) => ({
      rating: data.result[0]?.rating || 0,
      maxRating: data.result[0]?.maxRating || 0,
      rank: data.result[0]?.rank || ''
    })
  },
  // CodeChef temporarily disabled due to API issues
  // codechef: {
  //   username: 'hazeena28',
  //   apiUrl: 'https://competitive-coding-api.herokuapp.com/api/codechef/hazeena28',
  //   extractData: (data) => ({
  //     rating: data.rating || 0,
  //     maxRating: data.highest_rating || 0,
  //     stars: data.stars || 0,
  //     problemsSolved: data.problems_solved || 0
  //   })
  // }
};

// Fetch data from API with optimized retry and timeout
async function fetchWithRetry(url, retries = 2, timeout = 8000) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; StatsUpdater/1.0)',
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed for ${url}:`, error.message);
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}

// Update App.jsx with new stats
function updateAppjsx(newStats) {
  const appPath = path.join(__dirname, '../../src/App.jsx');
  let content = fs.readFileSync(appPath, 'utf8');
  
  // Update LeetCode stats
  if (newStats.leetcode) {
    const leetcodePattern = /{\s*platform:\s*"LeetCode",[^}]*}/;
    const newLeetcode = `{
    platform: "LeetCode",
    link: "https://leetcode.com/u/kit27csbs11",
    rating: ${newStats.leetcode.rating},
    maxRating: ${newStats.leetcode.rating},
    solved: ${newStats.leetcode.solved},
    acceptance: ${newStats.leetcode.acceptance},
    problemsByDifficulty: {
      easy: ${newStats.leetcode.problemsByDifficulty.easy},
      medium: ${newStats.leetcode.problemsByDifficulty.medium},
      hard: ${newStats.leetcode.problemsByDifficulty.hard}
    },
    colorClass: "orange",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-400"
  }`;
    content = content.replace(leetcodePattern, newLeetcode);
  }
  
  // Update Codeforces stats
  if (newStats.codeforces) {
    const codeforcesPattern = /{\s*platform:\s*"Codeforces",[^}]*}/;
    const newCodeforces = `{
    platform: "Codeforces",
    link: "https://codeforces.com/profile/Hazeena",
    rating: ${newStats.codeforces.rating},
    maxRating: ${newStats.codeforces.maxRating},
    solved: 30,
    extra: "200+ DSA problems",
    colorClass: "red",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-400"
  }`;
    content = content.replace(codeforcesPattern, newCodeforces);
  }
  
  // Update CodeChef stats
  if (newStats.codechef) {
    const codechefPattern = /{\s*platform:\s*"CodeChef",[^}]*}/;
    const newCodechef = `{
    platform: "CodeChef",
    link: "https://www.codechef.com/users/hazeena28",
    rating: ${newStats.codechef.rating},
    maxRating: ${newStats.codechef.maxRating},
    solved: ${newStats.codechef.problemsSolved},
    stars: ${newStats.codechef.stars},
    colorClass: "purple",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-400"
  }`;
    content = content.replace(codechefPattern, newCodechef);
  }
  
  fs.writeFileSync(appPath, content);
  console.log('✅ App.jsx updated successfully');
}

// Main execution with parallel API calls
async function main() {
  console.log('🔄 Starting coding stats update...');
  
  const newStats = {};
  let hasErrors = false;
  
  try {
    // Fetch data from available platforms
    console.log('📊 Fetching data from all platforms...');
    
    const promises = [];
    if (PLATFORMS.leetcode) {
      promises.push(
        fetch(PLATFORMS.leetcode.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (compatible; StatsUpdater/1.0)'
          },
          body: JSON.stringify({
            query: PLATFORMS.leetcode.query,
            variables: { username: PLATFORMS.leetcode.username }
          })
        })
          .then(res => res.json())
          .then(data => ({ platform: 'leetcode', data }))
          .catch(error => ({ platform: 'leetcode', error }))
      );
    }
    if (PLATFORMS.codeforces) {
      promises.push(
        fetchWithRetry(PLATFORMS.codeforces.apiUrl)
          .then(data => ({ platform: 'codeforces', data }))
          .catch(error => ({ platform: 'codeforces', error }))
      );
    }
    
    const results = await Promise.allSettled(promises);
    
    // Process results
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        const { platform, data, error } = result.value;
        if (error) {
          console.error(`❌ ${platform} fetch failed:`, error.message);
          hasErrors = true;
        } else {
          newStats[platform] = PLATFORMS[platform].extractData(data);
          console.log(`✅ ${platform}: ${newStats[platform].rating} rating`);
        }
      }
    });
    
    if (hasErrors) {
      console.log('⚠️  Some platforms failed - updating successful ones only');
    }
    
    // Only update if we have some successful data
    if (newStats.leetcode || newStats.codeforces) {
      updateAppjsx(newStats);
      console.log('🎉 Stats update completed successfully!');
    } else {
      console.log('❌ No data fetched - skipping update');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('❌ Critical error:', error.message);
    console.log('⚠️  Using existing stats - will retry next run');
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);