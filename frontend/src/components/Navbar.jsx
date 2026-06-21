import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-dark bg-primary">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Odin Book
        </Link>

        <div>

          <Link
            className="btn btn-light me-2"
            to="/users"
          >
            Users
          </Link>

          <Link
            className="btn btn-light"
            to="/profile/1"
          >
            Profile
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;