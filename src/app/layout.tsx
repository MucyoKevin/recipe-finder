import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoritesProvider } from '../context/FavoritesContext';
import SidePanel from './components/layout/SidePanel';
import React, { useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Finder",
  description: "Find recipes for your favorite ingredients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [filters, setFilters] = React.useState({ diet: '', cuisine: '', meal: '' });
  const handleFilter = () => {
    // This can be expanded to trigger a global search or context update
    // For now, just logs the filters
    console.log('Apply filters:', filters);
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FavoritesProvider>
          <SidePanel filters={filters} setFilters={setFilters} onFilter={handleFilter} />
          <div className="ml-12 md:ml-64 transition-all duration-300">
            {children}
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
