
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { KPICards } from './components/KPICards';
import { ActionItems } from './components/ActionItems';
import { PriorityTable } from './components/PriorityTable';
import { TasksAndNotes } from './components/TasksAndNotes';
import { ActionItemDetail } from './components/ActionItemDetail';
import { InventoryHealth } from './components/InventoryHealth';
import { MOCK_KPIS, MOCK_ACTION_ITEMS, MOCK_CUSTOMERS, MOCK_TASKS, MOCK_NOTES } from './constants';
import { ActionItem } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<string>('dashboard');
  const [modalItem, setModalItem] = useState<ActionItem | null>(null);
  const [activeRequest, setActiveRequest] = useState<ActionItem | null>(null);

  const handleViewDetails = (item: ActionItem) => {
    setModalItem(item);
  };

  const handleNavigate = (newView: string) => {
    setView(newView);
    setModalItem(null);
    if (newView !== 'inventory-health') {
      setActiveRequest(null);
    }
  };

  const handleReviewRequest = (item: ActionItem) => {
    setActiveRequest(item);
    setModalItem(null);
    setView('inventory-health');
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  const handleBack = () => {
    setView('dashboard');
    setModalItem(null);
    setActiveRequest(null);
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden bg-slate-50 font-sans text-slate-900 relative">
      <Sidebar activeView={view} onNavigate={handleNavigate} />
      
      <main className="flex-1 flex flex-col max-w-[100vw] overflow-hidden">
        <header className="px-8 py-6 pb-2">
            <div className="text-sm text-slate-500 mb-4 flex items-center gap-2">
                 <span className="font-medium text-slate-400 hover:text-slate-900 transition-colors cursor-pointer" onClick={handleBack}>InstaLily</span> 
                 <span className="text-slate-300">/</span> 
                 <span 
                    className={`font-semibold ${view === 'dashboard' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-900 cursor-pointer transition-colors'}`}
                    onClick={handleBack}
                 >
                    Home
                 </span>
                 {view === 'inventory-health' && (
                    <>
                        <span className="text-slate-300">/</span>
                        <span className="font-semibold text-slate-900">Inventory Health</span>
                    </>
                 )}
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {view === 'dashboard' && <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome, Yuna he!</h1>}
            </div>
        </header>

        <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          <div className="max-w-[1600px] mx-auto">
            {view === 'dashboard' && (
                <div className="space-y-8">
                    <KPICards kpis={MOCK_KPIS} />
                    
                    <ActionItems 
                        items={MOCK_ACTION_ITEMS} 
                        onViewDetails={handleViewDetails} 
                    />
                    
                    <TasksAndNotes tasks={MOCK_TASKS} notes={MOCK_NOTES} />
                    
                    <div className="mb-10">
                    <PriorityTable customers={MOCK_CUSTOMERS} />
                    </div>
                </div>
            )}
            {view === 'inventory-health' && (
                <InventoryHealth 
                  activeRequest={activeRequest} 
                  onClearRequest={() => setActiveRequest(null)} 
                  onSelectRequest={(item) => setActiveRequest(item)}
                />
            )}
          </div>
        </div>
      </main>

      {/* Modal Overlay for Action Item Details */}
      {modalItem && (
        <ActionItemDetail 
          item={modalItem} 
          onClose={handleCloseModal} 
          onReview={() => handleReviewRequest(modalItem)} 
        />
      )}
    </div>
  );
};

export default App;
