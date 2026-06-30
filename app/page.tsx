"use client";
import React from 'react';
import { Utensils, Calendar, MapPin } from 'lucide-react';

export default function ParcRedesign() {
  return (
    <main className="scroll-container">
      {/* SECTION 1: HERO - THE ENTRANCE */}
      <section className="sticky-section" style={{ zIndex: 1 }}>
        <img 
          src="https://images.unsplash.com/photo-1550966841-3ee32309ff44?auto=format&fit=crop&q=80&w=2000" 
          className="background-image" 
          alt="Parc Entrance"
        />
        <div className="content-box">
          <p style={{ letterSpacing: '4px', marginBottom: '1rem' }}>RITTENHOUSE SQUARE</p>
          <h1 style={{ fontSize: '5rem', margin: 0 }}>PARC</h1>
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>A taste of Paris in the heart of Philadelphia.</p>
          <div style={{ marginTop: '2rem' }}>
            <a href="#reserve" className="btn">Reserve a Table</a>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE ATMOSPHERE */}
      <section className="sticky-section" style={{ zIndex: 2 }}>
        <img 
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=2000" 
          className="background-image" 
          alt="Interior"
        />
        <div className="content-box">
          <h2 style={{ fontSize: '3.5rem' }}>The Ambiance</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            From the bustling red banquettes to the hand-delivered baguettes, 
            immerse yourself in a traditional French bistro experience.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE MENU */}
      <section className="sticky-section" style={{ zIndex: 3 }}>
        <img 
          src="https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=2000" 
          className="background-image" 
          alt="Food"
        />
        <div className="content-box">
          <h2 style={{ fontSize: '3.5rem' }}>The Cuisine</h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
            <div>
              <h3>Breakfast</h3>
              <p>Fresh Croissants & Café</p>
            </div>
            <div>
              <h3>Lunch</h3>
              <p>Quiche Lorraine & Salade</p>
            </div>
            <div>
              <h3>Dinner</h3>
              <p>Steak Frites & Escargot</p>
            </div>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="#" className="btn">View Full Menu</a>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOOTER / INFO */}
      <section className="sticky-section" style={{ zIndex: 4, background: '#0a0a0a' }}>
        <div className="content-box">
          <h2 style={{ fontSize: '3rem' }}>Visit Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '3rem' }}>
            <div>
              <MapPin style={{ marginBottom: '10px' }} />
              <p>227 S 18th St<br/>Philadelphia, PA</p>
            </div>
            <div>
              <Calendar style={{ marginBottom: '10px' }} />
              <p>Mon - Sun<br/>8:00 AM - 10:00 PM</p>
            </div>
            <div>
              <Utensils style={{ marginBottom: '10px' }} />
              <p>Private Dining<br/>Available</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
