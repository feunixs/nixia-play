'use client';

import { useState } from 'react';

export default function RobloxPage() {
  const [selectedTab, setSelectedTab] = useState('discover');

  // Mock data for demonstration
  const featuredGames = [
    { id: 1, title: 'Adopt Me!', creator: 'DreamCraft', players: '245K', rating: 4.8, image: '🏠' },
    { id: 2, title: 'Brookhaven RP', creator: 'Wolfpaq', players: '189K', rating: 4.6, image: '🏘️' },
    { id: 3, title: 'Tower of Hell', creator: 'YXCeptional Studios', players: '156K', rating: 4.7, image: '🗼' },
    { id: 4, title: 'Arsenal', creator: 'ROLVe Community', players: '134K', rating: 4.5, image: '🔫' },
  ];

  const educationalGames = [
    { id: 1, title: 'Math Obby', subject: 'Mathematics', difficulty: 'Beginner', players: '12K' },
    { id: 2, title: 'Science Lab Simulator', subject: 'Science', difficulty: 'Intermediate', players: '8.5K' },
    { id: 3, title: 'History Quest', subject: 'History', difficulty: 'Advanced', players: '6.2K' },
    { id: 4, title: 'English Grammar Game', subject: 'Language', difficulty: 'Beginner', players: '9.8K' },
  ];

  const creatorTools = [
    { name: 'Roblox Studio', description: 'Official game development platform', status: 'Available' },
    { name: 'Asset Library', description: 'Free models, scripts, and assets', status: 'Available' },
    { name: 'Scripting Tutorials', description: 'Learn Lua programming', status: 'Available' },
    { name: 'Publishing Guide', description: 'How to publish your games', status: 'Available' },
  ];

  const communityShowcase = [
    { id: 1, creator: 'IndoBuilder123', title: 'Indonesian Traditional House', likes: 245, category: 'Building' },
    { id: 2, creator: 'GameDevJakarta', title: 'Jakarta City Simulator', likes: 189, category: 'Simulation' },
    { id: 3, creator: 'EduGameID', title: 'Pancasila Learning Game', likes: 156, category: 'Educational' },
    { id: 4, creator: 'CreativeKids', title: 'Batik Design Studio', likes: 134, category: 'Art' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Roblox Studio</h1>
          <p className="text-gray-400">Discover games, create experiences, and learn through play</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'discover', label: 'Game Discovery' },
            { id: 'educational', label: 'Educational Games' },
            { id: 'creator', label: 'Creator Hub' },
            { id: 'showcase', label: 'Community Showcase' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Game Discovery Tab */}
        {selectedTab === 'discover' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Featured Games</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredGames.map((game) => (
                  <div key={game.id} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500 transition-colors">
                    <div className="h-32 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <span className="text-4xl">{game.image}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1">{game.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">by {game.creator}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-green-400">👥 {game.players}</span>
                          <span className="text-sm text-yellow-400">⭐ {game.rating}</span>
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                          Play
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Categories */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Trending Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Adventure', 'Simulation', 'RPG', 'Obby', 'Tycoon', 'Racing', 'Horror', 'Educational'].map((category) => (
                  <div key={category} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors cursor-pointer">
                    <h3 className="text-white font-medium text-center">{category}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Educational Games Tab */}
        {selectedTab === 'educational' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Educational Games</h2>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                Submit Educational Game
              </button>
            </div>
            
            <div className="grid gap-6">
              {educationalGames.map((game) => (
                <div key={game.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{game.title}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded">{game.subject}</span>
                        <span className={`px-2 py-1 rounded ${
                          game.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                          game.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                          'bg-red-600 text-white'
                        }`}>
                          {game.difficulty}
                        </span>
                        <span className="text-gray-400">👥 {game.players} players</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
                      Play Game
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Learning Resources */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Learning Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">📚 Study Guides</h4>
                  <p className="text-gray-400 text-sm">Interactive study materials for Indonesian curriculum</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">🎯 Skill Assessment</h4>
                  <p className="text-gray-400 text-sm">Test your knowledge with gamified quizzes</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">👨‍🏫 Teacher Tools</h4>
                  <p className="text-gray-400 text-sm">Resources for educators to create engaging lessons</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-2">🏆 Achievement System</h4>
                  <p className="text-gray-400 text-sm">Track learning progress with badges and rewards</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Creator Hub Tab */}
        {selectedTab === 'creator' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Creator Development Hub</h2>
            
            {/* Development Tools */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Development Tools</h3>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {creatorTools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div>
                        <h4 className="text-white font-medium">{tool.name}</h4>
                        <p className="text-sm text-gray-400">{tool.description}</p>
                      </div>
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                        {tool.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tutorials Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">🎓 Beginner Tutorials</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Getting Started with Roblox Studio
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Basic Lua Scripting
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Creating Your First Game
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Publishing and Monetization
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">🚀 Advanced Topics</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Advanced Scripting Techniques
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Game Optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Multiplayer Systems
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    UI/UX Design for Games
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Community Showcase Tab */}
        {selectedTab === 'showcase' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Indonesian Creator Showcase</h2>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium">
                Submit Creation
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityShowcase.map((creation) => (
                <div key={creation.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{creation.title}</h3>
                      <p className="text-gray-400 text-sm">by {creation.creator}</p>
                    </div>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">
                      {creation.category}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">❤️ {creation.likes}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm">
                        View
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Creator */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-xl">FC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Featured Creator of the Month</h3>
                  <p className="text-purple-100">IndoGameDev - Creating amazing educational experiences</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                "I love creating games that help Indonesian students learn while having fun. 
                NixiaPlay has been an amazing platform to showcase my work!"
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
                View Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
