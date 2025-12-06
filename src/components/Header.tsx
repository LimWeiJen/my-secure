"use client";

import { useAppContext } from '@/contexts/AppContext';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { resetChallenge } = useAppContext();

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" onClick={resetChallenge} className="flex items-center gap-2 text-xl font-bold text-foreground">
          <ShieldCheck className="text-accent" />
          <span>TrustBridge</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
