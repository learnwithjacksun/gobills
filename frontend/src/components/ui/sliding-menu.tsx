import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, LogOut, Settings } from 'lucide-react';
import { gsap } from 'gsap';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current || !overlayRef.current || !contentRef.current) return;

    if (isOpen) {
      // Show menu
      gsap.set(menuRef.current, { display: 'block' });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(contentRef.current, { x: '100%' });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
      .to(contentRef.current, {
        x: 0,
        duration: 0.4,
        ease: 'power3.out'
      }, '-=0.1');
    } else {
      // Hide menu
      const tl = gsap.timeline({
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: 'none' });
          }
        }
      });
      
      tl.to(contentRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in'
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      }, '-=0.1');
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logout clicked');
    onClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-50 hidden"
      style={{ display: 'none' }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />
      
      {/* Menu Content */}
      <div
        ref={contentRef}
        className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background border-l border-line shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-line">
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
        <div className="p-6 border-b border-line">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full overflow-hidden bg-primary/40">
              <img
                src={userAvatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{userName}</p>
              <p className="text-sm text-muted">Premium User</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4 border-b border-line">
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
        <div className="p-4 border-t border-line">
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


       
      </div>
    </div>
  );
};

export default SlidingMenu;
