'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Disc, PhoneCall, Filter, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function CatalogoPublicoPage() {
  const [busqueda, setBusqueda] = useState('');

  const whatsappInquiryUrl = (medida: string) =>
    `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
      `Hola JLR, quería consultar precio y stock disponible de neumáticos medida: ${medida || 'general'}.`
    )}`;

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 space-y-8">
      <div className="max-w-3xl space-y-3">
        <Badge variant="outline" className="text-xs">
          Catálogo Oficial
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Neumáticos y Cubiertas</h1>
        <p className="text-muted-foreground text-sm">
          Consultá disponibilidad por medida, rodado o marca. Disponemos de stock permanente para autos, SUVs y camionetas.
        </p>
      </div>

      {/* Buscador de medidas */}
      <div className="bg-card border rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por medida (ej: 205/55 R16, 175/65 R14) o marca (Pirelli, Michelin, Fate)..."
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <Link
            href={whatsappInquiryUrl(busqueda)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full sm:w-auto gap-2">
              <PhoneCall className="h-4 w-4" />
              <span>Consultar Stock</span>
            </Button>
          </Link>
        </div>

        {/* Medidas populares */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Medidas frecuentes:</span>
          {['175/70 R13', '175/65 R14', '185/60 R15', '205/55 R16', '225/45 R17', '265/65 R17'].map((m) => (
            <button
              key={m}
              onClick={() => setBusqueda(m)}
              className="rounded-md border bg-muted/50 px-2 py-1 text-xs hover:bg-muted text-foreground transition-colors"
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Estado del catálogo en Fase 1 */}
      <Alert variant="info">
        <Info className="h-5 w-5" />
        <AlertDescription className="text-sm">
          <strong>Catálogo en preparación (Fase 1):</strong> Los productos y neumáticos mostrados aquí se sincronizarán directamente con el inventario en tiempo real cargado en el panel administrativo una vez implementada la <strong>Fase 3</strong>. Mientras tanto, podés consultar stock inmediato directamente por WhatsApp con nuestro equipo de playa.
        </AlertDescription>
      </Alert>

      {/* Medidas y Servicios Destacados */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Neumáticos de Paseo</CardTitle>
              <Disc className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Para automóviles y sedanes urbanos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-xs text-muted-foreground">
              Rodados R13, R14, R15 y R16. Enfoque en confort de marcha, baja resistencia al rodamiento y seguridad en piso mojado.
            </p>
            <Link
              href={whatsappInquiryUrl('Paseo')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button variant="outline" size="sm" className="w-full gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                <span>Consultar por Paseo</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">SUVs & Camionetas</CardTitle>
              <Disc className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Para pickups 4x2, 4x4 y utilitarios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-xs text-muted-foreground">
              Rodados R16, R17, R18 y R20. Diseños All-Terrain (A/T) y Highway-Terrain (H/T) con laterales reforzados para carga y ruta.
            </p>
            <Link
              href={whatsappInquiryUrl('Camioneta / SUV')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button variant="outline" size="sm" className="w-full gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                <span>Consultar por 4x4 / Pickups</span>
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Flotas & Aseguradoras</CardTitle>
              <Disc className="h-5 w-5 text-primary" />
            </div>
            <CardDescription>Reposición oficial y ClaimServices</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p className="text-xs text-muted-foreground">
              Atención prioritaria a asegurados con número de siniestro confirmado. Opción de entrega inmediata en local o despacho con chofer.
            </p>
            <Link
              href={whatsappInquiryUrl('Seguros / ClaimServices')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button variant="outline" size="sm" className="w-full gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-purple-600" />
                <span>Consultar por Seguros</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

