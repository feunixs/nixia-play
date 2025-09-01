'use client';

import { useState } from 'react';

export default function MLBBPage() {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  // Mock data for demonstration
  const playerStats = {
    rank: 'Mythic III',
    points: 1247,
    winRate: 78.5,
    totalMatches: 156,
    wins: 122,
    losses: 34,
    favoriteHero: 'Gusion',
    kda: '7.2/2.1/8.9'
  };

  const recentMatches = [
    { id: 1, hero: 'Gusion', result: 'Victory', kda: '12/2/8', duration: '18:45' },
    { id: 2, hero: 'Fanny', result: 'Defeat', kda: '8/5/12', duration: '25:32' },
    { id: 3, hero: 'Ling', result: 'Victory', kda: '15/1/6', duration: '22:18' },
    { id: 4, hero: 'Lancelot', result: 'Victory', kda: '9/3/11', duration: '19:56' },
  ];

  const tournaments = [
    { id: 1, name: 'NixiaPlay Championship', status: 'Ongoing', prize: 'Rp 5,000,000', participants: 64 },
    { id: 2, name: 'Indonesian Mobile Legends Cup', status: 'Registration', prize: 'Rp 2,500,000', participants: 32 },
    { id: 3, name: 'Weekly Scrimmage', status: 'Completed', prize: 'Rp 500,000', participants: 16 },
  ];

  const heroMeta = [
    { name: 'Gusion', tier: 'S+', pickRate: '45.2%', winRate: '67.8%', banRate: '78.9%' },
    { name: 'Fanny', tier: 'S', pickRate: '32.1%', winRate: '71.2%', banRate: '65.4%' },
    { name: 'Ling', tier: 'S', pickRate: '38.7%', winRate: '69.5%', banRate: '72.1%' },
    { name: 'Lancelot', tier: 'A+', pickRate: '28.9%', winRate: '64.3%', banRate: '45.2%' },
    { name: 'Hayabusa', tier: 'A', pickRate: '25.6%', winRate: '62.1%', banRate: '38.7%' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Mobile Legends Bang Bang</h1>
          <p className="text-gray-400">Track your progress, analyze meta, and join tournaments</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'tournaments', label: 'Tournaments' },
            { id: 'meta', label: 'Hero Meta' },
            { id: 'teams', label: 'Teams' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Player Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Current Rank</h3>
                <p className="text-2xl font-bold text-blue-400">{playerStats.rank}</p>
                <p className="text-sm text-gray-300">{playerStats.points} points</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Win Rate</h3>
                <p className="text-2xl font-bold text-green-400">{playerStats.winRate}%</p>
                <p className="text-sm text-gray-300">{playerStats.wins}W / {playerStats.losses}L</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Favorite Hero</h3>
                <p className="text-2xl font-bold text-purple-400">{playerStats.favoriteHero}</p>
                <p className="text-sm text-gray-300">Most played</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 mb-2">Average KDA</h3>
                <p className="text-2xl font-bold text-yellow-400">{playerStats.kda}</p>
                <p className="text-sm text-gray-300">K/D/A ratio</p>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-white">Recent Matches</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentMatches.map((match) => (
                    <div key={match.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{match.hero.slice(0, 2)}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{match.hero}</p>
                          <p className="text-sm text-gray-400">{match.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${match.result === 'Victory' ? 'text-green-400' : 'text-red-400'}`}>
                          {match.result}
                        </p>
                        <p className="text-sm text-gray-400">{match.kda}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tournaments Tab */}
        {selectedTab === 'tournaments' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Tournaments</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                Create Tournament
              </button>
            </div>
            
            <div className="grid gap-6">
              {tournaments.map((tournament) => (
                <div key={tournament.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{tournament.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Prize: {tournament.prize}</span>
                        <span>Participants: {tournament.participants}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tournament.status === 'Ongoing' ? 'bg-green-600 text-white' :
                      tournament.status === 'Registration' ? 'bg-blue-600 text-white' :
                      'bg-gray-600 text-gray-300'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                      View Details
                    </button>
                    {tournament.status === 'Registration' && (
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
                        Register
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Meta Tab */}
        {selectedTab === 'meta' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Hero Meta Analysis</h2>
            
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Current Meta Heroes</h3>
                <p className="text-gray-400 text-sm">Based on recent ranked matches</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700/50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Hero</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Tier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Pick Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Win Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Ban Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {heroMeta.map((hero, index) => (
                      <tr key={index} className="hover:bg-gray-700/30">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">{hero.name.slice(0, 2)}</span>
                            </div>
                            <span className="text-white font-medium">{hero.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            hero.tier.startsWith('S') ? 'bg-red-600 text-white' :
                            hero.tier.startsWith('A') ? 'bg-yellow-600 text-white' :
                            'bg-gray-600 text-gray-300'
                          }`}>
                            {hero.tier}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300">{hero.pickRate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-green-400">{hero.winRate}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-400">{hero.banRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Teams Tab */}
        {selectedTab === 'teams' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Team Management</h2>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium">
                Create Team
              </button>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Teams Yet</h3>
              <p className="text-gray-400 mb-6">Create or join a team to start competing in tournaments</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg">
                  Create Team
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg">
                  Browse Teams
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
