import axiosInstance from '../api/axiosInstance';

export const authService = {
  login: async (email, password) => {
    try {
      // Adjust the endpoint if your backend route is named differently
      const response = await axiosInstance.post('/auth/login', { email, password });
      
      // Save the token and user details to localStorage
      if (response.data.token) {
        localStorage.setItem('biznest_token', response.data.token);
        localStorage.setItem('biznest_user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error:', error.response?.data?.message || error.message);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('biznest_token');
    localStorage.removeItem('biznest_user');
    window.location.href = '/login';
  }
};