import React, { useState, useEffect } from "react";

interface Location {
    name: string;
}

const LocationComponent: React.FC = () => {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            const response = await fetch('https://example.com/api');
            const data: Location = await response.json();
            setLocation(data);
        };

        fetchLocation();
    }, []);

    return (
        <div>
            <h1>Location Test</h1>
            {location ? <h4>{location.name}</h4> : <p>Loading...</p>}
        </div>
    );
};

export default LocationComponent;