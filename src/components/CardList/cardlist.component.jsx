import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import BulletCard  from '../BulletCard/bulletcard.component'

import "./cardlist.styles.css";

const CardList = ({ bullets }) => (
    <div className="bulletlist">
        {bullets.map(bullet => (
            <BulletCard key={bullet.Name} bullet={bullet} />
        ))}
    </div>
);

export default CardList;