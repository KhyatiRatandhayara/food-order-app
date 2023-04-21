import classes from "./Header.module.css";
import reactMeals from "../../assets/reactmeals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";

const Header = (props) => {
  if(!props.warn){
    return null;
  }
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={reactMeals} alt="reactmeals" />
      </div>
    </>
  );
};
export default Header;

