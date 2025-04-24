import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-center text-3xl font-bold font-mono mb-10">
        Welcome to collection of users
      </h1>
      <Link
        to={`/users/`}
        className="hover:bg-blue-700 bg-blue-600 px-6 py-3 text-white rounded-2xl"
      >
        Browse users
      </Link>
    </div>
  );
}

export default Home;
