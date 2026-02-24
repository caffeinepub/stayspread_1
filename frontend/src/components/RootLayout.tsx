import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Header from './Header';
import Footer from './Footer';
import ProfileSetup from './ProfileSetup';

interface RootLayoutProps {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <ProfileSetup />
    </div>
  );
}
