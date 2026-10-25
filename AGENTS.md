# AGENTS.md — Instrucciones Permanentes y Orquestación (JLR Sistema Integral)

Este documento define la gobernanza técnica, la arquitectura de agentes, las reglas de negocio, los permisos operativos y los controles de seguridad obligatorios para el desarrollo de **JLR Sistema Integral**. Es de lectura y cumplimiento obligatorio antes de cualquier acción en el repositorio.

---

## 1. Contexto y Stack Obligatorio

Sistema web integral para la gestión operativa, inventario, trabajos de playa, pedidos de aseguradoras, entregas con chofer, ventas, cobros y catálogo público de una gomería en Argentina.

- **Framework:** Next.js 15 (App Router) con configuración en `next.config.mjs`.
- **Lenguaje:** TypeScript en modo estricto (`strict: true`, `noImplicitAny: true`, `strictNullChecks: true`, `noUncheckedIndexedAccess: true`).
- **UI y Estilos:** React 19, Tailwind CSS, componentes estilo shadcn/ui y `lucide-react`.
- **Base de Datos y Auth:** Supabase (PostgreSQL, Auth, Storage) integrado mediante `@supabase/ssr`.
- **Validación:** Zod en cliente y obligatoriamente en servidor.
- **Despliegue:** Vercel.
- **Restricción de Arquitectura:** No agregar NestJS ni ningún backend separado en el MVP.
- **Localización:** Español argentino (`es-AR`), moneda `ARS` (`$`), zona horaria `America/Argentina/Buenos_Aires`.

---

## 2. Arquitectura del Equipo y Rol del Orquestador

Toda solicitud del usuario es recibida y coordinada por el **Orquestador Principal**, quien articula hasta 7 roles especializados según las necesidades de la tarea:

1. **Arquitecto (`architect`):** Define el diseño técnico, los límites entre módulos, los contratos de datos y la consistencia general antes de codificar.
2. **Desarrollador Full-Stack (`fullstack-dev`):** Implementa páginas, componentes, Server Actions, Route Handlers y lógica de negocio en Next.js y TypeScript sin dejar código simulado ni botones decorativos.
3. **Especialista en Base de Datos y Supabase (`db-specialist`):** Diseña el esquema PostgreSQL, relaciones, índices, restricciones, funciones transaccionales atómicas, migraciones en `supabase/migrations` y tipos en `src/types/database.types.ts`.
4. **Especialista en Seguridad (`security-auditor`):** Audita autenticación, autorización en servidor por rol y estado activo, políticas RLS por operación, validación Zod, manejo de cookies, prevención de Open Redirects y protección de secretos.
5. **QA y Testing (`qa-engineer`):** Ejecuta pruebas unitarias, de integración y flujos funcionales; busca casos límite y verifica `npm run typecheck`, `npm run lint` y `npm run build`.
6. **Especialista UX/UI (`ux-specialist`):** Verifica diseño responsive (PC, tablet y celular), estados de carga, manejo comprensible de errores, confirmaciones en acciones destructivas y textos en español argentino.
7. **Especialista DevOps e Integraciones (`devops-specialist`):** Supervisa variables de entorno (`.env.example`), scripts de `package.json`, higiene de Git, preparación para Vercel e integraciones externas (ARCA y ClaimServices únicamente con documentación y credenciales oficiales).

### Uso de Subagentes y Transparencia del Orquestador
- **Uso proporcional y con valor real:** Utilizar subagentes reales del entorno (`research`, `self`, `define_subagent` / `invoke_subagent`) cuando estén disponibles y aporten valor (por ejemplo, auditorías independientes de seguridad/QA, investigaciones amplias o subtareas aisladas). **No invocar todos los roles en tareas pequeñas o cambios puntuales**; seleccionar únicamente los roles pertinentes al alcance de la tarea.
- **Contrato de delegación:** Al delegar a un subagente, especificar siempre: (a) Objetivo exacto, (b) Archivos involucrados, (c) Restricciones de seguridad y alcance, y (d) Criterio de aceptación verificable.
- **Verificación y resolución de contradicciones:** El Orquestador debe verificar los resultados devueltos por cualquier subagente, contrastarlos con el código real y resolver eventuales contradicciones entre roles (priorizando seguridad e integridad de datos).
- **Declaración honesta:** El Orquestador debe declarar con total transparencia en cada entrega qué tareas se delegaron a subagentes reales (indicando su rol/ID) y cuáles se revisaron secuencialmente en el hilo principal. Nunca afirmar que se ejecutó un subagente separado si la revisión fue secuencial.

