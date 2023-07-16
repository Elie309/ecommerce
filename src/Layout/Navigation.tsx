import { Link } from "react-router-dom";
import CartIcon from "../components/Icons/CartIcon";
import SearchIcon from "../components/Icons/SearchIcon";

const ICON_HEIGHT_SEARCH = 16;
const ICON_WIDTH_SEARCH = 16;

export default function Navigation() {


  return (
    <nav className="flex justify-between bg-gray-900 py-4 px-8">
      <Link to="/" className="text-white text-2xl font-bold">
        Techology
      </Link>


      <div className="flex justify-around w-2/6 pr-3">

        <div className="relative">
          <SearchIcon
            className="absolute fill-white"
            height={ICON_HEIGHT_SEARCH}
            width={ICON_WIDTH_SEARCH}

          />
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pb-2 bg-transparent border-b-2 border-white text-white placeholder-white::placeholder focus:outline-none"
          />
        </div>

        <Link to="/login" className="text-white">
          Login
        </Link>

        <Link to="/cart" className="text-white">
          <CartIcon
            className="absolute ml-1 fill-white"
            height={26}
            width={26}
          />
        </Link>


      </div>
    </nav>
  );
}
