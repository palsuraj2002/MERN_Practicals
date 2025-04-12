import React from "react";

const PropsDemo1 = (props) => {
  return (
    <div>
        <hr></hr>
      <h2>
        Name: {props.name} , Country: {props.country}
      </h2>
    </div>
  );
};

export default PropsDemo1;
