import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-md compact card-side bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow ring ring-bg-gray-700 ring-offset-base-100 ring-offset-2 w-14 h-14">
              <img src={avatar_url} alt="user profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
