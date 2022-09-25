import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

 const linkStyle = {
    color: '#FFAD00',
    fontSize: 'large',
 }

 const Header = ()=>{
     
     const [input, setInput] = useState("")
     const [movie, setMovie] = useState([])
     const getMovies = ()=>{
        axios.get("https://api.themoviedb.org/3/search/movie", {params: {'api_key': '90669264a3e2131741ef2d5355e5c8c0', 'query': input}}).then(
            (response)=>{
                setMovie(response.data.results)
                console.log(response.data)
            }
        )
     }
     

    return (
        <div >
            <nav className="navbar navbar-expand-lg" style={{padding: '0px', position: 'relative'}}>
            <a className="navbar-brand" href="#" style={{color: '#fff', fontFamily: 'Original Surfer, sans-serif', fontSize: 'xx-large'}}> <span style={{color: '#FFAD00'}}>M</span>ovie<span style={{color: '#FFAD00'}}>M</span>ania</a>
            <button style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00"}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span>
                 */}
                 <i className="fa-sharp fa-solid fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-4">
                    <Link className="nav-link" to="/" style={linkStyle}>Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link" href="#" style={linkStyle}>Genre</a>
                </li>
                <li className="nav-item ml-4">
                    <a className="nav-link" href="#" style={linkStyle}>IMDB</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <div className="d-flex align-items-center px-2" style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00", borderRadius: '9px'}}>
                        <i className="fa fa-magnifying-glass " style={{fontSize: 'x-large', color: '#FFAD00'}} ></i>
                        <input className="form-control mr-sm-2" style={{backgroundColor: '#000', border:'none'}}  type="search" placeholder="Search" onChange={(e)=>{setInput(e.target.value); getMovies()}} aria-label="Search"/>
                    </div>
                        
                    
                    
                
                <Link to="/login"><button className="btn my-2 my-sm-0 ml-2" style={{border: '2px solid #FFAD00', backgroundColor: '#000', color: "#FFAD00", borderRadius: '9px'}} type="submit">Login</button></Link>
                </form>
                
            </div>
            </nav>
            <div className="px-4 search mr-auto ml-lg-auto" >

            {movie.map((index, i)=>{
                if(i<5){
                    return (
                        <div style={{ minWidth: '20em', cursor: 'pointer'}} >
                        <img></img>
                    <Link to={`/movie/${index.id}`}><p style={{color: '#FFAD00'}}>{index.title}</p></Link> </div>
                    )
                }
            })}
                
            </div>
        </div>
    );
}
export default Header;