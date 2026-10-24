import Link from 'next/link';
import {
  Wrench,
  DollarSign,
  Package,
  Truck,
  AlertTriangle,
  PlusCircle,
  Clock,
  ArrowRight,
  Database,
  CheckCircle2,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnvStatusBanner } from '@/components/env-status-banner';
import { formatCurrencyARS } from '@/lib/utils';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function AdminDashboardPage() {
  // En Fase 1 (Fundación), las métricas parten de 0 real para no inventar datos falsos
  const metricasReales = {
    trabajosHoy: 0,
    ventasTotalHoy: 0,
    pedidosPendientes: 0,
    entregasEnCurso: 0,
    stockBajoAlertas: 0,
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Panel de Control General
          </h1>
          <p className="text-sm text-muted-foreground">
            {BUSINESS_CONFIG.name} — Resumen de operaciones y estado del sistema
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs py-1 px-2.5">
            Fase 1: Fundación Activa
          </Badge>
        </div>
      </div>

      {/* Banner de estado de Supabase */}
      <EnvStatusBanner />

      {/* Tarjetas de métricas operativas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Trabajos del día */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Trabajos del Día
            </CardTitle>
            <div className="h-8 w-8 rounded-md bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-primary">
              <Wrench className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metricasReales.trabajosHoy}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Órdenes de playa activas hoy
            </p>
          </CardContent>
        </Card>

        {/* Ventas del día */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ventas Totales Hoy
            </CardTitle>
            <div className="h-8 w-8 rounded-md bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600">
              <DollarSign className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrencyARS(metricasReales.ventasTotalHoy)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Cobros registrados en {BUSINESS_CONFIG.currency}
            </p>
          </CardContent>
        </Card>

        {/* Pedidos y Entregas */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pedidos y Seguros
            </CardTitle>
            <div className="h-8 w-8 rounded-md bg-purple-50 dark:bg-purple-950 flex items-center justify-center text-purple-600">
              <Truck className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metricasReales.pedidosPendientes}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {metricasReales.entregasEnCurso} entregas con chofer en curso
            </p>
          </CardContent>
        </Card>

        {/* Alertas de Stock */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Alertas de Stock
            </CardTitle>
            <div className="h-8 w-8 rounded-md bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600">
              <AlertTriangle className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metricasReales.stockBajoAlertas}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Productos bajo punto de reposición
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Accesos rápidos operativos */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Accesos Rápidos Operativos</CardTitle>
          <CardDescription>
            Accesos directos a las tareas frecuentes del taller y mostrador
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/admin/trabajos">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <PlusCircle className="h-4 w-4 text-primary shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-xs">Nueva Orden de Trabajo</div>
                  <div className="text-[11px] text-muted-foreground">Alineación, parches, playa</div>
                </div>
              </Button>
            </Link>

            <Link href="/admin/ventas">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <PlusCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-xs">Nueva Venta de Mostrador</div>
                  <div className="text-[11px] text-muted-foreground">Neumáticos y accesorios</div>
                </div>
              </Button>
            </Link>

            <Link href="/admin/productos">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Package className="h-4 w-4 text-amber-600 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-xs">Catálogo & Stock</div>
                  <div className="text-[11px] text-muted-foreground">Entradas y ajustes de stock</div>
                </div>
              </Button>
            </Link>

            <Link href="/admin/pedidos">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <Truck className="h-4 w-4 text-purple-600 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-xs">Entregas y Seguros</div>
                  <div className="text-[11px] text-muted-foreground">Chofer y ClaimServices</div>
                </div>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Planificación de Fases y Estado de Arquitectura */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-base">Fase 1: Fundación Completada</CardTitle>
            </div>
            <CardDescription>
              Infraestructura técnica y arquitectura inicial lista
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <div>
                <strong>Next.js 15 + React 19 + TypeScript estricto:</strong> Configuración sólida con App Router, alias de importación y cero `any`.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <div>
                <strong>Diseño Responsive y UI Profesional:</strong> Tailwind CSS con paleta industrial para taller mecánico y componentes shadcn/ui.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <div>
                <strong>Autenticación SSR con Supabase:</strong> Clientes separados de servidor, navegador y middleware con `@supabase/ssr`.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <div>
                <strong>Localización Argentina:</strong> Moneda ARS, zona horaria <code className="text-xs bg-muted px-1 py-0.5 rounded">{BUSINESS_CONFIG.timeZone}</code> y formatos locales.
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Próxima Etapa: Fase 2 (Base de Datos)</CardTitle>
            </div>
            <CardDescription>
              Requerirá tu aprobación antes de implementar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-muted-foreground">
              En la <strong>Fase 2</strong> se aplicará el esquema relacional PostgreSQL completo con:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-xs">
              <li>Tablas de usuarios con roles (<code className="bg-muted px-1 rounded">dueno</code> / <code className="bg-muted px-1 rounded">empleado</code>).</li>
              <li>Políticas Row Level Security (RLS) estrictas para proteger cada registro.</li>
              <li>Esquema para productos, categorías, inventario atómico y movimientos auditables.</li>
              <li>Órdenes de trabajo de playa, clientes, aseguradoras y ventas.</li>
              <li>Generación del usuario inicial administrador del dueño.</li>
            </ul>
            <div className="pt-2">
              <Badge variant="outline" className="text-xs">
                Aguardando confirmación de Fase 1 para avanzar
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

