import React, {useState} from 'react'

function SearchBar( { findPicture }) {

    const [date, setDate] = useState('');

    const handleChange = (event) => setDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        findPicture(date)
        setDate('')
    }


    return (
      <form>
            <input type="text" value={date} onChange={handleChange} />
             <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    ) 
}



export default SearchBar;
