import { useEffect, useState } from 'react';

const FetchData = () => {
    const [estateData, setEstateData] = useState(null);


    useEffect(() => {
        fetch("/estate.json")
            .then(res => res.json())
            .then(data => setEstateData(data));
    },[])

    return estateData;
};

export default FetchData;