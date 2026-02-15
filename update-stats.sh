#!/bin/bash

# Manual stats update script for local development
# Run this script to immediately update your coding stats

echo "🔄 Starting manual stats update..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f ".github/scripts/update-stats.js" ]; then
    echo "❌ Please run this script from the portfolio root directory"
    exit 1
fi

# Run the update script
node .github/scripts/update-stats.js

# Check if the update was successful
if [ $? -eq 0 ]; then
    echo "✅ Stats updated successfully!"
    echo "💡 Don't forget to commit the changes:"
    echo "   git add src/App.jsx"
    echo "   git commit -m \"🔄 Update coding stats $(date '+%Y-%m-%d %H:%M:%S')\""
    echo "   git push"
else
    echo "❌ Stats update failed. Please check the logs above."
    exit 1
fi
