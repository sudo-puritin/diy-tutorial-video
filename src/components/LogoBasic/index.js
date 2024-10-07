import { useNavigate } from "react-router-dom";

import logoHeader from "../../images/logoHeader.png";

const LogoBasic = ({ other }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ width: 80, height: 80, cursor: "pointer" }}
      {...other}
      onClick={() => navigate("/")}
    >
      <img src={logoHeader} alt="logo" width="100%" />
    </div>
  );
};

export default LogoBasic;
