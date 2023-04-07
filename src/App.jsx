import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import './App.css';
import { OurDestination } from './components/OurDestination/OurDestination';
import { Holiday } from './components/Holiday/Holiday';
import { OurBlogs } from './components/OurBlogs/OurBlogs';
import { Promotions } from './components/Promotions/Promotions';

export function App() {
  return (
    <>
      <main className="w-full h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center overflow-x-hidden">
        <Header />
        <Main />
      </main>
      <section className="AboutUs">
        <AboutUs />
      </section>
      <section className="OurDestinations">
        <OurDestination />
      </section>
      <section className="holiday">
        <Holiday />
      </section>
      <section className="ourBlogs">
        <OurBlogs />
      </section>
      <section className="promotions">
        <Promotions />
      </section>
    </>
  );
}
