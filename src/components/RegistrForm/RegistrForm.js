import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form,
         Label,
         Button} from './RegistrFormstyled';

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
        <Form onSubmit={handleSubmit}>
            <Label>Username
                <input type="text" name ="name" placeholder="Введіть ім'я" required/>
            </Label>
            <Label>Email
                <input type="email" name="email" placeholder="Введіть адресу електроної пошти" required/>
            </Label>
            <Label>Password
                <input type="password" name="password" placeholder="Ввудіть пароль" required/>
            </Label>
            <Button type="submit">Registr</Button>
        </Form>
    )
}