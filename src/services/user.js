import api from './index';

export const createUserApi = async (user) => {
  try {
    const { data: { user: newUser } } = await api.post('/user', { user });
    return newUser;
  } catch (error) {
    throw error;
  }
}