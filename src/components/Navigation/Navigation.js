
import { useAuth } from 'redux/hook/useAuth';
import { Link } from './Navigationstyled';

export const Navigation=()=>{
    const { isLoggedIn } = useAuth();

    return(
        <nav>
           <Link to="/">Home</Link> 

            {isLoggedIn && (
                 <Link to="/contacts">Contacts</Link>
            )
            }
        
       </nav>
    )
}