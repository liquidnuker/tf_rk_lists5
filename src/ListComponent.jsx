import React from "react";
// import ReactDOM from "react-dom";

export default function ListComponent(props) {
  const listItems = props.dataSrc.map((item) =>
    <li key={item.toString()}>
      {item}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
};

