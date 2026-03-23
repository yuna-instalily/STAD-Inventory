import React, { useState, useEffect } from 'react';
import { Box, ArrowRight, ArrowDown, ArrowUp, AlertCircle, CheckCircle2, MapPin, TrendingUp, Truck, ListTodo, Activity, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ActionItem } from '../types';
import { MOCK_ACTION_ITEMS } from '../constants';

interface InventoryHealthProps {
  activeRequest?: ActionItem | null;
  onClearRequest?: () => void;
  onSelectRequest?: (item: ActionItem) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const InventoryHealth: React.FC<InventoryHealthProps> = ({ activeRequest, onClearRequest, onSelectRequest }) => {
  const [isApproved, setIsApproved] = useState(false);

  // Reset approval state if request changes
  useEffect(() => {
    setIsApproved(false);
  }, [activeRequest]);

  if (activeRequest) {
    const { companyName, insightText, cta } = activeRequest;
    
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <button 
            onClick={onClearRequest} 
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 font-medium transition-colors"
          >
            ← Back to Inventory Overview
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Review Transfer: {companyName}</h1>
          <p className="text-slate-500 text-sm">Analyze global inventory and resolution paths before approving.</p>
        </motion.div>

        {!isApproved ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Request Overview */}
              <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Box size={18} className="text-slate-400" />
                  Request Overview
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Item Needed</div>
                    <div className="font-semibold text-slate-900">Mobile Workstations</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Project Timeline</div>
                    <div className="font-semibold text-slate-900">NorthRamp Rollout</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Required Quantity</div>
                    <div className="font-semibold text-slate-900 text-red-600">150 units</div>
                  </div>
                </div>
              </motion.div>

              {/* Inventory Table */}
              <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                    <MapPin size={18} className="text-slate-400" />
                    Global Inventory Status
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
                      <tr>
                        <th className="px-5 py-3">Location</th>
                        <th className="px-5 py-3 text-right">On-Hand</th>
                        <th className="px-5 py-3 text-right">Requested</th>
                        <th className="px-5 py-3 text-right">Activated</th>
                        <th className="px-5 py-3 text-right">Expected Return</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="hover:bg-slate-50">
                        <td className="px-5 py-4 font-medium text-slate-900">Central Store</td>
                        <td className="px-5 py-4 text-right text-slate-600">45</td>
                        <td className="px-5 py-4 text-right text-red-600 font-bold">150</td>
                        <td className="px-5 py-4 text-right text-slate-600">40</td>
                        <td className="px-5 py-4 text-right text-slate-600">10</td>
                      </tr>
                      <tr className="hover:bg-slate-50 bg-emerald-50/30">
                        <td className="px-5 py-4 font-medium text-slate-900">West Depot</td>
                        <td className="px-5 py-4 text-right text-emerald-600 font-bold">420</td>
                        <td className="px-5 py-4 text-right text-slate-600">50</td>
                        <td className="px-5 py-4 text-right text-slate-600">300</td>
                        <td className="px-5 py-4 text-right text-slate-600">25</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="px-5 py-4 font-medium text-slate-900">East Depot</td>
                        <td className="px-5 py-4 text-right text-slate-600">110</td>
                        <td className="px-5 py-4 text-right text-slate-600">80</td>
                        <td className="px-5 py-4 text-right text-slate-600">90</td>
                        <td className="px-5 py-4 text-right text-slate-600">5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Resolution Paths */}
              <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <h2 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={18} className="text-slate-400" />
                  Resolution Paths
                </h2>
                
                {/* Map Mockup */}
                <div className="w-full h-48 bg-slate-50/50 rounded-xl border border-slate-200 mb-6 relative overflow-hidden">
                  <svg width="100%" height="100%" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Path 2 (Gray) */}
                    <path d="M 100 160 C 250 160 350 100 450 100" fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 6" />
                    
                    {/* Path 1 (Purple) */}
                    <path d="M 260 40 C 340 40 380 100 450 100" fill="none" stroke="#a855f7" strokeWidth="4" />
                    
                    {/* Animated dot on Path 1 */}
                    <circle cx="0" cy="0" r="5" fill="#ffffff" stroke="#a855f7" strokeWidth="2">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 260 40 C 340 40 380 100 450 100" />
                    </circle>

