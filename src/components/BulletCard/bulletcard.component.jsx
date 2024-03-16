import React from "react";
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
    console.log("bullet damage: ", BulletImg);

  return (
    <div className="card">
      <img className="img" src={`${process.env.PUBLIC_URL}/${BulletImg}`} alt=''/>
      <div className="card-title">{ Name }</div>
        <ul className="list">
          <li className="item center">Damage: { DMG }</li>
          <li className="item center">Penetration: { PenetrationPower }</li>
          <li className="item center">Frag Change: { FragChance }</li>
          <li className="armor">
          <span className="armor-value"> 
          <div className="effective">Effectiveness Against Armor:</div><br/>
          <div className="armor-v">
          <table class="custom-table">
          <thead>
          <tr>
            <th className="tablecell tablelines">Class 1</th>
            <th className="tablecell tablelines">Class 2</th>
            <th className="tablecell tablelines">Class 3</th>
            <th className="tablecell tablelines">Class 4</th>
            <th className="tablecell tablelines">Class 5</th>
            <th className="tablecell">Class 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tablecell tablelines">{ArmorClass1}</td>
            <td className="tablecell tablelines">{ArmorClass2}</td>
            <td className="tablecell tablelines">{ArmorClass3}</td>
            <td className="tablecell tablelines">{ArmorClass4} </td>
            <td className="tablecell tablelines">{ArmorClass5}</td>
            <td className="tablecell">{ArmorClass6}</td>
          </tr>
          </tbody>
        </table>
            
            
                      </div></span><br/>

          </li>
        </ul>

    </div>

  );
};

export default BulletCard;