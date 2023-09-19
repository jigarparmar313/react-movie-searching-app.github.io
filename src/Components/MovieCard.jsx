import React from 'react'

const MovieCard = ({ allMovieData, loading }) => {
  return (
    <div>

<div className="container ">
<div className="mt-5">

<div>
      {loading ?
        <div className='row'>
          <div className="col-lg-12 text-center">
          <img className="img-fluid " src="https://i.gifer.com/ZZ5H.gif" alt="" width="80px" />
          </div>
        </div>
        :


        <div className='row'>

          
          {allMovieData.map((item, index) => {
            
            const { Title, Year, Poster } = item

            return (

<div className="col-lg-4 text-center col-md-6 col-sm-12 my-2 d-flex flex-column justify-content-center align-items-center "  >

<div className="card" style={{width: "18rem" , padding:"10px" , background:"	#C0C0C0" , color:"	#000000" }}>
  <img src={Poster} className="card-img-top" alt="..." width="250px" height="250px" />
  <div className="card-body">
    <h5 className="card-title">Name - {Title}</h5>
    <p className="card-text">Year - {Year}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
  </div>
  </div>
      )
    })}
  </div>
}
</div>
</div>

</div>

      
    </div>
  )
}

export default MovieCard
