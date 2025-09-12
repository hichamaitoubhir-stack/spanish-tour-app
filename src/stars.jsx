import { FaStar, FaRegStar } from "react-icons/fa";

function Stars({ rating, max = 5 }) {
  return (
    <div className="stars">
      {[...Array(max)].map((_, i) =>
        i < rating ? (
          <FaStar key={i} color="#f1c40f" size={18} />
        ) : (
          <FaRegStar key={i} color="#ccc" size={18} />
        )
      )}
    </div>
  );
}

export default Stars