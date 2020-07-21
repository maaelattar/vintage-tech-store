import React, { useContext } from 'react';
import { UserContext } from '../context/user';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
	const { user } = useContext(UserContext);

	return (
		<Route
			{...rest}
			render={() => {
				return user.token ? children : <Redirect to='/login'></Redirect>;
			}}></Route>
	);
}
