export type DatosFormulario = {
  nombre: string;
  negocio: string;
  giro: string;
  whatsapp: string;
  acepta: boolean;
};

export type ErroresFormulario = Partial<Record<keyof DatosFormulario, string>>;

const MIN_DIGITOS_TELEFONO = 10;

export function validarDiagnostico(datos: DatosFormulario): ErroresFormulario {
  const errores: ErroresFormulario = {};

  if (!datos.nombre.trim()) errores.nombre = "Escribe tu nombre.";
  if (!datos.negocio.trim()) errores.negocio = "Escribe el nombre de tu negocio.";
  if (!datos.giro.trim()) errores.giro = "Elige a qué se dedica tu negocio.";

  const digitos = datos.whatsapp.replace(/\D/g, "");
  if (digitos.length < MIN_DIGITOS_TELEFONO) {
    errores.whatsapp = "Escribe tu WhatsApp con lada, a 10 dígitos.";
  }

  if (!datos.acepta) {
    errores.acepta = "Necesitamos que aceptes el aviso de privacidad para continuar.";
  }

  return errores;
}
