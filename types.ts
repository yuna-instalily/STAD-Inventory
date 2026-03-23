
export enum InsightType {
  AR_PAYMENTS = 'Open AR Payments insights',
  PROMO = 'Eligible for Promo insights',
}

export interface LeadDetails {
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  tags?: string[];
  matchLevel?: 'High' | 'Medium' | 'Low';
  topMatches?: { name: string; location: string }[];
  products?: string;
  locations?: string;
  status?: string;
}

export interface ActionItem {
  id: string;
  companyName: string;
  primaryTag: string;
  tags?: string[];
  additionalTagsCount?: number;
  insightText: string;
  isAiGenerated: boolean;
  cta?: string;
  rawData?: {
    overdueAmount?: number;
    daysPastDue?: number;
    ytdPurchases?: number;
    discount?: number;
    expiryDays?: number;
  };
  details?: LeadDetails;
}

export interface Customer {
  id: string;
  name: string;
  industry: string;
  insights: string[];
  lastContact: string;
}

export interface Task {
  id: string;
  description: string;
  dueDate: string;
  priority?: 'Critical' | 'High' | 'Normal';
  status: 'Pending' | 'Unknown' | 'Completed';
}

export interface Note {
  id: string;
  subject: string;
  content: string;
  type: string;
  date: string;
}

export interface KPI {
  label: string;
  value: string;
  unit?: string;
  growth?: string;
  trend?: 'up' | 'down';
  comparisonText?: string;
  targetText?: string;
}