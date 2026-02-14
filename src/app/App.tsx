import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductsSection } from './components/ProductsSection';
import { SolutionsSection } from './components/SolutionsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductsSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
