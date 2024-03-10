import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './bulletcard.styles.css';




function BulletCard({ bullet }) {
    const { Name, DMG } = bullet;
    const PenetrationPower = bullet["Penetration power"];
    const FragChance = bullet["Frag chance"];
    const ArmorClass1 = bullet["Armor class 1"];
    const ArmorClass2 = bullet["Armor class 2"];
    const ArmorClass3 = bullet["Armor class 3"];
    const ArmorClass4 = bullet["Armor class 4"];
    const ArmorClass5 = bullet["Armor class 5"];
    const ArmorClass6 = bullet["Armor class 6"];
    const BulletImg = bullet["imgurl"];

  return (
    <Card className="card" border="secondary" style={{ width: '18rem' }} bg={'Dark'}>
      <Card.Img className="img" variant="top" src={BulletImg} />
      <Card.Body>
        <Card.Title>{Name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="item">Damage: { DMG }</ListGroup.Item>
        <ListGroup.Item className="item">Penetration: { PenetrationPower }</ListGroup.Item>
        <ListGroup.Item className="item">Frag Change: { FragChance } </ListGroup.Item>
        <ListGroup.Item className="item">
        Effectiveness Against Armor:<br/>
        <span className="armor-value">Class 1: {ArmorClass1}</span><br/>
        <span className="armor-value">Class 2: {ArmorClass2}</span><br/>
        <span className="armor-value">Class 3: {ArmorClass3}</span><br/> 
        <span className="armor-value">Class 4: {ArmorClass4}</span><br/> 
        <span className="armor-value">Class 5: {ArmorClass5}</span><br/> 
        <span className="armor-value">Class 6: {ArmorClass6}</span><br/> 
         </ListGroup.Item>

      </ListGroup>
    </Card>
  );
};

export default BulletCard;