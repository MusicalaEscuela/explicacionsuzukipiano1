export interface TeacherGuideItem {
  id: string;
  category: string;
  title: string;
  points: string[];
}

export const teacherGuideData: TeacherGuideItem[] = [
  {
    id: "pedagogical_obs",
    category: "Observaciones Pedagógicas",
    title: "Enfoque CREA en el Repertorio Suzuki I",
    points: [
      "Creatividad: Anime al estudiante a inventar variaciones de las piezas o historias sobre los personajes de las canciones.",
      "Reflexión: Haga preguntas abiertas como '¿cómo se sintieron tus hombros?' o '¿qué color crees que tiene este sonido?' en lugar de solo dar correcciones.",
      "Ejecución: Priorice siempre la calidad del sonido ('tono hermoso') y la comodidad corporal por encima de la velocidad o la cantidad de repertorio.",
      "Aprendizaje: Conecte los nuevos retos técnicos con habilidades que ya domina en piezas anteriores."
    ]
  },
  {
    id: "tension_alerts",
    category: "Alertas de Tensión",
    title: "Señales de sobrecarga o tensión corporal",
    points: [
      "Hombros levantados: Suele ocurrir al concentrarse en pasajes difíciles o al estirar los dedos.",
      "Articulaciones colapsadas: Dedos planos (especialmente el pulgar y el meñique) que indican falta de transferencia de peso del brazo.",
      "Muñecas rígidas: Falta de 'respiración' o amortiguación de la muñeca al tocar acordes o intervalos.",
      "Apoyo de pies inestable: Provoca que el estudiante use la fuerza de la espalda para balancearse, generando tensión."
    ]
  },
  {
    id: "adaptations",
    category: "Adaptaciones por Edad",
    title: "Estudiantes pequeños vs. adolescentes y adultos",
    points: [
      "Estudiantes pequeños (5-7 años): Utilice juegos cortos de imitación, analogías de animales, y divida las piezas en secciones minúsculas (de 1 a 2 compases). La participación del acompañante familiar en clase es indispensable.",
      "Estudiantes adultos y jóvenes: Enfatice la comprensión analítica de la estructura armónica y formal de las piezas. Permita mayor autonomía en la práctica y reflexione junto a ellos sobre la ergonomía en el teclado. Evite el tono infantil, pero mantenga el enfoque lúdico y de exploración."
    ]
  },
  {
    id: "advancement_criteria",
    category: "Criterios de Avance",
    title: "Cuándo considerar consolidada una habilidad o pieza",
    points: [
      "Ejecución con pulso estable sin necesidad de partitura.",
      "Forma de la mano redonda y hombros/brazos libres de tensión visible.",
      "Habilidad para cantar la melodía mientras se toca o acompaña.",
      "El estudiante puede interpretar la pieza con expresión (forte/piano, fraseo) y disfrutar el momento."
    ]
  }
];
