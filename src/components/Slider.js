
import { Link } from 'react-router-dom';
import SmallCard from './SmallCard';
const Slider = (props)=>{
    return(
        <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} className="mb-4 smallCard">
          <p style={{cursor: 'pointer'}}><span className='title'>{props.title}</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
          {props.content.map((index)=>{
            // console.log(index)
            return (
              <Link to={`/movie/${index.id}`}><SmallCard image={index.poster_path} /></Link> 
            )
          })}
          <div className='ml-auto mr-4 mt-3' style={{fontSize: 'xx-large', width: 'fit-content'}} >
            
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}}>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}}>&gt;</button>
            </div>
        </div>
    )
}
export default Slider;