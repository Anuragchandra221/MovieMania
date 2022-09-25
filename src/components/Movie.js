import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "./Header"
import Card from "./Card"
import Info from "./Info"
import VideoSlider from "./VideoSlider"
import ImageSlider from "./ImageSlider"
import Topcast from "./Topcast"
import Footer from "./Footer"
import Slider from "./Slider"

const Movie = ()=>{
    const id = useParams().id
    const [mov, setMov] = useState([])
    const [similar, setSimilar] = useState([])
    const getMovieDetails = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
            (response)=>{
                setMov(response.data)
                // console.log(response.data) 
                console.log(mov)
            }
            ).catch((err)=>{
                
            })
            axios.get(`https://api.themoviedb.org/3/movie/${id}/similar`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0', 'page':'1'}}).then(
                (response)=>{
                    setSimilar(response.data.results)
                }
                ).catch((err)=>{
                    
                })
        }
        useEffect(()=>{
            getMovieDetails();
        } )
        if (mov){

            return (
                <div className="App px-5 py-3">
                    <Header/>
                    <Card image={mov.poster_path} backdrop_path={mov.backdrop_path} title={mov.title} rating={mov.vote_average} />
                     {/* <button onClick={getMovieDetails} >{mov.title}</button> */}
                     <p className="mx-auto mt-4 pt-4" style={{color: '#fff', maxWidth: '80%'}}>{mov.overview}</p>
                     <Info id={id} />
                     <VideoSlider id={id}/>
                     <ImageSlider id={id} />
                     <Topcast id={id} />
                     <Slider content={similar} title="More Like This" />
                     <Footer />
                </div>
            )
        }
    
}
export default Movie