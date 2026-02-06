#!/bin/bash

echo "🧪 Testing GitHub Actions setup..."
echo ""
echo "✅ Workflow file exists:"
if [ -f ".github/workflows/update-stats.yml" ]; then
    echo "   ✓ update-stats.yml"
else
    echo "   ✗ update-stats.yml missing"
fi

echo ""
echo "✅ Script file exists:"
if [ -f ".github/scripts/update-stats.js" ]; then
    echo "   ✓ update-stats.js"
else
    echo "   ✗ update-stats.js missing"
fi

echo ""
echo "✅ Package.json exists:"
if [ -f "package.json" ]; then
    echo "   ✓ package.json"
else
    echo "   ✗ package.json missing"
fi

echo ""
echo "🔑 GitHub token setup:"
echo "   Add GITHUB_TOKEN secret in repo settings"
echo "   Repository → Settings → Secrets and variables → Actions"
echo ""

echo "📁 Files ready to commit:"
echo "   .github/workflows/update-stats.yml"
echo "   .github/scripts/update-stats.js"
echo "   AUTO_UPDATE_STATS.md"
echo ""
echo "🚀 Run: git add . && git commit -m 'Add auto-update system' && git push"
