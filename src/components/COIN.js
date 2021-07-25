import React from "react";
import "../css/COIN_STYLES.css";

function COIN(props) {
  const { name, symbol, img, price, high, low, marketcap } = props;

  return (
    <div>
      <div className="Coin-item">
        <div className="Coin-spec">{name}</div>
        <div className="Coin-spec">{symbol}</div>
        <div className="Coin-spec">
          <img className="Coin-image" src={img} alt="" />{" "}
        </div>
        <div className="Coin-spec">{price}</div>
        <div className="Coin-spec">{high}</div>
        <div className="Coin-spec">{low}</div>
        <div className="Coin-spec">{marketcap}</div>
      </div>
    </div>
  );
}

export default COIN;