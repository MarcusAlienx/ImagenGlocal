# Glocal Live

MVP de una plataforma de eventos con un agente conversacional integrado. Glocal Live controla descubrimiento, catálogo, lineups y selección de acceso; el checkout, pago, ticket y QR pertenecen siempre a un proveedor externo.

## Desarrollo

```bash
cp .env.example .env.local
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La clave de OpenAI es opcional: el recorrido transaccional oficial funciona con herramientas deterministas y datos demo; la API de Responses mejora consultas abiertas cuando se configura `OPENAI_API_KEY`.

## WhatsApp

El acceso a WhatsApp aparece únicamente cuando se configura un número válido en formato internacional, sin `+`, espacios ni guiones:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5213312345678
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola, quiero información sobre Glocal Live.
```

No se incluye un número ficticio por defecto. Al cambiar una variable `NEXT_PUBLIC_*` en producción es necesario volver a desplegar para que Next.js la incorpore al bundle.

## Despliegue en Vercel

El proyecto es compatible con Vercel: importa el repositorio, selecciona el framework **Next.js**, configura las variables de `.env.example` en **Project Settings → Environment Variables** y despliega. Usa la URL final como `NEXT_PUBLIC_APP_URL`. Para formularios en Vercel configura Resend; el fallback de Netlify Forms solo está disponible cuando el sitio se aloja en Netlify.

## Prueba del MVP

1. Abre **Pregúntale a Glocal**.
2. Envía `¿Qué eventos tienen?`.
3. Envía `Muéstrame Guadalajara`.
4. Envía `¿Qué boletos hay?`.
5. Envía `Quiero 2 VIP`.
6. Pulsa **Comprar accesos** para abrir `TicketCheckout` y continuar a `/checkout/mock`.

No se captura información financiera ni se genera un boleto o QR.

## Recepción de datos por correo

La sección **Mantente cerca** recopila nombre, correo, teléfono opcional, ciudad, interés y mensaje con consentimiento explícito. `POST /api/leads` valida los datos y envía un correo mediante Resend cuando estas variables están configuradas:

```bash
RESEND_API_KEY=re_...
GLOCAL_LEADS_EMAIL=eventos@tu-dominio.com
GLOCAL_FROM_EMAIL=Glocal Live <leads@notifications.tu-dominio.com>
```

El dominio de `GLOCAL_FROM_EMAIL` debe estar verificado en Resend. El correo del visitante se configura como `reply_to`, por lo que el equipo puede responder directamente al lead. Si Resend no está configurado, el frontend intenta entregar el registro al formulario `glocal-live-lead` de Netlify Forms; para recibir notificaciones por esa vía hay que activar una notificación de formulario en **Netlify → Forms → Form notifications**.

No se afirma éxito hasta que Resend o Netlify acepte el registro. Para producción, revisa la política de privacidad y define retención y acceso a los datos.

## Arquitectura

- `src/lib/database`: repositorio de catálogo intercambiable y datos demo.
- `database/schema.sql`: modelo PostgreSQL neutral respecto al tipo de organizador/evento.
- `src/lib/agent`: memoria de sesión, orquestación y herramientas permitidas.
- `src/lib/openai`: cliente de OpenAI exclusivo de servidor.
- `src/lib/ticketing`: contrato, registry, adaptador mock y adaptador de Mercado Pago Checkout Pro.
- `src/lib/exa` y `src/lib/composio`: límites desacoplados para futuras integraciones.
- `src/app/api`: endpoints de eventos y agente.
- `src/components/glocal-agent` y `src/components/ticket-checkout`: experiencia conversacional y entrega modular al checkout.

## Mercado Pago Checkout Pro

La integración crea una preferencia de pago exclusivamente en el servidor y entrega al navegador únicamente la URL HTTPS de Checkout Pro. Actívala con:

```bash
TICKETING_PROVIDER=mercado-pago
MERCADOPAGO_ACCESS_TOKEN=APP_USR-...
NEXT_PUBLIC_APP_URL=https://tu-dominio.com
MERCADOPAGO_WEBHOOK_URL=https://tu-dominio.com/api/ticketing/mercado-pago/webhook
MERCADOPAGO_USE_SANDBOX=true
```

El token nunca debe llevar el prefijo `NEXT_PUBLIC_`. El adaptador valida cantidad, evento, acceso, disponibilidad, precio, URL pública, URL de webhook y dominio del checkout; Mercado Pago recibe el cobro mediante redirección. Las rutas de retorno muestran el resultado provisional y **no** deben usarse para emitir entradas. Antes de producción falta implementar y validar la firma secreta del webhook, consultar el pago a Mercado Pago, aplicar idempotencia persistente y emitir/activar el acceso únicamente tras una confirmación oficial.

Con `TICKETING_PROVIDER=mock` el flujo local existente sigue funcionando sin credenciales ni pagos reales.

## Conectar otro proveedor real

Implementa `TicketingProvider`, registra el adaptador, valida sus URLs permitidas, configura secretos solo en servidor y añade webhooks firmados e idempotentes. El proveedor debe seguir siendo responsable de pago, emisión, QR, validación y check-in.

## Verificación

```bash
npm run lint
npm run typecheck
npm run build
```
