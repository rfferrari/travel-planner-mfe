export interface ItineraryItem {
  id: string;
  tripId: string;
  day: number;
  time?: string;
  activity: string;
  location?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}