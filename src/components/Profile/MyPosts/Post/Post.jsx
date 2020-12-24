import s from './Post.module.css';
import React from 'react'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://cdn.mos.cms.futurecdn.net/bQgcMwEnyhFu6ASuUFrtsn-1200-80.jpg'></img>
			{props.message}
			<span className={s.likes}>Likes: {props.likes}</span>
		</div>
	);
}

export default Post;