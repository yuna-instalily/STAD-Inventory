
import React from 'react';
import { X, Truck, Scale, Calendar, AlertTriangle, CheckCircle2, Mail, ArrowRight, MapPin, Clock } from 'lucide-react';

interface EmailLaneOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailLaneOverlay: React.FC<EmailLaneOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Card Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
                    <Mail size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-slate-900">Incoming Load Request</h2>
                    <p className="text-xs text-slate-500">Parsed from email • <span className="font-mono">logistics@acme.com</span></p>
                </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors p-2 hover:bg-slate-50 rounded-full">
                <X size={20} />
            </button>
        </div>

        <div className="p-0 overflow-y-auto custom-scrollbar">
            {/* Split Layout: Email Source & Lane Card */}
            <div className="flex flex-col">
                
                {/* Visual Lane Route Header */}
                <div className="bg-slate-50 border-b border-slate-200 px-8 py-8 relative overflow-hidden">
                     {/* Background Pattern */}
                     <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

                    <div className="flex items-center justify-between relative z-10 max-w-2xl mx-auto">
                        {/* Origin */}
                        <div className="flex flex-col items-start group cursor-default">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Origin</span>
                            </div>
                            <span className="text-4xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">ORD</span>
                            <span className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1">
                                <MapPin size={12} /> Chicago, IL
                            </span>
                        </div>

                        {/* Connector */}
                        <div className="flex-1 flex flex-col items-center px-12 relative">
                            <div className="w-full h-0.5 bg-slate-300 absolute top-1/2 -translate-y-1/2 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-full border border-slate-200 shadow-sm z-10 text-slate-400">
                                <ArrowRight size={20} />
                            </div>
                            <div className="absolute -bottom-6 text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                                2,015 mi
                            </div>
                        </div>

                        {/* Destination */}
                        <div className="flex flex-col items-end group cursor-default">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Destination</span>
                            </div>
                            <span className="text-4xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">LAX</span>
                            <span className="text-sm font-medium text-slate-500 flex items-center gap-1 mt-1">
                                Los Angeles, CA <MapPin size={12} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Details Grid Section */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {/* Equipment */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Equipment</span>
                                <Truck size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-slate-900">53' Dry Van</span>
                            </div>
                            <div className="mt-2 text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">Air ride preferred</div>
                        </div>

                        {/* Weight */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                             <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Weight</span>
                                <Scale size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-lg font-bold text-slate-900">42,000</span>
                                <span className="text-sm font-medium text-slate-500">lbs</span>
                            </div>
                            <div className="mt-2 text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">Scale ticket req</div>
                        </div>

                        {/* Pickup Window */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                             <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Pickup</span>
                                <Calendar size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-slate-900">Tomorrow</span>
                                <div className="flex items-center gap-1.5 text-sm text-slate-600 mt-1">
                                    <Clock size={14} className="text-slate-400" />
                                    <span>08:00 - 12:00 EST</span>
                                </div>
                            </div>
                        </div>

                        {/* Accessorials */}
                         <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                             <div className="flex items-center justify-between mb-3">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Accessorials</span>
                                <CheckCircle2 size={16} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                                    Driver Assist
                                </span>
                                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-100">
                                    Straps (2)
                                </span>
                            </div>
                        </div>

                        {/* Missing Fields Flag */}
                        <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all group col-span-1 md:col-span-2">
                             <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider">Missing Fields</span>
                                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                                </div>
                                <AlertTriangle size={16} className="text-red-400 group-hover:text-red-500 transition-colors" />
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex-1">
                                    <p className="text-sm text-slate-700 font-medium">Delivery Appointment Time unclear</p>
                                    <p className="text-xs text-slate-500 mt-0.5">Email mentions "ASAP" but no facility hours provided.</p>
                                </div>
                                <button className="px-3 py-1.5 bg-white border border-red-200 text-red-600 text-xs font-semibold rounded-lg hover:bg-red-50 transition-colors">
                                    Request Info
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Original Email Toggle */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <div className="px-4 py-3 bg-slate-100/50 border-b border-slate-200 flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-600">Original Email Context</span>
                            <span className="text-[10px] text-slate-400 font-mono">ID: #99281-EM</span>
                        </div>
                        <div className="p-4 bg-white">
                            <p className="text-sm text-slate-600 font-mono leading-relaxed">
                                <span className="text-slate-400 block mb-2 text-xs">From: logistics@acme.com | Subject: URGENT: ORD to LAX 53V</span>
                                "Hi team,<br/><br/>
                                Looking for a 53' Dry Van to run from ORD (Chicago) to LAX (Los Angeles). We have 42k lbs of dry goods. Requires Driver Assist at pickup. Need this picked up tomorrow morning between 8am-12pm. Delivery ASAP.<br/><br/>
                                Please let me know your best rate.<br/>
                                Thanks"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-3 shrink-0">
             <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                Dismiss
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-900 text-sm font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Request Clarification
            </button>
            <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-all shadow-md flex items-center gap-2">
                Create Quote
                <ArrowRight size={14} />
            </button>
        </div>
      </div>
    </div>
  );
};
