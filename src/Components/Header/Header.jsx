import logo from "../../../public/assets/logo.png"
import moment from "moment";
const Header = () => {
    return (
     <div>
           <div>
            <img className="mx-auto mt-4 lg:mt-12" src={logo} alt=""  />
            <p className="text-lg text-center mt-5 text-gray-500">Journalism Without Fear or Favour</p>
            <p className="text-xl text-center mt-3">{moment().format('LLLL')}</p>
        </div>
       
     </div>
    );
};

export default Header;