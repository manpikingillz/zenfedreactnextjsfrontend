import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/store/reducers/auth'


const inter = Inter({ subsets: ['latin'] })


export default function Home({ customers }: any) {
  // Redux
  const count = useSelector((state: any) => state.auth.value)
  const dispatch = useDispatch()

  //Local state
  const [token, setToken] = useState('');

  useEffect(() => {
    // Ensure we're working on the client side
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token')
      if (token) setToken(token)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('access_token');
    setToken('');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      { token ? <a onClick={logout}>Logout</a> : <Link href={'/auth/login'}>Login</Link> }
      <h1 className="text-6xl font-bold">Welcome to ZenFed CRM!</h1>

      { customers && customers.map((person: any) => {
          return <>
            <li>{person?.first_name}, {person?.last_name}, {person?.email}, {person?.phone_number}</li>
          </>
        })
      }

      {/* Testing Redux */}
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </main>
  )
}

export async function getStaticProps() {
  // Fetch customer data from an API endpoint
  const res = await axios.get('http://127.0.0.1:8000/persons/');
  const customers = await res.data;

  return {
    props: {
      customers
    }
  }
}