# Diseño y arquitectura de Conexión Glocal

## Propósito y principios

Este documento describe el diseño, la arquitectura y el estado funcional real del sitio. Debe actualizarse cuando cambien la identidad, los flujos de conversión o las integraciones.

Principios del producto:

1. Comunicar una agencia que conecta estrategia global con ejecución local.
2. Priorizar conversión mediante diagnóstico de marca, asesoría y contacto.
3. Mantener una experiencia bilingüe en español e inglés.
4. Usar movimiento y profundidad sin perjudicar legibilidad, accesibilidad o rendimiento.
5. No presentar simulaciones, métricas o automatizaciones como resultados reales.

## Arquitectura

- Framework: Next.js 16 con App Router y React 19.
- Lenguaje: TypeScript.
- Estilos: Tailwind CSS, variables CSS y componentes inspirados en shadcn/ui.
- Movimiento: Framer Motion, con reducción global cuando el sistema solicita `prefers-reduced-motion`.
- Tema: `next-themes`, con modos claro, oscuro y preferencia del sistema.
- Idiomas: traducciones locales, preferencia en `localStorage` y actualización de `html[lang]`.
- Hosting: Netlify.
- Formularios: Netlify Forms mediante definiciones HTML estáticas y envío AJAX codificado como formulario.
- Chat: ruta servidor de Next.js y SDK oficial de OpenAI, con respuesta local de respaldo.

### Composición de la página

`src/app/page.tsx` ensambla la experiencia en este orden:

1. Barra de progreso de desplazamiento y encabezado fijo.
2. Hero principal.
3. Solicitud de diagnóstico de ADN de marca.
4. Propuesta de marca.
5. Servicios principales.
6. Categorías de servicio.
7. Mensaje de innovación.
8. Planes comerciales.
9. Servicios adicionales.
10. Portafolio destacado.
11. Proceso de trabajo.
12. Contacto.
13. Newsletter y footer.

`src/app/layout.tsx` añade proveedores globales, datos estructurados y el chatbot accesible. Las rutas `/privacy` y `/terms` comparten el componente `LegalPage`.

## Sistema visual

La dirección visual es moderna, tecnológica y optimista: superficies limpias, tarjetas elevadas, cristal, gradientes morado-magenta y animaciones suaves.

| Token | Valor | Uso principal |
|---|---:|---|
| `--primary` | `262 83% 58%` | Acciones, enlaces y estados activos |
| `--purple-primary` | `262 83% 58%` | Identidad principal |
| `--purple-secondary` | `298 76% 58%` | Gradientes y acentos |
| `--background` | `0 0% 100%` | Fondo claro |
| `--foreground` | `240 10% 3.9%` | Texto principal |
| `--radius` | `0.75rem` | Radio base de componentes |

La familia principal es Poppins, cargada con `next/font/google`. El layout usa un contenedor centrado, grillas responsivas y un encabezado fijo de 80 px. Los logotipos fueron recortados para eliminar espacio transparente y mantener una presencia visual consistente sin distorsión. Toda animación global respeta reducción de movimiento mediante `MotionProvider` y reglas CSS complementarias.

## Componentes y estado funcional

| Componente | Responsabilidad | Estado |
|---|---|---|
| `Header` | Navegación, idioma, tema y menú móvil | Funcional y accesible |
| `HeroSection` | Propuesta de valor y CTAs | Funcional |
| `BrandDnaSection` | Captura una solicitud de diagnóstico | Envía a Netlify Forms; no simula un análisis |
| `ServicesSection` | Presenta capacidades principales | Informativo |
| `StatsSection` | Presenta categorías de servicio | Sin métricas no verificadas; CTA funcional |
| `InnovationSection` | Mensaje institucional | CTA funcional |
| `PlansSection` | Presenta planes | CTAs funcionales hacia contacto |
| `AdditionalServicesSection` | Catálogo ampliado | Bilingüe |
| `ProcessSection` | Explica el proceso real de trabajo | Bilingüe |
| `ContactSection` | Captura el lead y ofrece WhatsApp | Envía a Netlify Forms y reporta el resultado real |
| `Footer` | Newsletter, navegación, redes y legales | Formulario y enlaces funcionales |
| `Chatbot` | Atención inicial y calificación | Funcional con IA opcional y respaldo local |
| `PortfolioPreview` | Muestra proyectos destacados en la página principal | Funcional y bilingüe |
| `PortfolioLanding` | Landing `/portfolio` con filtros SEO, GEO, UX, comercio e IA | Funcional y bilingüe |

## Conversión y formularios

