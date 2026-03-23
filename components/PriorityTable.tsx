
import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { Customer } from '../types';

interface PriorityTableProps {
  customers: Customer[];
}

export const PriorityTable: React.FC<PriorityTableProps> = ({ customers }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-900">Priority Customers</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left caption-bottom">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-slate-500">
              <th className="h-10 px-6 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer">
                <div className="flex items-center gap-1">
                  Customer
                  <ArrowUpDown size={12} className="text-slate-400" />
                </div>
              </th>
              <th className="h-10 px-6 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer">
                <div className="flex items-center gap-1">
                  Industry
                  <ArrowUpDown size={12} className="text-slate-400" />
                </div>
              </th>
              <th className="h-10 px-6 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer">
                <div className="flex items-center gap-1">
                  Insights
                  <ArrowUpDown size={12} className="text-slate-400" />
                </div>
              </th>
              <th className="h-10 px-6 align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer text-right">
                <div className="flex items-center justify-end gap-1">
                  Last Contact
                  <ArrowUpDown size={12} className="text-slate-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-slate-200 last:border-0 transition-colors hover:bg-slate-50/50">
                <td className="p-6 align-middle font-medium text-slate-900">{customer.name}</td>
                <td className="p-6 align-middle">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                    {customer.industry}
                  </span>
                </td>
                <td className="p-6 align-middle">
                  <div className="flex flex-wrap gap-2">
                    {customer.insights.map((insight, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-sm"
                      >
                        {insight}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-6 align-middle text-right text-slate-600 font-medium tabular-nums">{customer.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
