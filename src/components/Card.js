import '../assets/styles/HR.css';

const Card = ({image, title, text, color, className}) => {
    return (
        <div className={className}>
            <div>
              <div className="card-img" style={{backgroundColor: color}}>
                <img src={image} alt="Card Icon" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
