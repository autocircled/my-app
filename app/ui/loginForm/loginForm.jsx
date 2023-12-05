import './loginForm.css'
import Link from 'next/link'
const LoginForm = () => {
    return (
        <div className='login__form__main'>
            <div className="form__heading">
                <h2>
                    login
                </h2>
            </div>
            <div className="form__body">
                <form action="" method='POST'>
                    <div className='single__input'>
                        <label htmlFor="username">Username or email address&nbsp;</label>
                        <input type="text" />
                    </div>
                    <div className='single__input'>
                        <label htmlFor="password">Password</label>
                        <span className="password__input">
                            <input type="password" />
                            <span className='show__pass__input'></span>
                        </span>
                    </div>
                    <div className='single__input'>
                        <label htmlFor="login__remember"></label>
                        <input className='' type="checkbox" id="rememberme" name="rememberme" value="forever"/>
                        <span>Remember Me</span>
                    </div>
                    <div className='single__input'> 
                        <button type="button" name="login">Log in</button>
                    </div>
                    <div className='single__input'> 
                        <Link href="my-account/lost-password">
                            Lost your password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm