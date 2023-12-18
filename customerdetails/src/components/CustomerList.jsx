import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('https://localhost:7217/api/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7217/api/customers/${id}`);
      await fetchCustomers();
    } catch (error) {
      console.error(`Error deleting customer with ID ${id}`, error);
    }
  };

  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div className="customer-card" key={customer.id}>
          <p>Name: {customer.name}</p>
          <p>Address: {customer.address}</p>
          <p>Customer Number: {customer.customerNumber}</p>
          <p>Meter Serial Number: {customer.meterSerialNumber}</p>
          <button onClick={() => handleDelete(customer.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
