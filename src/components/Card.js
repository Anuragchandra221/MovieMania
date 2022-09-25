
const Card = (props)=>{
    const src = "https://image.tmdb.org/t/p/original"
    const para = {
        color: '#fff',
        fontWeight: '200',
        maxWidth: 'fit-content',
    }
    return (
        <div className="row p-0 m-0 d-flex align-items-center justify-content-center" style={{width: '100%'}}>
            <div className="col-12 col-lg-3 d-flex align-items-center justify-content-center" style={{flexDirection: 'column'}}>
                <img src={src+props.image} style={{maxHeight: '284px', maxWidth: '220px'}} className="mb-3"></img>
                <p style={{...para,...{fontWeight: 700}}} className='mb-2' >{props.title}</p>
                <div>

                    <span style={para} className="mr-1">{props.rating}/10</span>
                    <span style={{...para , ...{border: '2px solid #FFAD00', padding: '1.3px'}}} className="mr-1">IMDB</span>
                    <span style={{...para , ...{border: '2px solid #FFAD00', padding: '1.3px'}}} >Reviews</span>
                </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-start justify-content-center mt-3 mt-lg-0">
                    {props.backdrop_path?<img src={src+props.backdrop_path} style={{height: '110%', width: '110%'}}></img>:<></>}
                </div>
            
        </div>
    //     <div className="card" style="width: 18rem;">
    //     <img className="card-img-top" src={src} alt="Card image cap"/>
    //     <div className="card-body">
    //       <h5 className="card-title">{props.title}</h5>
    //       <p className="card-text">{props.rating}</p>
    //       <a href="#" className="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div> */}
    );
}

export default Card