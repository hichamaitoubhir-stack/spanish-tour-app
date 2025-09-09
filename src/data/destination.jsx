import ozoud from "../assets/images/ozoud.webp"
import agafay from "../assets/images/agafay.jpeg"
import Chefchaouen from "../assets/images/Chefchaouen.jpg"
import merzouga from "../assets/images/merzouga.jpg"
import ourika from "../assets/images/ourika.jpg"
import rabat from "../assets/images/Rabat.jpeg"
import farming from "../assets/images/farming.jpg"
import cooking from "../assets/images/cooking.jpg"
import rug from "../assets/images/Rug.jpeg"

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
                  description : "Enjoy a full-day excursion to the Ourika Valley with waterfalls,",
                  highlights : [
                                    {
                    day: "Excursion del entero Dia ",
                    title: "Marrakech - Montañas del Atlas - Ourika valley siete Cascadas ",
                    description: "Trayecto de 8 horas aprox. Tu viaje a las Montañas del Atlas..."

                    },
                     ],
                
                    highlightss: [

                            "Viaje panorámico por las montañas del Alto Atlas.",
                            "Explora el pintoresco valle de Ourika con sus pueblos bereberes.",
                            "Disfruta de un paseo a lo largo del río Ourika.",
                            "Haz una caminata hasta las cascadas de Setti Fatma.",
                            "Descubre la vida tradicional en aldeas bereberes de montaña.",
                            "Degusta un té de menta junto al río.",
                            "Admira los paisajes verdes y terrazas cultivadas.",
                            "Escapa del bullicio de Marrakech en un entorno natural."

                                 ],
                  included: [
                                "Recogida desde tu Riad u hotel (o en el punto accesible más cercano).",
                                "Minibús con aire acondicionado.",
                                "Desayuno tradicional en casa berber ",
                                "Guía local opcional",
                          ],
                    
                  additionalInfo: [

                                "La hora de recogida suele ser de 8h00 a 9h30...",
                                "El resto se paga al chofer, el día de la excursión en efectivo...",
                                "Si os alojáis en la Medina, puede que el punto de encuentro sea la plaza Jemaa el Fna..."

                                ],     
                            
                  NotIncludede :[

                            "Almuerzos",
                            "Bebidas",
                            "Propinas",
                  ],
                    
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
                  description: [
                    "Discover the stunning Ouzoud Waterfalls, hike along the cascades,",
                     "and see wild monkeys in their natural habitat."
                  ],
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
                  description:
                    "Escape to the rocky desert of Agafay for camel rides, quad biking, and a magical sunset dinner under the stars.",
                },
            
                // ✅ 3-Day Tours
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
                  description:
                    "Embark on a 3-day journey to Merzouga with camel trekking, sand dunes, Berber music, and camping under the Sahara sky.",
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
                },
            
                // ✅ Activities
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
                },
               
                 
];

export default destinacion
