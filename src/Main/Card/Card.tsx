import React from 'react';
import stylesCard from ".//Card.module.css"

const Card: React.FC<any> = (props) => {
    return (
        <div className={stylesCard.wrapper}>
            <div className={stylesCard.infoKiosk}>
                <div className={stylesCard.stat}></div>
                <div className={stylesCard.info}>
                    <h3 className={stylesCard.name}>{props.name}</h3>
                    <p className={stylesCard.description}>{props.description}</p>
                </div></div>
            <p className={stylesCard.version}>{props.version}</p>
            <p className={stylesCard.namePC}>{props.machineName}</p>

        </div>
    )
}
export default Card;