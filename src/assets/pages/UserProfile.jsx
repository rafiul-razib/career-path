import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl my-8">
        <figure className="px-10 pt-10">
          <img src={user.photoURL} alt="user photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName}</h2>
          <p>{user.email}</p>
          <div className="card-actions">
            <Link to={"/"}>
              <button className="btn btn-primary">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
