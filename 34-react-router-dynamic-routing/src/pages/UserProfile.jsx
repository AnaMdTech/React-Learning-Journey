import { useParams } from "react-router-dom";

function UserProfile({ users }) {
  const { id } = useParams(); // Get the user ID from the URL

  const currentUser = users.find((user) => user.id === Number(id));

  if (!currentUser) {
    return <h2 className="text-red-500">User not found</h2>;
  }

  return (
    <div className="p-4 border border-gray-300 rounded-md shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-semibold">{currentUser.name}</h1>
      <p className="text-sm text-gray-700">Email: {currentUser.email}</p>
    </div>
  );
}

export default UserProfile;
