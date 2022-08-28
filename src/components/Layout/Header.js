import classes from "./Header.module.css";
import reactMeals from "../../assets/reactmeals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={reactMeals} alt="reactmeals" />
      </div>
    </>
  );
};
