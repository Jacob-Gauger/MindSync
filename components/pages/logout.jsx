import "/css/pages/logout.css";
import { Link } from "react-router-dom";

export default function Logout() {
  return (
    <div className="container">
      <h1>You've been logged out</h1>
      <Link to="/login">
        <button className="btn">Back to Sign In</button>
      </Link>
    </div>
  );
}
