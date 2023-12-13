import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "redux/hook/useAuth";
import { Header } from "./AppBarstyled";


export function AppBar(){
    const {isLoggedIn} = useAuth();

    return(
        <Header>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
          
        </Header>

    )
}