export interface Stage {
  id: string;
  index: number;
  title: string;
  description: string;
  whyItMatters: string;
  pieces: string[]; // piece IDs
  whatToListen: string;
  studentTips: string[];
}

export const stagesData: Stage[] = [
  {
    id: "stage_1",
    index: 1,
    title: "Conozco mi instrumento",
    description: "¡Hola! En esta primera parada vas a hacerte amigo de tu piano. Descubre cómo produce sonidos, qué diferencia hay entre las teclas blancas y las negras, y cómo suenan las notas más graves y agudas.",
    whyItMatters: "Saber cómo se organiza el teclado te ayudará a encontrar el camino de tus primeras canciones sin perderte.",
    pieces: [],
    whatToListen: "Escucha canciones de piano solista, prestando atención a cuando la música sube muy alto o baja muy profundo.",
    studentTips: [
      "Trata a las teclas con cariño. El piano responde con un sonido hermoso cuando lo presionas con suavidad.",
      "Observa el patrón de las teclas negras: ¡siempre vienen en grupos de 2 y de 3!"
    ]
  },
  {
    id: "stage_2",
    index: 2,
    title: "Preparo mi cuerpo y mis manos",
    description: "Tu cuerpo es el canal de la música. Aprende a sentarte de forma cómoda en tu banca y a poner tus manos redonditas sobre las teclas, como si sostuvieras una burbuja de jabón sin romperla.",
    whyItMatters: "Tocar relajado evita que te canses y hace que tu piano suene mucho más dulce y natural.",
    pieces: [],
    whatToListen: "Escucha obras de piano clásico e imagina la soltura y relajación del pianista al tocar.",
    studentTips: [
      "Tus dedos son como pequeños paracaidistas: caminan sobre las teclas con las yemas redondas, nunca planos.",
      "Si sientes que tus hombros o manos se cansan, sacúdelos suavemente y vuelve a empezar relajado."
    ]
  },
  {
    id: "stage_3",
    index: 3,
    title: "Escucho e imito",
    description: "¡Tus oídos son tu superpoder! Escuchamos las melodías con mucha atención en grabaciones para luego poder cantarlas y buscarlas en las teclas del piano.",
    whyItMatters: "El método Suzuki es como aprender a hablar: primero escuchas a otros y luego repites las palabras con facilidad.",
    pieces: [],
    whatToListen: "Escucha tu repertorio Suzuki todos los días mientras juegas o desayunas.",
    studentTips: [
      "Antes de tocar una tecla, imagina el sonido en tu mente. ¡Es como preparar tu puntería!",
      "Intenta cantar la melodía de tu pieza favorita usando sílabas como 'la' o 'pam' antes de tocarla."
    ]
  },
  {
    id: "stage_4",
    index: 4,
    title: "Descubro el pulso y los ritmos",
    description: "La música tiene un corazón latente. Vamos a jugar con el pulso constante y a aplaudir ritmos diferentes con nuestras manos antes de llevarlos al piano.",
    whyItMatters: "Tener un pulso estable te ayudará a tocar junto a otros músicos y a mantener tus piezas ordenadas y fluidas.",
    pieces: [],
    whatToListen: "Escucha marchas o música de danza con ritmos muy claros y marcados.",
    studentTips: [
      "Marcha o aplaude al ritmo del segundero de un reloj o de tu canción favorita.",
      "Usa palabras divertidas para recordar ritmos (por ejemplo: 'voy voy' para notas lentas, 'corro corro' para rápidas)."
    ]
  },
  {
    id: "stage_5",
    index: 5,
    title: "Toco con una mano",
    description: "¡Tus deditos empiezan a cantar! Aquí tocaremos nuestras primeras melodías con la mano derecha sola, cuidando la forma redonda y que cada dedo tenga su propio turno.",
    whyItMatters: "Hacer cantar a cada mano por separado es el primer paso antes de unirlas.",
    pieces: ["mary_lamb"],
    whatToListen: "Escucha la melodía del corderito, notando lo clara y dulce que suena cada nota.",
    studentTips: [
      "Imagina que tus dedos son cinco hermanos que se turnan para hablar: cuando uno toca, los otros descansan.",
      "Toca despacio. La lentitud te da tiempo para que tus dedos se acomoden de forma perfecta."
    ]
  },
  {
    id: "stage_6",
    index: 6,
    title: "Coordino ambas manos",
    description: "¡Tus manos se vuelven mejores amigas! Aprenderemos a hacer que tu mano izquierda acompañe con notas simples mientras la derecha canta la melodía alegremente.",
    whyItMatters: "Tocar con dos manos te permite sonar como una orquesta completa controlada por ti.",
    pieces: ["little_playmates"],
    whatToListen: "Escucha tu grabación enfocando tu oído por momentos en el canto de la derecha y luego en el apoyo de la izquierda.",
    studentTips: [
      "La mano izquierda es la base del edificio y la derecha el decorado. ¡Mantén la izquierda firme!",
      "Une las manos compás por compás, muy despacito. No intentes tocar todo junto la primera vez."
    ]
  },
  {
    id: "stage_7",
    index: 7,
    title: "Trabajo las piezas del repertorio sugerido",
    description: "En Musicala no sugerimos tocar todas las piezas del libro de forma rígida. Nos enfocamos en esta lista seleccionada de canciones que te enseñan las habilidades más importantes y divertidas.",
    whyItMatters: "Concentrarnos en las mejores piezas te permite avanzar con mayor fluidez y disfrutar cada logro.",
    pieces: ["lightly_row", "go_rhody"],
    whatToListen: "Escucha 'Lightly Row' y 'Go Tell Aunt Rhody' prestando atención a sus diferentes ritmos y caracteres.",
    studentTips: [
      "Estudia tu pieza en partes pequeñas. Resolver un compás difícil es como ganar un nivel en un juego.",
      "Mantén el pulso igual de alegre al cambiar de una sección de la pieza a otra."
    ]
  },
  {
    id: "stage_8",
    index: 8,
    title: "Mejoro sonido, expresión y continuidad",
    description: "¡Hagamos que tu piano cuente historias! Aprenderemos a tocar notas muy suaves como susurros (piano) y firmes (forte), conectándolas con dulzura (legato).",
    whyItMatters: "Darle expresión a la música es lo que transforma notas sueltas en arte real que hace sonreír a los demás.",
    pieces: ["long_ago"],
    whatToListen: "Nota cómo sube y baja el volumen en las grabaciones para transmitir diferentes emociones.",
    studentTips: [
      "Imagina la historia detrás de tu pieza: ¿es un barquito flotando o un recuerdo feliz? Ponle esa emoción.",
      "Si cometes un tropiezo pequeño, no te detengas; ¡sigue fluyendo con el ritmo como un río!"
    ]
  },
  {
    id: "stage_9",
    index: 9,
    title: "Toco de memoria y comparto mi música",
    description: "¡La música es un regalo para compartir! Aprenderemos a confiar en nuestros dedos y oídos tocando de memoria, preparándonos para tocar ante nuestra familia.",
    whyItMatters: "Tocar de memoria te libera de mirar el papel para concentrarte en disfrutar y hacer cantar al piano.",
    pieces: ["allegro"],
    whatToListen: "Observa videos de pequeños pianistas en sus recitales y fíjate en cómo saludan y se concentran.",
    studentTips: [
      "Antes de empezar, respira hondo, sonríe e imagina la primera nota en tu cabecita.",
      "Tocar para otros es regalarles un momento hermoso, ¡diviértete haciéndolo!"
    ]
  },
  {
    id: "stage_10",
    index: 10,
    title: "Cierro mi primer recorrido Suzuki",
    description: "¡Felicitaciones! Has completado tu primera gran ruta de piano. Has aprendido las piezas clave y tus dedos ya son ágiles y musicales.",
    whyItMatters: "Cerrar esta etapa te demuestra que paso a paso eres capaz de lograr cosas maravillosas.",
    pieces: [],
    whatToListen: "Escucha las piezas del Volumen 2 de Suzuki para emocionarte con el nuevo camino que te espera.",
    studentTips: [
      "¡Eres un pianista genial! Mantén vivas tus canciones tocándolas de vez en cuando para tus amigos.",
      "Prepárate con alegría para tu próxima aventura musical."
    ]
  }
];
