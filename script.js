const datosPracticas = {
    practica1: {
        titulo: "Práctica 1: Desensamble y Armado de Hardware",
        objetivo: "Identificar físicamente los componentes internos de una computadora y comprender el procedimiento correcto para su desarmado y armado.",
        herramientas: [
            "Destornillador de cruz.",
            "Superficie plana y aislante."
        ],
        hardware: `
            <li><strong>Tarjeta Madre:</strong> Mercury PVCLE266M-L V1.2 (Factor de forma Micro-ATX). Chipset VIA VT8606 (ProSavage PN133) con gráficos integrados S3 Graphics. Socket de CPU 370. 2 ranuras SDRAM, 2 puertos PCI (amarillos) y 1 puerto CNR (sin puerto AGP). Puertos I/O Traseros: 1 Paralelo LPT, 1 Serial COM, puertos PS/2 para teclado/mouse, 2 USB y 1 salida VGA.</li>
            <li><strong>Procesador y Enfriamiento:</strong> Intel Pentium III (Velocidad estimada entre 700 MHz y 1.3 GHz con FSB de 100/133 MHz). Enfriamiento por disipador de aluminio activo con ventilador pequeño sujeto por clips.</li>
            <li><strong>Memoria y Almacenamiento:</strong> 2 módulos de PC133 SDRAM (de 128 MB o 256 MB c/u) a 133 MHz. Disco Duro de 3.5" con conexión por cable plano IDE (listón gris o de colores). Lectora de CD-ROM o DVD-ROM.</li>
            <li><strong>Fuente de Poder:</strong> Marca KIMEX (o KMEX) tipo ATX con certificación NOM. Conector principal de 20 pines, conector auxiliar de 4 pines para CPU, conectores Molex de 4 pines (para IDE) y conector Berg para disquetera.</li>
        `,
        fases: `
            <p><strong>A. Fase de Desensamble:</strong></p>
            <ul>
                <li>Se retiraron los tornillos del panel lateral del gabinete.</li>
                <li>Se desconectaron los cables de energía de la tarjeta madre (20 pines) y del CPU.</li>
                <li>Se extrajeron los módulos de memoria RAM abriendo las muescas de los slots.</li>
                <li>Se desconectaron los cables de datos de bus IDE del disco duro y de la lectora.</li>
                <li>Se desatornilló la fuente de poder y se deslizaron los dispositivos de almacenamiento para sacarlos.</li>
            </ul>
            <p><strong>B. Fase de Ensamble:</strong></p>
            <ul>
                <li>Se reinstaló la tarjeta madre asegurando la coincidencia con los postes de soporte del chasis.</li>
                <li>Se insertó la memoria RAM a presión hasta que los seguros cerraron de forma automática.</li>
                <li>Se conectaron los cables del panel frontal (botón de encendido, LEDs e interfaces USB).</li>
                <li>Se verificaron las conexiones finales y se cerró la tapa lateral con sus respectivos tornillos.</li>
            </ul>

            <h4 style="color: var(--p-color); margin-top: 1.5rem; font-size: 1.1rem;"><i class="fa-solid fa-camera"></i> Evidencia Fotográfica del Proceso</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p1/WhatsApp Image 2026-02-17 at 9.35.38 PM (1).jpeg" alt="Evidencia Desensamble 1" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Inspección Inicial de Placa</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p1/WhatsApp Image 2026-02-17 at 9.35.39 PM.jpeg" alt="Evidencia Desensamble 2" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Desconexión de Periféricos e IDE</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p1/WhatsApp Image 2026-02-17 at 10.52.52 PM.jpeg" alt="Evidencia Ensamble" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Alineación de Chasis y POST</span>
                </div>
            </div>
        `,
        conclusiones: "El hardware analizado corresponde a un equipo antiguo u orientado a oficina de bajo costo. Se determinó que mantener el orden y la organización de los tornillos es vital durante el proceso. Es indispensable conocer a fondo la función y ubicación de los puertos y conectores para manipular el hardware de forma correcta y evitar daños permanentes."
    },
    practica2: {
        titulo: "Práctica 2: Identificación de Procesadores Analizados",
        objetivo: "Realizar la inspección física y técnica de cinco modelos distintos de procesadores de la marca Intel, comprendiendo la evolución de sus arquitecturas, sockets y litografías.",
        herramientas: [
            "Inspección visual y códigos de lote de CPUs.",
            "Hojas de especificaciones técnicas (Intel Ark)."
        ],
        hardware: `
            <li><strong>Intel Pentium Dual-Core E2140:</strong> 2 núcleos físicos | 1.60 GHz | Caché L2 de 1 MB compartido | FSB 800 MHz | Socket LGA 775 | 65 nm | TDP 65W. (Arquitectura Core de bajo costo).</li>
            <li><strong>Intel Pentium 4 - 531:</strong> 1 núcleo físico (2 hilos con Hyper-Threading) | 3.00 GHz | Caché L2 de 1 MB | FSB 800 MHz | Socket LGA 775 | 90 nm | TDP 84W. (Arquitectura Prescott con soporte de 64 bits).</li>
            <li><strong>Intel Celeron D 352:</strong> 1 núcleo | 3.20 GHz | Caché L2 de 512 KB | FSB 533 MHz | Socket LGA 775 | 65 nm | TDP 86W. (Revisión Cedar Mill, más fresca y eficiente).</li>
            <li><strong>Intel Celeron 1100A (Tualatin):</strong> 1 núcleo | 1.1 GHz | Caché L2 de 256 KB | FSB 100 MHz | Socket PGA 370 | Voltaje 1.5V | 130 nm. (Apreciado por alto margen de overclocking).</li>
            <li><strong>Intel Xeon MP (Cranford/Potomac):</strong> Diseñado para servidores de alta disponibilidad (Año 2005) | Socket Socket 604 | Soporta instrucciones de 64 bits y placas base con múltiples sockets físicos en paralelo.</li>
        `,
        fases: `
            <p><strong>Metodología de Análisis:</strong></p>
            <p><strong>Fase 1:</strong> Desmontaje de disipador de cada procesador y extraccion de este mismo.</p>
            <p><strong>Fase 2:</strong> Lectura del encapsulado metálico (IHS) de cada CPU para extraer el modelo y número de serie.</p>
            <p><strong>Fase 3:</strong> Instalacion de procesador y disipador.</p>

            <h4 style="color: var(--p-color); margin-top: 1.5rem; font-size: 1.1rem;"><i class="fa-solid fa-camera"></i> Galería de Procesadores Inspeccionados</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 12px;">
                <div style="background: #111827; padding: 6px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.49 PM.jpeg" alt="Pentium Dual-Core E2140" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 6px; font-weight: bold;">Pentium E2140</span>
                </div>
                <div style="background: #111827; padding: 6px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.49 PM (2).jpeg" alt="Pentium 4 531" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 6px; font-weight: bold;">Pentium 4 531</span>
                </div>
                <div style="background: #111827; padding: 6px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.50 PM.jpeg" alt="Celeron D 352" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 6px; font-weight: bold;">Celeron D 352</span>
                </div>
                <div style="background: #111827; padding: 6px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.50 PM (1).jpeg" alt="Celeron 1100A Tualatin" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 6px; font-weight: bold;">Celeron 1100A</span>
                </div>
                <div style="background: #111827; padding: 6px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p2/WhatsApp Image 2026-02-18 at 6.26.29 PM.jpeg" alt="Intel Xeon MP" style="width: 100%; height: 140px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.75rem; color: var(--text-light); display: block; margin-top: 6px; font-weight: bold;">Intel Xeon MP</span>
                </div>
            </div>
        `,
        conclusiones: "La comparación de estos procesadores demuestra la transición tecnológica de la industria hacia la computación multinúcleo y la reducción de litografías, permitiendo mayor frecuencia de reloj con un consumo de energía y disipación térmica optimizados."
    },
    practica3: {
        titulo: "Práctica 3: Componentes Analizados (Memoria RAM)",
        objetivo: "Identificar físicamente las características técnicas de diferentes módulos de memoria RAM DDR4 e instalarlos verificando su correcto reconocimiento lógico en el sistema operativo.",
        herramientas: [
            "Etiquetas de especificaciones físicas de memoria.",
            "Ranuras DIMM de la tarjeta madre.",
            "Administrador de Tareas de Windows (Validación lógica)."
        ],
        hardware: `
            <li><strong>Tipo de Memoria:</strong> Módulos DIMM DDR4 de 288 pines de alta velocidad.</li>
            <li><strong>Capacidad y Frecuencia:</strong> 16 GB de capacidad operando a una frecuencia de 2667 MHz.</li>
            <li><strong>Latencia y Chips:</strong> Latencia CAS CL19. Chips integrados fabricados por Samsung y SK Hynix.</li>
            <li><strong>Arquitectura de Módulo:</strong> Diseño 2Rx8 (Dual Rank) con chips distribuidos uniformemente por ambos lados de la placa.</li>
        `,
        fases: `
            <p><strong>Desarrollo de las Actividades:</strong></p>
            <p><strong>1. Inspección Física:</strong> Se realizó la revisión directa de los módulos de memoria RAM para identificar los componentes, la distribución de los pines y las etiquetas de los fabricantes de los chips (Samsung y SK Hynix).</p>
            <p><strong>2. Instalación:</strong> Se procedió a colocar los módulos en las ranuras correspondientes de la tarjeta madre asegurando su correcto anclaje y encaje mecánico.</p>
            <p><strong>3. Validación Lógica:</strong> Una vez encendido el equipo, se utilizó el Administrador de Tareas del sistema operativo para verificar que el sistema reconociera la capacidad total instalada y estuviera operando a la frecuencia correcta de 2667 MHz.</p>

            <h4 style="color: var(--p-color); margin-top: 1.5rem; font-size: 1.1rem;"><i class="fa-solid fa-camera"></i> Evidencia Fotográfica del Proceso</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.52 PM (1).jpeg" alt="Inspección de Módulo RAM" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Validación de capacidad en Administrador de Tareas</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.52 PM (3).jpeg" alt="Instalación en Ranura DIMM" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Inspección Física y lectura de etiqueta</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.50 PM.jpeg" alt="Validación lógica en Windows" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Validación de capacidad en Administrador de Tareas</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.51 PM.jpeg" alt="Frecuencia detectada por Sistema" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Inspección Física y lectura de etiqueta</span>
                </div>
            </div>
        `,
        conclusiones: "La práctica permitió validar con éxito la compatibilidad e integración de componentes de memoria RAM de diferentes fabricantes de chips (Samsung y SK Hynix), confirmando mediante software que el sistema operativo aprovecha la totalidad de la frecuencia y capacidad del hardware instalado."
    },
    practica4: {
        titulo: "Práctica 4: Extracción de Componentes, Flujo y POST",
        objetivo: "Identificar componentes internos de hardware, aplicar la metodología correcta de extracción segura, reensamblar optimizando el flujo de aire/cableado y comprobar el ciclo de encendido correcto (POST) en un equipo OEM HP.",
        herramientas: [
            "Destornilladores compatibles con chasis OEM HP.",
            "Monitor HP de 24 pulgadas con interfaz DisplayPort.",
            "Sistema Operativo Windows para validación."
        ],
        hardware: `
            <li><strong>Unidad de Almacenamiento (SSD):</strong> Unidad de estado sólido de 2.5 pulgadas Western Digital (WD Green) de 1 TB con interfaz SATA III (Modelo exacto: WDS100T3G0A-00BJG0). No posee partes móviles.</li>
            <li><strong>Memoria RAM:</strong> Un módulo marca SK Hynix de 16 GB DDR4 UDIMM a 2666 MHz (PC4-2666V), con arquitectura 2Rx8 (Dual Rank) con chips por ambos lados del PCB.</li>
            <li><strong>Procesador y Enfriamiento:</strong> CPU instalada en un socket de tipo LGA 1151. Disipador de calor de bloque extractor radial con aletas de aluminio y ventilador central controlado por un conector PWM de 4 pines.</li>
            <li><strong>Fuente de Alimentación:</strong> Formato propietario (específico para el chasis HP) con certificación de eficiencia energética 80 Plus Gold (superior al 90% de eficiencia).</li>
        `,
        fases: `
            <p><strong>A. Proceso de Desensamble:</strong></p>
            <ul>
                <li><strong>Desconexión y Drenado:</strong> Se quitaron los cables externos y se presionó el botón de encendido del chasis durante 5 segundos para drenar la energía residual de los condensadores (prevención de descargas ESD).</li>
                <li><strong>Apertura y Cableado:</strong> Retiro de tornillos del panel lateral izquierdo. Remoción de cables de datos SATA (color azul) y arneses de alimentación de la placa.</li>
                <li><strong>Componentes:</strong> Liberación del SSD de su bahía y retiro de la RAM abriendo los seguros plásticos laterales sin hacer palanca excesiva.</li>
                <li><strong>Disipador del CPU:</strong> Los cuatro tornillos con resorte se aflojaron de forma alterna en forma de "X" para distribuir la presión uniformemente y evitar estrellar el silicio o doblar pines del socket; luego se desconectó el cable CPU_FAN.</li>
                <li><strong>Fuente:</strong> Se desatornilló de la parte trasera del gabinete y se deslizó hacia afuera.</li>
            </ul>
            <p><strong>B. Proceso de Ensamble (Orden Inverso):</strong></p>
            <ul>
                <li>Se montó y atornilló la fuente de poder al chasis.</li>
                <li>Se alineó el disipador sobre el procesador y se apretaron sus tornillos de forma progresiva en orden cruzado para un contacto uniforme con la pasta térmica, conectando el cable PWM.</li>
                <li>Se insertó la RAM en la ranura DIMM presionando hasta escuchar el "clic" de los seguros automáticos. Se fijó el SSD en su bahía conectando firmemente los cables SATA.</li>
            </ul>

            <h4 style="color: var(--p-color); margin-top: 1.5rem; font-size: 1.1rem;"><i class="fa-solid fa-camera"></i> Registro Fotográfico de Mantenimiento y POST</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.43 PM.jpeg" alt="Inspección de Chasis OEM HP" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Desinstalacion de SSD</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (1).jpeg" alt="Desensamble de Disipador Térmico" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Retiro de Fuete de Poder</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (3).jpeg" alt="Instalación de Módulos y SSD" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Verificacion POST</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (4).jpeg" alt="Ejecución de POST Exitoso" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Desconexion de cables</span>
                </div>
                <div style="background: #111827; padding: 5px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
                    <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM.jpeg" alt="Ejecución de POST Exitoso" style="width: 100%; height: 150px; object-fit: cover; border-radius: 6px;">
                    <span style="font-size: 0.8rem; color: var(--text-body); display: block; margin-top: 5px;">Desinstalacion de RAM</span>
                </div>
            </div>
        `,
        conclusiones: "Se corroboró la efectividad de la remoción en 'X' en sistemas de enfriamiento para salvaguardar la integridad física del chip. Asimismo, se comprendió el valor de la certificación de fuentes (80 Plus Gold) y la eficiencia mecánica que ofrecen los gabinetes diseñados por fabricantes OEM."
    }
};

