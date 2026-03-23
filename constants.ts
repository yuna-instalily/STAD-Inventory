
import { ActionItem, Customer, InsightType, KPI, Task, Note } from './types';

export const MOCK_KPIS: KPI[] = [
  { 
    label: 'Open Requests', 
    value: '14', 
    unit: '', 
    growth: '',
    trend: 'up',
    comparisonText: '', 
    targetText: '' 
  },
  { 
    label: 'Reusable Units', 
    value: '128', 
    unit: '', 
    growth: '', 
    trend: 'up',
    comparisonText: '', 
    targetText: '' 
  },
  { 
    label: 'Pending Transfers', 
    value: '6', 
    unit: '', 
    growth: '', 
    trend: 'down',
    comparisonText: '', 
    targetText: '' 
  },
  { 
    label: 'Purchase Avoidance', 
    value: '$42,500', 
    unit: '', 
    growth: '', 
    trend: 'up',
    comparisonText: '', 
    targetText: '' 
  },
];

export const MOCK_ACTION_ITEMS: ActionItem[] = [
  {
    id: '0',
    companyName: 'Reallocate Mobile Workstations for Rollout',
    primaryTag: 'Fleet Rebalance',
    tags: ['Fleet Rebalance', 'Action prepped', 'Fleet Utilization'],
    isAiGenerated: true,
    insightText: 'InstaBrain compares on-hand, committed, activated, and expected return units across locations, then ranks the fastest low-friction transfer path. The model shows West Depot can fulfill the rollout need without delaying other active work.',
    cta: 'Approve transfer plan',
    details: {
      address: 'Project NorthRamp • Revenue Impact: $4.2M'
    }
  },
  {
    id: '1',
    companyName: 'Prevent Unnecessary Replenishment Purchase',
    primaryTag: 'Capacity risk',
    tags: ['Capacity risk', 'Action prepped'],
    isAiGenerated: true,
    insightText: 'The request workspace exposes usable inventory before a buyer starts a new order. By surfacing return timing and location-level availability early, the system reduces duplicate purchasing and flags where existing stock can satisfy demand first.',
    cta: 'Review purchase alternative',
    details: {
      address: 'Summit FieldGrid • Revenue Impact: $1.8M'
    }
  },
  {
    id: '2',
    companyName: 'Accelerate Multi-Site Request Decisions',
    primaryTag: 'Fleet Utilization',
    tags: ['Fleet Utilization', 'Action prepped', 'Loyalty Campaign'],
    isAiGenerated: true,
    insightText: 'InstaWorkers apply repeatable checks across inventory, requests, and asset movement history so approvals stay explainable and traceable. David gets a clean decision path with timing, quantity, and downstream impact in one place.',
    cta: 'Open execution workflow',
    details: {
      address: 'Atlas Rollout Sync • Revenue Impact: $3.6M'
    }
  }
];

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: '1',
    name: 'Acme Corporation',
    industry: 'Technology',
    insights: ['Eligible for Promo'],
    lastContact: '10/23/2025'
  },
  {
    id: '2',
    name: 'Global Solutions Ltd',
    industry: 'Consulting',
    insights: ['Open AR Payments', 'Eligible for Promo'],
    lastContact: '10/23/2025'
  },
  {
    id: '3',
    name: 'Innovation Labs',
    industry: 'R&D',
    insights: ['Open AR Payments'],
    lastContact: '10/22/2025'
  },
  {
    id: '4',
    name: 'TechStar Inc.',
    industry: 'Software',
    insights: ['Churn Risk'],
    lastContact: '10/20/2025'
  }
];

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    description: 'Follow up on initial proposal',
    dueDate: 'Fri, 12/5/2025',
    priority: 'Critical',
    status: 'Pending'
  },
  {
    id: '2',
    description: 'Follow up on initial proposal',
    dueDate: 'Fri, 12/5/2025',
    priority: 'Critical',
    status: 'Unknown'
  }
];

export const MOCK_NOTES: Note[] = [
  {
    id: '1',
    subject: '',
    content: 'hello',
    type: 'Needs Assessment',
    date: 'Dec 4, 2025, 3:12 PM'
  },
  {
    id: '2',
    subject: '',
    content: 'hello',
    type: 'Engaged Prospect',
    date: 'Dec 4, 2025, 3:12 PM'
  },
  {
    id: '3',
    subject: '',
    content: 'test note',
    type: 'Engaged Prospect',
    date: 'Nov 4, 2025, 3:17 PM'
  },
  {
    id: '4',
    subject: '',
    content: 'Checking if this works the way I thought',
    type: 'Second Attempt',
    date: 'Oct 27, 2025, 1:26 PM'
  }
];