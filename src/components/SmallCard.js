import { getUser } from "../Utils/Common"

const SmallCard = (props)=>{
    const src = "https://image.tmdb.org/t/p/original"+props.image
    const image = {
        maxHeight: '284px', maxWidth: '220px', border: '2px solid #FFAD00', borderRadius: '9px',transition: 'transform .2s'
    }
    console.log("small card")
    if (props.image){

        return(
            <div style={{display: 'inline'}}>
                <img className="mx-2 mx-lg-3 small image"  src={src}  ></img>
                {/* {getUser() && props.movie?<span className="watchlist" onClick={()=>{alert('hi')}}><i class="fa-sharp fa-solid fa-plus"></i></span>:<></>} */}
                
            </div>
            )
        }
}
export default SmallCard