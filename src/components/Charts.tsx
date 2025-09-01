'use client';

import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data for charts
const playerStatsData = [
  { month: 'Jan', wins: 45, losses: 25, rank: 'Epic' },
  { month: 'Feb', wins: 52, losses: 18, rank: 'Legend' },
  { month: 'Mar', wins: 48, losses: 22, rank: 'Legend' },
  { month: 'Apr', wins: 61, losses: 19, rank: 'Mythic' },
  { month: 'May', wins: 58, losses: 12, rank: 'Mythic' },
  { month: 'Jun', wins: 65, losses: 15, rank: 'Mythic' }
];

const heroMetaData = [
  { name: 'Assassin', usage: 25, winRate: 68 },
  { name: 'Marksman', usage: 20, winRate: 72 },
  { name: 'Mage', usage: 18, winRate: 65 },
  { name: 'Tank', usage: 15, winRate: 58 },
  { name: 'Fighter', usage: 12, winRate: 63 },
  { name: 'Support', usage: 10, winRate: 55 }
];

const userActivityData = [
  { day: 'Mon', users: 1200, sessions: 2400 },
  { day: 'Tue', users: 1900, sessions: 3200 },
  { day: 'Wed', users: 1600, sessions: 2800 },
  { day: 'Thu', users: 2100, sessions: 3600 },
  { day: 'Fri', users: 2400, sessions: 4200 },
  { day: 'Sat', users: 2800, sessions: 4800 },
  { day: 'Sun', users: 2200, sessions: 3800 }
];

const gameDistributionData = [
  { name: 'Mobile Legends', value: 65, color: '#8B5CF6' },
  { name: 'Roblox', value: 35, color: '#10B981' }
];

const COLORS = ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6'];

export function PlayerProgressChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Player Progress Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={playerStatsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="wins" stroke="#10B981" strokeWidth={3} />
          <Line type="monotone" dataKey="losses" stroke="#EF4444" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HeroMetaChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Hero Meta Analysis</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={heroMetaData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="usage" fill="#8B5CF6" name="Usage %" />
          <Bar dataKey="winRate" fill="#10B981" name="Win Rate %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function UserActivityChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Daily User Activity</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={userActivityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="users" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" />
          <Area type="monotone" dataKey="sessions" stackId="1" stroke="#10B981" fill="#10B981" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GameDistributionChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Game Platform Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={gameDistributionData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {gameDistributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MiniStatsCard({ title, value, change, icon }: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  const isPositive = change.startsWith('+');
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {change}
          </p>
        </div>
        <div className="text-3xl text-purple-600">
          {icon}
        </div>
      </div>
    </div>
  );
}
