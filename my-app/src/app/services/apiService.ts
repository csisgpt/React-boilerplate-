import axios from '@/app/config/axios';

export const apiService = {
  get: <T>(url: string) => axios.get<T>(url).then(r => r.data),
};
