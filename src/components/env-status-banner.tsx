'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle2, Database, KeyRound, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { isSupabaseConfigured } from '@/lib/supabase/client';

export function EnvStatusBanner() {
  const [configured, setConfigured] = useState<boolean | null>(null);

  useEffect(() => {
    setConfigured(isSupabaseConfigured());
  }, []);

  if (configured === null) {
    return null;
  }

  if (configured) {
    return (
      <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-md px-3 py-1.5 w-fit">
        <CheckCircle2 className="h-4 w-4" />
        <span className="font-medium">Supabase vinculado correctamente</span>
      </div>
    );
  }

  return (
    <Alert variant="warning" className="my-4">
      <AlertCircle className="h-5 w-5" />
      <AlertTitle className="text-base font-semibold flex items-center gap-2">
        <span>Conexión con Supabase pendiente</span>
        <Badge variant="warning">Paso manual requerido</Badge>
      </AlertTitle>
      <AlertDescription className="mt-2 space-y-2 text-sm">
        <p>
          La estructura de <strong>Fase 1 (Fundación)</strong> está lista y funcionando localmente. Para habilitar la autenticación real y la base de datos de la <strong>Fase 2</strong>, configurá tus credenciales en el archivo <code className="bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded font-mono text-xs">.env.local</code>:
        </p>
        <div className="bg-amber-100/60 dark:bg-amber-900/40 p-3 rounded-md font-mono text-xs space-y-1">
          <div className="flex items-center gap-2">
            <Database className="h-3.5 w-3.5 text-amber-700" />
            <span>NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co</span>
          </div>
          <div className="flex items-center gap-2">
            <KeyRound className="h-3.5 w-3.5 text-amber-700" />
            <span>NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs pt-1">
          <span>¿Dónde obtenerlas? En el panel de Supabase: <strong>Project Settings → API</strong>.</span>
          <a
            href="https://supabase.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline hover:text-amber-900"
          >
            Ir a Supabase Dashboard <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </AlertDescription>
    </Alert>
  );
}

