import { redirect } from 'next/navigation';
import { AdminShell } from '@/components/admin/admin-shell';
import { createClient } from '@/lib/supabase/server';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Validación estricta en el servidor: ningún visitante sin sesión puede acceder a /admin
  if (!user) {
    redirect('/login?redirectedFrom=/admin');
  }

  return <AdminShell userEmail={user.email}>{children}</AdminShell>;
}
