import React from 'react'

export default function Movie(props) {
    return (
      
            <div className='Movie'>
            <div className="movie--gist">
                <h2 className='title'>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <img className="movie--poster" src={props.imgUrl} />
                <a href={props.trailer} target="_blank" className='trailer--link'>Click to Watch The Trailer</a>
            </div>
            
            <div className='movie--details'>
                <div className="description"> <p> {props.description}
                   </p></div>
                <div className="cast">  <p>Cast:Benedict Cumberbatch as Doctor Strange, Benedict Wong as Wong, Rachel McAdams as Doctor Christine Palmer, and Chiwetel Ejiofor as Mordo</p></div>
            </div>
           
            
            </div>
      
            
     
        )

}

/**
    <div className='movie--details'>
                <div className="description"> <p> This is a sequel to Dr Strange released in 2016 which has high expections among fans all over the world.
                   </p></div>
                <div className="cast">  <p>Cast:Benedict Cumberbatch as Doctor Strange, Benedict Wong as Wong, Rachel McAdams as Doctor Christine Palmer, and Chiwetel Ejiofor as Mordo</p></div>
            </div>**/