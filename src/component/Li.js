import React from "react";
import "./Li.css";
function Li(props) {
  return (
    <li>
      <p style={{ marginRight: "20px" }}>{props.index + 1}</p>
      <p>{props.title}</p>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
      >
        <span style={{ marginRight: "10px" }}>
          <i
            className="fa fa-times"
            onClick={() => {
              props.delete(props.id);
            }}
          />
        </span>
        <span>
          <i className="fa fa-pencil" onClick={() => props.update(props)} />
        </span>
      </div>
    </li>
  );
}

export default Li;
