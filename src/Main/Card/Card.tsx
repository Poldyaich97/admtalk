import { styles } from '@skbkontur/react-ui/cjs/components/Token/Token.styles';
import stylesCard from ".//Card.module.css"
import React from 'react';

export default function Card() {

    return (
        <div className={stylesCard.wrapper}>
            <div className={stylesCard.info}>
                <h4 className={stylesCard.name}>5-й эллемент</h4>
                <p className={stylesCard.description}>Екатеринубрг,Радищева 28, 621</p>
            </div>
            <p className={stylesCard.version}>1.240</p>
            <p className={stylesCard.namePC}>355g23</p>

        </div>
    )
}