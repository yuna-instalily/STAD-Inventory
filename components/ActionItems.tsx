
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ActionItemCard } from './ActionItemCard';
import { ActionItem } from '../types';

interface ActionItemsProps {
  items: ActionItem[];
  onViewDetails?: (item: ActionItem) => void;
}

const ITEMS_PER_PAGE = 3;

export const ActionItems: React.FC<ActionItemsProps> = ({ items, onViewDetails }) => {
  const [page, setPage] = useState(1);
  
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  return (
    <div className="bg-white border border-[#E4E4E7] rounded-2xl shadow-sm overflow-hidden flex flex-col">
      {/* Header Section */}
      <div className="h-[82px] px-5 border-b border-[#E4E4E7] flex items-center justify-between shrink-0">
        <div className="flex flex-col">
          <h2 className="text-[20px] font-semibold text-[#18181B] leading-6">Action Items</h2>
          <p className="text-[#71717A] text-[14px] font-normal leading-5">{items.length} action items requiring attention</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#71717B] text-[14px] font-normal leading-5">{page} of {totalPages}</span>
          <div className="flex items-center gap-4">
            <button 
              className="w-[18px] h-[18px] flex items-center justify-center transition-all disabled:opacity-30 text-[#09090B]"
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              <ChevronLeft size={16} strokeWidth={2.5} className={page === 1 ? "text-[#D4D4D8]" : "text-[#71717B] hover:text-black"} />
            </button>
            <button 
              className="w-[18px] h-[18px] flex items-center justify-center transition-all disabled:opacity-30 text-[#09090B]"
              disabled={page === totalPages}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))} 
            >
              <ChevronRight size={16} strokeWidth={2.5} className={page === totalPages ? "text-[#D4D4D8]" : "text-[#09090B] hover:text-slate-600"} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid Area - Using horizontal alignment as per UI request */}
      <div className="flex-1 overflow-x-auto scrollbar-hide">
        <div className="flex">
          {visibleItems.map((item) => (
            <ActionItemCard 
                key={item.id} 
                item={item} 
                onReview={onViewDetails ? () => onViewDetails(item) : undefined} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
