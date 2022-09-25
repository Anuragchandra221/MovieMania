import { useEffect, useState } from "react"
import axios from "axios"


const VideoSlider = (props)=>{

    const [vdo, setVdo] = useState([])

    const getVideos = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/videos`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
                (response)=>{
                    setVdo(response.data.results)
                }
                ).catch((err)=>{
                    
                })
    }
    useEffect(()=>{
        getVideos();
    })
    if (vdo){
        return (
            <div>

            
          <p style={{cursor: 'pointer'}}><span className='title'>Related Videos</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
            <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id="vdoSlider" className="py-3 smallCard">
          {vdo.map((index)=>{
            // console.log(index)
            return (
                <iframe className="mx-3 small" style={{border: '2px solid #FFAD00', borderRadius: '9px'}}
                src={`https://www.youtube.com/embed/${index.key}?controls=0`}>
                </iframe>
            )
          })}
          </div>
          <div className='ml-auto mr-4 mt-3' style={{fontSize: 'xx-large', width: 'fit-content', position:'sticky'}} >
            
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#vdoSlider')
                    left.scrollBy(-500, 0)
                }
            }>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#vdoSlider')
                    left.scrollBy(500, 0)
                }
            }>&gt;</button>
            </div>
        </div>
        )
    }
}

export default VideoSlider