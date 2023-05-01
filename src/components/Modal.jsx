import { useGlobalContext } from "../context"

const Modal = () => {
    const {closeModal, movies, selectedMovie} = useGlobalContext();
    const {Poster, Title, Year} = selectedMovie;
  return (
    <aside className="modal-overlay">
        <div className="modal-container">
        <img src={Poster} alt="movie poster" className="img modal-img" />
            <div className="modal-content">
                <h4>{Title}</h4>
                <p>{Year}</p>
                <p>Movie Plot</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="close-btn btn" onClick={closeModal}>Close</button>
            </div>
        </div>
    </aside>
  )
}
export default Modal