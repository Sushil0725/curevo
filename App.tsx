import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Chat from 'screen/chat';
import Home from 'screen/home';
import Profile from 'screen/profile';
import Records from 'screen/records';

import './global.css';

export default function App() {
  const [route, setRoute] = useState<'home' | 'Chat' | 'Records' | 'profile'>('home');

  const handleNavigate = (key: string) => {
    // normalize keys from footer
    const normalized = key.toLowerCase();
    if (normalized === 'chat') setRoute('Chat');
    else if (normalized === 'records') setRoute('Records');
    else if (normalized === 'profile') setRoute('profile');
    else setRoute('home');
  };

  return (
    <>
      {route === 'home' && <Home onNavigate={handleNavigate} />}
      {route === 'Chat' && <Chat onNavigate={handleNavigate} />}
      {route === 'Records' && <Records onNavigate={handleNavigate} />}
      {route === 'profile' && <Profile onNavigate={handleNavigate} />}
      <StatusBar style="auto" />
    </>
  );
}
