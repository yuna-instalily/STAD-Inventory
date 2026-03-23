
import React from 'react';
import { Mail, X, ArrowRight } from 'lucide-react';

interface NotificationBarProps {
  onOpen: () => void;
  onClose: () => void;
  visible: boolean;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ onOpen, onClose, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-in slide-in-from-right-5 fade-in duration-500">
      <div className="bg-[#18181B] text-white p-4 rounded-xl shadow-2xl flex items-start gap-4 max-w-sm border border-[#27272A] relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
        
        <div className="bg-[#27272A] p-2.5 rounded-full shrink-0 mt-0.5">
          <Mail size={20} className="text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-semibold leading-tight mb-1">New Load Request</h4>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors -mt-1 -mr-1">
                <X size={16} />
            </button>
          </div>
          <p className="text-xs text-zinc-400 mb-3 truncate">From: logistics@acme.com</p>
          <p className="text-xs font-medium text-zinc-300 mb-3 bg-zinc-800/50 p-2 rounded border border-zinc-700/50">
            "URGENT: ORD to LAX 53V..."
          </p>
          
          <button 
            onClick={onOpen}
            className="w-full bg-black text-white border border-zinc-700 px-3 py-2 rounded-lg text-xs font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Review Lane Card
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
