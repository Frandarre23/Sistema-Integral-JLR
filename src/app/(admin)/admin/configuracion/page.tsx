import { Settings, ShieldCheck, Database, KeyRound } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EnvStatusBanner } from '@/components/env-status-banner';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function ConfiguracionPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Configuración del Sistema</h1>
        <p className="text-sm text-muted-foreground">
          Parámetros generales de la gomería, credenciales y seguridad
        </p>
      </div>

      <EnvStatusBanner />

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle className="text-base">Datos del Negocio</CardTitle>
            </div>
            <CardDescription>
              Configuración de localización e identidad comercial
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase">Nombre Comercial</span>
                <p className="font-medium">{BUSINESS_CONFIG.name}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase">Moneda Operativa</span>
                <p className="font-medium">{BUSINESS_CONFIG.currency} (Pesos Argentinos)</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase">Zona Horaria Oficial</span>
                <p className="font-medium">{BUSINESS_CONFIG.timeZone}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase">Localización</span>
                <p className="font-medium">{BUSINESS_CONFIG.address}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-base">Seguridad y Acceso</CardTitle>
            </div>
            <CardDescription>
              Control de roles y protección de datos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              El sistema implementa arquitectura de autorización multi-rol con validación estricta en el servidor:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li><strong>Rol Dueño:</strong> Acceso irrestricto a facturación, costos, edición de usuarios y reportes contables.</li>
              <li><strong>Rol Empleado (preparado):</strong> Acceso restringido a órdenes de trabajo de playa, consulta de precios de venta y registro de entregas.</li>
              <li><strong>Protección RLS:</strong> Ningún usuario anónimo puede leer ni escribir datos operativos.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

