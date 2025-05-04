import { useNavigate, NavLink } from "react-router-dom";

function Marketingbar() {
  const items = [
    "Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"
  ];

  return (
    <div className="marketing-container-wrapper">
    <div className="marketing-container ml-20 mr-20">
      <div className="marketing-track">
        {[...items, ...items].map((item, index) => (
          <div className="marketing-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Marketingbar;
