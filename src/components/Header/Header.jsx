import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import React from 'react'


const Header = (props) => {
	return <header className={s.header}>
		<img src='https://produkty24.com.ua/photos/product/513x395/47281.jpg'></img>

		<div className={s.loginBlock}>
			{props.isAuth
				? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
				: <NavLink to={'/login'}>Login</NavLink>
			}
		</div>
	</header>
}

export default Header;