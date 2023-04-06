import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import './App.css';
import { OurDestination } from './components/OurDestination/OurDestination';

export function App() {
  return (
    <>
      <main className="w-full h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center overflow-x-hidden">
        <Header />
        <Main />
      </main>
      <div className="AboutUs">
        <AboutUs />
      </div>
      <div className="OurDestinations">
        <OurDestination />
      </div>
    </>
  );
}
