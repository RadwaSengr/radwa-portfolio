import { useState } from 'react';

function Card(props) {
  
  const [likes, setLikes] = useState(0);

  return (
    <div className="card mt-4 border-primary">
      <div className="card-body">
        
        <h5 className="card-title text-primary">{props.title}</h5>
        
        <p className="card-text">
          {props.text}
        </p>
        
        <button 
          className="btn btn-outline-primary" 
          onClick={() => setLikes(likes + 1)}
        >
          <i className="fa-solid fa-heart"></i> Likes {likes}
        </button>
        
      </div>
    </div>
  );
}

export default Card;