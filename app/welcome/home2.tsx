import { useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { Popup } from "./component/newPopup";

export function Welcome() {


  const [isOpen,setIsOpen] = useState(true);

  const data = [
    {
      "id": "001",
      "name": "list 1",
      "status": "to-do",
      "description": "description 1",
    },
    {
      "id": "002",
      "name": "list 2",
      "status": "on progress",
      "description": "description 2",
    },
    {
      "id": "003",
      "name": "list 3",
      "status": "done",
      "description": "description 3",
    }
  ]

  return (
    <main className="mx-20">
      <h1 className="text-center text-3xl p-20">To-Do-List</h1>
      <div className="text-right text-cyan-600">New</div>
      <div className="grid grid-cols-3">
        {data.map(item => (
          <div key={item.id}>
            <div className="bg-gray-100 rounded-2xl shadow-xl w-72 h-60 p-5">
              <div className="flex justify-between">
                <h1 className="text-cyan-600 font-semibold">{item.name}</h1>
                <div className="text-red-600 font-semibold">Delete</div>
              </div>
              <h1>{item.status}</h1>
              <div>
                {item.description}
                
              </div>
            </div>
          </div>
        ))}

      </div>
      {
      isOpen && (
        <Popup />
      )
    }
    </main>
  );
}