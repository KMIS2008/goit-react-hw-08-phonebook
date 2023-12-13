import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegistrForm = ()=> {
    const dispatch=useDispatch();
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email:form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Username
                <input type="text" name ="name" placeholder="Введіть ім'я" required/>
            </label>
            <label>Email
                <input type="email" name="email" placeholder="Введіть адресу електроної пошти" required/>
            </label>
            <label>Password
                <input type="password" name="password" placeholder="Ввудіть пароль" required/>
            </label>
            <button type="submit">Registr</button>
        </form>
    )
}