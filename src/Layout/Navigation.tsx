import { Link } from "react-router-dom";

export default function Navigation() {

  
  return (
    <nav className="flex items-center justify-between bg-gray-900 py-4 px-8">
      <Link to="/" className="text-white text-2xl font-bold">
        Logo
      </Link>

      <div className="flex items-center space-x-4">
        <div className="flex items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white placeholder-white::placeholder focus:outline-none"
          />
        </div>

        <Link to="/login" className="text-white">
          Login
        </Link>

        <Link to="/cart" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4h16M6 8h12m-6 10a6 6 0 110-12 6 6 0 010 12z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
