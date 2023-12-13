import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "redux/hook/useAuth";


export function AppBar(){
    const {isLoggedIn} = useAuth();

    return(
        <div>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
          
        </div>

    )
}