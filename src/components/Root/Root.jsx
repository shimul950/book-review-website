
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='mx-15 my-10'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;