import useUserData from "../../hooks/useUserData";

const Overview = () => {
  const userData = useUserData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-300 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 w-full max-w-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome, {userData.name || "User"}!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          We’re thrilled to have you here. Explore your personalized dashboard and enjoy all the features crafted just for you.
        </p>
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-medium text-gray-700">
            Account Information
          </h2>
          <div className="mt-4 bg-gray-100 p-4 rounded-lg text-left">
            <p className="text-gray-700 text-base md:text-lg">
              <strong>Email:</strong> {userData.email || "N/A"}
            </p>
            <p className="text-gray-700 text-base md:text-lg mt-2">
              <strong>Role:</strong> {userData.role || "N/A"}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Overview;
