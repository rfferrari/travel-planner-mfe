export type TripStatus = 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';

export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  type: 'LEISURE' | 'BUSINESS' | 'OTHER';
  notes?: string;
  status: TripStatus;
  createdAt: string;
  updatedAt: string;
}