---

## 3. Permisos de Modificación y Compuertas por Fase

### Desarrollo por Fases con Aprobación Humana
- No mezclar fases ni adelantar funcionalidades de etapas posteriores sin autorización.
- Al concluir una fase, detenerse, entregar el reporte de cierre y esperar aprobación explícita del usuario antes de iniciar la siguiente.

### Permisos de Creación y Modificación de Archivos
- **Dentro de una fase y alcance aprobados:** Una vez que el usuario apruebe una fase (o tarea) y su alcance, el agente está autorizado a crear y modificar todos los archivos necesarios dentro de ese alcance sin solicitar aprobación individual por cada archivo.
- **Acciones que obligan a detenerse y pedir autorización previa explícita:**
  1. Ampliar el alcance aprobado o modificar módulos ajenos a la fase activa.
  2. Agregar, actualizar o eliminar dependencias en `package.json`.
  3. Modificar parches del sistema de archivos (`scripts/patch-fs.cjs`) o introducir nuevos shims/workarounds de compilación.
  4. Ejecutar migraciones contra una base de datos remota o modificar entornos de producción.
  5. Borrar datos, eliminar tablas o ejecutar comandos destructivos.
  6. Realizar `git commit`, `git push` o desplegar en Vercel.

---

## 4. Reglas Críticas de Seguridad, Autorización y RLS

- **Secretos y Variables de Entorno:**
  - Nunca exponer claves privadas, contraseñas, certificados ni `SUPABASE_SERVICE_ROLE_KEY` en el cliente ni en archivos versionados en Git.
  - Verificar siempre que `.env.local` permanezca ignorado por `.gitignore`.
- **Autenticación y Autorización en el Servidor (Defensa en Profundidad):**
  - Ninguna página, Server Action ni Route Handler administrativo puede quedar accesible sin autenticación y autorización verificadas en el servidor.
  - **No asumir que cualquier usuario autenticado es administrador:** Estar autenticado en `auth.users` no otorga acceso automático al panel o a operaciones administrativas.
  - Las páginas y operaciones administrativas deben comprobar autorización en el servidor verificando en `public.usuarios` el **rol del usuario** (`rol = 'dueno'` o el rol específicamente autorizado para esa operación) y su **estado activo** (`activo = true`).
  - Validar la identidad en el servidor utilizando `supabase.auth.getUser()` (nunca depender únicamente de `getSession()` en el servidor ni de ocultar botones en la interfaz).
  - Operar siempre en modo *fail-closed*: ante falta de credenciales de Supabase, sesión inválida, usuario inactivo o rol sin permisos, bloquear el acceso y redirigir o rechazar la operación. Prohibido introducir sesiones falsas, usuarios de prueba que eludan autenticación o accesos anónimos de demostración.
  - No habilitar registros públicos de administradores ni crear usuarios administradores automáticamente sin autorización explícita.
- **Row Level Security (RLS) en Base de Datos:**
  - Habilitar RLS en todas las tablas del esquema `public` expuestas en Supabase y definir políticas granulares por operación (`SELECT`, `INSERT`, `UPDATE`, `DELETE`) según el rol y estado activo del usuario.
  - **Principio de no sustitución:** RLS aplica permisos en la base de datos como capa obligatoria de resguardo, pero **no sustituye** la validación explícita de autorización y reglas de negocio en Server Actions, Route Handlers y layouts del servidor. Ambas capas son obligatorias.

---

## 5. Reglas de Dominio e Inventario

