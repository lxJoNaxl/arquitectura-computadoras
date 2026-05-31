/* ── Datos de Prácticas ─────────────────────────────────────── */
const datosPracticas = {

  practica1: {
    titulo: "Práctica 1: Desensamble y Armado de Hardware",
    objetivo: "Identificar físicamente los componentes internos de una computadora y comprender el procedimiento correcto para su desarmado y armado.",
    herramientas: [
      "Destornillador de cruz.",
      "Superficie plana y aislante."
    ],
    hardware: `
      <li><strong>Tarjeta Madre:</strong> Mercury PVCLE266M-L V1.2 (Micro-ATX). Chipset VIA VT8606 con gráficos integrados S3. Socket 370. 2 ranuras SDRAM, 2 PCI, 1 CNR.</li>
      <li><strong>Procesador y Enfriamiento:</strong> Intel Pentium III (700–1300 MHz). Disipador de aluminio activo con ventilador por clips.</li>
      <li><strong>Memoria y Almacenamiento:</strong> 2 módulos PC133 SDRAM (128–256 MB c/u). HDD 3.5" IDE. Lectora de CD/DVD-ROM.</li>
      <li><strong>Fuente de Poder:</strong> KIMEX ATX. Conector principal 20 pines, auxiliar 4 pines CPU, Molex 4 pines, conector Berg.</li>
    `,
    fases: `
      <p><strong>A. Fase de Desensamble:</strong></p>
      <ul>
        <li>Se retiraron los tornillos del panel lateral del gabinete.</li>
        <li>Se desconectaron los cables de energía de la tarjeta madre (20 pines) y del CPU.</li>
        <li>Se extrajeron los módulos de memoria RAM abriendo las muescas de los slots.</li>
        <li>Se desconectaron los cables de datos IDE del disco duro y la lectora.</li>
        <li>Se desatornilló la fuente de poder y se extrajeron los dispositivos de almacenamiento.</li>
      </ul>
      <p><strong>B. Fase de Ensamble:</strong></p>
      <ul>
        <li>Se reinstaló la tarjeta madre asegurando los postes de soporte del chasis.</li>
        <li>Se insertó la RAM a presión hasta que los seguros cerraron automáticamente.</li>
        <li>Se conectaron los cables del panel frontal (encendido, LEDs, USB).</li>
        <li>Se verificaron las conexiones y se cerró la tapa lateral.</li>
      </ul>
      <h4><i class="fa-solid fa-camera"></i> Evidencia Fotográfica</h4>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="img/p1/WhatsApp Image 2026-02-17 at 9.35.38 PM (1).jpeg" alt="Inspección Inicial de Placa">
          <span>Inspección Inicial de Placa</span>
        </div>
        <div class="gallery-item">
          <img src="img/p1/WhatsApp Image 2026-02-17 at 9.35.39 PM.jpeg" alt="Desconexión de Periféricos e IDE">
          <span>Desconexión de Periféricos e IDE</span>
        </div>
        <div class="gallery-item">
          <img src="img/p1/WhatsApp Image 2026-02-17 at 10.52.52 PM.jpeg" alt="Alineación de Chasis y POST">
          <span>Alineación de Chasis y POST</span>
        </div>
      </div>
    `,
    conclusiones: "El hardware corresponde a un equipo de bajo costo orientado a oficina. Mantener el orden de los tornillos es vital. Es indispensable conocer la función y ubicación de puertos y conectores para manipular el hardware sin generar daños permanentes."
  },

  practica2: {
    titulo: "Práctica 2: Identificación de Procesadores Analizados",
    objetivo: "Realizar la inspección física y técnica de cinco modelos distintos de procesadores Intel, comprendiendo la evolución de arquitecturas, sockets y litografías.",
    herramientas: [
      "Inspección visual y códigos de lote de CPUs.",
      "Hojas de especificaciones técnicas (Intel Ark)."
    ],
    hardware: `
      <li><strong>Pentium Dual-Core E2140:</strong> 2 núcleos | 1.60 GHz | Caché L2 1 MB | FSB 800 MHz | LGA 775 | 65 nm | 65W.</li>
      <li><strong>Pentium 4 - 531:</strong> 1 núcleo + Hyper-Threading | 3.00 GHz | Caché L2 1 MB | FSB 800 MHz | LGA 775 | 90 nm | 84W.</li>
      <li><strong>Celeron D 352:</strong> 1 núcleo | 3.20 GHz | Caché L2 512 KB | FSB 533 MHz | LGA 775 | 65 nm | 86W.</li>
      <li><strong>Celeron 1100A (Tualatin):</strong> 1 núcleo | 1.1 GHz | Caché L2 256 KB | PGA 370 | 130 nm | alto margen de OC.</li>
      <li><strong>Intel Xeon MP (Cranford/Potomac):</strong> Servidor alta disponibilidad 2005 | Socket 604 | instrucciones 64-bit | múltiples sockets.</li>
    `,
    fases: `
      <p><strong>Metodología de Análisis:</strong></p>
      <p><strong>Fase 1:</strong> Desmontaje de disipador y extracción de cada procesador.</p>
      <p><strong>Fase 2:</strong> Lectura del IHS (Integrated Heat Spreader) para extraer modelo y número de serie.</p>
      <p><strong>Fase 3:</strong> Instalación del procesador y reinstalación del disipador.</p>
      <h4><i class="fa-solid fa-camera"></i> Galería de Procesadores</h4>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.49 PM.jpeg" alt="Pentium Dual-Core E2140">
          <span>Pentium E2140</span>
        </div>
        <div class="gallery-item">
          <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.49 PM (2).jpeg" alt="Pentium 4 531">
          <span>Pentium 4 531</span>
        </div>
        <div class="gallery-item">
          <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.50 PM.jpeg" alt="Celeron D 352">
          <span>Celeron D 352</span>
        </div>
        <div class="gallery-item">
          <img src="img/p2/WhatsApp Image 2026-02-18 at 6.16.50 PM (1).jpeg" alt="Celeron 1100A Tualatin">
          <span>Celeron 1100A</span>
        </div>
        <div class="gallery-item">
          <img src="img/p2/WhatsApp Image 2026-02-18 at 6.26.29 PM.jpeg" alt="Intel Xeon MP">
          <span>Intel Xeon MP</span>
        </div>
      </div>
    `,
    conclusiones: "La comparación de estos procesadores demuestra la transición tecnológica hacia la computación multinúcleo y la reducción de litografías, permitiendo mayor frecuencia con consumo y disipación térmica optimizados."
  },

  practica3: {
    titulo: "Práctica 3: Identificación e Instalación de Memorias RAM",
    objetivo: "Identificar físicamente las características técnicas de módulos DDR4 e instalarlos verificando su correcto reconocimiento lógico en el sistema operativo.",
    herramientas: [
      "Etiquetas de especificaciones físicas de memoria.",
      "Ranuras DIMM de la tarjeta madre.",
      "Administrador de Tareas de Windows (validación lógica)."
    ],
    hardware: `
      <li><strong>Tipo de Memoria:</strong> Módulos DIMM DDR4 de 288 pines de alta velocidad.</li>
      <li><strong>Capacidad y Frecuencia:</strong> 16 GB operando a 2667 MHz.</li>
      <li><strong>Latencia y Chips:</strong> Latencia CAS CL19. Chips fabricados por Samsung y SK Hynix.</li>
      <li><strong>Arquitectura:</strong> Diseño 2Rx8 (Dual Rank), chips distribuidos por ambos lados del módulo.</li>
    `,
    fases: `
      <p><strong>Desarrollo de Actividades:</strong></p>
      <p><strong>1. Inspección Física:</strong> Revisión directa de los módulos para identificar componentes, distribución de pines y etiquetas de los fabricantes (Samsung y SK Hynix).</p>
      <p><strong>2. Instalación:</strong> Los módulos se colocaron en las ranuras DIMM asegurando su correcto anclaje mecánico.</p>
      <p><strong>3. Validación Lógica:</strong> Se usó el Administrador de Tareas para verificar que el sistema reconociera la capacidad total a 2667 MHz.</p>
      <h4><i class="fa-solid fa-camera"></i> Evidencia Fotográfica</h4>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.52 PM (1).jpeg" alt="Validación en Task Manager">
          <span>Validación en Task Manager</span>
        </div>
        <div class="gallery-item">
          <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.52 PM (3).jpeg" alt="Inspección Física y Etiqueta">
          <span>Inspección Física y Etiqueta</span>
        </div>
        <div class="gallery-item">
          <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.50 PM.jpeg" alt="Capacidad detectada">
          <span>Capacidad detectada en Windows</span>
        </div>
        <div class="gallery-item">
          <img src="img/p3/WhatsApp Image 2026-03-26 at 6.41.51 PM.jpeg" alt="Frecuencia detectada">
          <span>Frecuencia 2667 MHz confirmada</span>
        </div>
      </div>
    `,
    conclusiones: "Se validó la compatibilidad e integración de módulos RAM de diferentes fabricantes (Samsung y SK Hynix), confirmando que el sistema operativo aprovecha la totalidad de la frecuencia y capacidad instaladas."
  },

  practica4: {
    titulo: "Práctica 4: Extracción de Componentes, Flujo y POST",
    objetivo: "Identificar componentes internos, aplicar la extracción segura, reensamblar optimizando flujo de aire/cableado y comprobar el ciclo POST en un equipo OEM HP.",
    herramientas: [
      "Destornilladores compatibles con chasis OEM HP.",
      "Monitor HP de 24 pulgadas con DisplayPort.",
      "Sistema Operativo Windows para validación."
    ],
    hardware: `
      <li><strong>SSD:</strong> Western Digital WD Green 1 TB SATA III 2.5" (WDS100T3G0A-00BJG0). Sin partes móviles.</li>
      <li><strong>Memoria RAM:</strong> SK Hynix 16 GB DDR4 UDIMM 2666 MHz (PC4-2666V), arquitectura 2Rx8.</li>
      <li><strong>CPU y Enfriamiento:</strong> Socket LGA 1151. Disipador radial con aletas de aluminio y conector PWM 4 pines.</li>
      <li><strong>Fuente:</strong> Formato propietario HP con certificación 80 Plus Gold (>90% eficiencia).</li>
    `,
    fases: `
      <p><strong>A. Proceso de Desensamble:</strong></p>
      <ul>
        <li><strong>Desconexión y Drenado:</strong> Se presionó el botón de encendido 5 s para drenar energía residual de condensadores (prevención ESD).</li>
        <li><strong>Apertura:</strong> Retiro de tornillos del panel lateral izquierdo y remoción de cables SATA y arneses de alimentación.</li>
        <li><strong>Componentes:</strong> Liberación del SSD y extracción de RAM abriendo seguros plásticos.</li>
        <li><strong>Disipador:</strong> Tornillos aflojados en forma de "X" de manera alterna para distribuir presión; desconexión de CPU_FAN.</li>
        <li><strong>Fuente:</strong> Desatornillada de la parte trasera y deslizada hacia afuera.</li>
      </ul>
      <p><strong>B. Proceso de Ensamble (orden inverso):</strong></p>
      <ul>
        <li>Fuente montada y atornillada al chasis.</li>
        <li>Disipador alineado sobre el CPU y apretado en orden cruzado progresivo; cable PWM conectado.</li>
        <li>RAM insertada en ranura DIMM hasta el "clic" de los seguros. SSD fijado en bahía con cables SATA.</li>
      </ul>
      <h4><i class="fa-solid fa-camera"></i> Registro Fotográfico</h4>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.43 PM.jpeg" alt="Desinstalación de SSD">
          <span>Desinstalación de SSD</span>
        </div>
        <div class="gallery-item">
          <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (1).jpeg" alt="Retiro de Fuente de Poder">
          <span>Retiro de Fuente de Poder</span>
        </div>
        <div class="gallery-item">
          <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (3).jpeg" alt="Verificación POST">
          <span>Verificación POST</span>
        </div>
        <div class="gallery-item">
          <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM (4).jpeg" alt="Desconexión de Cables">
          <span>Desconexión de Cables</span>
        </div>
        <div class="gallery-item">
          <img src="img/p4/WhatsApp Image 2026-05-17 at 5.13.44 PM.jpeg" alt="Desinstalación de RAM">
          <span>Desinstalación de RAM</span>
        </div>
      </div>
    `,
    conclusiones: "Se corroboró la efectividad del método de remoción en 'X' en sistemas de enfriamiento. Se comprendió el valor de la certificación 80 Plus Gold y la eficiencia mecánica de los gabinetes OEM HP.",
    pruebas: `
      <ul>
        <li><strong>Conexión de Periféricos:</strong> Teclado, mouse y monitor HP 24" via DisplayPort.</li>
        <li><strong>Fase POST:</strong> El firmware UEFI diagnosticó correctamente CPU, RAM, fuente y almacenamiento. LEDs estables, sin pitidos de error.</li>
        <li><strong>Carga del SO:</strong> El SSD Western Digital cargó inmediatamente el entorno gráfico de Windows.</li>
        <li><strong>Validación Final:</strong> El SO detectó los 16 GB de RAM a la frecuencia correcta con particiones de almacenamiento íntegras.</li>
      </ul>
    `
  }

};

