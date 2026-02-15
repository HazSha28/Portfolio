import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';

const StatsAnalytics = ({ competitiveStats }) => {
  const [chartType, setChartType] = useState('ratings');
  const [timeRange, setTimeRange] = useState('current');

  // Prepare data for charts
  const ratingData = competitiveStats.map(platform => ({
    name: platform.platform,
    rating: platform.rating || 0,
    maxRating: platform.maxRating || 0,
    solved: platform.solved || 0
  }));

  const solvedData = competitiveStats.map(platform => ({
    name: platform.platform,
    problems: platform.solved || 0
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
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-slate-400">Visualize your coding performance across platforms</p>
        </div>

        {/* Chart Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex gap-2 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setChartType('ratings')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                chartType === 'ratings' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <BarChart3 className="h-4 w-4 inline mr-2" />
              Ratings
            </button>
            <button
              onClick={() => setChartType('solved')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                chartType === 'solved' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Activity className="h-4 w-4 inline mr-2" />
              Problems Solved
            </button>
            <button
              onClick={() => setChartType('distribution')}
              className={`px-4 py-2 rounded-md transition-all duration-200 ${
                chartType === 'distribution' 
                  ? 'bg-purple-500 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <PieChartIcon className="h-4 w-4 inline mr-2" />
              Distribution
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-300 text-sm">Average Rating</span>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {Math.round(avgRating)}
            </div>
            <div className="text-xs text-purple-400 mt-1">Across all platforms</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-cyan-300 text-sm">Total Problems</span>
              <BarChart3 className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {totalSolved}
            </div>
            <div className="text-xs text-cyan-400 mt-1">Problems solved</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-300 text-sm">Active Platforms</span>
              <Activity className="h-4 w-4 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white">
              {competitiveStats.length}
            </div>
            <div className="text-xs text-green-400 mt-1">Connected profiles</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rating Comparison Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Rating Comparison</h3>
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

          {/* Problems Solved Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Problems Solved</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={solvedData}>
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

          {/* Distribution Pie Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Problem Distribution</h3>
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

          {/* Performance Trends */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Performance Overview</h3>
            <div className="space-y-4">
              {competitiveStats.map((platform) => (
                <div key={platform.platform} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: platform.colorClass === 'orange' ? '#fb923c' : 
                                       platform.colorClass === 'purple' ? '#a855f7' : 
                                       platform.colorClass === 'blue' ? '#3b82f6' : '#ef4444'
                      }}
                    />
                    <span className="text-white font-medium">{platform.platform}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-white">{platform.rating}</div>
                    <div className="text-xs text-slate-400">{platform.solved} solved</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25">
            Export Analytics Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatsAnalytics;
