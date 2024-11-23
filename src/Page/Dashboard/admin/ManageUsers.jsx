import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://gadget-shop-server-three.vercel.app/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMakeAdmin = async (user) => {
    try {
      const res = await axios.patch(
        `https://gadget-shop-server-three.vercel.app/users/role/${user._id}`,
        { role: "admin" },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      if (res.data.modifiedCount > 0) {
        alert(`${user.name} is now an Admin.`);
        fetchUsers(); // Refresh user list
      }
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const handleDeleteUser = async (user) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );
    if (!confirmDelete) return;

    try {
      const res = await axios.delete(
        `https://gadget-shop-server-three.vercel.app/users/${user._id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      if (res.data.deletedCount > 0) {
        alert(`${user.name} has been deleted.`);
        setUsers(users.filter((u) => u._id !== user._id)); // Optimistic update
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdateStatus = async (user, status) => {
    try {
      const res = await axios.patch(
        `https://gadget-shop-server-three.vercel.app/users/status/${user._id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      if (res.data.modifiedCount > 0) {
        alert(`Status of ${user.name} updated to ${status}.`);
        fetchUsers();
      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-yellow-500"
                      >
                        <FaUsers className="text-white text-2xl" />
                      </button>
                    )}
                  </td>
                  <td>
                    <select
                      value={user.status || "pending"}
                      onChange={(e) =>
                        handleUpdateStatus(user, e.target.value)
                      }
                      className="select select-bordered"
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
