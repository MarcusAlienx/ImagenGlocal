# Notificaciones de formularios a hola@imagen-glocal.com

Los formularios `contact`, `brand-dna` y `newsletter` están implementados con Netlify Forms. El código incluye:

- campos `email` para que Netlify pueda establecer `Reply-To`;
- asuntos específicos por formulario;
- honeypot antispam;
- definiciones estáticas en `public/forms.html`;
- envío AJAX a `/`, compatible con Next.js Runtime v5 de Netlify;
- confirmación de interfaz solo después de una respuesta HTTP satisfactoria.

El correo destinatario no puede fijarse desde el repositorio. Netlify lo administra como configuración protegida del proyecto.

## Activación en Netlify

1. Abrir el proyecto `imagenglocal`.
2. Ir a **Project configuration → Notifications → Emails and webhooks**.
3. En **Form submission notifications**, seleccionar **Add notification → Email notification**.
4. Usar `hola@imagen-glocal.com` como destinatario.
5. Seleccionar **All forms** para recibir contacto, diagnóstico y newsletter, o crear una notificación por formulario.
6. Confirmar que **Forms → Usage and configuration → Form detection** está habilitado.
7. Volver a desplegar si la detección se habilitó por primera vez.
8. Enviar una prueba con un correo real y revisar también la sección de spam de Netlify.

Por defecto, Netlify envía estas notificaciones desde `formresponses@netlify.com`. El campo `email` de cada formulario permite responder directamente al visitante.

## Verificación

Después del despliegue deben aparecer tres formularios activos en Netlify:

- `contact`
- `brand-dna`
- `newsletter`

Una prueba completa requiere comprobar tanto la nueva entrada en **Forms** como la llegada del mensaje a `hola@imagen-glocal.com`.
