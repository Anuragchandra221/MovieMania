import Header from "./Header"
import Footer from "./Footer"

const Login = ()=>{
    return (
        <div className="App px-3 px-lg-5 py-lg-3">
            <Header/>
            <div className="row mt-5 pt-4">
                <div className="col-lg-6">
                    <p style={{color: '#fff', fontWeight: '700', fontSize: 'xxx-large'}}>Welcome Back!</p>
                    <p style={{color: '#fff', opacity: '0.7'}}>Log in to your account</p>
                    <div className="d-flex align-items-center px-2 mt-4 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}>
                        <i className="fa-solid fa-user " style={{fontSize: 'x-large', color: '#FFAD00'}} ></i>
                        <input className="form-control mr-sm-2" style={{backgroundColor: '#000', border:'none'}}  type="text" placeholder="Full Name"  aria-label="Search"/>
                    </div>
                    <div className="d-flex align-items-center px-2 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}>
                        <i className="fa-solid fa-lock " style={{fontSize: 'x-large', color: '#FFAD00'}} ></i>
                        <input className="form-control mr-sm-2" style={{backgroundColor: '#000', border:'none'}}  type="password" placeholder="Password"  aria-label="Search"/>
                    </div>
                    <p style={{color: '#fff'}}>Forgot Password?</p >
                    <div className="d-flex align-items-center justify-content-center px-2  mt-lg-5 mb-3 logindiv" style={{border: '2px solid #FFAD00'}}>
                        <button className="py-2 " style={{backgroundColor: '#000', border:'none', color: '#fff'}}>Login</button>
                    </div>
                    <p style={{color: '#fff'}}>Don't Have An Account? Sign Up</p>
                    
                </div>
                <div className="col-lg-6 d-flex justify-content-center mt-3 mt-lg-0" style={{flexDirection: 'column'}}>
                    <p style={{color: '#fff', fontSize: 'larger', fontWeight: '700'}}>Benefits of your free <span style={{color: '#FFAD00'}}>M</span>ovie<span style={{color: '#FFAD00'}}>M</span>account:</p>
                    <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Personalized Recommendations</span>- <span  style={{opacity: '0.7'}}>Discover shows you'll love.</span> </p>
                    <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Your Watchlist</span>- <span style={{opacity: '0.7'}}>Track everything you want to watch and receive e-mail when movies open in theaters.</span> </p>
                    <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Your Ratings</span>- <span style={{opacity: '0.7'}}>Rate and remember everything you've seen.</span> </p>
                    <p style={{color: '#fff', fontSize: 'larger'}}><span style={{color: '#FFAD00'}}>Contribute to IMDb</span>- <span style={{opacity: '0.7'}}>Add data that will be seen by millions of people and get cool badges.</span> </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login