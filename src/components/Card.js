import swimmer from '../assets/images/swimming.png';

function Card(props) {
    return (
        <div className="card-list">
            <div className="image-wrapper">
                <img src={props.img} alt={props.name}/>
                <div className="sold-out">{props.status}</div>
            </div>
            <div className="card-content-wrapper">
                <div className="review-country-wrapper">
                    <div className="review-wrapper">
                        {props.review} <span>({props.reviewCount})</span>
                    </div>
                    <div className="country-wrapper">
                        <ul>
                            <li>{props.location}</li>
                        </ul>
                    </div>
                </div>

                {props.name && <div className="name-wrapper">{props.name}</div>}

                <div className="cost-wrapper">
                    <strong>From ${props.price} / </strong>person
                </div>
                </div>
        </div>
    );
}

export default Card;
