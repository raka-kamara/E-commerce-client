import { BiLogOut } from 'react-icons/bi';
import { GrOverview } from 'react-icons/gr';
import { IoHomeOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import useUserData from '../../hooks/useUserData';

const Sidebar = () => {
    const data = useUserData()
    console.log(data)
    return (
        <div className="bg-gray-200 border-r border-black min-h-screen px-8 py-16">
           
            <ul className="flex flex-col gap-2">
                 <h1>Gadget Shop</h1>
                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                    <GrOverview/><p>Overview</p></NavLink>
                </li>

                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/" className="flex items-center gap-2">
                    <IoHomeOutline/><p>Home</p></NavLink>
                </li>

                <li className="p-2 border border-black rounded-md">
                    <NavLink to="/dashboard/overview" className="flex items-center gap-2">
                    <BiLogOut/><p>Logout</p></NavLink>
                </li>
           
            </ul>
        </div>
    );
};

export default Sidebar;