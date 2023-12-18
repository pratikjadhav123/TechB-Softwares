import React, { useState } from 'react';
import axios from 'axios';
// Import your CSS file here

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [meterSerialNumber, setMeterSerialNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7217/api/customers', {
        name,
        address,
        customerNumber,
        meterSerialNumber,
      });
      if (response.status === 200 || response.status === 201) {
        // Clear form fields after successful creation
        setName('');
        setAddress('');
        setCustomerNumber('');
        setMeterSerialNumber('');
      }
    } catch (error) {
      console.error('Error creating customer', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input
        type="text"
        placeholder="Customer Number"
        value={customerNumber}
        onChange={(e) => setCustomerNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Meter Serial Number"
        value={meterSerialNumber}
        onChange={(e) => setMeterSerialNumber(e.target.value)}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CustomerForm;
