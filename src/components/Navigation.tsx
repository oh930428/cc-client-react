import logo from "../assets/images/caffein_white.png";
import icon from "../assets/images/vector_white.png";

const Navigation = () => {
  return (
    <div style={{ height: 64 }}>
      <div
        style={{
          padding: "16px 247px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="caffein logo" />
        <img src={icon} alt="caffein icon" />
      </div>
    </div>
  );
};

export default Navigation;
