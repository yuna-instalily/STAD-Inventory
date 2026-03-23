
import React, { useState } from 'react';
import { Search, Plus, ArrowUpDown, ChevronLeft, ChevronRight, Clock, X } from 'lucide-react';
import { Task, Note } from '../types';

interface TasksAndNotesProps {
  tasks: Task[];
  notes?: Note[];
}

export const TasksAndNotes: React.FC<TasksAndNotesProps> = ({ tasks, notes = [] }) => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'notes'>('tasks');
  const [searchTerm, setSearchTerm] = useState('');

  const currentCount = activeTab === 'tasks' ? tasks.length : notes.length;

  const getStatusChipStyles = (type: string) => {
    if (type === 'Second Attempt') {
      return 'bg-[#FFF7ED] text-[#C2410C] border-[#FFEDD5]'; // Orange-ish
    }
    return 'bg-[#EFF6FF] text-[#1D4ED8] border-[#DBEAFE]'; // Blue-ish
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
        <div className="flex items-center gap-2">
            {activeTab === 'notes' && <Clock className="text-blue-600" size={24} />}
            <div>
                <h2 className="text-lg font-semibold text-slate-900">
                    {activeTab === 'notes' ? 'Notes History' : 'Tasks and Notes History'}
                </h2>
                {activeTab === 'tasks' && <p className="text-slate-500 text-sm mt-1">All the tasks and notes of the lead.</p>}
            </div>
        </div>
        
        {/* ShadCN Tabs Style */}
        <div className="bg-slate-100 p-1 rounded-lg flex self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all min-w-[80px] ${
              activeTab === 'tasks'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Tasks
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md flex items-center justify-center gap-2 transition-all min-w-[80px] ${
              activeTab === 'notes'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Notes
          </button>
        </div>
      </div>

      {activeTab === 'tasks' && (
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
                type="text"
                placeholder="Filter tasks..."
                className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-slate-50 shadow transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 gap-2">
            <Plus size={16} />
            Create Task
            </button>
        </div>
      )}

      {/* Content Area */}
      {activeTab === 'tasks' ? (
        <div className="rounded-md border border-slate-200 overflow-hidden">
        <table className="w-full text-sm text-left caption-bottom">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr className="text-slate-500 transition-colors">
                  <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer w-1/3">
                    <div className="flex items-center gap-1">
                      Description
                      <ArrowUpDown size={12} className="text-slate-400" />
                    </div>
                  </th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer">
                    <div className="flex items-center gap-1">
                      Due Date
                      <ArrowUpDown size={12} className="text-slate-400" />
                    </div>
                  </th>
                  <th className="h-10 px-4 text-left align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer">
                    <div className="flex items-center gap-1">
                      Priority
                      <ArrowUpDown size={12} className="text-slate-400" />
                    </div>
                  </th>
                  <th className="h-10 px-4 align-middle font-medium text-slate-500 hover:text-slate-700 cursor-pointer text-right">
                    <div className="flex items-center justify-end gap-1">
                      Status
                      <ArrowUpDown size={12} className="text-slate-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id} className="border-b border-slate-200 last:border-0 transition-colors hover:bg-slate-50/50">
                    <td className="p-4 align-middle font-medium text-slate-900">{task.description}</td>
                    <td className="p-4 align-middle text-slate-500">{task.dueDate}</td>
                    <td className="p-4 align-middle">
                      <span className={`font-medium ${
                        task.priority === 'Critical' ? 'text-red-600' : 
                        task.priority === 'High' ? 'text-orange-600' : 'text-slate-600'
                      }`}>
                        {task.priority || '-'}
                      </span>
                    </td>
                    <td className="p-4 align-middle text-right">
                      <span className={`font-medium ${
                        task.status === 'Pending' ? 'text-amber-600' : 
                        task.status === 'Completed' ? 'text-green-600' : 'text-slate-400'
                      }`}>
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
      ) : (
        <div className="space-y-0">
            {notes.map((note) => (
                <div key={note.id} className="flex flex-col sm:flex-row sm:items-start justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors gap-4">
                    <div className="space-y-2 flex-1">
                        <div className="text-sm text-slate-400">{note.date}</div>
                        <div className="text-slate-700 text-base font-normal leading-relaxed">{note.content}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusChipStyles(note.type)} shadow-sm`}>
                            {note.type}
                        </span>
                        <button className="text-slate-300 hover:text-slate-500 transition-colors p-1 rounded-md hover:bg-slate-100">
                            <X size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* Footer (only for tasks table view) */}
      {activeTab === 'tasks' && (
        <div className="mt-4 pt-2 flex justify-between items-center text-sm text-slate-500">
            <div>
            <span className="font-medium text-slate-900">1-{currentCount}</span> of {currentCount} results
            </div>
            
            <div className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white shadow-sm hover:bg-slate-100 h-8 w-8 text-slate-500" disabled>
                        <ChevronLeft size={14} />
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 border border-slate-200 bg-white shadow-sm hover:bg-slate-100 h-8 w-8 text-slate-900">
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
