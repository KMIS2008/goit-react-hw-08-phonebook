import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/operations";
import { Form, 
         Label,
         Button } from "./LoginFormstyled";



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
        <Form onSubmit={handlSubmit}>
            <Label> Email
                <input type="email" 
                       name="email" 
                       placeholder="Введіть адресу електроної пошти" 
                       required
                />
            </Label>

            <Label > Password
                 <input type="password"
                        name="password"
                        placeholder="Введите пароль"
                        required
                 />
            </Label>

            <Button type="submit">Log in</Button>
            
        </Form>
    )
}