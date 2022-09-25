import axios from "axios"
import { useEffect, useState } from "react"



const Info = (props)=>{

    const [castnCrew, setCastnCrew] = useState([])
    const [director, setDirector] = useState([])
    const [screenplay, setScreenplay] = useState([])
    const [stars, setStars] = useState([])

    useEffect(()=>{
        getMovieDetails();
    }, [])
    useEffect(()=>{
        if (castnCrew.crew){
            castnCrew.crew.map((index)=>{
                if (index.department==="Directing"){
                    setDirector(prev=>[...prev,index.name])
                    console.log(index.name)
                }
                else if(index.job==="Writer"){
                    setScreenplay(prev=>[...prev,index.name])
                }
            })
            console.log(screenplay)
            castnCrew.cast.map((index)=>{
                if (index.character){
                    setStars(prev=>[...prev,index.name])
                }
            })
        }
    })
    const getMovieDetails = ()=>{

        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/credits`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
        (response)=>{
            setCastnCrew(response.data)
        }
        ).catch((err)=>{
            
        })
    }
    if (castnCrew.cast && castnCrew.crew){
        return (
            <div style={{width: 'fit-content'}} className="mx-auto mt-5 pt-2">
                {director? <p style={{color: '#FFAD00', width: 'fit-content'}}>
                <span className="mr-2">Directors: </span> 
                    {director.map((index, i)=>{
                        return i<4?<span key={i} className="mr-3" style={{color: '#fff'}}>{index}</span> :<></>
                    })}
                </p>:<></>}
                {screenplay?<p className=" mr-3" style={{color: '#FFAD00', width: 'fit-content'}}>
                    <span className="mr-2">Writers: </span> 
                    {screenplay.map((index, i)=>{
                        return i<4?<span key={i} className="mr-3" style={{color: '#fff'}}>{index}</span> :<></>
                    })}
                </p>:<></>}
                {stars?< p  style={{color: '#FFAD00', width: 'fit-content'}}>
                <span className="mr-2">Actors: </span> 
                    {stars.map((index, i)=>{
                        return i<4?<span key={i} className="mr-3" style={{color: '#fff'}}>{index}</span> :<></>
                    })}
                </p>:<></>}
            </div>  
        )
    }
}
export default Info;

