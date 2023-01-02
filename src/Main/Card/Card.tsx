import React from 'react';
import { Link } from 'react-router-dom';
import stylesCard from ".//Card.module.css"

const Card: React.FC<any> = (props) => {
    return (
        <Link to="/menu">
            <div className={stylesCard.wrapper}>
                <div className={stylesCard.infoKiosk}>
                    <div className={stylesCard.stat}></div>
                    <div className={stylesCard.info}>
                        <h3 className={stylesCard.name}>{props.name || props.machineName}</h3>
                        <p className={stylesCard.description}>{props.description || ""}</p>
                    </div></div>
                <p className={stylesCard.version}>{props.version}</p>
                <p className={stylesCard.namePC}>{props.machineName}</p>
            </div>
        </Link>
    )
}
export default Card;