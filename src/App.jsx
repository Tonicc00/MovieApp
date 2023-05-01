import Favorites from "./components/Favorites"
import Search from "./components/Search"
import Movies from "./components/Movies"
import Modal from "./components/Modal"
import { useGlobalContext } from "./context"

function App() {

  const {showModal, favorites} = useGlobalContext();

  return (
    <main>
      {favorites.length > 0 && <Favorites/>}
      <Search/>
      <Movies/>
      {showModal && <Modal/>}
    </main>
  )
}

export default App
