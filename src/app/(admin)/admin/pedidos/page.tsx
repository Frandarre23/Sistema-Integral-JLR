import { Truck } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function PedidosPage() {
  return (
    <ModulePlaceholder
      title="Pedidos, Seguros y Entregas"
      description="Gestión de pedidos de compañías de seguros, venta por mayor y chofer"
      targetPhase="Fase 5"
      icon={Truck}
      features={[
        'Registro de pedidos con número de siniestro y referencia externa (ClaimServices).',
        'Modalidades de retiro en el local o despacho con chofer.',
        'Hoja de ruta del chofer con destinatario, dirección, teléfono y confirmación de entrega.',
        'Historial de cambios de estado sin borrar registros (preparación -> despachado -> entregado).',
        'Control estricto de cantidades pedidas vs cantidades autorizadas por aseguradora.',
      ]}
    />
  );
}

