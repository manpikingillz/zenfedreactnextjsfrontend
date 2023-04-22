import axios from 'axios';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    try {
      await axios.post("http://127.0.0.1:8000/api/v1/login/", {
        'email': email,
        'password': password,
     });
      alert("User Loggedin successfully!");
    } catch (error) {
      alert("An error occurred while Loggin in the user.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginPage;
