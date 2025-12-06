"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Camera, Loader2, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LivenessPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { signChallenge, currentUser, challengeCode } = useAppContext();
  const [status, setStatus] = useState<'idle' | 'scanning' | 'matched'>('idle');

  useEffect(() => {
    if (currentUser !== 'Ali' || !challengeCode) {
      toast({ title: "Invalid Access", description: "Please start the proof flow correctly.", variant: "destructive" });
      router.push('/');
    }
  }, [currentUser, challengeCode, router, toast]);

  const handleScan = () => {
    setStatus('scanning');
    setTimeout(() => {
      setStatus('matched');
      setTimeout(() => {
        signChallenge();
        router.push('/prove/success');
      }, 1000);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Liveness Check</h1>
      <p className="text-muted-foreground mt-2 max-w-md">
        To cryptographically sign the challenge, we need to verify you're a real person.
      </p>
      
      <div className="my-8 w-full max-w-md aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden border">
        {status === 'idle' && <Camera className="h-24 w-24 text-muted-foreground/50" />}
        {status === 'scanning' && (
          <div className="flex flex-col items-center gap-4 text-accent">
            <Loader2 className="h-16 w-16 animate-spin" />
            <p className="font-semibold text-lg">Scanning...</p>
          </div>
        )}
         {status === 'matched' && (
          <div className="flex flex-col items-center gap-4 text-emerald-500">
            <CheckCircle className="h-16 w-16" />
            <p className="font-semibold text-lg">Face Matched</p>
          </div>
        )}
      </div>

      <Button onClick={handleScan} size="lg" className="w-full max-w-md" disabled={status !== 'idle'}>
        {status === 'idle' ? 'Scan Face to Sign' : '...'}
      </Button>
    </div>
  );
}
