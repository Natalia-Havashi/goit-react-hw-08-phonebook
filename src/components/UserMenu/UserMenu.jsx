import { useDispatch, useSelector } from "react-redux"
import { logOutThunk } from "redux/auth/auth-operetons";
import { selectUser } from "redux/auth/selectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    return (
        <div>
            <div>
                <div>
                    <p>{user.name}</p>
                   <p>{user.email}</p> 
                </div>
            </div>
  
  <button type="button" onClick={() => dispatch(logOutThunk())}>Logout</button>
</div>
    )
}

