import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from '@/types/database.types';

type CookieToSet = {
  name: string;
  value: string;
  options?: CookieOptions;
};

/**
 * Cliente Supabase para Server Components, Server Actions y Route Handlers.
 * En Next.js 15 `cookies()` es asíncrono.
 */
export async function createClient() {
  const cookieStore = await cookies();
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return createServerClient<Database>(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-anon-key',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // El método `setAll` fue llamado desde un Server Component.
            // Esto puede ser ignorado si el middleware refresca la sesión.
          }
        },
      },
    }
  );
}

