import { useGlobalContext } from "../context"
import { BsHandThumbsUp } from 'react-icons/bs'


const Movies = () => {
    const {loading, movies, selectMovie, addToFavorites} = useGlobalContext();

    if (loading) {
        return <section className="section">
            <h4>Loading...</h4>
        </section>
    } 
    if(movies.length < 1){
        return <section className="section">
        <h4>No movie matched your search term. Please try again.</h4>
    </section>
    }

  return ( 
  <section className='movie-container'>
        {movies.map((movie) => {
            const {Poster, Title, Year, imdbID: id} = movie;
            return <article key={id} className="single-movie">
                <img src={Poster} onClick={()=>selectMovie(id)} alt="movie poster" style={{width:'200px'}} className="img movie-poster"/>
                <footer className="movie-footer">
                    <h5 className="movie-title">{Title}, </h5>
                    <h5>{Year}</h5>
                    <button onClick={() => addToFavorites(id)} className="like-btn"><BsHandThumbsUp/></button>
                </footer>
            </article>
        })}
    </section>
  )
}
export default Movies