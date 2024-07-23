import "./Features.scss";

export default function Features(children) {
    return (
        <div className="feature-item">
            <img className="feature-icon" src={children.image} alt={children.alt} />
            <h3 className="feature-item-title">{children.title}</h3>
            <p>{children.description}</p>
        </div>
    );
}
