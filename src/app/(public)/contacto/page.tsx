'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, PhoneCall, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BUSINESS_CONFIG } from '@/lib/constants';

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [consulta, setConsulta] = useState('');
  const [enviado, setEnviado] = useState(false);

  const mensajeWhatsApp = `Hola ${BUSINESS_CONFIG.name}, mi nombre es ${nombre || 'un cliente'}. Quería consultar por mi vehículo (${vehiculo || 'auto/camioneta'}): ${consulta || 'presupuesto de neumáticos y alineación'}.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // En Fase 1 no hay persistencia de consultas web aún
    setEnviado(true);
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    mensajeWhatsApp
  )}`;

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 space-y-10">
      <div className="max-w-3xl space-y-3">
        <Badge variant="outline" className="text-xs">
          Contacto Directo
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Atención al Cliente y Turnos</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Comunicate con nuestro equipo de playa para presupuestos, turnos de alineación o consultas de stock de neumáticos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Información de contacto */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Información del Taller</CardTitle>
              <CardDescription>
                Ubicación física y horarios de atención al público
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Dirección y Playa</div>
                  <div className="text-muted-foreground">{BUSINESS_CONFIG.address}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Fácil acceso y espacio para maniobras.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Horarios de Atención</div>
                  <div className="text-muted-foreground">Lunes a Viernes: 08:00 a 19:00 hs</div>
                  <div className="text-muted-foreground">Sábados: 08:00 a 13:00 hs</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Domingos y feriados: Cerrado.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-foreground">Canal de WhatsApp Oficial</div>
                  <div className="text-muted-foreground">Atención en el acto durante horario comercial</div>
                  <div className="pt-2">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-2">
                        <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Abrir chat de WhatsApp</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-muted/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span>¿Cómo funciona el envío por WhatsApp?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Al hacer clic en el botón de WhatsApp, se abrirá la aplicación oficial de WhatsApp con tu mensaje precompletado para que lo revises antes de enviarlo.
              </p>
              <p>
                No enviamos mensajes automáticos ni compartimos tu número de teléfono con terceros.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formulario de consulta */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Envianos tu Consulta</CardTitle>
            <CardDescription>
              Completá los datos para armar un mensaje personalizado o solicitar presupuesto
            </CardDescription>
          </CardHeader>
          <CardContent>
            {enviado ? (
              <div className="space-y-4 py-4 text-center">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-base">¡Mensaje preparado!</h3>
                  <p className="text-xs text-muted-foreground">
                    Para obtener una respuesta más veloz, podés enviar este mensaje directamente a nuestro WhatsApp oficial:
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-md text-xs text-left font-mono">
                  {mensajeWhatsApp}
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gap-2">
                      <PhoneCall className="h-4 w-4" />
                      <span>Enviar a WhatsApp Oficial</span>
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setEnviado(false);
                      setConsulta('');
                    }}
                  >
                    Hacer otra consulta
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs font-semibold uppercase text-muted-foreground">
                    Tu Nombre o Razón Social
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: Carlos Gómez"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-xs font-semibold uppercase text-muted-foreground">
                    Teléfono / WhatsApp de contacto
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    required
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej: 11 5555 4444"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="vehiculo" className="text-xs font-semibold uppercase text-muted-foreground">
                    Vehículo / Modelo / Medida de cubierta
                  </label>
                  <input
                    id="vehiculo"
                    type="text"
                    value={vehiculo}
                    onChange={(e) => setVehiculo(e.target.value)}
                    placeholder="Ej: Hilux 2021 / 265/65 R17 o Gol Trend"
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="consulta" className="text-xs font-semibold uppercase text-muted-foreground">
                    Detalle de la consulta o servicio deseado
                  </label>
                  <textarea
                    id="consulta"
                    rows={3}
                    required
                    value={consulta}
                    onChange={(e) => setConsulta(e.target.value)}
                    placeholder="Quisiera saber precio de 2 cubiertas y costo de alineación y balanceo..."
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    <span>Preparar Mensaje</span>
                  </Button>
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button type="button" variant="outline" className="w-full gap-2">
                      <PhoneCall className="h-4 w-4 text-emerald-600" />
                      <span>WhatsApp Directo</span>
                    </Button>
                  </Link>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

