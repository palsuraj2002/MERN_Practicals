//Conditional Rendering Demo
import React from "react";

const ConditionalDemo = ({ isLogin }) => {
  // By Using IF_ELSE
  //   if (isLogin) {
  //     return <h2>Welcome :)</h2>;
  //   } else {
  //     return <h2>Try Again!</h2>;
  //   }

  return (
    <>
      {/* By Using Ternary Opeartor */}
      {/* {isLogin ? <h2>Welcome :)</h2> : <h2>Try Again!</h2>} */}

      {/* By Using Logical  */}
      {isLogin && <h2>Welcome :)</h2>}
    </>
  );
};

export default ConditionalDemo;
