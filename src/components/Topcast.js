import { useState, useEffect } from "react"
import SmallCard from "./SmallCard"
import axios from "axios"

const Topcast = (props)=>{
    const [stars, setStars] = useState([])
    const getStars = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
                (response)=>{
                    if (response.data.cast){
                        response.data.cast.map((index)=>{
                            if (index.character){
                                setStars(prev=>[...prev,index])
                            }
                        })
                    }
                }
                ).catch((err)=>{
                    
                })
    }
    useEffect(()=>{
        getStars();
    })
    if (stars){
        return (
            <div>
                {console.log(stars)}
            
          <p style={{cursor: 'pointer'}}><span className='title'>Top Cast</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
            <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id="topcast" className="py-3 smallCard">
          {stars.map((index, i)=>{
            // console.log(index)
            if(index.profile_path){
                if (i<10){

                    return (
                        <SmallCard image={index.profile_path} name={index.name} />
                        )
                    }
            } else{
                <></>
            }
          })}
          </div>
          <div className='ml-auto mr-4 mt-3' style={{fontSize: 'xx-large', width: 'fit-content', position:'sticky'}} >
            
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#topcast')
                    left.scrollBy(-500, 0)
                }
            }>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#topcast')
                    left.scrollBy(500, 0)
                }
            }>&gt;</button>
            </div>
        </div>
        )
    }
}
export default Topcast