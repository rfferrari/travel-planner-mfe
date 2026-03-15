export type BudgetCategory =
  | 'TRANSPORT'
  | 'ACCOMMODATION'
  | 'FOOD'
  | 'ACTIVITIES'
  | 'OTHER';

export interface BudgetItem {
  id: string;
  tripId: string;
  title: string;
  category: BudgetCategory;
  estimatedValue: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}