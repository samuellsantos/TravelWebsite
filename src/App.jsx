import React from 'react';
import { Header } from './components/Header/Header';

export function App() {
  return (
    <main className="w-full h-screen bg-[url('/src/assets/background.png')] bg-cover">
      <Header />
    </main>
  );
}
