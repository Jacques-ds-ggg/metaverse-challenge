import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login/>;


  return (
    <div className="h-screen">
      <Head>
        <title>Jacques-Metaverse-Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the Metaverse Challenge-App</h1>
      <button
        onClick={logout}
        className="login_cta py-2 px-4 rounded-sm font-bold text-lg 
        bg-orange-400 text-white hover:bg-orange-500 flex items-center"
      >
        Logout
      </button>
    </div>
  )
}
