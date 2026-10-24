import { Package } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function ProductosPage() {
  return (
    <ModulePlaceholder
      title="Productos e Inventario"
      description="Catálogo de neumáticos, cámaras, parches y control de stock"
      targetPhase="Fase 3"
      icon={Package}
      features={[
        'Alta, edición y desactivación de neumáticos y productos.',
        'Campos específicos de gomería: medida (ej: 205/55 R16), marca, código único y categoría.',
        'Gestión de precios en ARS, costos y stock mínimo con alertas automáticas.',
        'Registro atómico de entradas, salidas y ajustes manuales con motivo auditado.',
        'Control de visibilidad para publicación en el catálogo de la web pública.',
      ]}
    />
  );
}

