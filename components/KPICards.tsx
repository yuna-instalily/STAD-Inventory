
import React from 'react';
import { KPI } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardsProps {
  kpis: KPI[];
}

export const KPICards: React.FC<KPICardsProps> = ({ kpis }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => {
        // Determine trend color and icon based on trend prop or growth text
        const isNegative = kpi.trend === 'down' || kpi.growth?.includes('-');
        // Updated green to match design snippet #00A63E
        const trendColor = isNegative ? 'text-red-600' : 'text-[#00A63E]';
        const TrendIcon = isNegative ? TrendingDown : TrendingUp;
        
        return (
          <div
            key={index}
            className="relative overflow-hidden flex flex-col items-start transition-all hover:shadow-md border border-slate-200/80 rounded-2xl p-5 gap-4"
            style={{
              background: 'linear-gradient(180deg, #FAFAFA 0%, #F4F4F5 100%)',
            }}
          >
            {/* Top Row: Label and Growth */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[#71717A] text-[12px] font-medium uppercase tracking-wide leading-5 font-['IBM_Plex_Sans']">
                  {kpi.label}
                </span>
              </div>
              {kpi.growth && (
                <div className="flex items-center gap-[3.44px]">
                  <span className="text-[#18181B] text-[14px] font-normal leading-5 font-['IBM_Plex_Sans']">
                    {kpi.growth}
                  </span>
                  <div className={trendColor}>
                    <TrendIcon size={12} strokeWidth={3} />
                  </div>
                </div>
              )}
            </div>

            {/* Middle Row: Value */}
            <div 
              className="w-full flex flex-col justify-center"
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-[#18181B] text-[30px] font-semibold leading-9 font-['IBM_Plex_Sans']">
                  {kpi.value}
                </span>
                {kpi.unit && (
                  <span className="text-[#71717A] text-[16px] font-semibold leading-9 font-['IBM_Plex_Sans']">
                    {kpi.unit}
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Row: Comparison and Target */}
            {(kpi.comparisonText || kpi.targetText) && (
              <div className="w-full flex flex-col gap-[3px]">
                {kpi.comparisonText && (
                  <span className="text-[#1C1B1B] text-[12px] font-medium leading-5 font-['IBM_Plex_Sans']">
                    {kpi.comparisonText}
                  </span>
                )}
                {kpi.targetText && (
                  <span className="text-[#797B86] text-[12px] font-normal leading-5 font-['IBM_Plex_Sans']">
                    {kpi.targetText}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
