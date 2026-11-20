export type Mensaje = { de: "cliente" | "negocio"; texto: string };

export type PreguntaFrecuente = { pregunta: string; respuesta: string };

export type Giro = {
  slug: string;
  nombre: string;
  /** Cómo se llama a quien te compra: pacientes, clientes, prospectos. */
  persona: string;
  /** Frase de la tarjeta "¿Te suena?" del inicio. */
  identificador: string;
  titular: string;
  subtitulo: string;
  dolores: [string, string, string];
  capas: { atraer: string; convertir: string; crecer: string };
  etiquetaAsistente: string;
  chat: Mensaje[];
  incluye: string[];
  faq: PreguntaFrecuente[];
  /** Giros de salud: la publicidad requiere aviso ante COFEPRIS. */
  cofepris: boolean;
};

export const NOTA_COFEPRIS =
  "La publicidad de servicios de salud requiere aviso ante COFEPRIS. Nosotros tramitamos el aviso de publicidad de tus anuncios.";

const RESPUESTA_COFEPRIS =
  "Sí. Tramitamos el aviso de publicidad ante COFEPRIS para tus anuncios de salud.";

export const giros: Giro[] = [
  {
    slug: "clinicas-dentales",
    nombre: "Clínicas dentales",
    persona: "pacientes",
    identificador: "Tus pacientes se van a medio tratamiento.",
    titular: "Llenamos tu agenda con pacientes que sí llegan a su cita.",
    subtitulo:
      "Anuncios por tratamiento, un agente que contesta en segundos y una app que trae de vuelta a quien dejó el tratamiento a la mitad.",
    dolores: [
      "Preguntan el precio por mensaje y desaparecen.",
      "Agendan una valoración y no llegan.",
      "Empiezan un tratamiento y se quedan a la mitad.",
    ],
    capas: {
      atraer:
        "Anuncios en Instagram y Facebook por tratamiento (ortodoncia, implantes, blanqueamiento) y por zona de Guadalajara.",
      convertir:
        "Un agente en WhatsApp e Instagram que contesta en segundos, entiende qué tratamiento busca la persona y le agenda su valoración.",
      crecer:
        "Recordatorios de cita, seguimiento a tratamientos a medias y aviso de limpieza cada 6 meses desde la app de tu clínica.",
    },
    etiquetaAsistente: "Asistente de tu clínica",
    chat: [
      { de: "cliente", texto: "Hola, ¿cuánto cuesta un blanqueamiento?" },
      {
        de: "negocio",
        texto:
          "¡Hola! Con gusto te ayudo. El precio depende de cada caso, por eso primero hacemos una valoración. ¿Te acomoda el martes o el jueves por la tarde?",
      },
      { de: "cliente", texto: "El jueves." },
      {
        de: "negocio",
        texto:
          "Listo, quedó el jueves a las 5:00 pm. Un día antes te mando un recordatorio para que no se te pase.",
      },
    ],
    incluye: [
      "Anuncios por tratamiento, hechos con IA y por zona",
      "Agente de WhatsApp e Instagram que contesta, filtra y agenda",
      "App de tu clínica con recordatorios y reseñas",
      "Seguimiento a pacientes con tratamientos a medias",
      "Aviso de publicidad ante COFEPRIS",
      "Reporte de costo por prospecto y citas por cada 100 conversaciones",
    ],
    faq: [
      {
        pregunta: "¿El agente da diagnósticos?",
        respuesta:
          "No. Orienta, resuelve dudas comunes y agenda la valoración. El diagnóstico siempre lo da tu dentista.",
      },
      {
        pregunta: "¿Y si un paciente quiere hablar con una persona?",
        respuesta:
          "Se lo pasamos a tu equipo con todo el contexto de la conversación, sin que tenga que repetirse.",
      },
      {
        pregunta: "¿Los anuncios cumplen con la regulación?",
        respuesta: RESPUESTA_COFEPRIS,
      },
    ],
    cofepris: true,
  },
  {
    slug: "fisioterapia",
    nombre: "Fisioterapia",
    persona: "pacientes",
    identificador: "Tus pacientes van a una cita y ya no vuelven.",
    titular: "Que tus pacientes terminen su tratamiento.",
    subtitulo:
      "Anuncios por tipo de dolor, un agente que agenda la primera cita y una app que los acompaña sesión por sesión.",
    dolores: [
      "Van a una cita y no regresan a las siguientes.",
      "Tu agenda tiene huecos que nadie llena.",
      "Los mensajes llegan mientras estás atendiendo y se quedan sin respuesta.",
    ],
    capas: {
      atraer:
        "Anuncios por tipo de dolor o lesión (espalda, rodilla, lesión deportiva) dirigidos a la gente de tu zona.",
      convertir:
        "El agente contesta de inmediato, explica cómo funciona la primera cita, ofrece paquetes de sesiones y agenda.",
      crecer:
        "Recordatorio antes de cada sesión, ejercicios para hacer en casa y mensajes para reactivar a quien dejó de venir.",
    },
    etiquetaAsistente: "Asistente de tu consultorio",
    chat: [
      {
        de: "cliente",
        texto: "Me duele la rodilla desde hace dos semanas, ¿me pueden ver?",
      },
      {
        de: "negocio",
        texto:
          "Claro, lamento que estés con dolor. Tenemos lugar esta semana para una primera valoración. ¿Prefieres en la mañana o en la tarde?",
      },
      { de: "cliente", texto: "En la tarde." },
      {
        de: "negocio",
        texto:
          "Perfecto, te agendo a las 6:00 pm. Ven con ropa cómoda. Te escribo un rato antes para confirmar.",
      },
    ],
    incluye: [
      "Anuncios por tipo de dolor o lesión, hechos con IA",
      "Agente de WhatsApp e Instagram para primera cita y paquetes",
      "App con recordatorio por sesión y ejercicios en casa",
      "Reactivación de pacientes que dejaron de venir",
      "Aviso de publicidad ante COFEPRIS",
      "Reporte de costo por prospecto y pacientes que regresan",
    ],
    faq: [
      {
        pregunta: "¿El agente recomienda tratamientos?",
        respuesta:
          "No. Solo orienta sobre cómo funciona la primera cita y agenda. La valoración y el tratamiento los define tu fisioterapeuta.",
      },
      {
        pregunta: "¿Funciona si atiendo solo y no tengo recepcionista?",
        respuesta:
          "Justo para eso sirve: contesta mientras estás con un paciente y te deja la agenda ordenada.",
      },
      {
        pregunta: "¿Los anuncios cumplen con la regulación?",
        respuesta: RESPUESTA_COFEPRIS,
      },
    ],
    cofepris: true,
  },
  {
    slug: "spas",
    nombre: "Spas",
    persona: "clientes",
    identificador: "Solo te llegan los mismos clientes de siempre.",
    titular: "Clientes nuevos cada semana, no solo los de siempre.",
    subtitulo:
      "Anuncios de tus paquetes y fechas especiales, un agente que reserva y cobra anticipo, y una app para que regresen.",
    dolores: [
      "Siempre vienen las mismas personas.",
      "Reservan y no llegan.",
      "Hay temporadas en las que casi no entra nadie.",
    ],
    capas: {
      atraer:
        "Anuncios de tus paquetes, del Día de las Madres, de San Valentín y de las temporadas que más te cuestan, dirigidos a gente nueva de tu zona.",
      convertir:
        "El agente contesta, recomienda un paquete, reserva el horario y cobra un anticipo para que quien reserva sí llegue.",
      crecer:
        "Membresías, tarjetas de regalo y mensajes para que las clientas que no vienen hace meses vuelvan.",
    },
    etiquetaAsistente: "Asistente de tu spa",
    chat: [
      { de: "cliente", texto: "Hola, quiero regalarle un masaje a mi mamá." },
      {
        de: "negocio",
        texto:
          "¡Qué lindo detalle! Tenemos tarjeta de regalo o puedes reservarle un día. ¿Qué prefieres?",
      },
      { de: "cliente", texto: "Reservarle un día, el sábado." },
      {
        de: "negocio",
        texto:
          "Perfecto. Para apartar el horario pedimos un pequeño anticipo. Te mando el link de pago ahora mismo.",
      },
    ],
    incluye: [
      "Anuncios de paquetes y fechas especiales, hechos con IA",
      "Agente de WhatsApp e Instagram que reserva y cobra anticipo",
      "App con membresías y tarjetas de regalo",
      "Mensajes para reactivar a clientas que ya no vienen",
      "Reseñas pedidas en el momento correcto",
      "Reporte de costo por prospecto y clientas que regresan",
    ],
    faq: [
      {
        pregunta: "¿Cómo se cobra el anticipo?",
        respuesta:
          "Con un link de pago que el agente manda en la conversación. Lo configuramos contigo en el diagnóstico.",
      },
      {
        pregunta: "¿Puedo cambiar paquetes y precios cuando quiera?",
        respuesta: "Sí. El sistema se ajusta a tu operación, no al revés.",
      },
      {
        pregunta: "¿Reemplaza a mi recepción?",
        respuesta: "No. Contesta lo repetido y tu equipo atiende lo importante.",
      },
    ],
    cofepris: false,
  },
  {
    slug: "restaurantes",
    nombre: "Restaurantes",
    persona: "clientes",
    identificador:
      "El viernes no te da tiempo de contestar y el martes no te escribe nadie.",
    titular:
      "Reservas y pedidos contestados en segundos, aunque estés en hora pico.",
    subtitulo:
      "Anuncios para llenar tus días flojos, un agente que toma reservas y pedidos, y una app que trae de vuelta a tus clientes frecuentes.",
    dolores: [
      "El fin de semana los mensajes se quedan sin contestar.",
      "Los martes y miércoles el restaurante está vacío.",
      "Quien viene una vez no regresa.",
    ],
    capas: {
      atraer:
        "Anuncios de eventos, promociones y platillos para los días flojos, dirigidos a quienes viven o trabajan cerca.",
      convertir:
        "El agente contesta horarios y menú, toma reservas y pedidos por WhatsApp, incluso en plena hora pico.",
      crecer:
        "Clientes frecuentes, mensajes de cumpleaños y reseñas pedidas después de la visita.",
    },
    etiquetaAsistente: "Asistente de tu restaurante",
    chat: [
      { de: "cliente", texto: "¿Tienen mesa para 6 el sábado a las 3?" },
      {
        de: "negocio",
        texto:
          "¡Hola! Sí tenemos lugar el sábado a las 3:00 pm para 6 personas. ¿A nombre de quién la aparto?",
      },
      { de: "cliente", texto: "Luis Ramírez." },
      {
        de: "negocio",
        texto:
          "Listo, Luis: mesa para 6, sábado 3:00 pm. Te escribo el viernes para confirmar. ¡Los esperamos!",
      },
    ],
    incluye: [
      "Anuncios para días flojos y eventos, hechos con IA",
      "Agente de WhatsApp e Instagram para reservas y pedidos",
      "App con clientes frecuentes y mensajes de cumpleaños",
      "Reseñas pedidas después de cada visita",
      "Reporte de costo por prospecto y clientes que regresan",
    ],
    faq: [
      {
        pregunta: "¿Puede tomar pedidos para llevar?",
        respuesta:
          "Sí. Toma el pedido, confirma datos y te lo pasa ordenado para que tu cocina lo prepare.",
      },
      {
        pregunta: "¿Y si cambia el menú del día?",
        respuesta:
          "Lo actualizas tú o nos avisas y lo cambiamos. El agente siempre contesta con lo vigente.",
      },
      {
        pregunta: "¿Reemplaza a mis meseros o a mi anfitrión?",
        respuesta:
          "No. Solo atiende los mensajes para que tu equipo se dedique a quienes están en el restaurante.",
      },
    ],
    cofepris: false,
  },
  {
    slug: "inmobiliarias",
    nombre: "Inmobiliarias",
    persona: "prospectos",
    identificador:
      "Te llegan muchos prospectos y casi ninguno quiere comprar en serio.",
    titular: "Solo hablas con prospectos que sí quieren comprar.",
    subtitulo:
      "Anuncios por desarrollo y zona, un agente que filtra por presupuesto y agenda visitas, y un seguimiento que no se olvida de nadie.",
    dolores: [
      "Llegan muchos prospectos y pocos son serios.",
      "Los seguimientos se alargan meses.",
      "Tus asesores pierden tiempo persiguiendo a todos por igual.",
    ],
    capas: {
      atraer:
        "Anuncios por desarrollo y por zona, con la propiedad correcta para el prospecto correcto.",
      convertir:
        "El agente pregunta presupuesto, zona y fecha estimada de compra, y solo agenda visita con quien encaja.",
      crecer:
        "Seguimiento automático a quienes todavía no deciden y mensajes para pedir referidos a quienes ya compraron.",
    },
    etiquetaAsistente: "Asistente de tu inmobiliaria",
    chat: [
      {
        de: "cliente",
        texto: "Vi el departamento en Zapopan, ¿sigue disponible?",
      },
      {
        de: "negocio",
        texto:
          "Hola, sí sigue disponible. Para mostrarte lo que mejor te acomode: ¿qué presupuesto tienes en mente y para cuándo piensas comprar?",
      },
      { de: "cliente", texto: "Unos 3 millones, en unos 2 meses." },
      {
        de: "negocio",
        texto:
          "Perfecto, encaja. Puedo agendarte una visita el sábado por la mañana con un asesor. ¿Te late?",
      },
    ],
    incluye: [
      "Anuncios por desarrollo y zona, hechos con IA",
      "Agente de WhatsApp e Instagram que califica y agenda visitas",
      "Filtro por presupuesto, zona y fecha de compra",
      "Seguimiento automático a prospectos que aún no deciden",
      "Mensajes para pedir referidos",
      "Reporte de costo por prospecto y visitas por cada 100 conversaciones",
    ],
    faq: [
      {
        pregunta: "¿Qué pasa con los prospectos que no encajan?",
        respuesta:
          "Se atienden con amabilidad y quedan en seguimiento. Tus asesores solo reciben a quien sí está listo para ver una propiedad.",
      },
      {
        pregunta: "¿Se conecta con mi sistema o mis hojas actuales?",
        respuesta:
          "Lo revisamos en el diagnóstico. La idea es que tus asesores sigan trabajando como ya lo hacen.",
      },
      {
        pregunta: "¿Funciona con varios desarrollos a la vez?",
        respuesta:
          "Sí. El agente conoce cada desarrollo y contesta según lo que el prospecto pregunta.",
      },
    ],
    cofepris: false,
  },
  {
    slug: "medicina-estetica",
    nombre: "Medicina estética",
    persona: "pacientes",
    identificador: "Te preguntan el precio y desaparecen.",
    titular: "Convierte el «¿cuánto cuesta?» en una valoración agendada.",
    subtitulo:
      "Anuncios por procedimiento, un agente que califica y agenda con anticipo, y seguimiento para que regresen a sus retoques.",
    dolores: [
      "Preguntan el precio y no vuelven a contestar.",
      "Agendan y no llegan.",
      "Casi no hay seguimiento después del procedimiento.",
    ],
    capas: {
      atraer:
        "Anuncios por procedimiento dirigidos a quien de verdad lo está considerando en tu zona.",
      convertir:
        "El agente responde de inmediato, explica que el precio depende de la valoración, califica a la persona y agenda con anticipo.",
      crecer:
        "Seguimiento después del procedimiento y recordatorio para retoques y sesiones de mantenimiento.",
    },
    etiquetaAsistente: "Asistente de tu clínica",
    chat: [
      {
        de: "cliente",
        texto: "¿Cuánto cuesta el tratamiento de ácido hialurónico?",
      },
      {
        de: "negocio",
        texto:
          "¡Hola! El costo depende de cada persona y de la zona, por eso lo definimos en una valoración con la doctora. ¿Te agendo una esta semana?",
      },
      { de: "cliente", texto: "Sí, ¿qué día hay?" },
      {
        de: "negocio",
        texto:
          "Tengo miércoles 11:00 am o viernes 4:00 pm. Para apartarlo pedimos un pequeño anticipo que se descuenta de tu tratamiento.",
      },
    ],
    incluye: [
      "Anuncios por procedimiento, hechos con IA",
      "Agente de WhatsApp e Instagram que califica y agenda con anticipo",
      "App con seguimiento después del procedimiento",
      "Recordatorios de retoques y mantenimiento",
      "Aviso de publicidad ante COFEPRIS",
      "Reporte de costo por prospecto y valoraciones agendadas",
    ],
    faq: [
      {
        pregunta: "¿El agente da precios?",
        respuesta:
          "Solo los que tú decidas compartir. Por defecto lleva la conversación hacia la valoración, que es donde se define el tratamiento.",
      },
      {
        pregunta: "¿El agente recomienda procedimientos?",
        respuesta:
          "No. Orienta y agenda. Cualquier recomendación médica la hace tu doctora en la valoración.",
      },
      {
        pregunta: "¿Los anuncios cumplen con la regulación?",
        respuesta: RESPUESTA_COFEPRIS,
      },
    ],
    cofepris: true,
  },
];

export function obtenerGiro(slug: string): Giro | undefined {
  return giros.find((g) => g.slug === slug);
}
