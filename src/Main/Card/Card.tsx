import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import stylesCard from ".//Card.module.css"

const linkStyle = {
    textDecoration: "none"
}

const Card: React.FC<any> = (props) => {
    const { path, url } = useRouteMatch();

    return (
        <Link to={`${url}/${props.id}`} style={linkStyle}>
            <div className={stylesCard.wrapper}>
                <div className={stylesCard.infoKiosk}>
                    <div className={props.isLaunched === true ? stylesCard.statOnline : stylesCard.statOffline}></div>
                    <div className={stylesCard.info}>
                        <h4 className={stylesCard.name}>{props.name || props.machineName}</h4>
                        <p className={stylesCard.description}>{props.description || ""}</p>
                    </div></div>
                <div className={stylesCard.version}>{props.version}</div>
                <div className={stylesCard.namePC}>{props.machineName}</div>
            </div>
        </Link >
    )
}
export default Card;

