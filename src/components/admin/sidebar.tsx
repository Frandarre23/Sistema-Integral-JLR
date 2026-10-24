'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Wrench,
  Truck,
  Users,
  Receipt,
  BarChart3,
  Settings,
  X,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { BUSINESS_CONFIG } from '@/lib/constants';

const navItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Productos y Stock',
    href: '/admin/productos',
    icon: Package,
  },
  {
    title: 'Trabajos de Playa',
    href: '/admin/trabajos',
    icon: Wrench,
  },
  {
    title: 'Pedidos y Entregas',
    href: '/admin/pedidos',
    icon: Truck,
  },
  {
    title: 'Clientes y Seguros',
    href: '/admin/clientes',
    icon: Users,
  },
  {
    title: 'Ventas y Cobros',
    href: '/admin/ventas',
    icon: Receipt,
  },
  {
    title: 'Informes',
    href: '/admin/informes',
    icon: BarChart3,
  },
  {
    title: 'Configuración',
    href: '/admin/configuracion',
    icon: Settings,
  },
];

interface AdminSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar container */}
      <aside
        className={cn(
          'fixed top-0 bottom-0 left-0 z-50 flex w-64 flex-col border-r bg-card transition-transform duration-200 ease-in-out md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        {/* Brand header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          <Link href="/admin" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow">
              JLR
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight leading-tight">
                JLR Gestión
              </span>
              <span className="text-[11px] text-muted-foreground font-normal">
                Panel Integral
              </span>
            </div>
          </Link>

          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:bg-muted md:hidden"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Gestión Operativa
          </div>
          {navItems.map((item) => {
            const isActive =
              item.href === '/admin'
                ? pathname === '/admin'
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <Icon className={cn('h-4 w-4', isActive ? 'text-primary-foreground' : 'text-muted-foreground')} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer info & link to public site */}
        <div className="border-t p-3 space-y-2">
          <Link
            href="/"
            className="flex items-center justify-between rounded-md p-2 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            target="_blank"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="h-3.5 w-3.5" />
              Ver Sitio Web Público
            </span>
          </Link>
          <div className="rounded-md bg-muted/50 p-2.5 text-[11px] text-muted-foreground">
            <div className="font-semibold text-foreground">{BUSINESS_CONFIG.name}</div>
            <div>{BUSINESS_CONFIG.locale} • {BUSINESS_CONFIG.currency}</div>
          </div>
        </div>
      </aside>
    </>
  );
}

