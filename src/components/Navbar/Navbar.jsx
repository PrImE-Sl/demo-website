import { NavLink } from 'react-router-dom';
import n from './Navbar.module.css';
import React from 'react'

const Navbar = () => {
	return (
		<nav className={n.nav}>
			<div className={n.item}>
				<NavLink to='/profile' activeClassName={n.activeLink}>Profiles</NavLink>
			</div>
			<div className={`${n.item} ${n.active}`}>
				<NavLink to='/dialogs' activeClassName={n.activeLink}>Messanges</NavLink>
			</div>
			<div className={`${n.item} ${n.active}`}>
				<NavLink to='/users' activeClassName={n.activeLink}>Users</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/news' activeClassName={n.activeLink}>News</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/music' activeClassName={n.activeLink}>Music</NavLink>
			</div>
			<div className={n.item}>
				<NavLink to='/settings' activeClassName={n.activeLink}>Settings</NavLink>
			</div>

			{/* <div className={n.item}>
				<NavLink to='/friends' activeClassName={n.activeLink}>Friends</NavLink>
			</div> */}
		</nav>
	);
}

export default Navbar;