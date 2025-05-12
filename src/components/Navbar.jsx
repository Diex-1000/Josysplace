"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 h-20 relative">
        {/* Logo a la izquierda */}
        <Link href="/home" className="flex items-center gap-2 hover:no-underline">
          <img src="/house-512.png" alt="Home" className="h-8" />
          <span className="text-2xl font-semibold text-white hover:text-blue-500">
            Josysplace
          </span>
        </Link>

        {/* Menú del centro (visible en escritorio) */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2">
          <NavButton href="/home" label="Home" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white text-lg hover:text-blue-500">
                Apartments
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 text-white border-gray-700 w-56 z-50">
              <DropdownMenuItem asChild>
                <Link href="/dept3" className="hover:bg-gray-800 hover:text-blue-500 w-full text-lg">
                  Three-Bedroom
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dept2" className="hover:bg-gray-800 hover:text-blue-500 w-full text-lg">
                  Two-Bedroom
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dept1" className="hover:bg-gray-800 hover:text-blue-500 w-full text-lg">
                  One-Bedroom
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavButton href="/info" label="Hotel Info" />
        </div>

        {/* Idioma (a la derecha) */}
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white text-lg hover:text-blue-500 flex items-center gap-2">
                <img src="/LogoUS.webp" alt="English" className="w-5 h-5 rounded-full" />
                English (US)
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-900 text-white border-gray-700 w-48 z-50">
              <DropdownMenuItem className="hover:bg-gray-800 hover:text-blue-500 text-lg flex items-center gap-2">
                <img src="/LogoUS.webp" alt="English" className="w-5 h-5 rounded-full" />
                English (US)
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-800 hover:text-blue-500 text-lg flex items-center gap-2">
                <img src="/LogoMexico.webp" alt="Español" className="w-5 h-5 rounded-full" />
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Botón hamburguesa (visible solo en móvil) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </Button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMobileOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4 space-y-2">
          {[
            { href: "/home", label: "Home" },
            { href: "/dept3", label: "Three-Bedroom" },
            { href: "/dept2", label: "Two-Bedroom" },
            { href: "/dept1", label: "One-Bedroom" },
            { href: "/info", label: "Hotel Info" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileOpen(false)}
              className="block px-3 py-2 text-white text-lg font-medium rounded-md hover:text-blue-500 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavButton({ href, label }) {
  return (
    <Button asChild variant="ghost" className="text-white text-lg hover:text-blue-500">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
