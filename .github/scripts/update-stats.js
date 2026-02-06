const fs = require('fs');
const path = require('path');

// Platform API configurations
const PLATFORMS = {
  codeforces: {
    username: 'Hazeena',
    apiUrl: 'https://codeforces.com/api/user.info?handles=Hazeena',
    extractData: (data) => ({
      rating: data.result[0]?.rating || 0,
      maxRating: data.result[0]?.maxRating || 0,
      rank: data.result[0]?.rank || ''
    })
  },
  codechef: {
    username: 'hazeena28',
    apiUrl: 'https://www.codechef.com/api/users/hazeena28',
    extractData: (data) => ({
      rating: data.current_rating || 0,
      maxRating: data.highest_rating || 0,
      stars: data.stars || 0,
      problemsSolved: data.problems_solved || 0
    })
  }
};

// Fetch data from API
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; StatsUpdater/1.0)'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.log(`Attempt ${i + 1} failed for ${url}:`, error.message);
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
    }
  }
}

// Update App.jsx with new stats
function updateAppjsx(newStats) {
  const appPath = path.join(__dirname, '../../src/App.jsx');
  let content = fs.readFileSync(appPath, 'utf8');
  
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
    color: "red"
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
    color: "purple"
  }`;
    content = content.replace(codechefPattern, newCodechef);
  }
  
  fs.writeFileSync(appPath, content);
  console.log('✅ App.jsx updated successfully');
}

// Main execution
async function main() {
  console.log('🔄 Starting coding stats update...');
  
  const newStats = {};
  
  try {
    // Fetch Codeforces data
    console.log('📊 Fetching Codeforces data...');
    const codeforcesData = await fetchWithRetry(PLATFORMS.codeforces.apiUrl);
    newStats.codeforces = PLATFORMS.codeforces.extractData(codeforcesData);
    console.log(`✅ Codeforces: ${newStats.codeforces.rating} rating`);
    
    // Fetch CodeChef data
    console.log('📊 Fetching CodeChef data...');
    const codechefData = await fetchWithRetry(PLATFORMS.codechef.apiUrl);
    newStats.codechef = PLATFORMS.codechef.extractData(codechefData);
    console.log(`✅ CodeChef: ${newStats.codechef.rating} rating, ${newStats.codechef.problemsSolved} solved`);
    
  } catch (error) {
    console.error('❌ Error fetching data:', error.message);
    console.log('⚠️  Using existing stats - will retry next run');
    return;
  }
  
  // Update the file
  updateAppjsx(newStats);
  
  console.log('🎉 Stats update completed successfully!');
}

// Run the script
main().catch(console.error);
