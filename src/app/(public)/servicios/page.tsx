import Link from 'next/link';
import { Wrench, Disc, RefreshCw, Activity, ShieldCheck, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS_CONFIG } from '@/lib/constants';

const servicios = [
  {
    title: 'Alineación 3D Computarizada',
    icon: Activity,
    description: 'Alineación láser de ambos trenes. Evita el desgaste irregular de los neumáticos y asegura la estabilidad direccional a alta velocidad.',
    tiempo: 'Aprox. 30 a 45 min',
    recomendado: 'Cada 10.000 km o cambio de cubiertas',
  },
  {
    title: 'Balanceo Dinámico y Estático',
    icon: Disc,
    description: 'Elimina vibraciones en volante y carrocería utilizando contrapesos calibrados con computadoras de última generación.',
    tiempo: 'Aprox. 15 a 20 min',
    recomendado: 'Ante cualquier vibración a más de 80 km/h',
  },
  {
    title: 'Reparación de Pinchaduras y Parches',
    icon: Wrench,
    description: 'Reparación en caliente o en frío con materiales de máxima resistencia (tarugos, parches radiales interiores y vulcanización).',
    tiempo: 'En el acto (15 min)',
    recomendado: 'Inmediatamente ante pérdida de presión',
  },
  {
    title: 'Rotación y Calibración de Neumáticos',
    icon: RefreshCw,
    description: 'Rotación cruzada o lineal según tracción (delantera, trasera o integral) para maximizar la vida útil del juego de neumáticos.',
    tiempo: 'Aprox. 15 min',
    recomendado: 'Cada 8.000 a 10.000 km',
  },
  {
    title: 'Control de Tren Delantero y Suspensión',
    icon: ShieldCheck,
    description: 'Inspección visual de bujes, extremos de dirección, rótulas y amortiguadores previa a cualquier trabajo de alineación.',
    tiempo: 'Sin cargo con la alineación',
    recomendado: 'Preventivo',
  },
  {
    title: 'Armado, Desarmado y Cambio de Válvulas',
    icon: Disc,
    description: 'Desmontaje con desarmadora automática que no raya las llantas de aleación. Colocación de válvulas nuevas de goma o metal.',
    tiempo: 'En el acto',
    recomendado: 'Con cada reposición de cubierta',
  },
];

export default function ServiciosPublicosPage() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hola JLR, quería solicitar un turno para servicios de playa (alineación / balanceo / revisión).'
  )}`;

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 space-y-10">
      <div className="max-w-3xl space-y-3">
        <Badge variant="outline" className="text-xs">
          Playa & Taller
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Servicios de Playa y Mecánica Ligera</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Atención por orden de llegada y turnos coordinados. Equipamiento moderno para que tu vehículo vuelva a rodar seguro en el menor tiempo posible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((s, idx) => {
          const Icon = s.icon;
          return (
            <Card key={idx} className="flex flex-col justify-between">
              <CardHeader>
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{s.title}</CardTitle>
                <CardDescription className="text-xs">{s.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-0 text-xs">
                <div className="bg-muted/50 p-2.5 rounded-md space-y-1">
                  <div>
                    <span className="font-semibold text-foreground">Tiempo estimado: </span>
                    <span className="text-muted-foreground">{s.tiempo}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Frecuencia: </span>
                    <span className="text-muted-foreground">{s.recomendado}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold">¿Necesitás realizar un trabajo ahora?</h3>
          <p className="text-sm text-muted-foreground">
            Acercate directamente a nuestro local o consultá demora en el día por WhatsApp.
          </p>
        </div>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 shrink-0">
            <PhoneCall className="h-4 w-4" />
            <span>Consultar Turnos y Demoras</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

