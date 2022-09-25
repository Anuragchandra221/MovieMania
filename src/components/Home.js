
import axios from 'axios';
import Header from './Header';
import { useEffect, useState } from 'react';
import Slider from './Slider';
import Carousell from './Carousell';
import Footer from './Footer';

function Home() {
  const [movie, setMovie] = useState([]) 
  const [newr, setNewr] = useState([])
  const [comming, setComming] = useState([])
  useEffect(()=>{
    getdata();
  },[])
  // const getGenre = (id)=>{
  //   axios.get(
  //     `https://api.themoviedb.org/3/genre/movie/list`,{params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0', id:id}}).then((response)=>{
  //     console.log(1)
  //     setMovie(response.data.results)
  //     console.log(movie)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }
  const getdata = ()=>{
    axios.get(
      `https://api.themoviedb.org/3/trending/movie/week`,{params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then((response)=>{
      
      setMovie(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing`,{params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0','sort_by':'popularity.desc','page':'1','primary_release_date.gte':'24'}}).then((response)=>{
      
      setNewr(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })

    axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,{params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0','sort_by':'release_date.desc','page':'1'}}).then((response)=>{
     
      setComming(response.data.results)
    }).catch((err)=>{
      console.log(err)
    })
  }
  if (movie.length>0){
    return (

          <div className="App px-2 px-lg-5 py-lg-3">
            <Header/>
            <Carousell data={movie} data-ride={true}></Carousell>
            {/*  */}
            <Slider content={movie} title="Trending" id="trending" />
            <Slider content={newr} title="New Releases" id="new" />
            <Slider content={comming} title="Comming Soon" id="comming" />
            <Footer/>
            </div>
    );
  }
}
export default Home;