import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Movie = ()=>{
    const id = useParams().id
    const [mov, setMov] = useState([])
    const getMovieDetails = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/616037`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
            (response)=>{
                setMov(response.data)
                // console.log(response.data) 
                console.log(mov)
            }
            ).catch((err)=>{
                
            })
        }
        useEffect(()=>{
            getMovieDetails();
        }, [])

        return (
            <div>
            <button onClick={getMovieDetails} >click</button>
        </div>
    )
    
}
export default Movie