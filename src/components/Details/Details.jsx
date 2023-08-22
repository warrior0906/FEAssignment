import React from "react";
import "./Details.scss";

function Details(props) {
  const { data } = props;
  return data?.map((item, i) => (
    <div key={i} className="row">
      <p className="key">{item.key} :</p>
      <h1 className="value">{item.value}</h1>
    </div>
  ));
}

export default Details;
