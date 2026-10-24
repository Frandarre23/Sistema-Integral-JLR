import { Receipt } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function VentasPage() {
  return (
    <ModulePlaceholder
      title="Ventas, Cobros y Facturación"
      description="Facturación de mostrador, medios de pago y preparación para integración con ARCA"
      targetPhase="Fase 6 y 8"
      icon={Receipt}
      features={[
        'Punto de venta ágil para mostrador con selección rápida de neumáticos y servicios.',
        'Separación estricta entre venta comercial, medios de pago y comprobante fiscal.',
        'Soporte para múltiples medios de pago (efectivo, transferencia, tarjeta de débito/crédito, seguro).',
        'Conservación inmutable del precio histórico al momento de la venta.',
        'Módulo desacoplado preparado para emitir factura electrónica con ARCA (ex-AFIP) en Fase 8.',
      ]}
    />
  );
}

