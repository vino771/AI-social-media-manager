import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Image, 
  Video, 
  FileText,
  Sparkles,
  Copy,
  Edit3,
  Calendar as CalendarIcon
} from 'lucide-react';

export const ContentCreator: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI content assistant. Tell me about your business and I'll help create engaging social media content for you.",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);

  const contentTypes = [
    { type: 'text', label: 'Text Post', icon: FileText, color: 'from-blue-500 to-blue-600' },
    { type: 'image', label: 'Image + Caption', icon: Image, color: 'from-emerald-500 to-emerald-600' },
    { type: 'video', label: 'Video + Caption', icon: Video, color: 'from-purple-500 to-purple-600' }
  ];

  const sampleContent = [
    {
      id: 1,
      type: 'text',
      platform: 'Twitter',
      content: "🚀 Exciting news! We're launching a revolutionary AI-powered social media management platform that helps businesses create, schedule, and optimize their content automatically. Say goodbye to content planning headaches! #AI #SocialMedia #Innovation",
      engagement_prediction: "High engagement expected",
      optimal_time: "3:00 PM - 5:00 PM"
    },
    {
      id: 2,
      type: 'image',
      platform: 'LinkedIn',
      content: "Behind the scenes: How AI is transforming social media management 📊\n\nOur latest platform combines machine learning with creative intelligence to help businesses maintain consistent, engaging social media presence. Here's what makes it special:\n\n✅ Smart content generation\n✅ Optimal timing predictions\n✅ Multi-platform automation\n✅ Performance analytics\n\n#BusinessInnovation #AITechnology #SocialMediaMarketing",
      image_suggestion: "Infographic showing AI workflow diagram",
      engagement_prediction: "Medium-High engagement expected",
      optimal_time: "9:00 AM - 11:00 AM"
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: "Great! Based on what you've told me, I'll create some engaging content ideas for your business. Let me generate some posts that align with your brand voice and audience.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setGeneratedContent(sampleContent);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Content Creator</h1>
        <p className="text-gray-600 mt-1">Chat with our AI assistant to generate personalized content for your social media.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">AI Assistant</h2>
                <p className="text-sm text-gray-600">Online and ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    {message.type === 'bot' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                    <span className="text-xs font-medium">
                      {message.type === 'bot' ? 'AI Assistant' : 'You'}
                    </span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Tell me about your business, target audience, or content goals..."
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Types */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Content Types</h2>
            <div className="grid grid-cols-1 gap-4">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.type}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${type.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-gray-900">{type.label}</h3>
                      <p className="text-sm text-gray-600">Generate {type.label.toLowerCase()}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-800">Quick Actions</h3>
            </div>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-purple-700 hover:bg-purple-100 rounded-lg transition-colors">
                Generate content for product launch
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-purple-700 hover:bg-purple-100 rounded-lg transition-colors">
                Create motivational Monday post
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-purple-700 hover:bg-purple-100 rounded-lg transition-colors">
                Write industry insights article
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Content */}
      {generatedContent.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Generated Content</h2>
            <p className="text-gray-600 mt-1">Review and edit your AI-generated content before scheduling.</p>
          </div>
          
          <div className="p-6 space-y-6">
            {generatedContent.map((content) => (
              <div key={content.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {content.platform}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {content.type}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <CalendarIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-sm max-w-none mb-4">
                  <p className="text-gray-900 whitespace-pre-wrap">{content.content}</p>
                  {content.image_suggestion && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Image suggestion:</strong> {content.image_suggestion}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⚡ {content.engagement_prediction}</span>
                  <span>🕐 Best time: {content.optimal_time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};