                    {/* Nodes */}
                    {/* West Depot */}
                    <g transform="translate(260, 40)">
                      <circle cx="0" cy="0" r="8" fill="#ffffff" stroke="#a855f7" strokeWidth="3" />
                      <circle cx="0" cy="0" r="16" fill="#a855f7" opacity="0.1" />
                      <text x="-15" y="4" textAnchor="end" className="text-xs font-semibold fill-slate-700 font-['IBM_Plex_Sans']">West Depot</text>
                      <text x="-15" y="18" textAnchor="end" className="text-[10px] fill-slate-500 font-['IBM_Plex_Sans']">420 units available</text>
                    </g>

                    {/* New Purchase */}
                    <g transform="translate(100, 160)">
                      <circle cx="0" cy="0" r="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                      <text x="-15" y="4" textAnchor="end" className="text-xs font-semibold fill-slate-700 font-['IBM_Plex_Sans']">New Purchase</text>
                      <text x="-15" y="18" textAnchor="end" className="text-[10px] fill-slate-500 font-['IBM_Plex_Sans']">14-21 days ETA</text>
                    </g>

                    {/* NorthRamp */}
                    <g transform="translate(450, 100)">
                      <circle cx="0" cy="0" r="8" fill="#ffffff" stroke="#ef4444" strokeWidth="3" />
                      <circle cx="0" cy="0" r="16" fill="#ef4444" opacity="0.1" />
                      <circle cx="0" cy="0" r="24" fill="#ef4444" opacity="0.05" />
                      <text x="15" y="4" textAnchor="start" className="text-xs font-semibold fill-slate-700 font-['IBM_Plex_Sans']">NorthRamp</text>
                      <text x="15" y="18" textAnchor="start" className="text-[10px] fill-red-500 font-medium font-['IBM_Plex_Sans']">Needs 150 units</text>
                    </g>
                  </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Path 1 */}
                  <div className="border-2 border-purple-500 bg-purple-50 rounded-xl p-5 relative shadow-sm">
                    <div className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">Recommended</div>
                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Path 1: Reallocate</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center border-b border-purple-100 pb-2">
                        <span className="text-slate-500">Source</span> 
                        <span className="font-semibold text-slate-900">West Depot</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-purple-100 pb-2">
                        <span className="text-slate-500">Quantity</span> 
                        <span className="font-semibold text-slate-900">150 units</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-purple-100 pb-2">
                        <span className="text-slate-500">Expected Timing</span> 
                        <span className="font-bold text-emerald-600 flex items-center gap-1"><Clock size={14}/> 2 Days</span>
                      </div>
                      <div className="pt-2 text-purple-800 text-sm font-medium leading-snug">
                        Impact: No delay to active work. Uses existing idle stock.
                      </div>
                    </div>
                  </div>
                  
                  {/* Path 2 */}
                  <div className="border border-slate-200 bg-white rounded-xl p-5 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-4 text-lg">Path 2: Replenish</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Source</span> 
                        <span className="font-semibold text-slate-900">New Purchase</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Quantity</span> 
                        <span className="font-semibold text-slate-900">150 units</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-slate-500">Expected Timing</span> 
                        <span className="font-bold text-red-600 flex items-center gap-1"><Clock size={14}/> 14-21 Days</span>
                      </div>
                      <div className="pt-2 text-slate-600 text-sm font-medium leading-snug">
                        Impact: $45,000 CapEx. Delays NorthRamp rollout by 2 weeks.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Right Column - Actions */}
            <div className="space-y-6">
              {/* AI Insight */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#FAF0FF] to-[#FEFAFF] rounded-xl border border-[#E8B5FE] p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sparkle-grad-detail" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#8EE5FF' }} />
                          <stop offset="50%" style={{ stopColor: '#7B6AFF' }} />
                          <stop offset="100%" style={{ stopColor: '#BB00FF' }} />
                        </linearGradient>
                      </defs>
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#sparkle-grad-detail)" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">InstaBrain Analysis</h2>
                </div>
                <div className="space-y-4 text-[15px] text-slate-800 leading-relaxed">
                  {insightText.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-base font-semibold text-slate-900 mb-5">Required Action</h2>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => setIsApproved(true)}
                    className="w-full flex items-center justify-center gap-2 bg-black hover:bg-slate-800 text-white rounded-lg px-4 py-3 text-sm font-semibold transition-colors shadow-sm"
                  >
                    <CheckCircle2 size={18} />
                    {cta || 'Approve Action'}
                  </button>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg px-4 py-3 text-sm font-semibold transition-colors shadow-sm">
                    Decline & Provide Feedback
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <>
            {/* POST-APPROVAL STATE (EXECUTION) */}
            <motion.div variants={itemVariants} className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-base font-bold text-emerald-900">Transfer Approved & Executing</h2>
                <p className="text-emerald-700 text-sm mt-0.5">TRF-8921 has been generated and routed to West Depot logistics.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Status Stepper */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
                  <h3 className="font-semibold text-slate-900 mb-8 text-lg">Execution Status</h3>
                  <div className="flex items-center justify-between relative px-4">
                      <div className="absolute left-8 right-8 top-5 h-1 bg-slate-100 -z-10"></div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "33.333%" }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                        className="absolute left-8 top-5 h-1 bg-emerald-500 -z-10"
                      ></motion.div>
                      
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md ring-4 ring-white"><CheckCircle2 size={20}/></div>
                        <span className="text-sm font-bold text-slate-900">Approved</span>
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.2 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md ring-4 ring-white animate-pulse"><Box size={20}/></div>
                        <span className="text-sm font-bold text-blue-700">Prepping</span>
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.4 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center ring-4 ring-white"><Truck size={20}/></div>
                        <span className="text-sm font-medium text-slate-500">In Transit</span>
                      </motion.div>
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 1.6 }}
                        className="flex flex-col items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center ring-4 ring-white"><MapPin size={20}/></div>
                        <span className="text-sm font-medium text-slate-500">Delivered</span>
                      </motion.div>
                  </div>
                </motion.div>

                {/* Follow-up Tasks */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                  <h3 className="font-semibold text-slate-900 mb-5 flex items-center gap-2 text-lg">
                    <ListTodo size={20} className="text-slate-400"/> 
                    Follow-up Tasks
                  </h3>
                  <div className="space-y-3">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-500 line-through font-medium">Generate Transfer Order (TRF-8921)</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100"
                    >
                      <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-500 line-through font-medium">Notify West Depot Logistics Team</span>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-white border border-slate-200 shadow-sm"
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 shrink-0"></div>
                      <span className="text-sm font-bold text-slate-900">Acknowledge Receipt at NorthRamp</span>
                      <span className="ml-auto text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Due Oct 26</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Activity Log */}
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 h-full">
                  <h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                    <Activity size={20} className="text-slate-400"/> 
                    Activity Log
                  </h3>
                  <div className="relative ml-3 space-y-8 pb-2">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        className="absolute left-0 top-2 bottom-0 w-0.5 bg-slate-100 -z-10"
                      ></motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.5 }}
                        className="relative pl-6"
                      >
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"></div>
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">Just now</div>
                        <div className="text-sm font-semibold text-slate-900">David (You) approved transfer plan</div>
                        <div className="text-xs text-slate-500 mt-1">Status changed to Prepping</div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                        className="relative pl-6"
                      >
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500 border-2 border-white shadow-sm"></div>
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">1 min ago</div>
                        <div className="text-sm font-semibold text-slate-900">InstaBrain generated resolution paths</div>
                        <div className="text-xs text-slate-500 mt-1">Analyzed 4 locations for optimal routing</div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="relative pl-6"
                      >
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
                        <div className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">10 mins ago</div>
                        <div className="text-sm font-semibold text-slate-900">System flagged NorthRamp shortage</div>
                        <div className="text-xs text-slate-500 mt-1">Deficit of 150 Mobile Workstations detected</div>
                      </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    );
  }

  const metrics = [
    { label: 'Total Assets', value: '12,450', trend: '+2.4%', trendUp: true },
    { label: 'Utilization Rate', value: '88.2%', trend: '+4.1%', trendUp: true },
    { label: 'Pending Transfers', value: '142', trend: '-12%', trendUp: false },
    { label: 'Critical Shortages', value: '3', trend: '-2', trendUp: false },
  ];

  const locations = [
    { name: 'West Depot', onHand: 4200, committed: 3800, available: 400, status: 'Healthy' },
    { name: 'East Depot', onHand: 3100, committed: 3050, available: 50, status: 'Warning' },
    { name: 'NorthRamp', onHand: 1800, committed: 1950, available: -150, status: 'Critical' },
    { name: 'South Hub', onHand: 3350, committed: 2900, available: 450, status: 'Healthy' },
  ];

  const activeTransfers = [
    { id: 'TRF-8921', from: 'West Depot', to: 'NorthRamp', item: 'Mobile Workstations', qty: 150, status: 'Needs Review', eta: 'Action Required' },
    { id: 'TRF-8922', from: 'South Hub', to: 'East Depot', item: 'Scanner Units', qty: 45, status: 'Prepping', eta: 'Tomorrow, 10:00 AM' },
    { id: 'TRF-8923', from: 'West Depot', to: 'Summit FieldGrid', item: 'Field Tablets', qty: 200, status: 'Approved', eta: 'Oct 26, 2025' },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-2">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">Inventory Health</h1>
        <p className="text-slate-500 text-sm">Real-time overview of asset distribution, utilization, and active transfers across all locations.</p>
      </motion.div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <motion.div key={idx} variants={itemVariants} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="text-sm font-medium text-slate-500 mb-1">{metric.label}</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
              <div className={`flex items-center text-xs font-semibold ${metric.trendUp ? 'text-emerald-600' : 'text-red-600'}`}>
                {metric.trendUp ? <ArrowUp size={14} className="mr-1" /> : <ArrowDown size={14} className="mr-1" />}
                {metric.trend}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Transfers */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <TrendingUp size={18} className="text-slate-400" />
                Active Transfers
              </h2>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2.5 py-0.5 rounded-full">1 Action Required</span>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTransfers.map((transfer, idx) => {
                if (transfer.status === 'Needs Review') {
                  return (
                    <div 
                      key={idx}
                      onClick={() => onSelectRequest?.(MOCK_ACTION_ITEMS[0])}
                      className="p-4 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer group relative overflow-hidden flex flex-col"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-700 flex items-center gap-1">
                          <AlertCircle size={14} /> Action Required
                        </span>
                        <span className="text-xs font-bold text-amber-700">{transfer.id}</span>
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">{transfer.item}</div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-3">
                        <span>{transfer.from}</span>
                        <ArrowRight size={12} />
                        <span>{transfer.to}</span>
                      </div>
                      <div className="mt-auto pt-3 flex items-center justify-between text-sm border-t border-amber-200/50">
                        <span className="text-slate-600 text-xs">Qty: <span className="font-medium text-slate-900">{transfer.qty}</span></span>
                        <span className="font-medium text-amber-700 group-hover:text-amber-800 transition-colors flex items-center">
                          Review Transfer <ArrowRight size={14} className="ml-1" />
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={idx} className="p-4 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-500">{transfer.id}</span>
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {transfer.status}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 mb-1">{transfer.item}</div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span>{transfer.from}</span>
                      <ArrowRight size={12} />
                      <span>{transfer.to}</span>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between text-xs border-t border-slate-200/50">
                      <span className="text-slate-600">Qty: <span className="font-medium text-slate-900">{transfer.qty}</span></span>
                      <span className="text-slate-500">ETA: {transfer.eta}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-3 border-t border-slate-100 text-center">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                View All Transfers
              </button>
            </div>
          </motion.div>
        </div>

        {/* Location Status */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <MapPin size={18} className="text-slate-400" />
                Location Status
              </h2>
            </div>
            <div className="p-5 space-y-4">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50">
                  <div>
                    <div className="font-medium text-slate-900 text-sm">{loc.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Avail: <span className={`font-semibold ${loc.available < 0 ? 'text-red-600' : 'text-slate-900'}`}>{loc.available.toLocaleString()}</span></div>
                  </div>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium border
                    ${loc.status === 'Healthy' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                      loc.status === 'Warning' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                      'bg-red-50 text-red-700 border-red-200'}`}
                  >
                    {loc.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
