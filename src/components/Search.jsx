import { useGlobalContext } from "../context"
import { useState } from "react"

const Search = () => {

    const [text, setText] = useState('');
    const {setSearchTerm} = useGlobalContext();

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text){
            setSearchTerm(text)
        }
    };

  return (
    <header className="search-container">
        <form className="search-form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={text} type="text" className="form-input" placeholder="Search favorite movie"/>
            <button className="btn search-btn" type="submit">Search</button>
        </form>
    </header>
  )
}
export default Search