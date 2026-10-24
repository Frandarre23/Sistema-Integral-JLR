'use client';

import { Menu, LogOut, ShieldCheck, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logoutAction } from '@/app/(auth)/actions';

interface AdminTopNavProps {
  onToggleSidebar: () => void;
  userEmail?: string | null;
}

export function AdminTopNav({ onToggleSidebar, userEmail }: AdminTopNavProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md text-muted-foreground hover:bg-muted md:hidden"
          aria-label="Alternar navegación"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold hidden sm:inline-block">
            Panel de Control
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <ShieldCheck className="h-3 w-3" />
            Acceso Dueño
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {userEmail ? (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5" />
            <span className="hidden sm:inline-block">{userEmail}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground hidden sm:inline-block">
            Modo Local / Fase 1
          </span>
        )}

        <form action={logoutAction}>
          <Button
            type="submit"
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-destructive gap-1.5"
            title="Cerrar sesión"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Cerrar Sesión</span>
          </Button>
        </form>
      </div>
    </header>
  );
}

