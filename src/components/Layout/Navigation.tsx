import { Link, useNavigate } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import SearchIcon from "../Icons/SearchIcon";
import { useAuthValue } from "../AuthProvider";
import ProfilSkeleton from "../Icons/ProfilSkeleton";
import PopupMenu from "../AppearingDiv/PopupMenu";

const ICON_HEIGHT_SEARCH = 16;
const ICON_WIDTH_SEARCH = 16;

export default function Navigation() {

  const isAuthenticated = useAuthValue().authenticated;
  const navigate = useNavigate();

  function handleDropDownClick(value: string) {
    navigate(value);
  }



  return (
    <nav className="flex justify-between bg-gray-900 px-4 py-2 md:py-4 md:px-8">
      <Link to="/" className="text-white text-xl md:text-2xl font-bold">
        Techology
      </Link>

      <div className="flex justify-around w-2/6 pr-3">

        <div className="relative hidden md:block">
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

        <Link to="/cart" className="text-white">
          <CartIcon
            className="absolute ml-1 fill-white"
            height={26}
            width={26}
          />
        </Link>

        {
          isAuthenticated ?
            (
              <ProfileNavigationItems handleDropDownClick={handleDropDownClick} />
            )
            :
            (
              <Link to="/login" className="text-white">
                Login
              </Link>
            )
        }
      </div>
    </nav >
  );
}


const ProfileNavigationItems = (props: { handleDropDownClick: (value: string) => void }) => {

  const MenuItems = [
    { text: "Profile", link: "/profile" },
    { text: "Logout", link: "/logout" }
  ]

  return (

    <PopupMenu
      text={<ProfilSkeleton className="fill-transparent" subclass="fill-white" height={26} width={26} />}
      elementWrapperClass="bg-white shadow-md rounded-xl z-10"
      onChildClick={props.handleDropDownClick}
      internalElementClass="hover:bg-indigo-500 hover:text-white"
      elements={MenuItems}
    />

  )
}