# Coding Portfolio with Auto-Updated Stats

This portfolio automatically updates coding statistics from competitive programming platforms.

## 🔄 Auto-Update Features

- **Codeforces**: Rating, max rating, rank (every 6 hours)
- **CodeChef**: Rating, max rating, stars, problems solved (every 6 hours)
- **LeetCode**: Manual update (API restrictions)

## 📊 Update Schedule

The GitHub Actions workflow runs:
- **Every 6 hours** automatically
- **Manual trigger** available in GitHub Actions tab
- **Commits changes** with timestamp

## 🚀 Setup Instructions

1. Push this repository to GitHub
2. Enable GitHub Actions in repository settings
3. The workflow will start automatically

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
