import React from 'react';
import { styles } from '@skbkontur/react-ui/cjs/components/Token/Token.styles';
import stylesCard from ".//Card.module.css"

const Card: React.FC<any> = (props) => {
    console.log(props);
    return (
        <div className={stylesCard.wrapper}>
            <div className={stylesCard.infoKiosk}>
                <div className={stylesCard.stat}></div>
                <div className={stylesCard.info}>
                    <h3 className={stylesCard.name}>{props.name}</h3>
                    <p className={stylesCard.description}>{props.description}</p>
                </div></div>
            <p className={stylesCard.status}>В сети</p>
            <p className={stylesCard.version}>{props.version}</p>
            <p className={stylesCard.namePC}>{props.machineName}</p>

        </div>
    )
}
export default Card;