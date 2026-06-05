import axiosInstance from '../api/axiosInstance';

export const businessService = {
  // Fetch all businesses
  getAllBusinesses: async () => {
    try {
      const response = await axiosInstance.get('/businesses');
      return response.data;
    } catch (error) {
      console.error('Error fetching businesses:', error);
      throw error;
    }
  },

  createBusiness: async (businessData) => {
    try {
      const response = await axiosInstance.post('/businesses', businessData);
      return response.data;
    } catch (error) {
      console.error('Error creating business:', error);
      throw error;
    }
  },

  deleteBusiness: async (id) => {
    const response = await axiosInstance.delete(`/businesses/${id}`);
    return response.data;
  },

  updateBusiness: async (id, businessData) => {
    const response = await axiosInstance.put(`/businesses/${id}`, businessData);
    return response.data;
  },
  
  getBusinessStats: async () => {
    const response = await axiosInstance.get('/businesses/stats');
    return response.data;
  },
  
  // Cleaned up syntax for getRecentActivity
  getRecentActivity: async () => {
    const response = await axiosInstance.get('/businesses/recent');
    return response.data;
  },
  getBusinessHealth: async (id) => {
    const response = await axiosInstance.get(`/businesses/${id}/health`);
    return response.data;
  },
};