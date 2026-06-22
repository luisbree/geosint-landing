"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    if (isPrivacyOpen || isTermsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isPrivacyOpen, isTermsOpen]);

  return (
    <footer className="bg-marine-dark text-gray-300 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle graphic accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/5">

          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <img src="/logo_geosint_2.svg" alt="GeoSint Logo" className="h-8 w-auto object-contain" />
              <span className="text-xl font-heading font-extrabold tracking-tight text-white flex items-center">
                Geo<span className="text-accent">Sint</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Plataforma autogestiva de análisis y gestión de datos ambientales para consultoras. Decisiones técnicas y normativas con total autonomía y precisión.
            </p>
            {/* Social icons */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent/20 hover:text-white rounded-lg transition-colors border border-white/5 flex items-center justify-center" aria-label="WhatsApp">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.592 1.97 14.12 .946 11.49.945c-5.442 0-9.869 4.372-9.873 9.802-.001 1.83.488 3.619 1.416 5.176l-1.041 3.8L5.952 19.3c1.517.828 3.033 1.254 6.695.854zm10.982-6.2c-.3-.15-1.774-.875-2.048-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.511-1.748-4.71-3.411-5.174-4.21-.175-.3-.025-.463.124-.612.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C8.75 6.6 8 4.775 7.674 3.975c-.318-.765-.64-.659-.877-.671-.227-.012-.488-.013-.75-.013-.262 0-.687.1-.1.049 1.05.95 1.6 2.525 1.625 2.575.025.05 1.55 2.366 3.756 3.32.524.227 1.05.362 1.488.5.525.162 1.001.137 1.376.082.418-.062 1.275-.52 1.455-1.02.18-.5.18-.925.125-1.02-.055-.095-.205-.15-.505-.3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Navegación</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-accent transition-colors font-light">Inicio</a>
              </li>
              {/* 
              <li>
                <a href="#modules" className="hover:text-accent transition-colors font-light">Soluciones Autogestivas</a>
              </li>
              */}
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors font-light">DIM Data Bus</a>
              </li>
              <li>
                <a href="#success-stories" className="hover:text-accent transition-colors font-light">Casos de Éxito</a>
              </li>
            </ul>
          </div>

          {/* Legal and compliance (2.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Sustento Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Nacional N° 25.675 Ley General del Ambiente</span>
              </li>
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Nacional N° 25.688 Régimen de Gestión Ambiental de Aguas</span>
              </li>
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Provincial N° 11.723 Ley Integral del Medio Ambiente</span>
              </li>
              <li>
                <span className="text-gray-400 font-technical font-light block">Ley Provincial N° 12.257 Código de Aguas</span>
              </li>
              <li>
                <span className="text-gray-400 font-technical font-light block">Decreto N° 1741/96, Resolución N° 153/06, Resolución N° 178/06</span>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-accent transition-colors font-light text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-accent transition-colors font-light text-left"
                >
                  Términos de Servicio
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] text-gray-500 font-medium">
          <div className="text-center md:text-left">
            <span>GeoSint © {currentYear}. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-1 items-center">
            <span>Decisiones Fundamentadas en Inteligencia Ambiental.</span>
          </div>
        </div>

      </div>

      {isPrivacyOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="bg-[#0b1a30] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#071324]">
              <h3 className="text-sm uppercase font-extrabold tracking-widest text-white">
                Política de Privacidad
              </h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-gray-300 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 text-left">
              <h2 className="text-lg font-heading font-extrabold text-white text-left border-b border-white/5 pb-4">
                POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS – GEOSINT
              </h2>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">1.</span> MARCO LEGAL Y CONSENTIMIENTO INFORMADO
                </h4>
                <p className="text-gray-400 font-light">
                  El presente documento establece las políticas de tratamiento de la información y protección de datos de la plataforma GeoSint (en adelante, "el Sistema"), en estricto cumplimiento de la Ley de Protección de Datos Personales N° 25.326, su Decreto Reglamentario N° 1558/2001 y las normativas emitidas por la Agencia de Acceso a la Información Pública de la República Argentina.
                </p>
                <p className="text-gray-400 font-light">
                  El registro, acceso o utilización del Sistema implica el consentimiento libre, expreso e informado del Usuario para la recolección, almacenamiento y tratamiento de sus datos conforme a los términos aquí estipulados.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">2.</span> NATURALEZA DE LOS DATOS RECOLECTADOS
                </h4>
                <p className="text-gray-400 font-light">
                  El Sistema almacena dos categorías de información:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400 font-light">
                  <li>
                    <strong className="text-white">Datos de Registro y Autenticación:</strong> Nombre, apellido, dirección de correo electrónico e identificadores de sesión.
                  </li>
                  <li>
                    <strong className="text-white">Datos Operativos de Terceros:</strong> Información técnico-ambiental subida por el Usuario en el marco de su actividad profesional (coordenadas geográficas, reportes de campo, mediciones de analitos, material fotográfico). El Usuario declara poseer los derechos o autorizaciones pertinentes sobre la información ambiental cargada, eximiendo a GeoSint de cualquier responsabilidad derivada de su origen.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">3.</span> INFRAESTRUCTURA DE ALMACENAMIENTO Y MULTITENANCY
                </h4>
                <p className="text-gray-400 font-light">
                  La base de datos se encuentra alojada en servidores en la nube provistos por Google Cloud (Firebase Auth, Firestore, Cloud Storage).
                </p>
                <p className="text-gray-400 font-light">
                  GeoSint garantiza una arquitectura de aislamiento de datos (Multitenancy). La información operativa es estrictamente confidencial y se encuentra segmentada criptográficamente por inquilino (Empresa/Tenant). GeoSint no explota, cede, comercializa ni transfiere bajo ningún concepto la información de sus Usuarios a terceros.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">4.</span> POLÍTICA ESTRICTA DE RETENCIÓN Y SUPRESIÓN DE DATOS
                </h4>
                <p className="text-gray-400 font-light">
                  El tratamiento de los datos operativos se encuentra sujeto al estado de la suscripción del Usuario o Empresa:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-400 font-light">
                  <li>
                    <strong className="text-white">Período de Gracia:</strong> Ante la finalización del período de prueba (Trial) o la suspensión del servicio, el Usuario dispondrá de un plazo improrregable de catorce (14) días corridos (hasta el día 21 desde el inicio del período de prueba o fecha de corte) para exportar una copia de seguridad íntegra de sus datos operativos. Durante este período, el acceso operativo al Sistema permanecerá bloqueado.
                  </li>
                  <li>
                    <strong className="text-white">Purga Definitiva:</strong> Cumplido el plazo estipulado en el punto anterior sin que medie reactivación de la suscripción, el Sistema ejecutará la supresión automática, definitiva e irrecuperable de los datos operativos (estaciones, reportes, planillas y fotografías). GeoSint no será responsable por la pérdida de información que no haya sido exportada por el Usuario en tiempo y forma.
                  </li>
                </ul>
                <p className="text-gray-400 font-light">
                  A los fines de facilitar la eventual reactivación de la cuenta, GeoSint conservará únicamente el perfil de identificación del Usuario y de la Empresa matriz, previa seudonimización de datos cuando correspondiere.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">5.</span> EJERCICIO DE LOS DERECHOS ARCO Y ÓRGANO DE CONTROL
                </h4>
                <p className="text-gray-400 font-light">
                  El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto (Art. 14, inc. 3 de la Ley N° 25.326).
                </p>
                <p className="text-gray-400 font-light">
                  Para ejercer los derechos de acceso, rectificación, actualización o supresión, el titular deberá enviar una solicitud formal al correo electrónico: <a href="mailto:contacto@geosint.com.ar" className="text-accent hover:underline">contacto@geosint.com.ar</a>.
                </p>
                <p className="text-gray-400 font-light">
                  Se deja constancia expresa de que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-end bg-[#071324]">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="px-5 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:shadow-accent/20"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      {isTermsOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
          onClick={() => setIsTermsOpen(false)}
        >
          <div
            className="bg-[#0b1a30] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#071324]">
              <h3 className="text-sm uppercase font-extrabold tracking-widest text-white">
                Términos de Servicio
              </h3>
              <button
                onClick={() => setIsTermsOpen(false)}
                className="p-1.5 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-gray-300 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10 text-left">
              <h2 className="text-lg font-heading font-extrabold text-white text-left border-b border-white/5 pb-4">
                TÉRMINOS Y CONDICIONES DE USO – GEOSINT
              </h2>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">1.</span> ACEPTACIÓN DE LOS TÉRMINOS
                </h4>
                <p className="text-gray-400 font-light">
                  El presente documento establece los Términos y Condiciones (en adelante, los "Términos") que rigen el acceso y uso de la plataforma de software como servicio (SaaS) Dim Data Bus, operada bajo la marca GeoSint (en adelante, "el Sistema"). El acceso, registro o utilización del Sistema por parte de cualquier persona humana o jurídica (en adelante, el "Usuario" o "Empresa") implica la aceptación plena, expresa y sin reservas de los presentes Términos. Si no está de acuerdo con estos Términos, deberá abstenerse de utilizar el Sistema.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">2.</span> OBJETO DEL SERVICIO
                </h4>
                <p className="text-gray-400 font-light">
                  GeoSint provee una plataforma en la nube diseñada para la carga, gestión, estructuración y análisis de datos geoespaciales y ambientales en tiempo real. El Sistema opera como una herramienta de facilitación técnica e infraestructura, no constituyendo en ningún caso un servicio de consultoría ambiental, geológica o de ingeniería por parte de GeoSint.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">3.</span> LICENCIAS, PERÍODO DE PRUEBA (TRIAL) Y CUOTAS
                </h4>
                <p className="text-gray-400 font-light">
                  El acceso al Sistema se rige mediante un esquema de suscripción.
                </p>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">3.1. Período de Prueba:</strong> GeoSint podrá otorgar un período de prueba gratuito ("Trial") de siete (7) días corridos. Durante este período, el uso del Sistema estará sujeto a cuotas y límites estrictos de almacenamiento y transferencia de datos (límites de estaciones, reportes, planillas y material fotográfico), los cuales son informados en la interfaz del Sistema. GeoSint se reserva el derecho de modificar estos límites o cancelar el período de prueba en cualquier momento y sin previo aviso.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">4.</span> POLÍTICA DE RETENCIÓN, SUSPENSIÓN Y PODA DE DATOS
                </h4>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">4.1. Período de Gracia:</strong> Finalizado el período de prueba o ante la falta de pago de la suscripción, la cuenta del Usuario pasará a estado de Suspensión. A partir de ese momento, el Usuario dispondrá de un plazo improrrogable de catorce (14) días corridos para exportar sus datos operativos mediante las herramientas de copia de seguridad (.zip) provistas en el Sistema. Durante este período, las funcionalidades de carga y análisis permanecerán bloqueadas.
                </p>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">4.2. Purga Definitiva:</strong> Transcurrido el día veintiuno (21) desde el inicio del período de prueba o desde el vencimiento de la suscripción sin que medie renovación, GeoSint ejecutará la eliminación automática, definitiva e irrecuperable de toda la información operativa del Usuario (bases de datos de campo, reportes, anexos y fotografías). El Usuario exonera a GeoSint de cualquier responsabilidad por la pérdida de datos derivada de la aplicación de esta cláusula.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">5.</span> PROPIEDAD DE LOS DATOS Y LIMITACIÓN DE RESPONSABILIDAD
                </h4>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">5.1. Datos del Usuario:</strong> Toda la información técnica, ambiental y espacial cargada en el Sistema es de exclusiva propiedad de la Empresa/Usuario. GeoSint no adquiere ningún derecho de propiedad sobre dichos datos.
                </p>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">5.2. Exactitud y Uso de la Información:</strong> El Usuario es el único y exclusivo responsable por la exactitud, veracidad, calidad y legalidad de los datos cargados en el Sistema. GeoSint no audita, valida ni corrobora la información técnica o ambiental.
                </p>
                <p className="text-gray-400 font-light">
                  <strong className="text-white">5.3. Exención de Responsabilidad:</strong> GeoSint se exime de toda responsabilidad por daños directos, indirectos, lucro cesante, pérdida de chance o cualquier otro perjuicio que pudiera sufrir el Usuario o terceros (incluyendo organismos de control del Estado) como consecuencia del uso de la información procesada en el Sistema, la toma de decisiones basadas en los reportes generados, o la impericia en la carga de datos por parte de los técnicos del Usuario.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">6.</span> DISPONIBILIDAD DEL SERVICIO (SLA) Y FUERZA MAYOR
                </h4>
                <p className="text-gray-400 font-light">
                  El Sistema se proporciona "tal cual es" (as is) y "según disponibilidad". GeoSint utiliza infraestructura de terceros (Google Cloud Platform / Firebase) y no garantiza que el servicio sea ininterrumpido o libre de errores operacionales. GeoSint no será responsable por caídas del sistema, pérdida temporal de acceso o demoras en la transmisión de datos causadas por fallas en la conectividad a Internet, mantenimiento programado o eventos de fuerza mayor.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">7.</span> PROPIEDAD INTELECTUAL
                </h4>
                <p className="text-gray-400 font-light">
                  El código fuente, diseño, bases de datos subyacentes, algoritmos de enrutamiento, marcas, logotipos y todo el material que compone la arquitectura del Sistema GeoSint son de propiedad exclusiva de sus desarrolladores y están protegidos por las leyes de propiedad intelectual de la República Argentina y tratados internacionales. Queda terminantemente prohibida su reproducción, ingeniería inversa, descompilación o modificación total o parcial.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm flex items-center font-heading">
                  <span className="text-accent mr-2">8.</span> JURISDICCIÓN Y LEY APLICABLE
                </h4>
                <p className="text-gray-400 font-light">
                  Los presentes Términos se rigen por las leyes de la República Argentina. Para cualquier controversia derivada de la interpretación o ejecución de los mismos, las partes se someten a la jurisdicción de los Tribunales Ordinarios competentes de la ciudad de La Plata, Provincia de Buenos Aires, renunciando expresamente a cualquier otro fuero o jurisdicción que pudiera corresponder.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex justify-end bg-[#071324]">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="px-5 py-2 bg-accent hover:bg-accent/80 text-white rounded-lg text-xs font-bold transition-all shadow-lg hover:shadow-accent/20"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
