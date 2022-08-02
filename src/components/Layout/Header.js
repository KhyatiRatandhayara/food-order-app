import classes from "./Header.module.css";
import reactMeals from "../../assets/reactmeals.jpg";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <button>cart</button>
        <button>cart</button>
      </header>
      <div className={classes['main-image']}>
      <img src={reactMeals} alt="reactmeals" />
      </div>
    </>
  );
};
