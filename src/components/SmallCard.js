const SmallCard = (props)=>{
    const src = "https://image.tmdb.org/t/p/original"+props.image
    const image = {
        maxHeight: '284px', maxWidth: '220px', border: '2px solid #FFAD00', borderRadius: '9px',transition: 'transform .2s'
    }
    if (props.image){

        return(
            <img className="mx-3 small"  src={src} style={image} ></img>
            )
        }
}
export default SmallCard