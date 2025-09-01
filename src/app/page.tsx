import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                NixiaPlay
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ultimate gaming community platform for Mobile Legends Bang Bang and Roblox players in Indonesia. 
              Track your progress, join tournaments, and connect with fellow gamers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mlbb"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Mobile Legends
              </Link>
              <Link
                href="/roblox"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Discover Roblox
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MLBB Features */}
            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Legends Hub</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Rank tracking & analytics</li>
                <li>• Tournament management</li>
                <li>• Hero meta analysis</li>
                <li>• Team coordination tools</li>
              </ul>
            </div>

            {/* Roblox Features */}
            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">RB</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Roblox Studio</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Game discovery platform</li>
                <li>• Creator development tools</li>
                <li>• Educational game catalog</li>
                <li>• Community showcase</li>
              </ul>
            </div>

            {/* Admin Features */}
            <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">AD</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Admin Dashboard</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• User management system</li>
                <li>• Content moderation tools</li>
                <li>• Analytics & reporting</li>
                <li>• Community oversight</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">1,250+</div>
              <div className="text-gray-300">Active Players</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">45</div>
              <div className="text-gray-300">Tournaments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">320</div>
              <div className="text-gray-300">Games Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with thousands of Indonesian gamers and take your gaming experience to the next level.
          </p>
          <Link
            href="/community"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Community
          </Link>
        </div>
      </section>
    </div>
  );
}
