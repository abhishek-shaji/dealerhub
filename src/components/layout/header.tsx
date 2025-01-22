import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, LayoutDashboard, LogOut } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <Car className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold ml-2">Car Dealer Management</span>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            <Button variant="ghost" className="flex items-center">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
          </Link>
          <Link
            href="/cars"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            <Button variant="ghost" className="flex items-center">
              <Car className="h-4 w-4 mr-2" />
              Cars
            </Button>
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/logout">
            <Button variant="ghost" className="flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}