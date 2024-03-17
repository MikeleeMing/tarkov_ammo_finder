import React from "react";
import './bulletcard.styles.css';


function assignColor(armorclass) {
  if(armorclass > 5 ) {
    return 'bulletsupereffective'
  }
  else if (armorclass === 5) {
    return 'bulletveryeffective'
  }
  else if (armorclass === 4) {
    return 'bulleteffective'
  }
  else if (armorclass === 3) {
    return 'bulletslightlyeffective'
  }
  else {
    return 'bulletnoteffective'
  }
}


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
    var cellcolor1 = '';
    var cellcolor2 = '';
    var cellcolor3 = '';
    var cellcolor4 = '';
    var cellcolor5 = '';
    var cellcolor6 = '';
    
    cellcolor1 = assignColor(ArmorClass1)
    cellcolor2 = assignColor(ArmorClass2)
    cellcolor3 = assignColor(ArmorClass3)
    cellcolor4 = assignColor(ArmorClass4)
    cellcolor5 = assignColor(ArmorClass5)
    cellcolor6 = assignColor(ArmorClass6)


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
            <td className={`tablecell tablelines tabledatatext ${cellcolor1}`}>{ArmorClass1}</td>
            <td className={`tablecell tablelines tabledatatext ${cellcolor2}`}>{ArmorClass2}</td>
            <td className={`tablecell tablelines tabledatatext ${cellcolor3}`}>{ArmorClass3}</td>
            <td className={`tablecell tablelines tabledatatext ${cellcolor4}`}>{ArmorClass4} </td>
            <td className={`tablecell tablelines tabledatatext ${cellcolor5}`}>{ArmorClass5}</td>
            <td className={`tablecell tabledatatext ${cellcolor6}`}>{ArmorClass6}</td>
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