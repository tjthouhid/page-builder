import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import React, { useState } from "react";

export default function Index() {
  
   const [elements, setElements] = useState([
    { type: "text", content: "Welcome to the Page Builder!" },
  ]);

  const addElement = (type) => {
    setElements([...elements, { type, content: "" }]);
  };

  const updateElement = (index, content) => {
    const updatedElements = [...elements];
    updatedElements[index].content = content;
    setElements(updatedElements);
  };
  return (
    <div className="bg-black">
      <div>
        {elements.map((element, index) => (
          <div key={index}>
            {element.type === "text" ? (
              <textarea className="form-textarea px-4 py-3 w-1/2 m-5 resize-none h-52"
                value={element.content}
                onChange={(event) =>
                  updateElement(index, event.target.value)
                }
              />
            ) : (
              <img src={element.content} alt="" />
            )}
          </div>
        ))}
      </div>
      <div>
        <button className="bg-sky-500/100 hover:bg-cyan-600 m-4 p-4 rounded-full" onClick={() => addElement("text")}>Add Text Element</button>
        <button className="bg-red-500/100 hover:bg-red-600 m-4 p-4 rounded-full" hover:bg-cyan-600 onClick={() => addElement("image")}>Add Image Element</button>
      </div>
    </div>
  );
}


