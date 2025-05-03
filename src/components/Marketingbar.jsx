import { useNavigate, NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Marketingbar() {
    const items = [
        "Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"
      ];

  return (
    <div className="marketing-container">
    <div className="marketing-track">
      {[...items, ...items].map((item, index) => (
        <div className="marketing-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  </div>
  );
}

export default Marketingbar;
