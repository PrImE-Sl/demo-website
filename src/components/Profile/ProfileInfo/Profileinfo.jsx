import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import React from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div>
			{/* <div>
				<img className={s.bigImg}
					src='https://media-cdn.tripadvisor.com/media/photo-s/19/e0/c6/ae/ideal-prime-beach.jpg'></img>
			</div> */}
			<div className={s.desctiptionBlock}>
				<img src={props.profile.photos.large} />
				{/* <div><span>({props.profile.contacts})</span></div> */}
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
				ava + descriptionnn
			</div>
		</div>
	);
}

export default ProfileInfo;