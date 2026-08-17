# Notificaciones de formularios por correo

Los formularios `contact`, `brand-dna`, `newsletter` y `glocal-live-lead` están implementados con Netlify Forms. El último actúa como respaldo de la entrega directa mediante Resend. El código incluye:

- campos `email` para que Netlify pueda establecer `Reply-To`;
- asuntos específicos por formulario;
- honeypot antispam;
- definiciones estáticas en `public/__forms.html`;
- confirmación de interfaz solo después de una respuesta HTTP satisfactoria.

El correo destinatario no puede fijarse desde el repositorio. Netlify lo administra como configuración protegida del proyecto.

## Activación en Netlify

1. Abrir el proyecto `imagenglocal`.
2. Ir a **Project configuration → Notifications → Emails and webhooks**.
3. En **Form submission notifications**, seleccionar **Add notification → Email notification**.
4. Usar `info@imagen-glocal.com` como destinatario.
5. Seleccionar **All forms** para recibir contacto, diagnóstico y newsletter, o crear una notificación por formulario.
6. Confirmar que **Forms → Usage and configuration → Form detection** está habilitado.
7. Volver a desplegar si la detección se habilitó por primera vez.
8. Enviar una prueba con un correo real y revisar también la sección de spam de Netlify.

Por defecto, Netlify envía estas notificaciones desde `formresponses@netlify.com`. El campo `email` de cada formulario permite responder directamente al visitante.

## Verificación

Después del despliegue deben aparecer cuatro formularios activos en Netlify:

- `contact`
- `brand-dna`
- `newsletter`
- `glocal-live-lead`

Una prueba completa requiere comprobar tanto la nueva entrada en **Forms** como la llegada del mensaje a `info@imagen-glocal.com`.
