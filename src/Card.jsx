import { useState } from 'react';

function Card({ title, text }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card h-100 border-primary card-hover">
      <div className="card-body d-flex flex-column justify-content-between p-4">
        <div>
          <h5 className="card-title text-primary fw-bold mb-3">{title}</h5>
          <p className="card-text text-secondary">{text}</p>
        </div>
        
        <div className="mt-3 text-center">
          <button 
            className="btn btn-outline-primary w-100 fw-bold" 
            onClick={() => setLikes(likes + 1)}
          >
            <i className="fa-solid fa-heart me-1"></i> Likes {likes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;