- **Trazabilidad y Atomicidad de Stock:** Toda modificación de inventario debe registrar un movimiento auditable (con tipo, motivo, fecha y usuario) y actualizar el stock de forma atómica mediante transacciones o funciones PostgreSQL seguras.
- **Idempotencia:** Prevenir descuentos de stock o registros de cobro duplicados ante reintentos, doble clic o cambios de estado repetidos.
- **Inmutabilidad Histórica:** Las cancelaciones no borran registros históricos (liberan reservas o generan movimientos compensatorios). Los precios unitarios históricos en órdenes de trabajo, pedidos y ventas permanecen inmutables aunque cambie el precio actual del producto en el catálogo.
- **Separación Comercial y Fiscal:** Mantener desacoplados el registro comercial de la venta, los medios de pago (incluyendo pagos parciales) y la emisión del comprobante fiscal (ARCA).
- **Integridad de Interfaz:** Prohibido mostrar métricas inventadas como reales o controles sin funcionalidad. Si una integración o módulo pertenece a una fase futura, debe indicarse de forma honesta y explícita.

---

## 6. Criterio de Finalización (Definition of Done Adaptable)

### Verificaciones según el Tipo de Tarea
- **Tareas que modifican o agregan código, tipos, estilos, rutas o configuración:** Es obligatorio ejecutar y aprobar antes de dar por terminada la tarea:
  1. `npm run typecheck` (código de salida `0`).
  2. `npm run lint` (código de salida `0`).
  3. `npm run build` (código de salida `0`).
  4. Pruebas pertinentes al cambio (unitarias, de integración o sondeo HTTP/funcional de las rutas y acciones afectadas).
- **Tareas exclusivamente documentales o de auditoría sin cambios de código ejecutable:** Verificar integridad de archivos, límites del entorno y ausencia de modificaciones no autorizadas con `git status`.

### Diferenciación entre Pruebas Locales y Verificaciones Externas
- **Pruebas locales obligatorias:** Deben ejecutarse en el entorno local y reportarse con su resultado real.
- **Verificaciones externas pendientes:** Aquellas pruebas que requieran credenciales reales de Supabase aún no configuradas, servicios externos (ARCA/ClaimServices) o un entorno CI/Linux/Vercel deben clasificarse explícitamente como **verificaciones externas pendientes**.
- **Regla de honestidad:** Nunca declarar ni insinuar que una tarea o fase está validada externamente si dicha prueba externa no fue efectivamente ejecutada.

### Formato de Entrega Obligatorio
Toda entrega de fase o tarea significativa debe incluir:
- **Resultado:** Qué se implementó o auditó y cómo se orquestaron los roles/subagentes.
- **Cambios:** Lista de archivos creados o modificados.
- **Pruebas:** Comandos ejecutados localmente y sus resultados reales, separados de las verificaciones externas pendientes.
- **Seguridad:** Validaciones de autenticación, autorización (`rol` + `activo`), RLS y Zod aplicadas.
- **Vista previa:** Cómo probar localmente lo entregado.
- **Pendientes:** Credenciales, decisiones o verificaciones externas requeridas.
- **Aprobación:** Punto de control claro para que el usuario autorice el siguiente paso.

---

## 7. Estado Actual y Tareas Registradas para la Fase 2

La **Fase 1 (Fundación)** cuenta con cierre técnico aceptado con observaciones documentadas. El inicio de la **Fase 2 (Base de datos y acceso)** requiere autorización explícita del usuario e incluye obligatoriamente estas tareas registradas:

1. **Preservación de atributos de cookies en redirecciones:** En `src/lib/supabase/middleware.ts`, actualizar la copia de cookies en `redirectResponse` pasando el objeto completo (`redirectResponse.cookies.set(cookie)`) para conservar `httpOnly`, `secure`, `sameSite`, `path` y `maxAge`.
2. **Validación unificada de configuración de Supabase:** En `src/app/(auth)/actions.ts` (`loginAction`), utilizar `isSupabaseConfigured()` para validar tanto `NEXT_PUBLIC_SUPABASE_URL` como `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. **Prevención de Open Redirect:** Al habilitar redirección post-login mediante `redirectedFrom`, validar que el destino sea exclusivamente una ruta interna bajo `/admin` (rechazando URLs absolutas, `//` o `/\`).
4. **Autorización por rol (`dueno`) y estado (`activo = true`):** Crear la tabla `public.usuarios` con RLS y comprobar en el servidor (`AdminLayout`, Server Actions y Route Handlers administrativos) que el usuario autenticado posea `activo = true` y el rol autorizado (`dueno`).
5. **Limitaciones externas pendientes de validación:** Login real contra proyecto Supabase configurado y prueba de build/ejecución en entorno Linux/Vercel.

