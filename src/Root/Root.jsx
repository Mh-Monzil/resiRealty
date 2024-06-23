import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react';

const Root = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            document.title = 'ResiRealty - Home';
        }
        else{
            document.title = `ResiRealty ${location.pathname.replace("/", "- ")}`
        }
        if(location.state){
            document.title = location.state
        }
    }, [location.pathname]);

    return (
        <div className=' font-nunito'>
            <div className='max-w-[1680px] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;