import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity, ExternalLink, Download, Trophy, Target, Zap, TrendingDown, RefreshCw } from 'lucide-react';

const StatsAnalytics = ({ competitiveStats }) => {
  const [chartType, setChartType] = useState('ratings');
  const [timeRange, setTimeRange] = useState('current');
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Prepare data for charts
  const ratingData = competitiveStats.map(platform => ({
    name: platform.platform,
    rating: platform.rating || 0,
    maxRating: platform.maxRating || 0,
    solved: platform.solved || 0,
    acceptance: platform.acceptance || 0
  }));

  const solvedData = competitiveStats.map(platform => ({
    name: platform.platform,
    problems: platform.solved || 0
  }));

  // Create performance trend data
  const performanceData = competitiveStats.map(platform => ({
    platform: platform.platform,
    current: platform.rating || 0,
    max: platform.maxRating || 0,
    progress: ((platform.rating || 0) / (platform.maxRating || 1)) * 100,
    acceptance: platform.acceptance || 0
  }));

  // Create difficulty breakdown for LeetCode
  const difficultyData = competitiveStats.find(p => p.platform === "LeetCode") ? [
    { name: 'Easy', value: competitiveStats.find(p => p.platform === "LeetCode")?.problemsByDifficulty?.easy || 0, color: '#10b981' },
    { name: 'Medium', value: competitiveStats.find(p => p.platform === "LeetCode")?.problemsByDifficulty?.medium || 0, color: '#f59e0b' },
    { name: 'Hard', value: competitiveStats.find(p => p.platform === "LeetCode")?.problemsByDifficulty?.hard || 0, color: '#ef4444' }
  ] : [];

  const pieData = competitiveStats.map(platform => ({
    name: platform.platform,
    value: platform.solved || 0,
    color: platform.colorClass === 'orange' ? '#fb923c' : 
           platform.colorClass === 'purple' ? '#a855f7' : 
           platform.colorClass === 'blue' ? '#3b82f6' : 
           platform.colorClass === 'green' ? '#10b981' :
           platform.colorClass === 'red' ? '#ef4444' :
           platform.colorClass === 'indigo' ? '#6366f1' : '#6b7280'
  }));

  const totalSolved = competitiveStats.reduce((sum, p) => sum + (p.solved || 0), 0);
  const avgRating = competitiveStats.reduce((sum, p) => sum + (p.rating || 0), 0) / competitiveStats.length;
  const maxRating = Math.max(...competitiveStats.map(p => p.maxRating || 0));
  const topPerformer = competitiveStats.reduce((max, p) => (p.rating || 0) > (max.rating || 0) ? p : max, competitiveStats[0]);

  const handleChartClick = (data) => {
    if (data && data.activePayload && data.activePayload[0]) {
      const platformName = data.activePayload[0].payload.name || data.activePayload[0].payload.platform;
      const platform = competitiveStats.find(p => p.platform === platformName);
      if (platform) {
        setSelectedPlatform(platform);
        window.open(platform.link, '_blank');
      }
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      // Simulate refresh - in a real implementation, this would fetch fresh data
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLastUpdated(new Date());
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse';
      successMessage.textContent = '✅ Stats refreshed successfully!';
      document.body.appendChild(successMessage);
      
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 3000);
      
    } catch (error) {
      console.error('Refresh failed:', error);
      
      // Show error message
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-pulse';
      errorMessage.textContent = '❌ Failed to refresh stats';
      document.body.appendChild(errorMessage);
      
      setTimeout(() => {
        document.body.removeChild(errorMessage);
      }, 3000);
    } finally {
      setIsRefreshing(false);
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800/95 backdrop-blur-sm p-4 rounded-xl border border-slate-600/50 shadow-2xl shadow-purple-500/20">
          <p className="text-white font-semibold mb-2">{label}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white p-6 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1"></div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-slate-400">Last updated</div>
                <div className="text-sm text-slate-300">
                  {lastUpdated.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isRefreshing 
                    ? 'bg-slate-600 text-slate-300 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-400/25'
                }`}
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            <h1 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Analytics Dashboard
            </h1>
            <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </div>
          <p className="text-slate-300 text-lg font-medium">Track your competitive programming journey across all platforms</p>
        </div>

        {/* Chart Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex gap-2 bg-slate-800/80 backdrop-blur-sm rounded-xl p-2 border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <button
              onClick={() => setChartType('ratings')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                chartType === 'ratings' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <BarChart3 className="h-4 w-4 inline mr-2" />
              Rating Comparison
            </button>
            <button
              onClick={() => setChartType('solved')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                chartType === 'solved' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Target className="h-4 w-4 inline mr-2" />
              Problems Solved
            </button>
            <button
              onClick={() => setChartType('distribution')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                chartType === 'distribution' 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <PieChartIcon className="h-4 w-4 inline mr-2" />
              Distribution
            </button>
          </div>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-purple-300 text-sm font-medium">Average Rating</span>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {Math.round(avgRating)}
            </div>
            <div className="text-xs text-purple-400">Across all platforms</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-cyan-300 text-sm font-medium">Total Problems</span>
              <Target className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {totalSolved}
            </div>
            <div className="text-xs text-cyan-400">Problems solved</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-green-300 text-sm font-medium">Active Platforms</span>
              <Activity className="h-4 w-4 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {competitiveStats.length}
            </div>
            <div className="text-xs text-green-400">Connected profiles</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-orange-300 text-sm font-medium">Top Performer</span>
              <Trophy className="h-4 w-4 text-orange-400" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {topPerformer.platform}
            </div>
            <div className="text-xs text-orange-400">{topPerformer.rating} rating</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {chartType === 'ratings' && (
            <>
              {/* Rating Comparison Line Chart */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                  Rating Comparison
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={performanceData} onClick={handleChartClick} className="cursor-pointer">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="platform" 
                      stroke="#9ca3af"
                      tick={{ fill: '#9ca3af' }}
                    />
                    <YAxis 
                      stroke="#9ca3af"
                      tick={{ fill: '#9ca3af' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="current" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', r: 6 }}
                      activeDot={{ r: 8 }}
                      name="Current Rating"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="max" 
                      stroke="#ec4899" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#ec4899', r: 4 }}
                      name="Max Rating"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Performance Overview */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  Performance Overview
                </h3>
                <div className="space-y-4">
                  {competitiveStats.map((platform) => (
                    <a 
                      key={platform.platform}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ 
                            backgroundColor: platform.colorClass === 'orange' ? '#fb923c' : 
                                           platform.colorClass === 'purple' ? '#a855f7' : 
                                           platform.colorClass === 'blue' ? '#3b82f6' : 
                                           platform.colorClass === 'green' ? '#10b981' :
                                           platform.colorClass === 'red' ? '#ef4444' :
                                           platform.colorClass === 'indigo' ? '#6366f1' : '#6b7280'
                          }}
                        />
                        <span className="text-white font-medium group-hover:text-cyan-200 transition-colors">{platform.platform}</span>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <div>
                          <div className="text-lg font-semibold text-white">{platform.rating}</div>
                          <div className="text-xs text-slate-400">{platform.solved} solved</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}

          {chartType === 'solved' && (
            <>
              {/* Problems Solved Chart */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Target className="h-5 w-5 text-cyan-400" />
                  Problems Solved Analysis
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={solvedData} onClick={handleChartClick} className="cursor-pointer">
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
                      dataKey="problems" 
                      fill="#06b6d4"
                      radius={[8, 8, 0, 0]}
                      name="Problems Solved"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Platform Stats Table */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-orange-400" />
                  Platform Statistics
                </h3>
                <div className="space-y-3">
                  {competitiveStats.map((platform) => (
                    <a 
                      key={platform.platform}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full"
                            style={{ 
                              backgroundColor: platform.colorClass === 'orange' ? '#fb923c' : 
                                             platform.colorClass === 'purple' ? '#a855f7' : 
                                             platform.colorClass === 'blue' ? '#3b82f6' : 
                                             platform.colorClass === 'green' ? '#10b981' :
                                             platform.colorClass === 'red' ? '#ef4444' :
                                             platform.colorClass === 'indigo' ? '#6366f1' : '#6b7280'
                            }}
                          />
                          <span className="text-white font-medium group-hover:text-cyan-200 transition-colors">{platform.platform}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-white">{platform.solved}</div>
                          <div className="text-xs text-slate-400">problems solved</div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}

          {chartType === 'distribution' && (
            <>
              {/* Distribution Pie Chart */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-pink-400" />
                  Problem Distribution
                </h3>
                <ResponsiveContainer width="100%" height={350}>
                  <PieChart onClick={handleChartClick} className="cursor-pointer">
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                      outerRadius={100}
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

              {/* Detailed Insights */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-400" />
                  Detailed Insights
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                    <div className="text-sm text-purple-200 mb-2">🏆 Highest Rating</div>
                    <div className="text-2xl font-bold text-white">{maxRating}</div>
                    <div className="text-xs text-purple-300">Peak performance</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <div className="text-sm text-cyan-200 mb-2">📊 Success Rate</div>
                    <div className="text-2xl font-bold text-white">
                      {totalSolved > 0 ? Math.round((totalSolved / (totalSolved + 100)) * 100) : 0}%
                    </div>
                    <div className="text-xs text-cyan-300">Problems per platform</div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                    <div className="text-sm text-green-200 mb-2">🚀 Consistency</div>
                    <div className="text-2xl font-bold text-white">
                      {competitiveStats.filter(p => p.rating > 1500).length}/6
                    </div>
                    <div className="text-xs text-green-300">Platforms above 1500</div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Export Options */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => {
              const dataStr = JSON.stringify({
                summary: {
                  totalProblemsSolved: totalSolved,
                  averageRating: Math.round(avgRating),
                  maxRating: maxRating,
                  activePlatforms: competitiveStats.length,
                  topPerformer: topPerformer.platform,
                  exportDate: new Date().toISOString()
                },
                platforms: competitiveStats
              }, null, 2);
              const dataBlob = new Blob([dataStr], { type: 'application/json' });
              const url = URL.createObjectURL(dataBlob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `coding-stats-${new Date().toISOString().split('T')[0]}.json`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25 transform hover:scale-105"
          >
            <Download className="h-5 w-5" />
            Export Complete Analytics Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsAnalytics;
