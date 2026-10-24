# JLR Sistema Integral — Gomería & Taller

Sistema web integral y moderno para la gestión operativa, de stock, servicios de playa, órdenes de trabajo, pedidos de aseguradoras (ClaimServices) y ventas para gomerías en Argentina.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) en modo estricto
- **Diseño & UI:** [Tailwind CSS](https://tailwindcss.com/), componentes estilo [shadcn/ui](https://ui.shadcn.com/) y [Lucide Icons](https://lucide.dev/)
- **Base de Datos & Auth:** [Supabase PostgreSQL](https://supabase.com/) con `@supabase/ssr` y Row Level Security (RLS)
- **Validaciones:** [Zod](https://zod.dev/) para validación estricta de formularios y tipos
- **Localización:** Idioma español argentino, Moneda ARS (`$`), Zona horaria `America/Argentina/Buenos_Aires`
- **Despliegue:** Preparado para [Vercel](https://vercel.com/)

---

## 📁 Estructura del Proyecto

```text
d:/JLR Sistema Integral/
├── .env.example              # Plantilla de variables de entorno (sin secretos)
├── .env.local                # Variables de entorno locales (en .gitignore)
├── .gitignore                # Reglas de exclusión de Git
├── next.config.ts            # Configuración de Next.js
├── package.json              # Dependencias y scripts del proyecto
├── postcss.config.mjs        # Configuración de PostCSS
├── tailwind.config.ts        # Tokens y estilos Tailwind
├── tsconfig.json             # Configuración estricta de TypeScript
├── README.md                 # Documentación del proyecto
└── src/
    ├── app/
    │   ├── globals.css       # Estilos globales y variables CSS de diseño
    │   ├── layout.tsx        # Layout raíz de la aplicación
    │   ├── (public)/         # Sitio web público para clientes
    │   │   ├── page.tsx      # Portada / Landing
    │   │   ├── catalogo/     # Catálogo de neumáticos y productos
    │   │   ├── servicios/    # Servicios de playa y alineación
    │   │   └── contacto/     # Canales de atención y WhatsApp
    │   ├── (auth)/           # Autenticación segura
    │   │   ├── login/        # Inicio de sesión exclusivo
    │   │   └── actions.ts    # Server Actions con Zod y Supabase
    │   └── (admin)/          # Panel de administración operativa
    │       ├── layout.tsx    # Shell con sidebar responsive y topbar
    │       └── admin/
    │           ├── page.tsx  # Dashboard con métricas reales y accesos rápidos
    │           ├── productos/# Módulo de catálogo e inventario
    │           ├── trabajos/ # Módulo de órdenes de playa
    │           ├── pedidos/  # Módulo de aseguradoras y chofer
    │           ├── clientes/ # Módulo de clientes
    │           ├── ventas/   # Módulo de punto de venta y cobros
    │           ├── informes/ # Módulo de reportes
    │           └── configuracion/
    ├── components/
    │   ├── ui/               # Botones, tarjetas, alertas, badges
    │   ├── public/           # Navbar y footer públicos
    │   ├── admin/            # Sidebar, top-nav y placeholders
    │   └── env-status-banner.tsx # Indicador visual del estado de Supabase
    ├── lib/
    │   ├── constants.ts      # Configuración comercial, estados y tipos
    │   ├── utils.ts          # Utilidades cn, moneda ARS y fechas locales
    │   └── supabase/
    │       ├── client.ts     # Cliente para el navegador (@supabase/ssr)
    │       ├── server.ts     # Cliente para componentes del servidor
    │       └── middleware.ts # Sincronización de sesión y cookies
    ├── types/
    │   └── database.types.ts # Tipos TypeScript de PostgreSQL
    └── middleware.ts         # Middleware de Next.js para rutas protegidas
```

---

## 🚀 Puesta en Marcha Local

### 1. Requisitos Previos
- Node.js versión `>= 20.0.0` (Probado con v22.14.0)
- npm versión `>= 10.0.0`

### 2. Instalación de Dependencias
```bash
npm install
```

### 3. Configuración de Variables de Entorno
Copia el archivo `.env.example` a `.env.local`:
```bash
cp .env.example .env.local
```

Edita `.env.local` con las claves de tu proyecto de Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **¿Cómo obtener tus claves de Supabase?**
> 1. Ingresá a [Supabase Dashboard](https://supabase.com/dashboard).
> 2. Creá un nuevo proyecto (ej. `jlr-gomería`).
> 3. En el menú lateral izquierdo, andá a **Project Settings** (ícono de engranaje) -> **API**.
> 4. Copiá la **Project URL** en `NEXT_PUBLIC_SUPABASE_URL`.
> 5. Copiá la clave **anon public** en `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

### 4. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

---

## 🧪 Comandos de Verificación

- **Verificación de tipos TypeScript:**
  ```bash
  npm run typecheck
  ```
- **Compilación de producción:**
  ```bash
  npm run build
  ```
- **Análisis de linter:**
  ```bash
  npm run lint
  ```

---

## 🔒 Seguridad y Privacidad

- **Sin secretos en Git:** Ningún token de servicio (`service_role`), contraseña ni credencial confidencial se incluye en el código fuente ni en el navegador.
- **Validación en el Servidor:** Todas las operaciones de autenticación y acciones de formulario se validan en el servidor usando Zod.
- **Protección de Rutas:** Middleware integrado para prevenir acceso no autorizado a las secciones `/admin/*`.
- **Row Level Security (RLS):** Preparado para la Fase 2, donde cada tabla tendrá políticas estrictas en PostgreSQL.

---

## 🗺️ Hoja de Ruta de Fases

- [x] **Fase 1: Fundación** (Completada)
  - Inspección del entorno, Next.js 15, React 19, TypeScript estricto, Tailwind CSS, `@supabase/ssr`, Zod.
  - Layout responsive para taller, navegación móvil y de escritorio, estado de conexión honesto y documentación.
- [ ] **Fase 2: Base de Datos y Acceso** (Próxima, pendiente de aprobación)
  - Esquema SQL, migraciones versionadas, restricciones, índices, RLS y autenticación del dueño.
- [ ] **Fase 3: Inventario y Productos**
  - Catálogo de neumáticos con medidas, códigos, stock mínimo, entradas, salidas y ajustes auditables.
- [ ] **Fase 4: Trabajos de Playa**
  - Órdenes numeradas por patente, parches, alineación, balanceo y consumo de materiales.
- [ ] **Fase 5: Pedidos, Seguros y Entregas**
  - Gestión con ClaimServices, chofer y hoja de ruta.
- [ ] **Fase 6: Ventas, Cobros e Informes**
  - Punto de venta de mostrador, medios de pago y reportes contables.
- [ ] **Fase 7: Web Pública Avanzada**
  - Catálogo online conectado al stock en tiempo real y turnos.
- [ ] **Fase 8: Integraciones Oficiales (ARCA y ClaimServices)**
  - Factura electrónica con credenciales oficiales homologadas.
- [ ] **Fase 9: Auditoría Final y Despliegue en Vercel**

