import { StatusBar } from 'expo-status-bar';
import Home from 'screen/home';

import './global.css';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" />
    </>
  );
}
