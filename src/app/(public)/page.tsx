import Link from 'next/link';
import {
  Wrench,
  ShieldCheck,
  Truck,
  PhoneCall,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Disc,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hola JLR, quería consultar precios y disponibilidad de neumáticos / turnos de taller.'
  )}`;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 sm:py-24 border-b">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            <Badge variant="outline" className="px-3 py-1 text-xs gap-1.5 font-medium border-primary/30 text-primary">
              <Disc className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              Gomería y Mecánica Rápida en Buenos Aires
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Servicio experto en neumáticos, alineación y playa
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Atención integral para conductores particulares, flotas comerciales y siniestros de aseguradoras (ClaimServices). Calidad, rapidez y stock garantizado.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 shadow-md">
                  <PhoneCall className="h-4 w-4" />
                  <span>Consultar por WhatsApp</span>
                </Button>
              </Link>

              <Link href="/catalogo">
                <Button variant="outline" size="lg" className="gap-2">
                  <span>Ver Catálogo de Neumáticos</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Alineación 3D Computarizada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Colocación y Balanceo en el Acto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Facturación Oficial y Aseguradoras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16 bg-muted/20 border-b">
        <div className="container mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Nuestros Servicios de Taller y Playa
            </h2>
            <p className="text-sm text-muted-foreground">
              Equipamiento de última generación para el cuidado de tu vehículo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Wrench className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Alineación 3D y Balanceo</CardTitle>
                <CardDescription>
                  Medición láser milimétrica para un andar suave, seguro y el desgaste parejo de los neumáticos.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                Recomendado cada 10.000 km o tras golpes de baches.
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Disc className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Venta y Colocación de Neumáticos</CardTitle>
                <CardDescription>
                  Amplio stock de cubiertas para autos, camionetas, SUVs y utilitarios de primeras marcas.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                Colocación y válvulas nuevas incluidas en el servicio.
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Truck className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Atención a Compañías de Seguros</CardTitle>
                <CardDescription>
                  Gestión ágil de reposición por siniestros, robos o roturas a través de ClaimServices.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground">
                Retiro por mostrador o envío coordinado mediante chofer.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ubicación y Horarios */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-card border rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">
                Visitanos en nuestro local
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contamos con playa amplia de maniobra para atención rápida y boxes de trabajo equipados.
              </p>
              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <span>{BUSINESS_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0" />
                  <span>Lunes a Viernes de 08:00 a 19:00 | Sábados de 08:00 a 13:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                  <span>Todos los medios de pago: Efectivo, Débito, Transferencia y Tarjetas</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/40 rounded-xl p-6 border space-y-4 text-center sm:text-left">
              <h4 className="font-semibold text-base">¿Sos cliente de aseguradora o empresa?</h4>
              <p className="text-xs text-muted-foreground">
                Si tenés una orden de reposición de seguro o necesitás factura A oficial para tu flota, contactanos directamente para coordinar stock y entrega prioritaria.
              </p>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <Button variant="default" className="gap-2">
                  <PhoneCall className="h-4 w-4" />
                  <span>Contactar Asesor Comercial</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