/* ── Modal: Abrir ───────────────────────────────────────────── */
function abrirModal(numeroPractica) {
  const modal     = document.getElementById("modalPractica");
  const container = document.getElementById("modal-body-content");
  const clave     = "practica" + numeroPractica;
  const datos     = datosPracticas[clave];

  if (!datos) {
    console.error("No se encontraron datos para:", clave);
    return;
  }

  // Generar lista de herramientas
  const herramientasHTML = datos.herramientas
    .map(h => `<li>${h}</li>`)
    .join('');

  container.innerHTML = `
    <h2><i class="fa-solid fa-flask-vial"></i> ${datos.titulo}</h2>

    <h3><i class="fa-solid fa-bullseye"></i> Objetivo</h3>
    <p>${datos.objetivo}</p>

    <div class="modal-grid-2">
      <div class="modal-box">
        <h3><i class="fa-solid fa-toolbox"></i> Herramientas</h3>
        <ul>${herramientasHTML}</ul>
      </div>
      <div class="modal-box">
        <h3><i class="fa-solid fa-microchip"></i> Componentes Analizados</h3>
        <ul>${datos.hardware}</ul>
      </div>
    </div>

    <h3><i class="fa-solid fa-gears"></i> Desarrollo (Metodología)</h3>
    <div class="modal-box">${datos.fases}</div>

    ${datos.pruebas ? `
      <h3><i class="fa-solid fa-display"></i> Pruebas de Funcionamiento</h3>
      <div class="modal-box">${datos.pruebas}</div>
    ` : ''}

    <h3><i class="fa-solid fa-lightbulb"></i> Conclusiones</h3>
    <p class="definition" style="border-left-color: var(--up); margin-bottom: 0;">${datos.conclusiones}</p>
  `;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

/* ── Modal: Cerrar ──────────────────────────────────────────── */
function cerrarModal() {
  const modal = document.getElementById("modalPractica");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/* ── Cerrar modal al hacer clic fuera ───────────────────────── */
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modalPractica");
  if (e.target === modal) cerrarModal();
});

/* ── Cerrar modal con Escape ────────────────────────────────── */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarModal();
});

/* ── NavBar: resaltar sección activa ────────────────────────── */
(function initNavHighlight() {
  const sections = document.querySelectorAll(".card[id]");
  const navLinks  = document.querySelectorAll(".nav-link[data-target]");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.target === entry.target.id);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px" });

  sections.forEach(sec => observer.observe(sec));
})();