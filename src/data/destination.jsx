import ozoud from "../assets/images/ozoud.webp"
import agafay from "../assets/images/agafay.jpeg"
import Chefchaouen from "../assets/images/Chefchaouen.jpg"
import merzouga from "../assets/images/merzouga.jpg"
import ourika from "../assets/images/ourika.jpg"
import rabat from "../assets/images/Rabat.jpeg"
import farming from "../assets/images/farming.jpg"
import cooking from "../assets/images/cooking.jpg"
import rug from "../assets/images/Rug.jpeg"
import benHadou from "../assets/images/benHadou.jpg"

const destinacion = [

 {
   id: 1,
   type: "tour",
   name: "Ourika Valley",
   image: ourika,
   duration: "1 day",
   oldPrice: 350,
   price: 250,
   specialOffer: true,
   reviews: 59,
 
   description:
     "Enjoy a full-day excursion to the Ourika Valley with waterfalls, local villages, and breathtaking mountain views.",
 
   highlights: [
     "Atraviesa las montañas del Alto Atlas y el paso de Ourika valley.",
     "Explora la Kasbah y casa Berber y conoce un pueblo bereber.",
     "Visita el mercado pero solo en lunes y jueves.",
     "Recorre la ruta de las 1001 Kasbahs.",
     "Visita las gargantas del Todra.",
     "Descubre cómo se fabrican las auténticas alfombras marroquíes.",
     "Descubre cómo se fabrica el aceite de argán.",
     "Disfruta de los paisajes mágicos del camino hasta el pueblo.",
     "Visita las siete cascadas de Ourika en las montañas del Atlas."
   ],
 
   included: [
     "Recogida desde tu Riad u hotel (o en el punto accesible más cercano).",
     "Minibús con aire acondicionado.",
     "Botellas de agua.",
     "Guía local certificado para visitar los pueblos bereberes y las cascadas (3€ por persona)."
   ],
 
   notIncluded: [
     "Almuerzos.",
     "Bebidas.",
     "Guía local opcional en la Kasbah Ait Ben Hadou – 3€ por persona.",
     "Propinas."
   ],
 
   itinerary: [
     "El viaje comienza a las 9:00, el punto de encuentro es la plaza Jemaa el Fna.",
     "Para grupos privados, podemos recogerte en tu Hotel o Riad si es accesible.",
     "Tiempo libre para visitar pueblos, mercados y cascadas.",
     "Regreso a Marrakech por la tarde."
   ],
 
   additionalInfo: [
     "La hora de recogida suele ser entre las 7h00 y 7h30.",
     "El resto del pago se realiza al chofer, el día de la excursión en efectivo.",
     "Si os alojáis en la Medina, el punto de encuentro puede ser la plaza Jemaa el Fna."
   ],
 
   terms: [
     "La reserva se confirma al momento.",
     "Se debe llegar al punto de encuentro 15 minutos antes.",
     "El pago restante se efectúa en efectivo el día de la excursión."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes de la salida.",
     "50% de reembolso si se cancela entre 24–48 horas antes.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
       
 {
   id: 2,
   type: "tour",
   name: "Ouzoud Waterfalls",
   image: ozoud,
   duration: "1 day",
   oldPrice: 400,
   price: 280,
   specialOffer: false,
   reviews: 74,
   description:
     "Discover the stunning Ouzoud Waterfalls, hike along the cascades, and see wild monkeys in their natural habitat.",
   
   highlights: [
     "Admira las cascadas más altas de Marruecos.",
     "Observa monos salvajes en su hábitat natural.",
     "Disfruta de un paseo en barco al pie de las cascadas.",
     "Explora senderos naturales y vistas panorámicas.",
     "Descubre pequeños pueblos bereberes en el camino."
   ],
   included: [
     "Recogida desde tu Riad u hotel.",
     "Transporte en minibús con aire acondicionado.",
     "Botellas de agua.",
     "Conductor/guía de habla española o inglesa."
   ],
   notIncluded: [
     "Almuerzo (opcional en restaurante local).",
     "Bebidas adicionales.",
     "Propinas."
   ],
   itinerary: [
     "Salida de Marrakech a las 8:00.",
     "Parada en pueblos bereberes tradicionales.",
     "Llegada a Ouzoud y caminata guiada.",
     "Tiempo libre para fotos, natación o paseo en barco.",
     "Regreso a Marrakech alrededor de las 18:00."
   ],
   additionalInfo: [
     "Se recomienda llevar calzado cómodo.",
     "No olvides protector solar y sombrero.",
     "Actividad apta para familias y grupos."
   ],
   terms: [
     "La reserva se confirma con antelación.",
     "Se debe llegar al punto de encuentro 15 minutos antes.",
     "El pago restante se realiza en efectivo el día de la excursión."
   ],
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes de la salida.",
     "50% de reembolso si se cancela entre 24–48 horas.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
 
 {
   id: 3,
   type: "tour",
   name: "Agafay Desert Experience",
   image: agafay,
   duration: "1 day",
   oldPrice: 500,
   price: 350,
   specialOffer: true,
   reviews: 91,
   isDesert : true,
 
   description:
     "Escape to the rocky desert of Agafay for camel rides, quad biking, and a magical sunset dinner under the stars.",
 
   highlights: [
     "Disfruta de un paseo en camello por el desierto rocoso de Agafay.",
     "Vive la emoción de una aventura en quad entre las colinas áridas.",
     "Contempla una espectacular puesta de sol en el desierto.",
     "Cena tradicional marroquí bajo las estrellas.",
     "Conoce a los lugareños y descubre su hospitalidad."
   ],
 
   included: [
     "Recogida y regreso a tu hotel o Riad en Marrakech.",
     "Transporte en vehículo con aire acondicionado.",
     "Paseo en camello.",
     "Cena tradicional marroquí.",
     "Botellas de agua."
   ],
 
   notIncluded: [
     "Bebidas adicionales.",
     "Actividades opcionales como quad o buggy.",
     "Propinas."
   ],
 
   itinerary: [
     "Salida desde Marrakech por la tarde.",
     "Llegada al desierto de Agafay y bienvenida con té.",
     "Paseo en camello y actividades opcionales en quad.",
     "Cena bajo las estrellas con espectáculo tradicional.",
     "Regreso a Marrakech por la noche."
   ],
 
   additionalInfo: [
     "Lleva calzado cómodo y ropa adecuada para la noche en el desierto.",
     "Opciones vegetarianas disponibles para la cena.",
     "Actividad apta para todas las edades."
   ],
 
   terms: [
     "La reserva se confirma al momento.",
     "El pago restante se efectúa en efectivo el día de la excursión.",
     "Debes llegar al punto de encuentro con al menos 15 minutos de antelación."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes de la salida.",
     "50% de reembolso si se cancela entre 24–48 horas antes.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
 
 {
   id: 4,
   type: "tour",
   name: "Merzouga Desert Adventure",
   image: merzouga,
   duration: "3 days",
   oldPrice: 1200,
   price: 950,
   specialOffer: true,
   reviews: 128,
  isDesert : true,
 
   description:
     "Embark on a 3-day journey to Merzouga with camel trekking, sand dunes, Berber music, and camping under the Sahara sky.",
 
   highlights: [
     "Atraviesa las montañas del Atlas en un viaje escénico.",
     "Visita la famosa Kasbah Ait Ben Haddou (Patrimonio de la Humanidad).",
     "Explora las gargantas del Todra y el valle del Dades.",
     "Realiza una ruta en camello por las dunas de Erg Chebbi.",
     "Pasa la noche en un campamento bereber bajo las estrellas.",
     "Disfruta de música tradicional y cenas típicas saharianas."
   ],
 
   included: [
     "Transporte en vehículo con aire acondicionado.",
     "Alojamiento en hotel (1 noche) y campamento en el desierto (1 noche).",
     "Cena y desayuno incluidos en el desierto.",
     "Paseo en camello en las dunas de Erg Chebbi.",
     "Guía de habla española o inglesa."
   ],
 
   notIncluded: [
     "Almuerzos en ruta.",
     "Bebidas.",
     "Entradas opcionales a monumentos.",
     "Propinas."
   ],
 
   itinerary: [
     "📍 Día 1: Marrakech – Ait Ben Haddou – Gargantas del Dades.",
     "📍 Día 2: Dades – Gargantas del Todra – Merzouga – Noche en campamento del desierto.",
     "📍 Día 3: Merzouga – Valle del Draa – Marrakech."
   ],
 
   additionalInfo: [
     "Se recomienda llevar ropa ligera para el día y abrigo para la noche.",
     "El paseo en camello puede sustituirse por 4x4 si se solicita.",
     "Opción de upgrade a campamentos de lujo disponible."
   ],
 
   terms: [
     "Reserva confirmada tras el pago inicial.",
     "El resto del pago se realiza en efectivo al inicio del viaje.",
     "Los horarios pueden variar por condiciones climáticas."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 72 horas antes de la salida.",
     "50% de reembolso si se cancela entre 48–72 horas antes.",
     "No hay reembolso si se cancela con menos de 48 horas."
   ]
 },
 
 {
   id: 5,
   type: "tour",
   name: "Chefchaouen – The Blue Pearl",
   image: Chefchaouen,
   duration: "3 days",
   oldPrice: 1100,
   price: 890,
   specialOffer: false,
   reviews: 102,
 
   description:
     "Explore the magical blue streets of Chefchaouen, wander through the Rif mountains, and discover Moroccan traditions.",
 
   highlights: [
     "Recorre las calles azules únicas de Chefchaouen.",
     "Disfruta de vistas panorámicas desde la montaña Jebel el-Kelaa.",
     "Visita la Medina y sus artesanías tradicionales.",
     "Explora la Kasbah del siglo XV y sus jardines andalusíes.",
     "Prueba platos típicos del norte de Marruecos."
   ],
 
   included: [
     "Transporte en vehículo con aire acondicionado.",
     "Alojamiento en riad u hotel local durante 2 noches.",
     "Desayunos incluidos.",
     "Guía local en Chefchaouen."
   ],
 
   notIncluded: [
     "Almuerzos y cenas.",
     "Bebidas.",
     "Entradas opcionales a museos o monumentos.",
     "Propinas."
   ],
 
   itinerary: [
     "📍 Día 1: Salida de Marrakech hacia Chefchaouen pasando por Rabat o Fez.",
     "📍 Día 2: Día completo en Chefchaouen: Medina, Kasbah y miradores.",
     "📍 Día 3: Regreso a Marrakech con paradas panorámicas en el Rif."
   ],
 
   additionalInfo: [
     "Se recomienda llevar calzado cómodo para caminar por la Medina.",
     "La ciudad es pequeña y tranquila, ideal para viajeros que buscan paz.",
     "Actividad apta para familias y grupos."
   ],
 
   terms: [
     "La reserva se confirma al momento.",
     "El pago restante se efectúa en efectivo al inicio del viaje.",
     "Los horarios de salida pueden variar por condiciones de tráfico."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 72 horas antes de la salida.",
     "50% de reembolso si se cancela entre 48–72 horas.",
     "No hay reembolso si se cancela con menos de 48 horas."
   ]
 },
 
 {
   id: 6,
   type: "tour",
   name: "Historic Rabat",
   image: rabat,
   duration: "3 days",
   oldPrice: 1000,
   price: 800,
   specialOffer: false,
   reviews: 77,
 
   description:
     "A cultural immersion in Morocco’s capital: discover the Kasbah of the Udayas, Hassan Tower, and Andalusian gardens.",
 
   highlights: [
     "Visita la Kasbah de los Udayas, patrimonio de la humanidad.",
     "Descubre la Torre Hassan y el Mausoleo de Mohamed V.",
     "Pasea por los jardines andalusíes y el río Bouregreg.",
     "Explora la Medina y el zoco local.",
     "Conoce la modernidad y tradición de la capital marroquí."
   ],
 
   included: [
     "Transporte en vehículo con aire acondicionado.",
     "2 noches en hotel o riad en Rabat.",
     "Desayunos incluidos.",
     "Guía local en los principales monumentos."
   ],
 
   notIncluded: [
     "Almuerzos y cenas.",
     "Bebidas.",
     "Entradas a museos o monumentos opcionales.",
     "Propinas."
   ],
 
   itinerary: [
     "📍 Día 1: Salida desde Marrakech y llegada a Rabat, visita a la Medina.",
     "📍 Día 2: Día completo en Rabat: Kasbah de los Udayas, Torre Hassan, Mausoleo de Mohamed V.",
     "📍 Día 3: Paseo por jardines andalusíes y regreso a Marrakech."
   ],
 
   additionalInfo: [
     "El viaje incluye trayectos largos en carretera.",
     "Rabat es una ciudad tranquila y segura, ideal para turismo cultural.",
     "Recomendado para amantes de la historia y la arquitectura."
   ],
 
   terms: [
     "Reserva confirmada tras el pago inicial.",
     "El resto del pago se realiza en efectivo al inicio del tour.",
     "Se debe llegar al punto de encuentro 15 minutos antes."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 72 horas antes.",
     "50% de reembolso si se cancela entre 48–72 horas antes.",
     "No hay reembolso si se cancela con menos de 48 horas."
   ]
 },
 
 {
   id: 7,
   type: "activity",
   name: "Moroccan Cooking Class",
   image: cooking,
   duration: "Half Day",
   oldPrice: 200,
   price: 150,
   specialOffer: true,
   reviews: 63,
 
   description:
     "Learn how to prepare authentic Moroccan dishes such as tagine and couscous with local chefs.",
 
   highlights: [
     "Aprende a preparar un auténtico tajine marroquí paso a paso.",
     "Descubre los secretos de las especias tradicionales.",
     "Visita un mercado local para seleccionar ingredientes frescos.",
     "Disfruta de la comida que has cocinado con el grupo.",
     "Llévate recetas escritas para replicar en casa."
   ],
 
   included: [
     "Clases guiadas con un chef local.",
     "Ingredientes frescos para la preparación.",
     "Comida completa (entrada, plato principal, postre).",
     "Recetas impresas para llevar."
   ],
 
   notIncluded: [
     "Bebidas adicionales.",
     "Transporte desde/hasta el hotel (disponible bajo petición).",
     "Propinas."
   ],
 
   itinerary: [
     "Bienvenida con té de menta tradicional.",
     "Visita a un mercado local (opcional según ubicación).",
     "Clase práctica de cocina marroquí (tajine, cuscús u otros).",
     "Degustación de los platos preparados en grupo."
   ],
 
   additionalInfo: [
     "Apto para principiantes y amantes de la cocina.",
     "Opciones vegetarianas disponibles bajo petición.",
     "Duración aproximada: 4–5 horas."
   ],
 
   terms: [
     "Reserva confirmada tras el pago inicial.",
     "El resto del pago se realiza el mismo día de la actividad.",
     "Se debe llegar al lugar de encuentro 15 minutos antes."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes.",
     "50% de reembolso si se cancela entre 24–48 horas antes.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
 
 {
   id: 8,
   type: "activity",
   name: "Farming Experience",
   image: farming,
   duration: "Half Day",
   oldPrice: 180,
   price: 120,
   specialOffer: false,
   reviews: 45,
 
   description:
     "Experience Moroccan rural life by joining local farmers in their fields and learning sustainable farming methods.",
 
   highlights: [
     "Participa en actividades agrícolas tradicionales.",
     "Aprende sobre técnicas de cultivo sostenibles.",
     "Descubre la vida cotidiana de una familia rural.",
     "Prueba productos frescos de la granja.",
     "Conéctate con la naturaleza y el estilo de vida marroquí."
   ],
 
   included: [
     "Guía local acompañante.",
     "Herramientas y materiales para las actividades agrícolas.",
     "Snacks o merienda en la granja.",
     "Botellas de agua."
   ],
 
   notIncluded: [
     "Transporte desde/hasta el hotel (disponible bajo petición).",
     "Almuerzo completo (opcional con coste adicional).",
     "Propinas."
   ],
 
   itinerary: [
     "Llegada a la granja y bienvenida con té.",
     "Introducción a las técnicas agrícolas locales.",
     "Participación en actividades de temporada (siembra, cosecha, riego).",
     "Degustación de productos frescos cultivados en la granja."
   ],
 
   additionalInfo: [
     "Se recomienda llevar ropa cómoda y apta para trabajar al aire libre.",
     "Actividad ideal para familias y grupos.",
     "Duración aproximada: 3–4 horas."
   ],
 
   terms: [
     "La reserva se confirma con antelación.",
     "El pago restante se realiza en efectivo el día de la actividad.",
     "La actividad depende de la temporada agrícola."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes.",
     "50% de reembolso si se cancela entre 24–48 horas antes.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
 
 {
   id: 9,
   type: "activity",
   name: "Traditional Rug Making",
   image: rug,
   duration: "Half Day",
   oldPrice: 250,
   price: 180,
   specialOffer: true,
   reviews: 58,
 
   description:
     "Discover the ancient art of Berber rug weaving and create your own handmade souvenir with artisans.",
 
   highlights: [
     "Aprende las técnicas tradicionales de tejido bereber.",
     "Conoce a artesanas locales y su historia cultural.",
     "Participa en el proceso de teñido natural con plantas.",
     "Crea un pequeño tapiz o alfombra como recuerdo.",
     "Apoya directamente a las comunidades locales."
   ],
 
   included: [
     "Clase práctica guiada por artesanas locales.",
     "Materiales para el tejido y el teñido.",
     "Pequeña alfombra/tapiz hecho por ti para llevar.",
     "Té de menta y snacks durante la experiencia."
   ],
 
   notIncluded: [
     "Transporte desde/hasta el hotel (disponible bajo petición).",
     "Comidas adicionales.",
     "Propinas."
   ],
 
   itinerary: [
     "Bienvenida en el taller artesanal con té de menta.",
     "Introducción a la historia y simbolismo de las alfombras bereberes.",
     "Demostración de técnicas de tejido y teñido natural.",
     "Práctica guiada: crea tu propio tapiz o alfombra pequeña.",
     "Cierre y entrega de tu creación como recuerdo."
   ],
 
   additionalInfo: [
     "No se requiere experiencia previa en tejido.",
     "Duración aproximada: 3–4 horas.",
     "Actividad ideal para quienes buscan una experiencia cultural auténtica."
   ],
 
   terms: [
     "La reserva se confirma con antelación.",
     "El pago restante se efectúa en efectivo el día de la actividad.",
     "Los horarios pueden variar según la disponibilidad de las artesanas."
   ],
 
   cancellationPolicy: [
     "Cancelación gratuita hasta 48 horas antes.",
     "50% de reembolso si se cancela entre 24–48 horas antes.",
     "No hay reembolso si se cancela con menos de 24 horas."
   ]
 },
     
   {
     id: 10,
     type: "tour",
     name: "Kasbah Ait Ben Hadou",
     image: benHadou,
     duration: "3 days",
     oldPrice: 1200,
     price: 950,
     specialOffer: true,
     reviews: 128,
     isDesert : true,
     description:
       "Embark on a 3-day journey to Merzouga with camel trekking, sand dunes, Berber music, and camping under the Sahara sky.",
   
     highlights: [
       "Atraviesa las montañas del Atlas en un viaje escénico.",
       "Visita la famosa Kasbah Ait Ben Haddou (Patrimonio de la Humanidad).",
       "Explora las gargantas del Todra y el valle del Dades.",
       "Realiza una ruta en camello por las dunas de Erg Chebbi.",
       "Pasa la noche en un campamento bereber bajo las estrellas.",
       "Disfruta de música tradicional y cenas típicas saharianas."
     ],
   
     included: [
       "Transporte en vehículo con aire acondicionado.",
       "Alojamiento en hotel (1 noche) y campamento en el desierto (1 noche).",
       "Cena y desayuno incluidos en el desierto.",
       "Paseo en camello en las dunas de Erg Chebbi.",
       "Guía de habla española o inglesa."
     ],
   
     notIncluded: [
       "Almuerzos en ruta.",
       "Bebidas.",
       "Entradas opcionales a monumentos.",
       "Propinas."
     ],
   
     itinerary: [
       "📍 Día 1: Marrakech – Ait Ben Haddou – Gargantas del Dades.",
       "📍 Día 2: Dades – Gargantas del Todra – Merzouga – Noche en campamento del desierto.",
       "📍 Día 3: Merzouga – Valle del Draa – Marrakech."
     ],
   
     additionalInfo: [
       "Se recomienda llevar ropa ligera para el día y abrigo para la noche.",
       "El paseo en camello puede sustituirse por 4x4 si se solicita.",
       "Opción de upgrade a campamentos de lujo disponible."
     ],
   
     terms: [
       "Reserva confirmada tras el pago inicial.",
       "El resto del pago se realiza en efectivo al inicio del viaje.",
       "Los horarios pueden variar por condiciones climáticas."
     ],
   
     cancellationPolicy: [
       "Cancelación gratuita hasta 72 horas antes de la salida.",
       "50% de reembolso si se cancela entre 48–72 horas antes.",
       "No hay reembolso si se cancela con menos de 48 horas."
     ]
   },
  
               
                 
];

export default destinacion
