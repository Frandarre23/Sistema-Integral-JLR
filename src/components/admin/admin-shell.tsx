'use client';

import { useState } from 'react';
import { AdminSidebar } from './sidebar';
import { AdminTopNav } from './top-nav';

interface AdminShellProps {
  children: React.ReactNode;
  userEmail?: string | null;
}

export function AdminShell({ children, userEmail }: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-muted/20">
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex flex-col md:pl-64">
        <AdminTopNav
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          userEmail={userEmail}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

