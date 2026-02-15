# Coding Portfolio with Auto-Updated Stats

This portfolio automatically updates coding statistics from competitive programming platforms.

## 🔄 Auto-Update Features

- **Codeforces**: Rating, max rating, rank (every 2 hours)
- **CodeChef**: Rating, max rating, stars, problems solved (every 2 hours)
- **LeetCode**: Manual update (API restrictions)

## 📊 Update Schedule

The GitHub Actions workflow runs:
- **Every 2 hours** automatically (optimized for faster updates)
- **Manual trigger** available in GitHub Actions tab
- **Commits changes** with timestamp

## 🚀 Quick Manual Update

For immediate updates without waiting for the scheduled run:

### Option 1: Local Script
```bash
# Make the script executable (Unix/Linux/macOS)
chmod +x update-stats.sh

# Run the update
./update-stats.sh
```

### Option 2: Direct Node.js
```bash
node .github/scripts/update-stats.js
```

### Option 3: GitHub Actions
1. Go to your repository's **Actions** tab
2. Select **"Update Coding Stats"** workflow
3. Click **"Run workflow"** button

## ⚡ Performance Optimizations

- **Parallel API calls**: Fetches from all platforms simultaneously
- **Faster timeouts**: 8-second timeout with 2 retries
- **Reduced delays**: 1-second retry intervals instead of 2+ seconds
- **No-cache headers**: Ensures fresh data every time

## 🛠 Technical Details

- **Workflow**: `.github/workflows/update-stats.yml`
- **Script**: `.github/scripts/update-stats.js`
- **Sources**: Codeforces API, CodeChef API
- **Fallback**: Keeps existing stats if API fails

## 📈 Stats Display

Updated stats appear in the "Competitive Programming" section with:
- Visual progress bars
- Color-coded platforms
- Clickable profile links
- Real-time data
