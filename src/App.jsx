import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { AboutUs } from './components/AboutUs/AboutUs';
import './App.css';
import { OurDestination } from './components/OurDestination/OurDestination';
import { Holiday } from './components/Holiday/Holiday';
import { OurBlogs } from './components/OurBlogs/OurBlogs';
import { Promotions } from './components/Promotions/Promotions';
import { ClientTestimonial } from './components/ClientTestimonial/ClientTestimonial';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <>
      <main className="w-full h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center overflow-x-hidden">
        <Header />
        <Main />
      </main>
      <section className="AboutUs" id="aboutUs">
        <AboutUs />
      </section>
      <section className="OurDestinations" id="destinations">
        <OurDestination />
      </section>
      <section className="holiday">
        <Holiday />
      </section>
      <section className="ourBlogs" id="blogs">
        <OurBlogs />
      </section>
      <section className="promotions" id="packages">
        <Promotions />
      </section>
      <section className="ClientTestimonial">
        <ClientTestimonial />
      </section>
      <section className="footer" id="contact">
        <Footer />
      </section>
    </>
  );
}
