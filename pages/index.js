import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

          // Actual app unless not authenticated then the login screen will be in front
  if (!isAuthenticated) return <Login/>;


  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Jacques-Metaverse-Challenge</title>
        <link rel="icon" href="/moralis.png" />
      </Head>

      <div className="max-w-screen-2xl mx-auto"> 
        <Header />
        <Messages />      
      </div>   
    </div>
  )
}
