import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Heart, 
  MessageSquare, 
  Share, 
  Users,
  Target,
  Calendar,
  Award
} from 'lucide-react';

export const Analytics: React.FC = () => {
  const metrics = [
    {
      title: 'Total Impressions',
      value: '248.5K',
      change: '+15.2%',
      trend: 'up',
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Engagement Rate',
      value: '8.7%',
      change: '+2.1%',
      trend: 'up',
      icon: Heart,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Total Reach',
      value: '124.2K',
      change: '+12.5%',
      trend: 'up',
      icon: Target,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Follower Growth',
      value: '+2.3K',
      change: '+8.9%',
      trend: 'up',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const platformStats = [
    {
      platform: 'Twitter',
      followers: '12.5K',
      engagement: '9.2%',
      posts: 45,
      color: 'bg-blue-500',
      growth: '+12%'
    },
    {
      platform: 'LinkedIn',
      followers: '8.3K',
      engagement: '7.8%',
      posts: 28,
      color: 'bg-blue-600',
      growth: '+18%'
    },
    {
      platform: 'Instagram',
      followers: '15.7K',
      engagement: '11.4%',
      posts: 52,
      color: 'bg-pink-500',
      growth: '+25%'
    }
  ];

  const topPosts = [
    {
      id: 1,
      platform: 'Twitter',
      content: 'Just launched our new AI-powered feature! The response has been incredible...',
      impressions: '25.4K',
      engagement: '12.8%',
      likes: 324,
      shares: 89,
      comments: 45
    },
    {
      id: 2,
      platform: 'LinkedIn',
      content: 'The future of social media management: How AI is changing the game...',
      impressions: '18.2K',
      engagement: '15.2%',
      likes: 276,
      shares: 124,
      comments: 67
    },
    {
      id: 3,
      platform: 'Instagram',
      content: 'Behind the scenes: Our team working on revolutionary social tools...',
      impressions: '22.1K',
      engagement: '18.7%',
      likes: 412,
      shares: 156,
      comments: 89
    }
  ];

  const timeData = [
    { time: '9AM', engagement: 65 },
    { time: '12PM', engagement: 89 },
    { time: '3PM', engagement: 124 },
    { time: '6PM', engagement: 98 },
    { time: '9PM', engagement: 76 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your social media performance and insights.</p>
        </div>
        <div className="flex space-x-3">
          <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 3 months</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium flex items-center ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  <TrendIcon className="w-4 h-4 mr-1" />
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm">{metric.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Performance */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Platform Performance</h2>
            </div>
            <div className="p-6 space-y-6">
              {platformStats.map((platform, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                    <div>
                      <h3 className="font-medium text-gray-900">{platform.platform}</h3>
                      <p className="text-sm text-gray-600">{platform.followers} followers</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-6">
                      <div>
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="font-semibold text-gray-900">{platform.engagement}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Posts</p>
                        <p className="font-semibold text-gray-900">{platform.posts}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Growth</p>
                        <p className="font-semibold text-green-600">{platform.growth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Best Posting Times */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Best Times to Post</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {timeData.map((time, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{time.time}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${(time.engagement / 124) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{time.engagement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Top Performing Posts</h2>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {topPosts.map((post, index) => (
              <div key={post.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.platform}
                      </span>
                      <span className="text-sm text-gray-500">{post.impressions} impressions</span>
                    </div>
                    <p className="text-gray-900 mb-3">{post.content}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-6">
                    <Award className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">#{index + 1}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="w-4 h-4 text-pink-500 mr-1" />
                      <span className="text-lg font-semibold text-gray-900">{post.likes}</span>
                    </div>
                    <p className="text-xs text-gray-600">Likes</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Share className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-lg font-semibold text-gray-900">{post.shares}</span>
                    </div>
                    <p className="text-xs text-gray-600">Shares</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <MessageSquare className="w-4 h-4 text-emerald-500 mr-1" />
                      <span className="text-lg font-semibold text-gray-900">{post.comments}</span>
                    </div>
                    <p className="text-xs text-gray-600">Comments</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-purple-500 mr-1" />
                      <span className="text-lg font-semibold text-gray-900">{post.engagement}</span>
                    </div>
                    <p className="text-xs text-gray-600">Engagement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};