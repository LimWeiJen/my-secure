"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Keypad } from '@/components/Keypad';

export default function ProvePage() {
  const router = useRouter();
  const { toast } = useToast();
  const { challengeCode, currentUser } = useAppContext();
  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    if (currentUser !== 'Ali') {
      toast({ title: "Access Denied", description: "You must be in the Prover (Ali's) view.", variant: "destructive" });
      router.push('/');
    }
  }, [currentUser, router, toast]);

  const handleSubmit = () => {
    if (!challengeCode) {
      toast({ title: "No Challenge Active", description: "The verifier has not generated a code yet.", variant: "destructive" });
      return;
    }

    if (inputCode === challengeCode) {
      toast({ title: "Code Accepted", description: "Proceeding to identity verification." });
      router.push('/prove/liveness');
    } else {
      toast({ title: "Invalid Code", description: "The code you entered is incorrect. Please try again.", variant: "destructive" });
      setInputCode('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Prove Your Identity</h1>
      <p className="text-muted-foreground mt-2 max-w-md">
        Enter the 6-digit code given to you by the person who is verifying your identity.
      </p>

      <div className="my-8 h-16 w-full max-w-xs flex items-center justify-center bg-card border rounded-lg shadow-inner">
        <p className="text-4xl font-mono tracking-[0.5em] text-center w-full px-2">
          {inputCode.padEnd(6, '·')}
        </p>
      </div>

      <Keypad value={inputCode} onChange={setInputCode} />

      <Button onClick={handleSubmit} size="lg" className="mt-8 w-full max-w-xs" disabled={inputCode.length !== 6}>
        Submit Code
      </Button>
    </div>
  );
}
