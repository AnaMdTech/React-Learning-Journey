import { Link } from "react-router-dom";

function Home({ users }) {
  return (
    <div className="home">
      <h1 className="text-2xl font-bold font-1">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 bg-gray-100 rounded-md shadow-md">
            <Link
              to={`/users/${user.id}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
