import React from 'react';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Calendar as CalendarIcon,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowUpRight
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Reach',
      value: '24.5K',
      change: '+12%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Followers',
      value: '3.2K',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Engagement',
      value: '8.7%',
      change: '+2.1%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Posts Scheduled',
      value: '18',
      change: '6 pending',
      trend: 'neutral',
      icon: CalendarIcon,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      content: 'Just launched our new AI-powered feature! 🚀',
      platform: 'Twitter',
      status: 'published',
      engagement: '156 likes, 23 retweets',
      time: '2 hours ago'
    },
    {
      id: 2,
      content: 'Behind the scenes: How we built our content automation system',
      platform: 'LinkedIn',
      status: 'published',
      engagement: '89 likes, 12 comments',
      time: '5 hours ago'
    },
    {
      id: 3,
      content: 'New blog post about social media trends in 2024',
      platform: 'Twitter',
      status: 'scheduled',
      engagement: 'Scheduled for 3:00 PM',
      time: 'in 2 hours'
    }
  ];

  const upcomingTasks = [
    { task: 'Review scheduled posts for next week', priority: 'high', due: 'Today' },
    { task: 'Create content for product launch', priority: 'medium', due: 'Tomorrow' },
    { task: 'Analyze engagement metrics', priority: 'low', due: 'This week' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your social media.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
          <span>Quick Post</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {stat.trend === 'up' && (
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.change}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Posts */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
            </div>
            <div className="p-6 space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    {post.status === 'published' ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Clock className="w-5 h-5 text-orange-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">{post.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-600">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {post.platform}
                      </span>
                      <span>{post.engagement}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Tasks</h2>
            </div>
            <div className="p-6 space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    task.priority === 'high' ? 'text-red-500' :
                    task.priority === 'medium' ? 'text-yellow-500' : 'text-gray-400'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{task.task}</p>
                    <p className="text-xs text-gray-600 mt-1">Due: {task.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};