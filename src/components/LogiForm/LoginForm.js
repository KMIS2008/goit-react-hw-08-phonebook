import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";



export const LoginForm =()=>{
    const dispatch = useDispatch();
    const handlSubmit =e=>{
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        )
        form.reset();
    }
    return(
        <form onSubmit={handlSubmit}>
            <label> Email
                <input type="email" 
                       name="email" 
                       placeholder="Введіть адресу електроної пошти" 
                       required
                />
            </label>

            <label > Password
                 <input type="password"
                        name="password"
                        placeholder="Введите пароль"
                        required
                 />
      </label>

            <button type="submit">Log in</button>
            
        </form>
    )
}