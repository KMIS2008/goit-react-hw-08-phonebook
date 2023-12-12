export const RegistrForm = ()=> {
    return(
        <form>
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