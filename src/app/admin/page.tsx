'use client';

import { useState } from 'react';
import { UserActivityChart, GameDistributionChart, MiniStatsCard } from '@/components/Charts';
import { 
  UsersIcon, 
  ChartBarIcon, 
  ExclamationTriangleIcon,
  ServerIcon 
} from '@heroicons/react/24/outline';

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<string>('dashboard');

  // Mock data for demonstration
  const dashboardStats = {
    totalUsers: 15247,
    activeUsers: 8932,
    totalGames: 1456,
    pendingReports: 23,
    monthlyGrowth: 12.5,
    serverUptime: 99.8
  };

  const recentUsers = [
    { id: 1, username: 'GamerIndo123', email: 'gamer@email.com', joinDate: '2024-08-15', status: 'Active', games: ['MLBB', 'Roblox'] },
    { id: 2, username: 'RobloxCreator', email: 'creator@email.com', joinDate: '2024-08-14', status: 'Active', games: ['Roblox'] },
    { id: 3, username: 'MLBBPro', email: 'pro@email.com', joinDate: '2024-08-13', status: 'Suspended', games: ['MLBB'] },
    { id: 4, username: 'NewPlayer', email: 'new@email.com', joinDate: '2024-08-12', status: 'Pending', games: [] },
  ];

  const contentReports = [
    { id: 1, type: 'Inappropriate Content', reporter: 'User123', target: 'GamePost456', status: 'Pending', priority: 'High' },
    { id: 2, type: 'Spam', reporter: 'ModeratorX', target: 'Comment789', status: 'Reviewing', priority: 'Medium' },
    { id: 3, type: 'Harassment', reporter: 'SafetyTeam', target: 'User999', status: 'Resolved', priority: 'High' },
    { id: 4, type: 'Copyright', reporter: 'ContentOwner', target: 'Game123', status: 'Pending', priority: 'Low' },
  ];

  const systemMetrics = [
    { name: 'Server Response Time', value: '245ms', status: 'Good', trend: 'down' },
    { name: 'Database Performance', value: '98.5%', status: 'Excellent', trend: 'up' },
    { name: 'API Success Rate', value: '99.2%', status: 'Excellent', trend: 'stable' },
    { name: 'Error Rate', value: '0.3%', status: 'Good', trend: 'down' },
  ];

  const analyticsData = [
    { metric: 'Daily Active Users', current: '8,932', previous: '8,456', change: '+5.6%' },
    { metric: 'Game Sessions', current: '24,567', previous: '22,891', change: '+7.3%' },
    { metric: 'Tournament Participation', current: '1,234', previous: '1,089', change: '+13.3%' },
    { metric: 'Content Creation', current: '456', previous: '398', change: '+14.6%' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage users, content, and monitor platform health</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'dashboard', label: 'Overview' },
            { id: 'users', label: 'User Management' },
            { id: 'content', label: 'Content Moderation' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'system', label: 'System Health' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Overview Tab */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MiniStatsCard
                title="Total Users"
                value={dashboardStats.totalUsers.toLocaleString()}
                change="+12% from last month"
                icon={<UsersIcon className="w-8 h-8" />}
              />
              <MiniStatsCard
                title="Active Users"
                value={dashboardStats.activeUsers.toLocaleString()}
                change="+8% from last month"
                icon={<ChartBarIcon className="w-8 h-8" />}
              />
              <MiniStatsCard
                title="Total Games"
                value={dashboardStats.totalGames.toLocaleString()}
                change="+15% from last month"
                icon={<ServerIcon className="w-8 h-8" />}
              />
              <MiniStatsCard
                title="Pending Reports"
                value={dashboardStats.pendingReports.toString()}
                change="Needs attention"
                icon={<ExclamationTriangleIcon className="w-8 h-8" />}
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserActivityChart />
              <GameDistributionChart />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium">New user registration spike</p>
                  <p className="text-sm text-gray-600">500+ new users in the last 24 hours</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-medium">Tournament completed successfully</p>
                  <p className="text-sm text-gray-600">MLBB Championship concluded with 1,200 participants</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-medium">Server maintenance scheduled</p>
                  <p className="text-sm text-gray-600">Planned downtime: Tomorrow 2:00 AM - 4:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {selectedTab === 'users' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg border border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white">Recent User Registrations</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {recentUsers.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">{user.username}</p>
                          <p className="text-sm text-gray-400">{user.joinDate}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.status === 'Active' ? 'bg-green-600 text-white' :
                          user.status === 'Pending' ? 'bg-yellow-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {user.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg border border-gray-700">
                <div className="p-6 border-b border-gray-700">
                  <h2 className="text-xl font-semibold text-white">System Alerts</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">All systems operational</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">High traffic detected</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Scheduled maintenance in 2 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Management Tab */}
        {selectedTab === 'users' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <div className="flex space-x-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Export Users
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Add User
                </button>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
                <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Pending</option>
                </select>
                <select className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600">
                  <option>All Games</option>
                  <option>MLBB</option>
                  <option>Roblox</option>
                </select>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Join Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Games</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-700/30">
                        <td className="px-6 py-4 whitespace-nowrap text-white font-medium">{user.username}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{user.joinDate}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs ${
                            user.status === 'Active' ? 'bg-green-600 text-white' :
                            user.status === 'Pending' ? 'bg-yellow-600 text-white' :
                            'bg-red-600 text-white'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">
                          {user.games.join(', ') || 'None'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
                              Edit
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">
                              Suspend
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Content Moderation Tab */}
        {selectedTab === 'content' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Content Moderation</h2>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                Bulk Actions
              </button>
            </div>

            {/* Reports Table */}
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Content Reports</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Reporter</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Target</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Priority</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {contentReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-700/30">
                        <td className="px-6 py-4 whitespace-nowrap text-white">{report.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{report.reporter}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{report.target}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs ${
                            report.priority === 'High' ? 'bg-red-600 text-white' :
                            report.priority === 'Medium' ? 'bg-yellow-600 text-white' :
                            'bg-gray-600 text-white'
                          }`}>
                            {report.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs ${
                            report.status === 'Resolved' ? 'bg-green-600 text-white' :
                            report.status === 'Reviewing' ? 'bg-blue-600 text-white' :
                            'bg-yellow-600 text-white'
                          }`}>
                            {report.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
                              Review
                            </button>
                            <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs">
                              Approve
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {selectedTab === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Platform Analytics</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {analyticsData.map((data, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">{data.metric}</h3>
                  <p className="text-2xl font-bold text-white mb-1">{data.current}</p>
                  <p className={`text-sm ${data.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {data.change} from last period
                  </p>
                </div>
              ))}
            </div>

            {/* Charts Placeholder */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">User Growth Trend</h3>
                <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Chart Placeholder - User Growth</span>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Game Popularity</h3>
                <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Chart Placeholder - Game Stats</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Health Tab */}
        {selectedTab === 'system' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">System Health Monitor</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{metric.name}</h3>
                      <p className="text-2xl font-bold text-blue-400 mt-2">{metric.value}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${
                      metric.status === 'Excellent' ? 'bg-green-600 text-white' :
                      metric.status === 'Good' ? 'bg-blue-600 text-white' :
                      'bg-yellow-600 text-white'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm ${
                      metric.trend === 'up' ? 'text-green-400' :
                      metric.trend === 'down' ? 'text-red-400' :
                      'text-gray-400'
                    }`}>
                      {metric.trend === 'up' ? '↗️' : metric.trend === 'down' ? '↘️' : '→'}
                      {metric.trend === 'up' ? 'Improving' : metric.trend === 'down' ? 'Declining' : 'Stable'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Server Status */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Server Status</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Web Server</span>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-400">Online - 99.9% uptime</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">Database</span>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-400">Online - Optimal performance</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white">API Gateway</span>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-400">Online - High load detected</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
