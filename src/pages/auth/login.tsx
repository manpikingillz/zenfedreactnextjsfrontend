import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { NextRouter, useRouter } from 'next/router';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    performLogin(email, password, router)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const performLogin = async(username: string, password: string, router: NextRouter) => {
  try {
    // Form Data
    let formData = new FormData()
    formData.append('username', username);
    formData.append('password', password);

    const response = await axios.post("http://127.0.0.1:8000/token", formData);
    const { access_token, refresh_token } = response.data;
    localStorage.setItem('access_token', access_token);

    // TODO: Implement use of the refresh token when the token expires.
    Cookies.set('refresh_token', refresh_token, {
      httpOnly: true,
      secure: true
    });

    axios.defaults.headers.common['Authorization'] = "Bearer " + access_token;
    // Navigate to another page after login
    router.push('/');
  } catch (error) {
    alert("An error occurred while Loggin in the user.");
    console.error(error);
  }
}

export default LoginPage;
