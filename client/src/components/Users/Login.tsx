import '../scss/Users.scss';

export function Login() {
    return (
        <div className="Login">
            <h1>Login</h1>
            <input type="text" placeholder="Username..."/><br/>
            <input type="password" placeholder="Password..."/>
            <button>Login</button>
        </div>
    )
}