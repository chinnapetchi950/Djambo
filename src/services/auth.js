import api from './api';

export async function loginWithPassword({ identifier, password }) {
  const res = await api.post('/auth/login', { identifier, password });
  return res.data;
}

export async function loginWithPin({ identifier, pin }) {
  const res = await api.post('/auth/pin-login', { identifier, pin });
  return res.data;
}
