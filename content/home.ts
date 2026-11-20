import type { PreguntaFrecuente } from "./giros";

export const TITULAR_HERO = {
  inicio: "Tu negocio pierde clientes entre el anuncio y la cita.",
  destacado: "Nosotros cerramos ese hueco.",
};
// Alternativa de titular, por si prefieres usarla:
// "Construimos la infraestructura de IA de tu negocio: atrae clientes, les contesta y los agenda."

export const SUBTITULO_HERO =
  "Anuncios, agente de WhatsApp y una app propia para tu negocio. Todo conectado, todo hecho a tu medida.";

export const IDENTIFICADOR_OTRO = {
  nombre: "Otro negocio",
  frase: "Te escriben, no alcanzas a contestar y se van con otro.",
};

export type Capa = {
  numero: 1 | 2 | 3;
  nombre: "Atraer" | "Convertir" | "Crecer";
  resumen: string;
  detalle: string;
  seMide: string;
};

export const capas: Capa[] = [
  {
    numero: 1,
    nombre: "Atraer",
    resumen: "Anuncios en Instagram y Facebook hechos con IA, por giro y por zona.",
    detalle:
      "Creamos los anuncios de tu negocio pensando en quién los va a ver: tu giro, tu zona y el momento en que esa persona decide. Probamos varias versiones y nos quedamos con las que traen gente que sí escribe.",
    seMide: "Costo por prospecto",
  },
  {
    numero: 2,
    nombre: "Convertir",
    resumen:
      "Un agente en WhatsApp e Instagram que contesta en segundos, filtra y agenda o cobra.",
    detalle:
      "Cuando alguien escribe, recibe respuesta al instante, a cualquier hora. El agente resuelve las dudas de siempre, descarta a quien no encaja y deja la cita agendada o el pago hecho. Si hace falta una persona, te pasa la conversación completa.",
    seMide: "Citas por cada 100 conversaciones",
  },
  {
    numero: 3,
    nombre: "Crecer",
    resumen:
      "Una app propia del negocio con recordatorios, reseñas y reactivación de clientes.",
    detalle:
      "Después de la primera visita, la app se encarga de que tu cliente regrese: le recuerda su cita, le pide su reseña en el momento correcto y le escribe cuando lleva tiempo sin venir.",
    seMide: "Clientes que regresan",
  },
];

export const TEXTO_FLECHA_REGRESO =
  "Las reseñas y los datos de tus clientes hacen que los siguientes anuncios rindan más.";

export const comparativa = [
  {
    quien: "Agencias de anuncios",
    texto:
      "Te mandan prospectos a un WhatsApp que nadie contesta, y el dinero del anuncio se pierde en el camino.",
  },
  {
    quien: "Bots de WhatsApp",
    texto:
      "Solo contestan. No traen clientes nuevos ni hacen que los que ya tienes regresen.",
  },
  {
    quien: "The Bear AI",
    texto:
      "Conectamos las tres capas, anuncio, respuesta y seguimiento, y medimos el resultado de cada una.",
  },
];

export const DATO = {
  cifra: "4 de cada 10",
  texto: "mensajes que reciben los negocios en México llegan fuera de horario.",
  // Fuente indicada por el equipo; confirmar el enlace antes de publicar.
  fuente: "Fuente: Leadsales, citado por Expansión, julio 2026.",
};

export const pasos = [
  {
    titulo: "Diagnóstico gratis de 15 minutos",
    texto:
      "Platicamos de tu negocio, de cuántos mensajes te llegan y de dónde se te caen los clientes.",
  },
  {
    titulo: "Propuesta a la medida de tu giro",
    texto:
      "Te decimos qué haríamos, en qué orden y cómo vamos a medir que funciona.",
  },
  {
    titulo: "Sistema funcionando y medido",
    texto:
      "Lo ponemos a trabajar y te enseñamos los números: prospectos, citas y clientes que regresan.",
  },
];

export const faqInicio: PreguntaFrecuente[] = [
  {
    pregunta: "¿Esto reemplaza a mi equipo?",
    respuesta:
      "No. El agente contesta lo repetido y tu equipo atiende lo importante.",
  },
  {
    pregunta: "¿El agente da diagnósticos médicos?",
    respuesta:
      "No. Solo orienta con información general y agenda la cita. Cualquier diagnóstico lo da tu profesional de la salud.",
  },
  {
    pregunta: "¿Los anuncios cumplen con COFEPRIS?",
    respuesta:
      "Sí. Para los giros de salud tramitamos el aviso de publicidad ante COFEPRIS.",
  },
  {
    pregunta: "¿Cuánto tarda en estar listo?",
    respuesta: "[TIEMPO REAL]",
  },
  {
    pregunta: "¿Cuánto cuesta?",
    respuesta:
      "Depende de tu giro y de lo que necesites, y te lo decimos en el diagnóstico. [RANGO DE PRECIO]",
  },
];
