export interface Piece {
  id: string;
  name: string;
  number: string;
  stageId: string;
  objective: string;
  hands: string;
  challenges: string[];
  stepByStep: string[];
  familyTip: string;
  reflectionQuestion: string;
  visualPattern: {
    notes: string[];
    rhythm: string;
  };
}

export const piecesData: Piece[] = [
  {
    id: "mary_lamb",
    name: "Mary Had a Little Lamb",
    number: "#7",
    stageId: "stage_5",
    objective: "Una melodía sencilla y encantadora sobre un corderito juguetón. Es ideal para que tus deditos aprendan a caminar ordenados en el piano por notas vecinas.",
    hands: "Mano Derecha",
    challenges: [
      "Mantener los dedos redondos sobre el teclado, como si sostuvieras una manzana suave.",
      "Evitar que el dedo pulgar (1) suene muy fuerte o pesado."
    ],
    stepByStep: [
      "Canta la melodía de memoria antes de tocarla.",
      "Encuentra las 3 notas que usa la canción (Mi, Re, Do) en tu piano.",
      "Toca la primera frase despacio siguiendo el orden de tus dedos: 3-2-1-2-3-3-3."
    ],
    familyTip: "Canten juntos la canción mientras el estudiante toca; esto le ayuda a coordinar el ritmo de forma natural.",
    reflectionQuestion: "¿Cómo puedes hacer que tus dedos suenen tan suaves como la lana de un corderito?",
    visualPattern: {
      notes: ["Mi", "Re", "Do", "Re", "Mi", "Mi", "Mi", "Re", "Re", "Re", "Mi", "Sol", "Sol"],
      rhythm: "Negra, Negra, Negra, Negra, Negra, Negra, Blanca, Negra, Negra, Blanca, Negra, Negra, Blanca"
    }
  },
  {
    id: "lightly_row",
    name: "Lightly Row",
    number: "#4",
    stageId: "stage_7",
    objective: "Una pieza alegre y fluida sobre barquitos flotando. Te ayudará a mover tus dedos en saltos cortos y a mantener un pulso feliz.",
    hands: "Ambas Manos",
    challenges: [
      "Aprender a saltar del dedo 5 al dedo 3 en la mano derecha sin dudar.",
      "Hacer que el acompañamiento de la mano izquierda suene mucho más suave que la melodía."
    ],
    stepByStep: [
      "Aplaude el ritmo sintiendo el pulso constante de la canción.",
      "Practica la melodía de la mano derecha sola hasta que no tengas que mirar tus dedos.",
      "Une ambas manos despacio, compás por compás, subiendo la velocidad poco a poco."
    ],
    familyTip: "Anime al estudiante a imaginarse que sus dedos flotan suavemente en el teclado como barcos en el agua.",
    reflectionQuestion: "¿Cómo suena el agua en tu piano? ¿Tus dedos se sienten ligeros como el viento?",
    visualPattern: {
      notes: ["Sol", "Mi", "Mi", "Fa", "Re", "Re", "Do", "Re", "Mi", "Fa", "Sol", "Sol", "Sol"],
      rhythm: "Negra, Negra, Blanca, Negra, Negra, Blanca, Negra, Negra, Negra, Negra, Negra, Negra, Blanca"
    }
  },
  {
    id: "go_rhody",
    name: "Go Tell Aunt Rhody",
    number: "#8",
    stageId: "stage_7",
    objective: "Una hermosa canción tradicional para practicar la expresión, aprendiendo a tocar partes fuertes (forte) y partes suaves (piano).",
    hands: "Ambas Manos",
    challenges: [
      "Controlar la fuerza de tus dedos para lograr diferencias claras de volumen.",
      "Iniciar la melodía con el dedo 5 de forma firme pero relajada."
    ],
    stepByStep: [
      "Canta la melodía exagerando con tu voz las partes fuertes y suaves.",
      "Toca la mano derecha sola cuidando que tu dedo meñique (5) no se tense.",
      "Suma los acordes sostenidos de la mano izquierda de forma muy suave."
    ],
    familyTip: "Elógiele cuando logre hacer un sonido suave y dulce como un susurro en las respuestas de la canción.",
    reflectionQuestion: "Si esta pieza fuera un diálogo entre dos personajes, ¿cómo hablaría el fuerte y qué le respondería el suave?",
    visualPattern: {
      notes: ["Mi", "Mi", "Re", "Do", "Re", "Re", "Mi", "Do", "Re", "Mi", "Fa", "Re", "Do"],
      rhythm: "Negra, Negra, Negra, Negra, Blanca, Negra, Negra, Blanca, Negra, Negra, Negra, Negra, Blanca"
    }
  },
  {
    id: "long_ago",
    name: "Long, Long Ago",
    number: "#10",
    stageId: "stage_8",
    objective: "Una melodía llena de nostalgia que te enseñará a conectar las notas con total suavidad (legato) y a respirar entre frases musicales.",
    hands: "Ambas Manos",
    challenges: [
      "Conectar el sonido de cada nota con la siguiente sin que queden vacíos.",
      "Sentir la nota de entrada (anacrusa) que inicia la melodía como un suspiro."
    ],
    stepByStep: [
      "Canta la melodía respirando al final de cada frase larga.",
      "Toca la derecha prestando atención a levantar un dedo justo cuando el otro presiona su tecla.",
      "Une las manos lentamente cuidando que el pulso no se detenga al cambiar de compás."
    ],
    familyTip: "Esta canción es muy afectiva; invite al estudiante a tocarla como si fuera una canción de cuna muy cariñosa.",
    reflectionQuestion: "¿Qué historia lejana te imaginas cuando tus dedos tocan esta melodía tan dulce?",
    visualPattern: {
      notes: ["Re", "Sol", "Sol", "La", "Si", "La", "Sol", "Si", "Do", "Si", "La", "Sol"],
      rhythm: "Negra, Negra, Negra, Negra, Negra, Negra, Blanca, Negra, Negra, Negra, Negra, Blanca"
    }
  },
  {
    id: "little_playmates",
    name: "Little Playmates",
    number: "#11",
    stageId: "stage_6",
    objective: "Una pieza sumamente alegre y saltarina. Te retará a tocar notas muy cortitas (staccato) e independizar el ritmo de ambas manos.",
    hands: "Ambas Manos",
    challenges: [
      "Lograr notas cortas y ligeras (staccato) haciendo rebotar tus dedos de forma suave.",
      "Mantener las corcheas (notas rápidas) muy parejitas y ordenadas."
    ],
    stepByStep: [
      "Aplaude el ritmo rápido diciendo 'co-rro co-rro' y el lento diciendo 'voy voy'.",
      "Toca la derecha sintiendo que tus dedos rebotan en las teclas como si estuvieran calientes.",
      "Une ambas manos despacio compás por compás."
    ],
    familyTip: "El rebote del staccato debe ser relajado. Imaginen que sus deditos son ranitas saltando ligeras sobre el teclado.",
    reflectionQuestion: "Si los sonidos de esta canción fueran dos amigos jugando a las escondidas, ¿cómo se escucharían sus risas en el piano?",
    visualPattern: {
      notes: ["Do", "Re", "Mi", "Fa", "Sol", "Sol", "Sol", "Fa", "Mi", "Re", "Do", "Do"],
      rhythm: "Negra, Negra, Negra, Negra, Negra, Negra, Blanca, Negra, Negra, Negra, Negra, Blanca"
    }
  },
  {
    id: "allegro",
    name: "Allegro",
    number: "#17",
    stageId: "stage_9",
    objective: "¡El gran reto de velocidad y energía del Libro 1! Aquí correrás sobre el piano con notas rápidas, demostrando tu precisión y control técnico.",
    hands: "Ambas Manos",
    challenges: [
      "Tocar la melodía rápida con total claridad sin que las notas suenen borrosas.",
      "Mantener el patrón de acompañamiento de la mano izquierda suave y constante."
    ],
    stepByStep: [
      "Practica toda la pieza a velocidad súper lenta en cámara lenta para asegurar los movimientos.",
      "Asegura el acompañamiento de la izquierda sola antes de sumarle la melodía rápida.",
      "Une ambas manos despacio, subiendo la velocidad únicamente si no hay tropiezos."
    ],
    familyTip: "El secreto de la velocidad es la paciencia para practicar lento. ¡Felicítelo por practicar despacio!",
    reflectionQuestion: "¡Estás tocando Allegro! ¿Cómo se siente correr por las teclas con tanta soltura y libertad?",
    visualPattern: {
      notes: ["Sol", "Do", "Re", "Mi", "Fa", "Sol", "Do", "Do", "Re", "Si", "Do"],
      rhythm: "Corchea, Corchea, Corchea, Corchea, Corchea, Corchea, Negra, Negra, Negra, Negra, Blanca"
    }
  }
];
