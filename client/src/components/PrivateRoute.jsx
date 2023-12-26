import {useSelector} from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

export default function PrivateRoute() {
    const {curretUser} = useSelector((state) => state.user)
  return curretUser ? <Outlet/> : <Navigate to='/sign-in'/>;
}
