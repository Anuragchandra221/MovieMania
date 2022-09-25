import { useState, useEffect } from "react"
import SmallCard from "./SmallCard"
import axios from "axios"

const Topcast = (props)=>{
    const [actors, setActors] = useState([])
    const getStars = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
                (response)=>{
                    setActors(response.data.cast)
                    
                }
                ).catch((err)=>{
                    
                })
    }
    useEffect(()=>{
        getStars();
        // if (actors.cast){
        //     if (actors.cast){
        //         actors.cast.map((index)=>{
        //             if (index.character){
        //                 setStars(prev=>[...prev,index])
        //             }
        //         })
        //     }
        // }
    }, [actors])
    if (actors)
        return (
            <div className="mt-4 mt-lg-0">
            
          <p style={{cursor: 'pointer'}}><span className='title'>Top Cast</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
            <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id="topcast" className="d-flex pb-5 py-lg-3 smallCard">
          {actors.map((index, i)=>{
            // console.log(index)
            if(index.profile_path && index.character){
                if (i<10){

                    return (
                        <div key={i} className="col-3 col-md-3 col-lg-2 card p-0 mx-3 topcast small" style={{border: '3px solid #FFAD00'}} >
                            <img className=" image" src={`https://image.tmdb.org/t/p/original${index.profile_path}`} style={{width: '100%', height: 'auto', borderBottomLeftRadius: '9px 9px 0px, 0px '}} alt="Card image cap" />
                            <div className="text-center" style={{backgroundColor:'#000', color:'#FFAD00',borderRadius: '0px 0px 9px 9px'}}>
                                <p className="mt-1 mb-1" style={{overflow: 'hidden'}}>{index.name}</p>
                                <p className="" style={{overflow: 'hidden'}}>({index.character})</p>
                            </div>
                            </div>)
                        {/* <SmallCard image={index.profile_path} name={index.name} /> */}
                        
                    }
            } else{
                <></>
            }
          })}
          </div>
          <div className='ml-auto mr-4 mt-3 arrow' style={{fontSize: 'xx-large', width: 'fit-content', position:'sticky'}} >
            
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

export default Topcast