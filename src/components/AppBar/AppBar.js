import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";

export function AppBar(){
    return(
        <div>
            <Navigation/>
            <AuthNav/>
            <UserMenu/>
        </div>

    )
}