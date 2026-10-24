import { Wrench } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function TrabajosPage() {
  return (
    <ModulePlaceholder
      title="Trabajos de Playa"
      description="Órdenes de servicio para parches, alineación, balanceo y mecánica ligera"
      targetPhase="Fase 4"
      icon={Wrench}
      features={[
        'Creación de órdenes numeradas correlativas con patente del vehículo y datos del cliente.',
        'Asignación de servicios múltiples (parche común/tarugo, rotación, alineación 3D, balanceo).',
        'Estados de flujo: pendiente -> en proceso -> terminada -> cancelada.',
        'Registro de materiales consumidos y descuento atómico de stock una sola vez.',
        'Impresión de orden de trabajo y comprobante de entrega para el cliente.',
      ]}
    />
  );
}

