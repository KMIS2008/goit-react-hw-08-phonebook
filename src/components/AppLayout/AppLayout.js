import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


 const AppLayout=()=>{
    return (
        <div>
            {/* <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </header> */}

            <AppBar/>

            <main>
                <Suspense fallback={<div>LOADING PAGE...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
        </div>
    )
}

export default AppLayout;