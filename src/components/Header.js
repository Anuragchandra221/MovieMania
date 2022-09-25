 const linkStyle = {
    color: '#FFAD00',
    fontSize: 'large',
 }
 
 const Header = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{padding: '0px'}}>
            <a className="navbar-brand" href="#" style={{color: '#fff', fontFamily: 'Original Surfer, sans-serif', fontSize: 'xx-large'}}> <span style={{color: '#FFAD00'}}>M</span>ovie<span style={{color: '#FFAD00'}}>M</span>ania</a>
            <button style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-4">
                    <a className="nav-link" href="#" style={linkStyle}>Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link" href="#" style={linkStyle}>Genre</a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link" href="#" style={linkStyle}>IMDB</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00", borderRadius: '9px'}} type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn my-2 my-sm-0" style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00", borderRadius: '9px'}} type="submit">Login</button>
                </form>
            </div>
            </nav>
        </div>
    );
}
export default Header;