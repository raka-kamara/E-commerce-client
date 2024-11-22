import { ClimbingBoxLoader } from "react-spinners";

const Loding = () => {
  return (
    <div className=" min-h-screen min-w-full flex justify-center items-center">
      <ClimbingBoxLoader color="#000000" loading={true}  />
    </div>
  );
};

export default Loding;
