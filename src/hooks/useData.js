import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const data = await fetch('data.json').then(res => res.json())
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, setData, refetchData: fetchData };
};

export default useData;