import React from 'react';
import { 
  LayoutDashboard, 
  PenTool, 
  Calendar as CalendarIcon, 
  BarChart3, 
  Settings as SettingsIcon,
  Twitter,
  Linkedin,
  Instagram,
  Bot,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'create', label: 'Create Content', icon: PenTool },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  const connectedAccounts = [
    { platform: 'Twitter', icon: Twitter, connected: true, color: 'text-blue-400' },
    { platform: 'LinkedIn', icon: Linkedin, connected: true, color: 'text-blue-600' },
    { platform: 'Instagram', icon: Instagram, connected: false, color: 'text-pink-500' },
  ];

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white/90 backdrop-blur-md border-r border-gray-200 z-40">
      <div className="p-6">
        {/* Navigation Menu */}
        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Connected Accounts */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Connected Accounts
          </h3>
          
          <div className="space-y-3">
            {connectedAccounts.map((account) => {
              const Icon = account.icon;
              return (
                <div
                  key={account.platform}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${account.color}`} />
                    <span className="text-sm font-medium text-gray-700">
                      {account.platform}
                    </span>
                  </div>
                  <div className={`w-2 h-2 rounded-full ${
                    account.connected ? 'bg-green-500' : 'bg-gray-300'
                  }`}></div>
                </div>
              );
            })}
          </div>

          <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            <Zap className="w-4 h-4" />
            <span>Add Account</span>
          </button>
        </div>

        {/* AI Assistant Status */}
        <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Bot className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">AI Assistant</span>
          </div>
          <p className="text-xs text-purple-600 mb-3">
            Ready to help create engaging content for your audience.
          </p>
          <button className="w-full py-2 bg-purple-600 text-white text-xs font-medium rounded-md hover:bg-purple-700 transition-colors">
            Start Chat
          </button>
        </div>
      </div>
    </aside>
  );
};