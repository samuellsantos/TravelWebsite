import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Filter } from './components/Main/Filters/Filter';

export function App() {
  return (
    <main className="w-full h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center">
      <Header />
      <Main />
    </main>
  );
}
