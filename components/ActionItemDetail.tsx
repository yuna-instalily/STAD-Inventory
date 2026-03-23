import React, { useEffect } from 'react';
import { Sparkles, ArrowRight, Box, MapPin, X, TrendingUp } from 'lucide-react';
import { ActionItem } from '../types';

interface ActionItemDetailProps {
  item: ActionItem;
  onClose: () => void;
  onReview: () => void;
}

export const ActionItemDetail: React.FC<ActionItemDetailProps> = ({ item, onClose, onReview }) => {
  const { companyName, insightText, primaryTag, tags } = item;
  const displayTags = tags && tags.length > 0 ? tags : [primaryTag];

  // Map of tags to their specific mockup colors
  const getTagStyles = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('promo') || lowerTag.includes('purple') || lowerTag.includes('loyalty')) {
      return 'bg-[#F3E8FF] text-[#6B21A8] border-[#D8B4FE]';
    }
    if (lowerTag.includes('ar') || lowerTag.includes('red') || lowerTag.includes('churn') || lowerTag.includes('risk')) {
      return 'bg-[#FEE2E2] text-[#991B1B] border-[#FCA5A5]';
    }
    if (lowerTag.includes('green') || lowerTag.includes('action')) {
      return 'bg-[#DCFCE7] text-[#166534] border-[#86EFAC]';
    }
    if (lowerTag.includes('yellow')) {
      return 'bg-[#FEF9C3] text-[#854D0E] border-[#FDE047]';
    }
    if (lowerTag.includes('orange')) {
      return 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]';
    }
    if (lowerTag.includes('blue') || lowerTag.includes('cyan') || lowerTag.includes('fleet') || lowerTag.includes('utilization')) {
      return 'bg-[#DBEAFE] text-[#1E40AF] border-[#93C5FD]';
    }
    return 'bg-slate-100 text-slate-600 border-slate-200';
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2 pr-8">{companyName}</h1>
            <div className="flex flex-wrap gap-[9px] mb-3">
              {displayTags.map((tag, idx) => (
                <span key={idx} className={`px-[9px] py-[3px] rounded-lg border text-[12px] font-medium leading-4 ${getTagStyles(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-sm font-medium">{item.details?.address || 'Revenue Impact: Pending'}</p>
          </div>

          <div className="bg-gradient-to-r from-[#FAF0FF] to-[#FEFAFF] rounded-xl border border-[#E8B5FE] p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-purple-600" size={18} />
              <h2 className="text-base font-bold text-slate-900">InstaBrain Analysis</h2>
            </div>
            <div className="space-y-3 text-sm text-slate-800 leading-relaxed">
              {insightText.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5">
            <h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-slate-400" />
              Proposed Action
            </h2>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex-1 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Source</div>
                <div className="font-semibold text-slate-900 flex items-center gap-1.5"><MapPin size={14} className="text-blue-500"/> West Depot</div>
              </div>
              <ArrowRight className="text-slate-300 shrink-0" />
              <div className="flex-1 p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Destination</div>
                <div className="font-semibold text-slate-900 flex items-center gap-1.5"><MapPin size={14} className="text-purple-500"/> NorthRamp</div>
              </div>
            </div>

            {/* Brief Map Preview */}
            <div className="mt-4 h-32 bg-[#F8FAFC] rounded-lg border border-slate-200 relative overflow-hidden">
              {/* Map-like grid/roads */}
              <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#CBD5E1" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M-10% 120% L110% -20%" stroke="#94A3B8" strokeWidth="6" fill="none" opacity="0.2" />
                <path d="M-10% 40% L110% 80%" stroke="#94A3B8" strokeWidth="4" fill="none" opacity="0.2" />
              </svg>
              
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path d="M 25% 65% Q 50% 20% 75% 45%" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" />
              </svg>
              
              {/* Source Marker */}
              <div className="absolute left-[25%] top-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-blue-500 rounded-full border-[2.5px] border-white shadow-sm z-10"></div>
              </div>
              
              {/* Destination Marker */}
              <div className="absolute left-[75%] top-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3.5 h-3.5 bg-purple-500 rounded-full border-[2.5px] border-white shadow-sm z-10"></div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => {
                onReview();
              }}
              className="w-full flex items-center justify-center gap-2 bg-black hover:bg-slate-800 text-white rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors shadow-sm"
            >
              <Box size={18} />
              Review & Execute in Inventory Health
              <ArrowRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
