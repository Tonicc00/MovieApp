import {useGlobalContext} from '../context'

const Favorites = () => {
  const {favorites, selectMovie, removeFromFavorites} = useGlobalContext();

  return (
    <section className='favorites'>
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const {imdbID, Poster, Title} = item;
            return (
              <div className="favorite-item" key={imdbID}>
                <img src={Poster} alt="movie poster" className='favorites-img' onClick={()=>selectMovie(imdbID, true)} />
                <h6>{Title}</h6>
                <button className="remove-btn" onClick={()=>removeFromFavorites(imdbID)}>Remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Favorites