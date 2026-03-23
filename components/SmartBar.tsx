
import React from 'react';
import { Truck, Package, Car, TrendingUp, Users } from 'lucide-react';

export const SmartBar: React.FC = () => {
  return (
    <div className="hidden xl:flex items-center gap-6 bg-white/50 border border-slate-200/60 rounded-full px-6 py-2 shadow-sm backdrop-blur-sm">
      {/* Deliveries */}
      <div className="flex items-center gap-3">
        <Truck size={16} className="text-slate-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Deliveries</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">94% on-time</span>
            <span className="text-[10px] text-amber-600 font-medium bg-amber-50 px-1.5 rounded">2 at risk</span>
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      {/* Inventory */}
      <div className="flex items-center gap-3">
        <Package size={16} className="text-slate-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Inventory</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">3 SKUs low</span>
            <span className="text-[10px] text-slate-500 font-medium">Cutoff: 4 PM</span>
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      {/* Fleet */}
      <div className="flex items-center gap-3">
        <Car size={16} className="text-slate-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Fleet</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">Readiness: 87</span>
            <span className="text-[10px] text-slate-500 font-medium">1 DVIR pending</span>
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      {/* Sales */}
      <div className="flex items-center gap-3">
        <TrendingUp size={16} className="text-slate-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Sales / P&L</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">72% MTD</span>
            <span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 rounded">On track</span>
          </div>
        </div>
      </div>

      <div className="h-8 w-px bg-slate-200" />

      {/* Team */}
      <div className="flex items-center gap-3">
        <Users size={16} className="text-slate-400" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Team</span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-700">2 absences</span>
            <span className="text-[10px] text-slate-500 font-medium">Coverage OK</span>
          </div>
        </div>
      </div>
    </div>
  );
};
