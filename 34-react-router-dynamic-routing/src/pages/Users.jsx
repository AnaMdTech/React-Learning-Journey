import { Link } from "react-router-dom";

function Users({ users }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold font-mono mb-8 text-center">
        Users List
      </h1>
      <ul className="space-y-4 w-full max-w-md">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-100 rounded-lg shadow-md transition hover:shadow-lg"
          >
            <Link
              to={`/users/${user.id}`}
              className="block w-[90%] h-full p-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
