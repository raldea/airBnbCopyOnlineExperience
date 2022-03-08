function Card(props) {
    let status;

    if (props.openSpots === 0) {
        status = 'SOLD OUT';
    } else if (props.location.toLowerCase() === 'online') {
        status = 'ONLINE';
    }

    return (
        <div className="card-list">
            <div className="image-wrapper">
                <img src={`../assets/images/${props.img}`} alt={props.name}/>
                {status && <div className="sold-out"><strong>{status}</strong></div>}
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
