import { BarChart3 } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function InformesPage() {
  return (
    <ModulePlaceholder
      title="Informes y Reportes del Negocio"
      description="Estadísticas de rentabilidad, trabajos por período y rotación de neumáticos"
      targetPhase="Fase 6"
      icon={BarChart3}
      features={[
        'Reporte de ventas y facturación diaria, semanal y mensual en ARS.',
        'Listado de trabajos de playa más frecuentes (parches, alineación, balanceo).',
        'Kardex y auditoría de movimientos de stock para control de faltantes.',
        'Reporte de pedidos de seguros liquidados vs pendientes de cobro.',
        'Exportación a Excel / CSV para el contador.',
      ]}
    />
  );
}

