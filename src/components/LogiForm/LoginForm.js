export const LoginForm =()=>{
    return(
        <form>
            <label> Email
                <input type="email" name="email" placeholder="Введіть фдресу електроної пошти" required/>
            </label>

            <button type="submit">Log in</button>
            
        </form>
    )
}