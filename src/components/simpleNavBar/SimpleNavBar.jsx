import { useNavigate } from "react-router-dom";
import "./simpleNavBar.scss";

const SimpleNavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="app__simpleNavBar">
      <div className="app__navbar-logo" onClick={() => navigate("/#projects")}>
        MTORRESWEB
      </div>
    </div>
  );
};

export default SimpleNavBar;
