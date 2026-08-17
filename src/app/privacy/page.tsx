import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Política de privacidad | Conexión Glocal",
  description: "Información sobre el tratamiento de datos en el sitio de Conexión Glocal.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      updated="16 de agosto de 2026"
      sections={[
        { title: "Datos que recopilamos", paragraphs: ["Cuando utilizas los formularios podemos recibir tu nombre, correo, teléfono, empresa, sitio web, servicio de interés y el mensaje que decidas compartir.", "El asistente automatizado procesa el texto de la conversación para responder. No compartas contraseñas, información financiera ni datos personales sensibles."] },
        { title: "Finalidad", paragraphs: ["Usamos la información para responder solicitudes, preparar diagnósticos o propuestas, gestionar suscripciones y mejorar la atención del sitio."] },
        { title: "Proveedores", paragraphs: ["Los formularios pueden ser procesados por Netlify. Cuando la integración de inteligencia artificial está habilitada, los mensajes del asistente pueden ser procesados por OpenAI. Cada proveedor aplica sus propios términos y medidas de seguridad."] },
        { title: "Conservación y derechos", paragraphs: ["Conservamos los datos solo durante el tiempo necesario para atender la solicitud y cumplir obligaciones aplicables. Puedes solicitar acceso, corrección o eliminación escribiendo a hola@imagen-glocal.com."] },
        { title: "Cambios", paragraphs: ["Podemos actualizar esta política cuando cambien el sitio, los proveedores o las obligaciones aplicables. La fecha de actualización aparecerá en esta página."] },
      ]}
    />
  )
}
