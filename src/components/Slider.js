
import { Link } from 'react-router-dom';
import { getUser } from "../Utils/Common"
import SmallCard from './SmallCard';
function left(id){
  const left = document.getElementById(id)
  left.scrollBy(-500, 0)
}
function right(id){
  const left = document.getElementById(id)
  left.scrollBy(500, 0)
}
const Slider = (props)=>{
    return(
      <div className="mt-5 mt-lg-0">

          <p style={{cursor: 'pointer'}} className="mb-0 "><span className='title'>{props.title}</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
        <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id={props.id} className="py-3 smallCard ">
          {props.content.map((index, i)=>{
            // console.log(index)
            if (i<10){

              return (
                <div className='hoverWatchlist'>
                  {getUser()?<span className="watchlist" onClick={()=>{alert('hi')}}><i class="fa-sharp fa-solid fa-plus"></i></span>:<></>}
                <Link key={i} to={`/movie/${index.id}`}>
                  <SmallCard movie={true} image={index.poster_path} /></Link> 
                  </div>
                  
                )
              }
            })}
            </div>
          <div className='ml-auto mr-4 arrow' style={{fontSize: 'xx-large', width: 'fit-content'}} >
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}} onClick={()=>left(props.id)}>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}} onClick={()=>{right(props.id)}}>&gt;</button>
            </div>
        </div>
    )
}
export default Slider;