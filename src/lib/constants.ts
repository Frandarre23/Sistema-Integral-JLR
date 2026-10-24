/**
 * Constantes de negocio para JLR Sistema Integral
 */

export const BUSINESS_CONFIG = {
  name: 'JLR Neumáticos & Servicios',
  subtitle: 'Sistema Integral de Gestión de Gomería',
  currency: 'ARS',
  locale: 'es-AR',
  timeZone: 'America/Argentina/Buenos_Aires',
  whatsappNumber: '5491100000000', // Modificar con el número oficial de la gomería
  address: 'Buenos Aires, Argentina',
} as const;

export const ORDEN_TRABAJO_ESTADOS = {
  PENDIENTE: 'pendiente',
  EN_PROCESO: 'en_proceso',
  TERMINADA: 'terminada',
  CANCELADA: 'cancelada',
} as const;

export type OrdenTrabajoEstado = typeof ORDEN_TRABAJO_ESTADOS[keyof typeof ORDEN_TRABAJO_ESTADOS];

export const PEDIDO_MODALIDADES = {
  RETIRO_LOCAL: 'retiro_local',
  ENVIO_CHOFER: 'envio_chofer',
} as const;

export type PedidoModalidad = typeof PEDIDO_MODALIDADES[keyof typeof PEDIDO_MODALIDADES];

export const ENTREGA_ESTADOS = {
  PREPARACION: 'preparacion',
  DESPACHADO: 'despachado',
  ENTREGADO: 'entregado',
  CANCELADO: 'cancelado',
} as const;

export type EntregaEstado = typeof ENTREGA_ESTADOS[keyof typeof ENTREGA_ESTADOS];

