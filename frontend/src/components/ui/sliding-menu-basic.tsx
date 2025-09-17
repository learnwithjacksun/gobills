import React from 'react';
import { Link } from 'react-router-dom';
import { X, LogOut, Settings } from 'lucide-react';
import { navlinks } from '@/constants/data';

interface SlidingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userAvatar?: string;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ 
  isOpen, 
  onClose, 
  userName = "Gift Jacksun",
  userAvatar = "https://api.dicebear.com/9.x/adventurer/svg?seed=Felix"
}) => {
  console.log('SlidingMenu render - isOpen:', isOpen);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      {/* Menu Content */}
      <div 
        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Gobills" className="w-8 h-8" />
            <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-green-100 dark:bg-green-900">
              <img
                src={userAvatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{userName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Premium User</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4">
          <nav className="space-y-2">
            {navlinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <link.icon 
                  size={20} 
                  className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors" 
                />
                <span className="font-medium text-gray-900 dark:text-white">{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group w-full text-left">
              <Settings size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors" />
              <span className="font-medium text-gray-900 dark:text-white">Settings</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group w-full text-left"
            >
              <LogOut size={20} className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors" />
              <span className="font-medium text-gray-900 dark:text-white">Logout</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Gobills v1.0.0
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingMenu;
