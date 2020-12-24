import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/Profileinfo';
import React from 'react'


const Profile = (props) => {

	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

			<div>
				<MyPostsContainer
				/>
			</div>

		</div>
	);
}

export default Profile;