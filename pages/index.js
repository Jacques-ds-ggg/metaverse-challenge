import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login/>;


  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Jacques-Metaverse-Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">                
        {/* Header */}
        <Header />
        {/* Messages */} 
        <Messages />      
      </div>   

      <button
        onClick={logout}
        className="login_cta py-2 px-4 rounded-sm font-bold text-lg 
        bg-fuchsia-400 text-white hover:bg-fuchsia-500 flex items-center"
      >
        Logout
      </button>
    </div>
  )
}
