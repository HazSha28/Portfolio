import { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  BarChart3, 
  Trophy, 
  Target, 
  Clock, 
  Users, 
  Star, 
  Zap,
  Activity,
  Award,
  Globe
} from 'lucide-react';

const UnifiedStatsDashboard = ({ competitiveStats }) => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [selectedView, setSelectedView] = useState('overview');

  // Animate numbers on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const newValues = {};
      competitiveStats.forEach(platform => {
        newValues[platform.platform] = {
          rating: platform.rating || 0,
          solved: platform.solved || 0,
          maxRating: platform.maxRating || 0
        };
      });
      setAnimatedValues(newValues);
    }, 100);
    return () => clearTimeout(timer);
  }, [competitiveStats]);

  // Prepare data for charts
  const ratingData = competitiveStats.map(platform => ({
    name: platform.platform,
    rating: platform.rating || 0,
    maxRating: platform.maxRating || 0,
    solved: platform.solved || 0
  }));

  const pieData = competitiveStats.map(platform => ({
    name: platform.platform,
    value: platform.solved || 0,
    color: platform.colorClass === 'orange' ? '#fb923c' : 
           platform.colorClass === 'purple' ? '#a855f7' : 
           platform.colorClass === 'blue' ? '#3b82f6' : '#ef4444'
  }));

  const totalSolved = competitiveStats.reduce((sum, p) => sum + (p.solved || 0), 0);
  const avgRating = competitiveStats.reduce((sum, p) => sum + (p.rating || 0), 0) / competitiveStats.length;
  const maxRating = Math.max(...competitiveStats.map(p => p.maxRating || 0));

  const getProgressPercentage = (current, max) => {
    if (!max || max === 0) return 0;
    return Math.min((current / max) * 100, 100);
  };

  const getRatingColor = (rating) => {
    if (rating >= 2000) return 'from-red-500 to-red-400';
    if (rating >= 1800) return 'from-orange-500 to-orange-400';
    if (rating >= 1600) return 'from-purple-500 to-purple-400';
    if (rating >= 1400) return 'from-blue-500 to-blue-400';
    if (rating >= 1200) return 'from-cyan-500 to-cyan-400';
    return 'from-gray-500 to-gray-400';
  };

  const getRankIcon = (platform) => {
    switch (platform) {
      case 'LeetCode': return <Trophy className="h-5 w-5" />;
      case 'Codeforces': return <Target className="h-5 w-5" />;
      case 'CodeChef': return <Star className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 shadow-lg">
          <p className="text-white font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Coding Performance Dashboard
          </h1>
          <p className="text-slate-400">Comprehensive competitive programming analytics and insights</p>
        </div>

        {/* View Selector */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'charts', label: 'Analytics', icon: Activity },
            { id: 'platforms', label: 'Platforms', icon: Globe }
          ].map(view => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedView === view.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <view.icon className="h-4 w-4" />
              {view.label}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-300 text-sm">Total Problems</span>
              <Target className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {animatedValues.LeetCode?.solved || totalSolved}
            </div>
            <div className="text-xs text-cyan-400 mt-1">Across all platforms</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-300 text-sm">Average Rating</span>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {Math.round(avgRating)}
            </div>
            <div className="text-xs text-purple-400 mt-1">Platform average</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-300 text-sm">Peak Rating</span>
              <Trophy className="h-4 w-4 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {maxRating}
            </div>
            <div className="text-xs text-green-400 mt-1">Highest achieved</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-orange-300 text-sm">Active Platforms</span>
              <Users className="h-4 w-4 text-orange-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {competitiveStats.length}
            </div>
            <div className="text-xs text-orange-400 mt-1">Connected profiles</div>
          </div>
        </div>

        {/* Main Content Area */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Rating Comparison Chart */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                Rating Analysis
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ratingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af' }}
                  />
                  <YAxis 
                    stroke="#9ca3af"
                    tick={{ fill: '#9ca3af' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="rating" 
                    fill="#8b5cf6"
                    radius={[8, 8, 0, 0]}
                    name="Current Rating"
                  />
                  <Bar 
                    dataKey="maxRating" 
                    fill="#ec4899"
                    radius={[8, 8, 0, 0]}
                    name="Max Rating"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Problem Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-cyan-400" />
                Problem Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {selectedView === 'charts' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Performance Trends */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 lg:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competitiveStats.map((platform) => (
                  <div key={platform.platform} className="bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${platform.gradientFrom} ${platform.gradientTo}`}>
                          {getRankIcon(platform.platform)}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{platform.platform}</h4>
                          <a
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            View Profile →
                          </a>
                        </div>
                      </div>
                      {platform.stars && (
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">{platform.stars}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Rating</span>
                        <span className="text-lg font-semibold text-white">{platform.rating}</span>
                      </div>
                      
                      {platform.solved && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-400">Solved</span>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold text-cyan-400">{platform.solved}</span>
                            <Zap className="h-4 w-4 text-cyan-400" />
                          </div>
                        </div>
                      )}
                      
                      {platform.globalRank && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-400">Global Rank</span>
                          <span className="text-sm font-semibold text-green-400">{platform.globalRank}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'platforms' && (
          <div className="space-y-6 mb-8">
            {competitiveStats.map((platform, index) => (
              <div
                key={platform.platform}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${platform.gradientFrom} ${platform.gradientTo} shadow-lg`}>
                      {getRankIcon(platform.platform)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{platform.platform}</h3>
                      <a
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                  {platform.stars && (
                    <div className="flex items-center gap-2 text-yellow-400">
                      {[...Array(platform.stars)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {platform.rating && (
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">Current Rating</div>
                      <div className="text-2xl font-bold text-white mb-2">
                        {animatedValues[platform.platform]?.rating || platform.rating}
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${getRatingColor(platform.rating)}`}
                          style={{
                            width: `${getProgressPercentage(platform.rating, 2500)}%`
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {platform.maxRating && (
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">Max Rating</div>
                      <div className="text-2xl font-bold text-white">
                        {animatedValues[platform.platform]?.maxRating || platform.maxRating}
                      </div>
                      <div className="text-xs text-slate-500">Peak performance</div>
                    </div>
                  )}

                  {platform.solved && (
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <div className="text-sm text-slate-400 mb-1">Problems Solved</div>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {animatedValues[platform.platform]?.solved || platform.solved}
                      </div>
                      <div className="text-xs text-slate-500">Total solved</div>
                    </div>
                  )}
                </div>

                {platform.extra && (
                  <div className="mt-4 p-3 bg-slate-700/20 rounded-lg">
                    <span className="text-sm text-slate-300">{platform.extra}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Export Options */}
        <div className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25">
            Export Performance Report
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default UnifiedStatsDashboard;
