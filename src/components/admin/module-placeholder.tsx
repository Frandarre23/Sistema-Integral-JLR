import Link from 'next/link';
import { LucideIcon, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ModulePlaceholderProps {
  title: string;
  description: string;
  targetPhase: string;
  icon: LucideIcon;
  features: string[];
}

export function ModulePlaceholder({
  title,
  description,
  targetPhase,
  icon: Icon,
  features,
}: ModulePlaceholderProps) {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <Link href="/admin">
          <Button variant="ghost" size="sm" className="gap-1.5">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Dashboard</span>
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <Badge variant="outline">{targetPhase}</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Módulo Planificado</CardTitle>
          <CardDescription>
            Este módulo forma parte de la arquitectura y se implementará en la fase correspondiente tras tu aprobación.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm font-semibold">Funcionalidades contempladas para este módulo:</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

