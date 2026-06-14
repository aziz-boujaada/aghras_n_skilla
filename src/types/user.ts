export type UserRole =  'super_admin'|'commune_president' | 'parent' | 'driver';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  commune_id?: number;
  created_at: string;
}