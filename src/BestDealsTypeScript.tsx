import NavBarTypeScript from "./NavBarTypeScript";
import ContactScreen from "./ContactScreen";
import { useLocation } from "react-router-dom";
import { routes } from "./assets/constants/places";
import NavOneTypeScript from "./NavOneTypeScript";
import BestDealsScreenTypeScript from "./BestDealsScreenTypeScript";
import BestDealsDestinationsTypeScript from "./BestDealsDestinationsTypeScript";
import ContactLocationTypeScript from "./ContactLocationTypeScript";
import ContactDetailTypeScript from "./ContactDetailTypeScript";
import ContactParaTypeScript from "./ContactParaTypeScript";

const BestDealsTypeScript = () => {
  const location = useLocation();

  const onClick = (data: any) => {
    //callback function
    console.log("function is sending", data);
  };

  const onSend = () => {
    console.log("deepanshu");
  };

  // const UserContext = React.createContext(null);

  return (
    <div className="bestdeal-container">
      <div>
        <NavOneTypeScript />
      </div>

      <div>
        <NavBarTypeScript />
      </div>

      <div>
        <BestDealsScreenTypeScript callbackfunction={onSend} />
      </div>

      <div>
        <BestDealsDestinationsTypeScript callback={onClick} />
      </div>

      <div>
        <ContactLocationTypeScript />
      </div>

      <div>
        <ContactDetailTypeScript />
      </div>

      <div>
        <ContactParaTypeScript />
      </div>
    </div>
  );
};

export default BestDealsTypeScript;
