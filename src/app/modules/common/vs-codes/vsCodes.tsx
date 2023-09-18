import React from "react";
import CodeElement from "./CodeElement";

export default function VsCodes(): JSX.Element {
  const codes = ["1", "2", "3", "4", "5", "6"]; // can be any code, "p" for example

  return (
    <div className="flex flex-row">
      {codes.map((code, index) => {
        return <CodeElement code={code} key={index} />;
      })}
    </div>
  );
}
