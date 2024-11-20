import { PacmanLoader } from "react-spinners";

const Loding = () => {
  return (
    <div className=" min-h-screen min-w-full flex justify-center items-center">
      <PacmanLoader color="#000000" loading={true} size={150} />
    </div>
  );
};

export default Loding;
