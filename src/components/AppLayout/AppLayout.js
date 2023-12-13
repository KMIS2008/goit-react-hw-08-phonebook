import { AppBar } from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";


 const AppLayout=()=>{
    return (
        <div>

            <AppBar/>

            <Suspense fallback={<div>Loading...</div>}>
                  <Outlet />
            </Suspense>
           
        </div>
    )
}

export default AppLayout;