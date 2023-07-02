import React from "react";
import Card from "./card";

const CardList = ({ list }) => {
  console.log(list)
    return (
      <ul className="list">
        {list.items.map((item, index) => {
          return <Card key={index} item={item} channel={list.channel} />;
        })}
      </ul>
    );
  };

  export default CardList;