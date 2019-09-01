import React from "react";

function NameAndPassWord({ name, password }) {
  return (
    <div>
      <div>username — {name}</div>
      <div>password — {password}</div>
    </div>
  );
}

export default NameAndPassWord;
