import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, toggleIsFavorite] = useState(false)

  return (
    <button
      className="favorite-button"
      onClick={() => {
        toggleIsFavorite(!isFavorite);
        console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