Netlify detecta los formularios en `public/forms.html`. Los componentes React publican por AJAX a `/` con `application/x-www-form-urlencoded`, un campo `form-name` y honeypot, como requiere Netlify Forms para Next.js Runtime v5. El archivo estático usa una ruta sin prefijo reservado para que el escáner de deploy pueda encontrar las definiciones. Los nombres y campos de los tres formularios deben permanecer sincronizados:

- `brand-dna`: URL, nombre, email, teléfono opcional e idioma.
- `contact`: nombre, email, teléfono, servicio, mensaje e idioma.
- `newsletter`: email e idioma.

La interfaz solo muestra éxito después de una respuesta HTTP satisfactoria. Netlify Forms debe estar habilitado en el sitio para que las capturas aparezcan en el panel. WhatsApp es una vía explícita posterior, no una afirmación de que se envió correo.

Las notificaciones deben configurarse en Netlify para enviar las entradas verificadas a `hola@imagen-glocal.com`. Los formularios incluyen un campo `email` y asuntos versionados para facilitar respuesta y clasificación. El procedimiento operativo está en `docs/netlify-email.md`.

## Chatbot

El widget vive en `src/components/chatbot.tsx` y publica un historial limitado a `POST /api/chat`. La ruta `src/app/api/chat/route.ts`:

- valida y limita tamaños de entrada;
- aplica un límite básico por IP, de mejor esfuerzo y por instancia;
- usa `OPENAI_API_KEY` solo en el servidor cuando está configurada;
- permite cambiar el modelo con `OPENAI_MODEL`;
- evita persistir respuestas en OpenAI mediante `store: false`;
- prohíbe inventar clientes, métricas, precios o plazos;
- degrada a respuestas bilingües curadas si falta la clave o falla el proveedor.

El modo de respaldo permite ejecutar y probar el sitio sin secretos. Para producción con IA se deben configurar `OPENAI_API_KEY` y, opcionalmente, `OPENAI_MODEL` en Netlify. El límite en memoria no sustituye un rate limiter distribuido para tráfico alto.

## SEO

El sitio incluye:

- metadata, canonical, Open Graph, Twitter Card y JSON-LD;
- imágenes sociales generadas por Next.js;
- `/robots.txt` y `/sitemap.xml`;
- logo estructurado válido;
- rutas legales `/privacy` y `/terms`;
- encabezados de seguridad definidos en `next.config.js` para que también alcancen las respuestas del runtime de Next en Netlify.

El canonical usa `NEXT_PUBLIC_SITE_URL` y recurre a `https://imagenglocal.netlify.app` cuando la variable no está configurada. Al conectar el dominio definitivo basta con definir esa variable en Netlify. La localización inglesa todavía es del lado del cliente: una mejora futura es crear rutas indexables `/es` y `/en` con metadata y `hreflang` propios.

## Accesibilidad y rendimiento

- Campos con `label`, `id`, autocompletado y regiones `aria-live`.
- Menú móvil con nombre, estado expandido y relación con el panel.
- Enlaces sociales con nombres accesibles.
- Preferencia de reducción de movimiento respetada.
- Imágenes de Next.js optimizadas cuando corresponde.
- Componentes de cliente limitados por estado y movimiento; una siguiente iteración debe medir Core Web Vitals reales en producción.

## Seguridad y privacidad

- Los secretos permanecen en servidor y variables de entorno.
- El endpoint de chat valida, limita y recorta entradas.
- Netlify añade CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` y protección contra framing.
- CI ejecuta lint, typecheck, build y auditoría de dependencias de producción.
- No se persisten conversaciones del chatbot en esta versión.

Antes de almacenar conversaciones o conectar CRM se requiere consentimiento, política de retención, control de acceso y trazabilidad. El contenido legal incluido es informativo y debe validarse con asesoría jurídica antes de usarlo como texto definitivo.

## Verificación y operación

Requisitos locales:

```bash
npm ci
npm run check
npm run build
npm audit --omit=dev
```

Node.js 22 es la versión fijada en `.nvmrc` y `netlify.toml`; el mínimo declarado por el proyecto es 20.9. El workflow `.github/workflows/ci.yml` reproduce las verificaciones en cada push y pull request.

Una función se considera terminada cuando tiene comportamiento real, maneja carga/éxito/error desde respuestas reales, es usable por teclado, no expone secretos, cuenta con verificación reproducible y queda documentada aquí.

## Próximas mejoras

1. Crear rutas SEO separadas para español e inglés.
2. Conectar formularios a CRM y correo transaccional con consentimiento explícito.
3. Sustituir el rate limit del chat por un almacén distribuido si aumenta el tráfico.
4. Añadir pruebas automatizadas de componentes, API y accesibilidad.
5. Medir Core Web Vitals, conversiones y errores reales después del despliegue.
