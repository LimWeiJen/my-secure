"use client";

import { useAppContext, UserRole } from '@/contexts/AppContext';
import { Button } from './ui/button';
import { Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const { currentUser, setCurrentUser, resetChallenge } = useAppContext();

  const toggleUser = () => {
    const newUser: UserRole = currentUser === 'Grandma' ? 'Ali' : 'Grandma';
    setCurrentUser(newUser);
    // Reset challenge state when switching users to avoid confusion
    resetChallenge();
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" onClick={resetChallenge} className="flex items-center gap-2 text-xl font-bold text-foreground">
          <ShieldCheck className="text-accent" />
          <span>TrustBridge</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Viewing as: <strong>{currentUser}</strong>
          </span>
          <Button onClick={toggleUser} variant="outline" size="sm">
            <Users className="mr-2 h-4 w-4" />
            Switch to {currentUser === 'Grandma' ? 'Ali' : 'Grandma'}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
