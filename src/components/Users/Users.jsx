import React from 'react'
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = (props) => {
	// let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //в большую сторону
	// let pages = [];
	// for (let i = 1; i <= pagesCount; i++) {
	// 	pages.push(i);
	// }

	return <div>
		{/* <div>
			{pages.map(p => {
				return <span className={props.currentPage === p && styles.selectedPage}
					onClick={(event) => { props.onPageChanged(p) }}>{p}</span>
			})}
		</div> */}
		<Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
			totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} />
		<div>
			{
				props.users.map(u => <User
					user={u} key={u.id} follow={props.follow}
					followingInProgress={props.followingInProgress} unfollow={props.unfollow} />
					//  <div key={u.id}>
					// 	<span>
					// 		<div>
					// 			<NavLink to={'/profile/' + u.id}>
					// 				<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
					// 			</NavLink>
					// 		</div>
					// 	</span>
					// 	<span>
					// 		<div>
					// 			{u.followed
					// 					? <button disabled={props.followingInProgress
					// 					.some(id => id === u.id)}//UNFOLLOW
					// 					onClick={() => { props.unfollow(u.id) }}>
					// 						Unfollow</button>
					// 				: <button disabled={props.followingInProgress.some(id => id === u.id)}
					// 					onClick={() => { props.follow(u.id) }}>
					// 						Follow</button>}
					// 		</div></span>
					// 	<span><span><div>{u.name}</div><div>{u.status}</div></span>
					// 		<span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
					// 	</span>
					// </div>
				)
			}
		</div>
	</div >
}

export default Users;
