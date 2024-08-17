import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';
import { CarCardPattern } from './CarCardPattern';

export function CarsList2({ limit, filter }) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const filteredCars = carsData.filter(car => {
            if (!filter) return true;
            return car.type === filter;
        });
        setCars(filteredCars.slice(0, limit));
    }, [limit, filter]);

    return (
        <div className="row gx-3 gy-3">
            {cars.map(car => (
                <CarCardPattern key={car.id} car={car} />
            ))}
        </div>
    );
}
