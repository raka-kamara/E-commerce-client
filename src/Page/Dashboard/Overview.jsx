import useAuth from "../../hooks/useAuth";

const Overview = () => {
    const {user} = useAuth()
    return (
        <div>
            <h3 className="font-bold text-xl text-center">{user.email}</h3>
        </div>
    );
};

export default Overview;