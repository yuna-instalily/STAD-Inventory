
import React, { useState } from 'react';
import { RotateCw, ChevronRight } from 'lucide-react';
import { ActionItem } from '../types';
import { regenerateInsight } from '../services/geminiService';

interface ActionItemCardProps {
  item: ActionItem;
  onReview?: () => void;
}

export const ActionItemCard: React.FC<ActionItemCardProps> = ({ item, onReview }) => {
  const [insight, setInsight] = useState(item.insightText);
  const [loading, setLoading] = useState(false);

  const handleRegenerate = async () => {
    setLoading(true);
    const tones: ('friendly' | 'urgent' | 'concise')[] = ['friendly', 'urgent', 'concise'];
    const randomTone = tones[Math.floor(Math.random() * tones.length)];
    
    const newText = await regenerateInsight(item, randomTone);
    setInsight(newText);
    setLoading(false);
  };

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

  // Use tags from item or fallback to primaryTag
  const displayTags = item.tags && item.tags.length > 0 ? item.tags : [item.primaryTag];

  return (
    <div className="bg-white w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 flex flex-col py-[26px] px-5 border-r border-[#E0E0E0] last:border-r-0 transition-colors group">
      {/* Company Info Header */}
      <div className="flex flex-col gap-2 mb-3">
        <h3 className="text-base font-semibold text-[#18181B] leading-5 truncate">{item.companyName}</h3>
        
        <div className="flex flex-wrap gap-[9px]">
          {displayTags.map((tag, idx) => (
             <span key={idx} className={`px-[9px] py-[3px] rounded-lg border text-[12px] font-medium leading-4 ${getTagStyles(tag)}`}>
               {tag}
             </span>
          ))}
        </div>

        <p className="text-[#4B5563] text-[14px] font-normal leading-5 mt-1 truncate">
          {item.details?.address || '630 LOWTHER RD, LEWISBERRY'}
        </p>
      </div>

      {/* AI Insight Block */}
      <div className="mb-3 py-3 px-5 -mx-5 bg-gradient-to-r from-[#FAF0FF] to-[#FEFAFF] border-l-4 border-[#E8B5FE] flex flex-col gap-[7px] shrink-0">
        <div className="flex items-center gap-[9px] shrink-0">
          {/* Custom Sparkle Logo Replacement */}
          <div className="w-5 h-5 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sparkle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8EE5FF' }} />
                  <stop offset="50%" style={{ stopColor: '#7B6AFF' }} />
                  <stop offset="100%" style={{ stopColor: '#BB00FF' }} />
                </linearGradient>
              </defs>
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sparkle-grad)" />
            </svg>
          </div>
          <span className="text-black text-[14px] font-semibold leading-5">AI Insight</span>
          
          {process.env.API_KEY && (
            <button 
              onClick={(e) => { e.stopPropagation(); handleRegenerate(); }}
              disabled={loading}
              className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <RotateCw size={12} className={`text-purple-400 ${loading ? 'animate-spin' : ''}`} />
            </button>
          )}
        </div>
        
        <div className="text-[#18181B] text-[14px] font-normal leading-5 space-y-0.5 overflow-hidden">
          {insight.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="mt-auto pt-1">
        <button 
          onClick={onReview}
          className="flex items-center gap-[6.74px] text-[#18181B] text-[14px] font-medium leading-5 hover:text-black transition-colors"
        >
          {item.cta || 'Review Action'}
          <ChevronRight size={14} className="text-[#71717A]" />
        </button>
      </div>
    </div>
  );
};