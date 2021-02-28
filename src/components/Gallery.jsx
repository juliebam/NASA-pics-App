import React from 'react'

function Gallery(props) {

    const { pictures } = props;
    const { date, url, title, explanation } = pictures;

    return (
        <div className="gallery">
            <p className="date">{title}</p>
            <img src={url} alt=""/>
            <p className="date">{date}</p>
            <p className="explanation">{explanation}</p>
        </div>      
    )
}



export default Gallery;
