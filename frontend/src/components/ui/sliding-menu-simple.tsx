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
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />
      
      {/* Menu Content */}
      <div 
        className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Gobills" className="w-8 h-8" />
            <span className="text-lg font-bold">Menu</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/40">
              <img
                src={userAvatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-foreground">{userName}</p>
              <p className="text-sm text-muted-foreground">Premium User</p>
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
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <link.icon 
                  size={20} 
                  className="text-muted-foreground group-hover:text-foreground transition-colors" 
                />
                <span className="font-medium">{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-border">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group w-full text-left">
              <Settings size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-medium">Settings</span>
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group w-full text-left"
            >
              <LogOut size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Gobills v1.0.0
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingMenu;
