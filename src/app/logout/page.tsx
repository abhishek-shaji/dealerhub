"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Car } from "lucide-react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Mock logout - in production, this would call an authentication API
    const timeout = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Car className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Signing Out...</h1>
        <p className="text-muted-foreground">Thank you for using Car Dealer Management</p>
      </div>
    </div>
  );
}