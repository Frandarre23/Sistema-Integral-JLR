'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Wrench, Menu, X, Shield, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function PublicNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow">
            <Wrench className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base leading-tight tracking-tight text-foreground">
              {BUSINESS_CONFIG.name}
            </span>
            <span className="text-xs text-muted-foreground font-normal">
              Gomería & Mecánica Rápida
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Neumáticos y Productos
          </Link>
          <Link
            href="/servicios"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Servicios de Playa
          </Link>
          <Link
            href="/contacto"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contacto & Turnos
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              'Hola JLR, quería consultar por disponibilidad de neumáticos y turnos de alineación/balanceo.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm" className="gap-2">
              <PhoneCall className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp</span>
            </Button>
          </Link>
          <Link href="/admin">
            <Button size="sm" className="gap-1.5">
              <Shield className="h-4 w-4" />
              <span>Panel Admin</span>
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-muted text-foreground"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Inicio
          </Link>
          <Link
            href="/catalogo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Neumáticos y Productos
          </Link>
          <Link
            href="/servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Servicios de Playa
          </Link>
          <Link
            href="/contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-primary"
          >
            Contacto & Turnos
          </Link>
          <div className="pt-3 border-t flex flex-col gap-2">
            <Link
              href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                'Hola JLR, quería consultar por neumáticos y turnos.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="outline" className="w-full gap-2">
                <PhoneCall className="h-4 w-4 text-emerald-600" />
                <span>Consultar por WhatsApp</span>
              </Button>
            </Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full gap-2">
                <Shield className="h-4 w-4" />
                <span>Acceder al Panel Admin</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

