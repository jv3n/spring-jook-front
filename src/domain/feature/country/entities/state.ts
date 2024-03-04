import { City } from '@domain/feature/country/entities/city';

export interface State {
  id?: string;
  name?: string;
  type?: string;
  latitude?: number;
  longitude?: number;
  cities?: City[];
}
