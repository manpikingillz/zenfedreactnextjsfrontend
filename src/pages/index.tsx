import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://127.0.0.1:8000/api/v1/persons/");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Welcome to ZenFed CRM!</h1>
      { data && data.map((person) => {
          return <>
            <li>{person?.first_name}, {person?.last_name}, {person?.email}, {person?.phone_number}</li>
          </>
        })
      }
    </main>
  )
}
