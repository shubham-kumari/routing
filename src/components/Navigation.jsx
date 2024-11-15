import { Link, NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

export default function Navigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to='/' className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink></li>
                    <li><NavLink to='/products' className={({isActive}) => isActive ? classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}