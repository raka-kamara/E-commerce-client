import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
    const {GoogleLogin} = useAuth();
    const navigate = useNavigate();
    const handleGoogleLogin = () =>{
        GoogleLogin().then(()=>{
            navigate("/");
        });
        
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="flex justify-center ">
                <button onClick={handleGoogleLogin} className="btn  border-0 border-b-2 bg-gray-200 btn-wide text-3xl"><FcGoogle/> <span className="text-lg">Google</span></button>
            </div>
        </div>
    );
};

export default GoogleLogin;