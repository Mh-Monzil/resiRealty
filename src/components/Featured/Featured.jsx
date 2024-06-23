import FetchData from '../../hooks/FetchData';
import UseAuth from '../../hooks/UseAuth';
import Feature from '../Feature/Feature';


const Featured = () => {
    const {user} = UseAuth();
    const estateData = FetchData();
    
    return (
        <div className='mt-12 md:mt-24 max-w-7xl mx-auto'>
            <h3 className='text-4xl font-bold text-center'>Featured Properties</h3>
            <p className="text-center text-lg md:w-[750px] mx-auto mt-5">Boasts eco-friendly design, state-of-the-art security, energy-efficient systems, luxurious finishes, and smart home technology for modern living.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-12'>
                {
                    estateData?.map(item => <Feature key={item.id} estate={item} />)
                }
            </div>
        </div>
    );
};

export default Featured;