/**
 * Abre la ventana modal flotante e inyecta la información de la práctica seleccionada
 * @param {number} numeroPractica - ID de la práctica (1 al 4)
 */
function abrirModal(numeroPractica) {
    const modal = document.getElementById("modalPractica");
    const container = document.getElementById("modal-body-content");
    
    // Concatenamos "practica" con el número para coincidir con las llaves del objeto (ej. "practica1")
    const clavePractica = "practica" + numeroPractica;
    const datos = datosPracticas[clavePractica];

    if (!datos) {
        console.error("No se encontraron datos para la clave: " + clavePractica);
        return;
    }

    // Generar la lista de herramientas dinámicamente
    let herramientasHTML = "";
    datos.herramientas.forEach(h => {
        herramientasHTML += `<li>${h}</li>`;
    });

    // Inyectar la plantilla HTML estructurada dentro del Pop-up
    container.innerHTML = `
        <h2><i class=\"fa-solid fa-flask-vial\"></i> ${datos.titulo}</h2>
        
        <h3><i class=\"fa-solid fa-bullseye\"></i> Objetivos de la Práctica</h3>
        <p>${datos.objetivo}</p>
        
        <div class="modal-grid-2">
            <div class="modal-box">
                <h3><i class="fa-solid fa-toolbox"></i> Herramientas Utilizadas</h3>
                <ul>${herramientasHTML}</ul>
            </div>
            <div class="modal-box">
                <h3><i class="fa-solid fa-microchip"></i> Componentes Analizados</h3>
                <ul>${datos.hardware}</ul>
            </div>
        </div>
        
        <h3><i class="fa-solid fa-gears"></i> Desarrollo de la Práctica (Metodología)</h3>
        <div class="modal-box">
            ${datos.fases}
        </div>
        
        <h3><i class="fa-solid fa-lightbulb"></i> Conclusiones</h3>
        <p class="definition" style="border-left-color: var(--p-color); margin-bottom: 0;">${datos.conclusiones}</p>
    `;

    // Lógica particular para inyectar la sección POST en la Práctica 4 de forma limpia
    if (numeroPractica === 4) {
        const h3Pruebas = document.createElement("h3");
        h3Pruebas.innerHTML = `<i class="fa-solid fa-display"></i> Pruebas de Funcionamiento y Verificación`;
        
        const boxPruebas = document.createElement("div");
        boxPruebas.className = "modal-box";
        boxPruebas.innerHTML = `
            <ul>
                <li><strong>Conexión de Periféricos:</strong> Se acopló el teclado, mouse y un monitor externo HP de 24 pulgadas mediante DisplayPort.</li>
                <li><strong>Fase POST (Power-On Self-Test):</strong> El firmware (BIOS/UEFI) diagnosticó que el procesador, RAM, fuente y almacenamiento respondieran correctamente. Los ventiladores giraron de forma síncrona, el LED encendió estable y no hubo códigos de error ni pitidos.</li>
                <li><strong>Carga del Sistema Operativo:</strong> Tras superar el POST, el SSD Western Digital cargó de inmediato el entorno gráfico de Windows.</li>
                <li><strong>Validación Final en Software:</strong> Se ingresó al sistema operativo para comprobar que detectara los 16 GB de RAM a la frecuencia estipulada y que las particiones de almacenamiento mantuvieran su integridad.</li>
            </ul>
        `;
        
        // Insertar antes del bloque de conclusiones de validación académica
        const badgeElement = container.querySelector(".modal-footer-badge");
        container.insertBefore(h3Pruebas, badgeElement);
        container.insertBefore(boxPruebas, badgeElement);
    }

    // Mostrar el modal con una transición suave
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
}

/**
 * Cierra la ventana modal flotante
 */
function cerrarModal() {
    const modal = document.getElementById("modalPractica");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaura el scroll de fondo
}

// Cerrar el modal automáticamente si el usuario hace clic fuera de la caja contenedora
window.onclick = function(event) {
    const modal = document.getElementById("modalPractica");
    if (event.target == modal) {
        cerrarModal();
    }
}