import "./styles/Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Relación calidad–precio",
      text: "Hicimos la excursión de 4 días por Erg Chegaga. Éramos una familia de 6 españoles, nos encantó el tour en todos los aspectos: horario respetado, servicio, comida, personal, paisajes, campamento, todo!! La agencia descubrió el desierto y cumplieron por encima de lo esperado y por un buen precio!",
      user: "Andrea López",
      date: "Marzo 2022",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      rating: 4,
      title: "Alojamientos",
      text: "Una vez terminadas las vacaciones, quiero daros las gracias y felicitaros por la organización de la excursión de Marrakech al desierto. El hotel y el campamento fueron muy buenos y sobre todo limpios. La noche del desierto fue mágica!!",
      user: "Pedro G",
      date: "Mayo 2022",
      avatar: "https://i.pravatar.cc/100?img=25",
    },
    {
      id: 3,
      rating: 5,
      title: "Experiencia",
      text: "La experiencia de la excursión al desierto es única e inolvidable, te marca un antes y un después. Desde los paisajes y las antiguas kasbah hasta la noche en el desierto. La puesta de sol en las dunas de Erg Chebbi nos dejó sin palabras. Como fui con mi novia, y era nuestro primer viaje juntos 🙂 hemos elegido las haimas de lujo... ¡El campamento fue increíble!",
      user: "Juan Manuel",
      date: "Junio 2022",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
    {
      id: 4,
      rating: 5,
      title: "Experiencia",
      text: "La experiencia de la excursión al desierto es única e inolvidable, te marca un antes y un después. Desde los paisajes y las antiguas kasbah hasta la noche en el desierto. La puesta de sol en las dunas de Erg Chebbi nos dejó sin palabras. Como fui con mi novia, y era nuestro primer viaje juntos 🙂 hemos elegido las haimas de lujo... ¡El campamento fue increíble!",
      user: "Juan Manuel",
      date: "Junio 2022",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
    {
      id: 5,
      rating: 5,
      title: "Experiencia",
      text: "La experiencia de la excursión al desierto es única e inolvidable, te marca un antes y un después. Desde los paisajes y las antiguas kasbah hasta la noche en el desierto. La puesta de sol en las dunas de Erg Chebbi nos dejó sin palabras. Como fui con mi novia, y era nuestro primer viaje juntos 🙂 hemos elegido las haimas de lujo... ¡El campamento fue increíble!",
      user: "Juan Manuel",
      date: "Junio 2022",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
    {
      id: 6,
      rating: 5,
      title: "Experiencia",
      text: "La experiencia de la excursión al desierto es única e inolvidable, te marca un antes y un después. Desde los paisajes y las antiguas kasbah hasta la noche en el desierto. La puesta de sol en las dunas de Erg Chebbi nos dejó sin palabras. Como fui con mi novia, y era nuestro primer viaje juntos 🙂 hemos elegido las haimas de lujo... ¡El campamento fue increíble!",
      user: "Juan Manuel",
      date: "Junio 2022",
      avatar: "https://i.pravatar.cc/100?img=30",
    },
  ];

  return (
<>
<div className="review">
    <div className="review-title ">
      <h2>Que dicen los viajeros sobre Descubre Desierto</h2>
      
    </div>

    <div className="reviews-container">
      {reviews.map((r) => (
        <div className="review-card" key={r.id}>
          {/* Stars */}
          <div className="review-stars">
            {"★".repeat(r.rating)}
            {"☆".repeat(5 - r.rating)}
          </div>

          <h3 className="review-title">{r.title}</h3>
          <p className="review-text">{r.text}</p>

          <div className="review-footer">
            <img src={r.avatar} alt={r.user} className="review-avatar" />
            <div>
              <h4 className="review-user">{r.user}</h4>
              <span className="review-date">{r.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
