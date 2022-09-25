import { useEffect, useState } from "react"
import axios from "axios"
import SmallCard from "./SmallCard"


const ImageSlider = (props)=>{

    const [img, setImg] = useState([])

    const getVideos = ()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${props.id}/images`, {params:{'api_key':'90669264a3e2131741ef2d5355e5c8c0'}}).then(
                (response)=>{
                    setImg(response.data.posters)
                    console.log(response.data)
                }
                ).catch((err)=>{
                    
                })
    }
    useEffect(()=>{
        getVideos();
    })

    if (img){
        return (
            <div>

            
          <p style={{cursor: 'pointer'}}><span className='title'>Related Images</span> <span style={{color:'#FFAD00', fontSize: 'x-large'}} >&gt;</span> </p>
            <div style={{overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none'}} id="imageSlider"  className="py-3 smallCard">
          {img.map((index, i)=>{
            // console.log(index)
            if(index.file_path){
                if (i<9){

                    return (
                        <SmallCard image={index.file_path} />
                        )
                    }
                }
          })}
          </div>
          <div className='ml-auto mr-4 mt-3' style={{fontSize: 'xx-large', width: 'fit-content', position:'sticky'}} >
            
            <button style={{ backgroundColor: '#000' ,color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#imageSlider')
                    left.scrollBy(-500, 0)
                }
            }>&lt;</button>
            <button style={{ backgroundColor: '#000', color:'#FFAD00', cursor: 'pointer'}} onClick={
                ()=>{
                    const left = document.querySelector('#imageSlider')
                    left.scrollBy(500, 0)
                }
            }>&gt;</button>
            </div>
        </div>
        )
    }else{
        return <div>hi</div>
    }
}

export default ImageSlider