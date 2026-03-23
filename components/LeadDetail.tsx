
import React from 'react';
import { MapPin, Phone, Mail, Sparkles, ChevronDown, BarChart2 } from 'lucide-react';
import { ActionItem } from '../types';

interface LeadDetailProps {
  item: ActionItem;
  onBack: () => void;
}

export const LeadDetail: React.FC<LeadDetailProps> = ({ item, onBack }) => {
  const { details, companyName, insightText } = item;
  
  // Default fallbacks if details are missing
  const website = details?.website || 'example.com';
  const tags = details?.tags || ['General'];
  const description = details?.description || 'No detailed description available for this lead.';
  const address = details?.address || 'Unknown Location';
  const phone = details?.phone || 'N/A';
  const email = details?.email || `contact@${companyName.toLowerCase().replace(/\s+/g, '')}.com`;
  const matchLevel = details?.matchLevel || 'Low';
  const topMatches = details?.topMatches || [];
  const status = details?.status || 'New';
  const products = details?.products || 'N/A';
  const locations = details?.locations || address;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
        <button 
            onClick={onBack} 
            className="text-sm text-slate-500 hover:text-slate-900 mb-2 flex items-center gap-1 transition-colors font-medium"
        >
            ← Back to Dashboard
        </button>

        {/* Header Card */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-white rounded-xl border border-slate-200 p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
                <span className="text-4xl font-bold text-slate-500">{companyName.charAt(0)}</span>
            </div>
            <div className="space-y-3 pt-1">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{companyName}</h1>
                    <p className="text-slate-500 text-sm font-medium">{website}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
                {/* Description */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-base font-semibold text-slate-900 mb-4">Description</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-base font-semibold text-slate-900 mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <MapPin className="text-slate-400 shrink-0 mt-0.5" size={18} />
                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Location</div>
                                <div className="text-sm font-medium text-slate-900">{address}</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Phone className="text-slate-400 shrink-0 mt-0.5" size={18} />
                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</div>
                                <div className="text-sm font-medium text-slate-900">{phone}</div>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Mail className="text-slate-400 shrink-0 mt-0.5" size={18} />
                            <div>
                                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email</div>
                                <div className="text-sm font-medium text-slate-900">{email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-base font-semibold text-slate-900">Likely Existing</h2>
                        {matchLevel === 'High' && (
                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-600 border border-red-100">
                                 <BarChart2 size={12} className="fill-current" />
                                 High
                            </span>
                        )}
                    </div>

                    <div className="space-y-4 mb-6">
                        <div className="text-xs font-bold text-slate-900">Top matches:</div>
                        {topMatches.length > 0 ? (
                            <ul className="space-y-3">
                                {topMatches.map((m, i) => (
                                    <li key={i} className="text-xs flex justify-between items-center text-slate-600">
                                        <span className="font-medium text-slate-700">{m.name}</span>
                                        <span className="text-slate-400">- {m.location}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-xs text-slate-500 italic">No existing matches found.</p>
                        )}
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                        <h2 className="text-base font-semibold text-slate-900 mb-4">Lead Progress</h2>
                         <div className="space-y-2">
                            <label className="text-xs font-medium text-slate-500">
                                Status <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <button className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-md px-3 py-2 text-sm text-orange-600 font-medium hover:bg-slate-50 transition-colors shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-300">
                                    {status}
                                    <ChevronDown size={16} className="text-slate-400" />
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 pt-1">Following up on the assigned lead.</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* AI Insight */}
        <div className="bg-purple-50/50 rounded-xl border border-purple-100 p-6 shadow-sm ring-1 ring-purple-100/50">
            <div className="flex items-center gap-2 mb-3">
                <Sparkles className="text-purple-600 fill-purple-100" size={18} />
                <h2 className="text-base font-semibold text-slate-900">AI Insight</h2>
            </div>
            <div className="space-y-2 text-sm text-slate-700 leading-relaxed">
                <p>
                    {insightText}
                </p>
                <div>
                    <span className="font-bold text-slate-900">Products:</span> {products}
                </div>
                <div>
                    <span className="font-bold text-slate-900">Locations:</span> {locations}
                </div>
            </div>
        </div>
    </div>
  );
};
