import { Link } from "react-router-dom";
import "../css/PartCard.css";

const PartCard = ({ part }) => {
  return (
      <div className="part-card">
        <img
          src={part.partImage}
          alt={part.partTitle}
          className="part-card-image"
        />
        
        <div className="part-card-body">
          <h3 className="part-card-title">{part.partTitle}</h3>
          <p className="part-card-joestar">{part.joestar}</p>
          
          <Link to={part.path} className="part-card-link">
            <button className="part-card-button">View Part</button>
          </Link>
        </div>
      </div>
  );
};

export default PartCard;
