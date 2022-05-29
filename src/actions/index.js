import axios from "axios";
export const FETCH_MODUBANCHAN = 'FETCH_MODUBANCHAN';

export function fetchModuBanchan() {
    const request = axios.get('/api/moim/');
  return {
    type: FETCH_MODUBANCHAN,
    payload: request
  }
}