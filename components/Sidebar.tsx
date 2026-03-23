
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  FileText, 
  MessageCircle, 
  Send, 
  User, 
  MessagesSquare, 
  Menu,
  X,
  PanelLeft,
  ChevronsUpDown,
  Box
} from 'lucide-react';

interface SidebarProps {
  activeView?: string;
  onNavigate?: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView = 'dashboard', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'inventory-health', icon: Box, label: 'Inventory Health' },
    { id: 'customers', icon: Users, label: 'Customers' },
    { id: 'lead-gen', icon: UserPlus, label: 'Lead Generation' },
    { id: 'notes', icon: FileText, label: 'Notes' },
    { id: 'touchpoints', icon: MessageCircle, label: 'Touchpoints' },
    { id: 'outreach', icon: Send, label: 'Outreach Generator' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'chats', icon: MessagesSquare, label: 'Chats', badge: true },
  ];

  const handleNavigation = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-slate-600 border border-slate-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-40 w-64 flex flex-col
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
      `}>
        {/* Logo Area */}
        <div className="p-6 pb-4">
            <div className="flex items-center gap-2 mb-8">
                <div className="font-black text-xl tracking-tighter flex items-center gap-1">
                    <span className="bg-slate-950 text-white p-0.5 px-1 rounded text-sm">INSTA</span>
                    <span className="text-slate-950">LILY_</span>
                </div>
                <div className="ml-auto">
                    <PanelLeft size={18} className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                </div>
            </div>

            {/* User Selector */}
            <div className="mb-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 block px-1">Select Rep</label>
                <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-md p-2 flex items-center justify-between group transition-all text-left">
                    <div className="flex flex-col items-start overflow-hidden">
                        <span className="font-medium text-sm text-slate-900 truncate w-full">Rep User</span>
                        <span className="text-xs text-slate-500 truncate w-full">rep@instalily.ai</span>
                    </div>
                    <ChevronsUpDown size={14} className="text-slate-400 shrink-0" />
                </button>
            </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
          {navItems.map((item) => {
            const isActive = activeView === item.id || (activeView === 'detail' && item.id === 'dashboard');
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-slate-100 text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <item.icon size={18} className={isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-900"} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100">
            <div className="mb-4 text-[10px] font-bold text-slate-400 flex items-center gap-1.5 uppercase tracking-wider">
                POWERED BY 
                <span className="text-slate-900 font-black">INSTALILY_</span>
            </div>
            <div className="flex items-center gap-3 px-2 py-1 rounded-md hover:bg-slate-50 cursor-pointer transition-colors">
                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-200 shrink-0">
                    <img src="https://picsum.photos/100/100" alt="Yuna he" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium text-slate-900 truncate">Yuna he</span>
                    <span className="text-xs text-slate-500 truncate">yuna@instalily.ai</span>
                </div>
            </div>
        </div>
      </aside>
    </>
  );
};
