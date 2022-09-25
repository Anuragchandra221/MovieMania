
import Card from './Card';
{/* <Card image={props.data[0].poster_path} backdrop_path={props.data[0].backdrop_path} title={props.data[0].title} rating={props.data[0].vote_average} /> */}
function Carousell(props) {
  return (
      <div id="carouselExampleIndicators" className="carousel slide mt-3 mt-lg-0" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <Card image={props.data[0].poster_path} backdrop_path={props.data[0].backdrop_path} title={props.data[0].title} rating={props.data[0].vote_average} />
        </div>
        <div className="carousel-item">
        <Card image={props.data[1].poster_path} backdrop_path={props.data[1].backdrop_path} title={props.data[1].title} rating={props.data[1].vote_average} />
        </div>
        <div className="carousel-item">
        <Card image={props.data[2].poster_path} backdrop_path={props.data[2].backdrop_path} title={props.data[2].title} rating={props.data[2].vote_average} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
  );
}

export default Carousell;