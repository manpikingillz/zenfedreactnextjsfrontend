import axios from 'axios';
import { useState } from 'react';

export default function PersonForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          await axios.post("http://127.0.0.1:8000/api/v1/persons/", {
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'phone_number': phoneNumber,
            'address': address,
            'country_id': country });
          alert("User created successfully!");
        } catch (error) {
          alert("An error occurred while creating the user.");
          console.error(error);
        }
      };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        phone Number:
        <input type="text" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <br />
      <label>
        Country:
        <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
