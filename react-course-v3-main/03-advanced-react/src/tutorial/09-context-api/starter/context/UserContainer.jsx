import { useNavbarContext } from './Navbar';

const UserContainer = () => {
	const { user, logout } = useNavbarContext();
	return (
		<div className="user-container">
			{user ? (
				<>
					<p>Welcome, {user?.name?.toUpperCase()}</p>
					<button className="btn" onClick={logout}>
						Logout
					</button>
				</>
			) : (
				<p>Please login</p>
			)
			}
		</div>
	)
};

export default UserContainer;

