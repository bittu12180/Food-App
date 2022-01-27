import {Fragment} from "react";
import mealImages from '../../Asserts/meals.jpg';
import classes from '../Layout/Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header=props=>{
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImages} alt='a table fullm of deliucious meals'/>
        </div>
    </Fragment>
    );
};
export default Header;