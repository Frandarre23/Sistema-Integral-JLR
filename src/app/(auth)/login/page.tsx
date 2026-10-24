'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { Wrench, Shield, Lock, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { loginAction } from '@/app/(auth)/actions';
import { BUSINESS_CONFIG } from '@/lib/constants';
import { EnvStatusBanner } from '@/components/env-status-banner';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-muted/40">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al sitio público</span>
          </Link>
          <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground mx-auto flex items-center justify-center shadow-md">
            <Wrench className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {BUSINESS_CONFIG.name}
          </h1>
          <p className="text-xs text-muted-foreground">
            Acceso exclusivo para administración y dueños
          </p>
        </div>

        <EnvStatusBanner />

        <Card>
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <CardTitle className="text-lg">Ingreso al Panel</CardTitle>
            </div>
            <CardDescription>
              Ingresá tu correo y contraseña registrados para acceder a la gestión de la gomería.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state?.error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}

            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="dueno@gomeríajlr.com.ar"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Contraseña
                  </label>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              <Button type="submit" disabled={isPending} className="w-full gap-2">
                <Lock className="h-4 w-4" />
                <span>{isPending ? 'Ingresando...' : 'Iniciar Sesión'}</span>
              </Button>
            </form>

            <div className="mt-4 border-t pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Por motivos de seguridad, el registro de usuarios está restringido únicamente al administrador general.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

