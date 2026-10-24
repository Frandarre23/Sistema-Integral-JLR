import { Users } from 'lucide-react';
import { ModulePlaceholder } from '@/components/admin/module-placeholder';

export default function ClientesPage() {
  return (
    <ModulePlaceholder
      title="Clientes y Aseguradoras"
      description="Base de datos unificada de clientes particulares, flotas y compañías de seguros"
      targetPhase="Fase 5"
      icon={Users}
      features={[
        'Padrón de clientes con teléfono de contacto rápido, email y CUIT/DNI.',
        'Listado de compañías aseguradoras y contactos comerciales.',
        'Historial unificado de vehículos, trabajos anteriores y compras realizadas.',
        'Búsqueda ágil por patente, nombre, teléfono o documento.',
      ]}
    />
  );
}

