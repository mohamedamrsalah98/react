


function MovieCard(props){
    

    return(
      <div className="container-fluid bg-dark position-relative" style={{height : "93.1vh"}}>
<div className="d-flex  position-absolute top-50 start-50 translate-middle ">
  <div className="mb-5" >
  <img src={`https://image.tmdb.org/t/p/w500/${props.img}`} style={{width : "120vw",marginRight: "25%"}} className="img-fluid rounded-start "/>
  </div>
  <div  className="text-white ms-5 mt-5">
  <h5 style={{marginTop: "10%",marginLeft : "20%"}} className="card-title fw-bold fs-1">{props.title}</h5>
  <p  style={{marginTop: "20%",marginLeft : "20%",width : "100%"}} className="card-text fs-5 ">{props.des}</p>
  </div>
</div>
<button className="btn btn-outline-primary">Add to card</button>
</div>
    )
}


export default MovieCard;

