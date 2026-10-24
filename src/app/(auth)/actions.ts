'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';

const loginSchema = z.object({
  email: z.string().email('Ingresá un correo electrónico válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export type ActionState = {
  error?: string;
  success?: boolean;
};

export async function loginAction(
  prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get('email');
  const password = formData.get('password');

  const validated = loginSchema.safeParse({ email, password });
  if (!validated.success) {
    return {
      error: validated.error.errors[0]?.message || 'Datos de inicio de sesión inválidos',
    };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
    return {
      error: 'Supabase no está configurado aún. Agregá tus credenciales en el archivo .env.local para iniciar sesión.',
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: validated.data.email,
    password: validated.data.password,
  });

  if (error) {
    return {
      error: 'Credenciales inválidas o usuario no autorizado.',
    };
  }

  redirect('/admin');
}

export async function logoutAction(): Promise<void> {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

