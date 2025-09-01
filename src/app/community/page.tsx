'use client';

import { useState } from 'react';

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState('forums');

  // Mock data for demonstration
  const forumCategories = [
    { id: 1, name: 'Mobile Legends Discussion', posts: 1247, members: 8932, lastPost: '2 minutes ago', icon: '🛡️' },
    { id: 2, name: 'Roblox Creators Hub', posts: 856, members: 5643, lastPost: '15 minutes ago', icon: '🎮' },
    { id: 3, name: 'Tournament Announcements', posts: 234, members: 12456, lastPost: '1 hour ago', icon: '🏆' },
    { id: 4, name: 'General Gaming Chat', posts: 2145, members: 15678, lastPost: '5 minutes ago', icon: '💬' },
  ];

  const recentPosts = [
    { id: 1, title: 'Best MLBB Hero Builds for Season 30', author: 'ProGamer123', replies: 45, category: 'Mobile Legends', time: '2 hours ago' },
    { id: 2, title: 'New Roblox Game: Indonesian Culture Simulator', author: 'IndoCreator', replies: 23, category: 'Roblox', time: '4 hours ago' },
    { id: 3, title: 'NixiaPlay Championship Registration Open!', author: 'TournamentAdmin', replies: 89, category: 'Tournaments', time: '6 hours ago' },
    { id: 4, title: 'Looking for MLBB Team Members (Jakarta)', author: 'TeamLeader', replies: 12, category: 'Team Recruitment', time: '8 hours ago' },
  ];

  const events = [
    { id: 1, title: 'Weekly MLBB Tournament', date: '2024-09-05', time: '19:00 WIB', participants: 64, status: 'Open' },
    { id: 2, title: 'Roblox Game Jam Indonesia', date: '2024-09-10', time: '10:00 WIB', participants: 32, status: 'Registration' },
    { id: 3, title: 'Community Meetup Jakarta', date: '2024-09-15', time: '14:00 WIB', participants: 25, status: 'Planning' },
  ];

  const leaderboard = [
    { rank: 1, username: 'MLBBKing', points: 15420, badge: '👑' },
    { rank: 2, username: 'RobloxMaster', points: 14890, badge: '🥈' },
    { rank: 3, username: 'GameDevPro', points: 13567, badge: '🥉' },
    { rank: 4, username: 'TournamentWinner', points: 12234, badge: '🏆' },
    { rank: 5, username: 'CreativeBuilder', points: 11890, badge: '⭐' },
  ];

  const streamers = [
    { id: 1, name: 'IndoMLBBPro', game: 'Mobile Legends', viewers: 2456, status: 'Live', avatar: '🎯' },
    { id: 2, name: 'RobloxCreatorID', game: 'Roblox', viewers: 1234, status: 'Live', avatar: '🎨' },
    { id: 3, name: 'GameReviewerID', game: 'Various', viewers: 890, status: 'Offline', avatar: '📺' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Gaming Community</h1>
          <p className="text-gray-400">Connect with fellow Indonesian gamers, share experiences, and join events</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'forums', label: 'Forums' },
            { id: 'events', label: 'Events' },
            { id: 'leaderboard', label: 'Leaderboard' },
            { id: 'streams', label: 'Live Streams' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-orange-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Forums Tab */}
        {selectedTab === 'forums' && (
          <div className="space-y-8">
            {/* Forum Categories */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Forum Categories</h2>
              <div className="grid gap-4">
                {forumCategories.map((category) => (
                  <div key={category.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{category.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>📝 {category.posts} posts</span>
                            <span>👥 {category.members.toLocaleString()} members</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Last post</p>
                        <p className="text-sm text-orange-400">{category.lastPost}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Recent Posts</h2>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                  Create Post
                </button>
              </div>
              <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <div className="divide-y divide-gray-700">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="p-6 hover:bg-gray-700/30 transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-orange-400 cursor-pointer">
                            {post.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>by {post.author}</span>
                            <span>in {post.category}</span>
                            <span>{post.time}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-orange-600 text-white px-2 py-1 rounded text-sm">
                            {post.replies} replies
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {selectedTab === 'events' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Community Events</h2>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                Create Event
              </button>
            </div>

            <div className="grid gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>📅 {event.date}</span>
                        <span>🕐 {event.time}</span>
                        <span>👥 {event.participants} participants</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === 'Open' ? 'bg-green-600 text-white' :
                      event.status === 'Registration' ? 'bg-blue-600 text-white' :
                      'bg-yellow-600 text-white'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm">
                      View Details
                    </button>
                    {event.status !== 'Planning' && (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                        Join Event
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Event Calendar */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Event Calendar</h3>
              <div className="h-64 bg-gray-700/50 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Calendar View - Coming Soon</span>
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {selectedTab === 'leaderboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Community Leaderboard</h2>
            
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Top Contributors</h3>
                <p className="text-gray-400 text-sm">Based on community participation and achievements</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">#{user.rank}</span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{user.username}</span>
                            <span className="text-xl">{user.badge}</span>
                          </div>
                          <p className="text-sm text-gray-400">{user.points.toLocaleString()} points</p>
                        </div>
                      </div>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 rounded text-sm">
                        View Profile
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">🏆 Tournament Winners</h3>
                <p className="text-gray-400 text-sm">Top performers in community tournaments</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">🎨 Content Creators</h3>
                <p className="text-gray-400 text-sm">Most active game creators and contributors</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">💬 Community Leaders</h3>
                <p className="text-gray-400 text-sm">Most helpful and active forum members</p>
              </div>
            </div>
          </div>
        )}

        {/* Live Streams Tab */}
        {selectedTab === 'streams' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Live Streams</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {streamers.map((streamer) => (
                <div key={streamer.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center relative">
                    <span className="text-4xl">{streamer.avatar}</span>
                    {streamer.status === 'Live' && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
                        🔴 LIVE
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{streamer.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">Playing {streamer.game}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">👥 {streamer.viewers.toLocaleString()} viewers</span>
                      <button className={`px-3 py-1 rounded text-sm ${
                        streamer.status === 'Live' 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      }`}>
                        {streamer.status === 'Live' ? 'Watch' : 'Offline'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Streaming Guidelines */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Want to Stream on NixiaPlay?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-2">📋 Requirements</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Active NixiaPlay community member</li>
                    <li>• Consistent streaming schedule</li>
                    <li>• Family-friendly content</li>
                    <li>• Indonesian gaming focus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">🎁 Benefits</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Featured on community page</li>
                    <li>• Access to exclusive events</li>
                    <li>• Revenue sharing program</li>
                    <li>• Community support</li>
                  </ul>
                </div>
              </div>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                Apply to Stream
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
