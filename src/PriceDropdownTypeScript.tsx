import { useState } from "react";

const PriceDropdownTypeScript = () => {
  const [isOpen, setIsSopen] = useState(true);

  const toggleDropdown = () => {
    setIsSopen(!isOpen);
  };

  return (
    <div className="right-form">
      <div
        className={`price-header ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <h3>$1299 PER PERSON </h3>
      </div>
      {isOpen && (
        <div
          className={
            isOpen ? "columncontainer-right" : "columncontainer-right-height"
          }
        >
          <div className="price-content">
            <p className="tag">Cultural Heritage Special</p>

            <div className="price-row">
              <div>
                <p className="small">
                  From<del className="delete">$1,499</del>
                </p>
                <h4>
                  $1,299<span className="span">/Person</span>
                </h4>
              </div>

              <div>
                <p className="small">
                  From<del className="delete">$1,099</del>
                </p>
                <h4>
                  $999<span className="span">/Child</span>
                </h4>
              </div>
            </div>
            <hr className="hr-price" />
            <ul className="features">
              <li>Alhambra Priority Access</li>
              <li>Expert Moorish Culture Guides</li>
              <li>Small Group Experience </li>
              <li>Exclusive Evening Visits</li>
            </ul>

            <button className="price-btn">+1-805-702-1258</button>
            <p className="questions">
              Questions? <span className="org-spn">Send Us Enquiry</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceDropdownTypeScript;
