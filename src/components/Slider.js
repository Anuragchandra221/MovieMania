
import { Link } from 'react-router-dom';
import SmallCard from './SmallCard';
const Slider = (props)=>{
    return(
      <div>

          <p style={{cursor: 'pointer'}}><span className='title'>{props.title}</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
        <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id={props.id} className="py-3 smallCard ">
          {props.content.map((index, i)=>{
            // console.log(index)
            if (i<10){

              return (
                <Link to={`/movie/${index.id}`}><SmallCard image={index.poster_path} /></Link> 
                )
              }
            })}
            </div>
          <div className='ml-auto mr-4' style={{fontSize: 'xx-large', width: 'fit-content'}} >
            
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.getElementById('trending')
                    console.log(props.title)
                    left.scrollBy(-500, 0)
                }
            }>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.getElementById('trending')
                    left.scrollBy(500, 0)
                }
            }>&gt;</button>
            </div>
        </div>
    )
}
export default Slider;