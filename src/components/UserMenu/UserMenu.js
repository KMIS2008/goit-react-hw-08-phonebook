import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { useAuth } from "redux/hook/useAuth"

export const UserMenu=()=>{
  const dispatch = useDispatch();

  const {user} = useAuth();

  const handlLogout =()=>{
    dispatch(logOut())
  }
return (
    <div>
  <p>{user.email}</p>
  <button type="button" onClick={handlLogout}>Logout</button>
</div>
)
}
