import classNames from "classnames";
import { React, useState } from "react";
import { header } from "./components/translate/header";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onCLickHeader = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      <h2>{header.mainTitle}</h2>
      <div className="box">
        <p onClick={onCLickHeader} className="title">
          Click Me!<i className="arrow-up"></i>
        </p>
        <div
          className={classNames(
            "description",
            { "description-active": isOpen },
            // { "green-active": isOpen }
          )}
        >
          {/* <div className={`description ${isOpen ? 'description-active' : ''}`}> */}
          <p>
            Dolore veniam eiusmod incididunt excepteur ea sint dolor ut amet
            incididunt incididunt. Lorem nostrud esse magna est culpa deserunt
            ut minim nisi laboris anim pariatur. Cupidatat culpa aliqua laborum
            nulla ad veniam aliqua laborum duis incididunt do pariatur aute.
            Enim fugiat cupidatat laboris do qui nisi id non exercitation veniam
            nulla sit. Quis elit et nostrud aute magna tempor mollit dolore
            tempor in non ex exercitation incididunt. Proident laborum sint
            dolor amet aute excepteur ea esse ex amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
