# Glocal Live — diseño y arquitectura

## Alcance del MVP

La experiencia implementa homepage, catálogo demo, API de eventos, agente con memoria de sesión, bloques visuales estructurados y checkout mock. No implementa pagos, emisión, QR, scanner ni check-in.

## Fuentes de verdad

Los eventos y lineups se obtienen del repositorio interno. Precios, disponibilidad y checkout pasan por `TicketingProvider`. OpenAI interpreta preguntas abiertas pero no puede inventar ni modificar esos valores. Exa queda restringido a contexto público y Composio a acciones externas explícitas futuras.

## Conversación

`POST /api/agent` acepta un mensaje y un identificador opcional. La memoria conserva ciudad, evento, últimos resultados, tipo de acceso y cantidad durante 30 minutos en la instancia. El contrato `MemoryStore` permite sustituirla por Redis/PostgreSQL sin cambiar la orquestación.

El flujo oficial usa herramientas en lista permitida y un recorrido determinista sin secretos. Con `OPENAI_API_KEY`, la Responses API responde consultas abiertas con `store: false`; nunca recibe información financiera.

## Seguridad y escalabilidad

- Secretos solo en servidor y `.env.example` sin credenciales.
- Entrada limitada, normalizada y rate limit básico por instancia.
- Cantidad validada entre 1 y 8 en el adaptador de ticketing.
- Registry desacoplado para múltiples proveedores y modos embedded, modal y redirect.
- Esquema PostgreSQL con integridad referencial e índices de descubrimiento.

Para producción se requieren un rate limiter distribuido, memoria persistente con TTL, autenticación para operaciones de organizadores, observabilidad, verificación de webhooks, idempotencia y pruebas de contrato contra el proveedor elegido.

## Dirección visual

Nightlife minimalista sobre negro, acento lima, tipografía editorial grande, gradientes abstractos y superficies translúcidas. El agente es parte de la identidad de producto y no un chatbot genérico. La interfaz es mobile-first y respeta `prefers-reduced-motion`.
