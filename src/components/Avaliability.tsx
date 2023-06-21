//DO PERSON STATE VIA CONTEXT

import { Link } from "react-router-dom";

export const Avaliability = () => {
  return (
    <div className="content">
      <div>
        <div>
          Great so in that timeframe on what days is the first person avaliable?
        </div>
        <div>SELECT DAYS</div>
      </div>
      <Link to="/result">
        <button>Continue</button>
      </Link>
    </div>
  );
};
