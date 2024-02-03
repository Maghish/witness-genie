import { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api');
            const json = await response.text();
            
            setData(json);
        }

        fetchData()
    }, [])

    return (
        <>
            <p>{data}</p>
        </>
    )
}

export default App;
