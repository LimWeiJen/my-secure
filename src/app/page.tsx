"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppContext } from '@/contexts/AppContext';
import { ArrowRight, User, UserPlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { mockUserAli } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAppContext();

  const handleProveClick = () => {
    if (isLoggedIn) {
      router.push('/prove');
    } else {
      router.push('/register');
    }
  };

  const verifierCard = (
    <Card className="w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl">I Want to Verify Someone</CardTitle>
        <CardDescription>Generate a secure code to challenge someone's identity.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          className="w-full"
          size="lg"
          onClick={() => router.push('/verify')}
        >
          Start Verification <ArrowRight className="ml-2" />
        </Button>
      </CardContent>
    </Card>
  );

  const proverCard = (
    <Card className="w-full max-w-md transform hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle className="text-xl">I Need to Prove My Identity</CardTitle>
        <CardDescription>
          {isLoggedIn
            ? "Enter a code from the person you're talking to."
            : 'First, create your secure digital ID.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" size="lg" onClick={handleProveClick}>
          {isLoggedIn ? (
            <>
              Enter Code <ArrowRight className="ml-2" />
            </>
          ) : (
            <>
              Create Digital ID <UserPlus className="ml-2" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
  
  const LoggedInView = () => (
    <div className="flex flex-col items-center w-full max-w-md mb-10">
        <Card className="w-full text-left">
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mockUserAli.imageUrl} alt={mockUserAli.legalName} />
                  <AvatarFallback>{mockUserAli.legalName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-2xl">{mockUserAli.legalName}</CardTitle>
                    <CardDescription>Digital ID is active</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="outline">{mockUserAli.relationship}</Badge>
                    <Badge variant="outline">{mockUserAli.occupation}</Badge>
                    <Badge variant="outline">{mockUserAli.currentLocation}</Badge>
                </div>
                 <Button variant="link" onClick={() => logout()} className="p-0 h-auto mt-4 text-muted-foreground text-sm">Not you? Log out.</Button>
            </CardContent>
        </Card>
    </div>
  );

  const LoggedOutView = () => (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
          Stop Scams. Verify Identity.
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
          TrustBridge helps you confirm you're talking to who you think you are, without sharing private data.
        </p>
      </div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center flex flex-col items-center justify-center">
      
      {isLoggedIn ? <LoggedInView /> : <LoggedOutView />}

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-4xl">
        {verifierCard}
        {proverCard}
      </div>
    </div>
  );
}
