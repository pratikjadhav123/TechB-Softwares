import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api-url'; // Replace with your backend API URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  getCustomers: async () => {
    try {
      const response = await axiosInstance.get('/api/customers');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customers');
    }
  },

  createCustomer: async (customerData) => {
    try {
      const response = await axiosInstance.post('/api/customers', customerData);
      return response.data;
    } catch (error) {
      throw new Error('Error creating customer');
    }
  },

  deleteCustomer: async (customerId) => {
    try {
      const response = await axiosInstance.delete(`/api/customers/${customerId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error deleting customer with ID ${customerId}`);
    }
  },
};

export default api;
