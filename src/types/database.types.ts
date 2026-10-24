/**
 * Definición de tipos de base de datos de PostgreSQL/Supabase para JLR Sistema Integral.
 * Se sincronizará con las migraciones en la Fase 2.
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string;
          email: string;
          nombre: string;
          rol: 'dueno' | 'empleado';
          activo: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          nombre: string;
          rol?: 'dueno' | 'empleado';
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          nombre?: string;
          rol?: 'dueno' | 'empleado';
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      clientes: {
        Row: {
          id: string;
          nombre: string;
          apellido: string;
          telefono: string | null;
          email: string | null;
          documento: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          apellido: string;
          telefono?: string | null;
          email?: string | null;
          documento?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          nombre?: string;
          apellido?: string;
          telefono?: string | null;
          email?: string | null;
          documento?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      categorias: {
        Row: {
          id: string;
          nombre: string;
          descripcion: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          nombre: string;
          descripcion?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          nombre?: string;
          descripcion?: string | null;
          created_at?: string;
        };
      };
      productos: {
        Row: {
          id: string;
          codigo: string;
          nombre: string;
          categoria_id: string | null;
          marca: string;
          medida: string | null;
          costo: number;
          precio: number;
          stock_actual: number;
          stock_minimo: number;
          publicado_web: boolean;
          activo: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          codigo: string;
          nombre: string;
          categoria_id?: string | null;
          marca: string;
          medida?: string | null;
          costo: number;
          precio: number;
          stock_actual?: number;
          stock_minimo?: number;
          publicado_web?: boolean;
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          codigo?: string;
          nombre?: string;
          categoria_id?: string | null;
          marca?: string;
          medida?: string | null;
          costo?: number;
          precio?: number;
          stock_actual?: number;
          stock_minimo?: number;
          publicado_web?: boolean;
          activo?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      rol_usuario: 'dueno' | 'empleado';
      orden_estado: 'pendiente' | 'en_proceso' | 'terminada' | 'cancelada';
      pedido_modalidad: 'retiro_local' | 'envio_chofer';
      entrega_estado: 'preparacion' | 'despachado' | 'entregado' | 'cancelado';
    };
  };
};

