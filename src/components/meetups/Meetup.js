import Card from "../userInterface/Card";
import classes from "./Meetup.module.css";
import { useContext } from "react";
import FavoritesContext from "../../pages/store/favorites-context";

function Meetup(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriteCtx.itemIsfavorite(props.id);
  function toggleFavStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>
            {itemIsFavorite ? "Remove From favorites" : "To favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default Meetup;
