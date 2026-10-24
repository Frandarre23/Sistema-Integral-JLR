import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BUSINESS_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} | Gomería y Mecánica Rápida`,
  description:
    'Venta de neumáticos, parches, alineación 3D, balanceo y servicios integrales para particulares, flotas y compañías de seguros en Buenos Aires, Argentina.',
  keywords: [
    'gomería',
    'neumáticos',
    'alineación',
    'balanceo',
    'parches',
    'ClaimServices',
    'seguros',
    'Buenos Aires',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}

