import React from "react";
import hoomans from "./assets/Humaaans.png";
import { Signup } from "./components/Signup";

const App: React.FC = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-7">
          <Signup />
        </div>
        <div className="col-sm-5 my-auto ">
          <img className="img-fluid" src={hoomans} alt="hoomans" />
        </div>
      </div>
    </div>
  );
};

export default App;
