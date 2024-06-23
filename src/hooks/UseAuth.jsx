import { useContext } from 'react';
import { AuthContext } from '../provider/ContextProvider';

const UseAuth = () => {
    const all = useContext(AuthContext);
    return all;
};

export default UseAuth;