import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  MoreVertical,
  Edit,
  Trash2
} from 'lucide-react';

export const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Sample scheduled posts
  const scheduledPosts = [
    {
      id: 1,
      date: new Date(2025, 0, 15),
      time: '09:00',
      platform: 'Twitter',
      content: 'New product launch announcement! 🚀',
      type: 'dynamic',
      status: 'scheduled'
    },
    {
      id: 2,
      date: new Date(2025, 0, 15),
      time: '14:00',
      platform: 'LinkedIn',
      content: 'Industry insights: The future of AI in business',
      type: 'static',
      status: 'scheduled'
    },
    {
      id: 3,
      date: new Date(2025, 0, 17),
      time: '11:30',
      platform: 'Instagram',
      content: 'Behind the scenes content with team photo',
      type: 'dynamic',
      status: 'scheduled'
    }
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getPostsForDate = (date: Date | null) => {
    if (!date) return [];
    return scheduledPosts.filter(post => 
      post.date.toDateString() === date.toDateString()
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="w-3 h-3" />;
      case 'LinkedIn':
        return <Linkedin className="w-3 h-3" />;
      case 'Instagram':
        return <Instagram className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Twitter':
        return 'bg-blue-100 text-blue-800';
      case 'LinkedIn':
        return 'bg-blue-200 text-blue-900';
      case 'Instagram':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const days = getDaysInMonth(currentDate);
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Content Calendar</h1>
          <p className="text-gray-600 mt-1">Plan and schedule your social media content.</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
          <Plus className="w-4 h-4" />
          <span>Schedule Post</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Calendar Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">{monthYear}</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigateMonth('prev')}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigateMonth('next')}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            {/* Week Days */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {weekDays.map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                const postsForDay = day ? getPostsForDate(day) : [];
                const isToday = day && day.toDateString() === new Date().toDateString();
                const isSelected = day && selectedDate && day.toDateString() === selectedDate.toDateString();

                return (
                  <div
                    key={index}
                    className={`min-h-[80px] p-2 border border-gray-100 rounded-lg cursor-pointer transition-all duration-200 ${
                      day ? 'hover:bg-gray-50' : ''
                    } ${
                      isSelected ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                    } ${
                      isToday ? 'bg-blue-600 text-white' : ''
                    }`}
                    onClick={() => day && setSelectedDate(day)}
                  >
                    {day && (
                      <>
                        <div className={`text-sm font-medium mb-1 ${isToday ? 'text-white' : 'text-gray-900'}`}>
                          {day.getDate()}
                        </div>
                        <div className="space-y-1">
                          {postsForDay.slice(0, 2).map((post) => (
                            <div
                              key={post.id}
                              className={`text-xs px-2 py-1 rounded-md flex items-center space-x-1 ${getPlatformColor(post.platform)}`}
                            >
                              {getPlatformIcon(post.platform)}
                              <span className="truncate">{post.time}</span>
                            </div>
                          ))}
                          {postsForDay.length > 2 && (
                            <div className="text-xs text-gray-500 px-2">
                              +{postsForDay.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Selected Date Posts */}
          {selectedDate && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {getPostsForDate(selectedDate).map((post) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className={`px-2 py-1 rounded-md text-xs font-medium ${getPlatformColor(post.platform)}`}>
                          {post.platform}
                        </div>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.time}
                        </span>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{post.content}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button className="p-1 text-gray-400 hover:text-blue-600">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
                {getPostsForDate(selectedDate).length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No posts scheduled for this day
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-900 mb-3">This Month</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Posts</span>
                <span className="text-sm font-medium text-gray-900">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Scheduled</span>
                <span className="text-sm font-medium text-blue-600">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Published</span>
                <span className="text-sm font-medium text-green-600">6</span>
              </div>
            </div>
          </div>

          {/* Post Types */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-4">
            <h3 className="font-semibold text-purple-800 mb-3">Post Types</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-700">Dynamic Posts</span>
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-700">Static Posts</span>
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};