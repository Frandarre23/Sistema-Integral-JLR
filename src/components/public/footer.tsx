import Link from 'next/link';
import { Wrench, MapPin, Clock, Phone, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '@/lib/constants';

export function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Wrench className="h-4 w-4" />
              </div>
              <span className="font-bold text-base">{BUSINESS_CONFIG.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Venta de neumáticos, reparación, alineación 3D, balanceo computarizado y trabajos de playa para vehículos particulares, flotas y aseguradoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Alineación 3D y Balanceo</li>
              <li>Parches y Vulcanización</li>
              <li>Colocación de Neumáticos</li>
              <li>Revisión de Tren Delantero</li>
              <li>Atención a Aseguradoras</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Atención al Cliente</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{BUSINESS_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Lunes a Sábados: 08:00 a 19:00</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>WhatsApp de consultas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Administración</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Acceso exclusivo para el dueño y personal habilitado.
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
            >
              <ShieldCheck className="h-4 w-4" />
              Ingresar al Panel de Gestión
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p>© {currentYear} {BUSINESS_CONFIG.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Zona Horaria: {BUSINESS_CONFIG.timeZone}</span>
            <span>•</span>
            <span>Moneda: {BUSINESS_CONFIG.currency}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

