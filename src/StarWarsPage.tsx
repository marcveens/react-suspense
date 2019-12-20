import React, { Suspense } from 'react';
import { getPeople, getPlanets } from './Api';

// Starts fetching the data before even rendering the component
const peopleApi = getPeople();
const planetsApi = getPlanets();

const People = () => {
    // .read() only reads the promise, it doesn't fetch any data
    const people = peopleApi.read();

    return (
        <ul>
            {people?.results.map((person, index) => (
                <li key={index}>{person.name}</li>
            ))}
        </ul>
    );
};

const Planets = () => {
    // .read() only reads the promise, it doesn't fetch any data
    const planets = planetsApi.read();

    return (
        <ul>
            {planets?.results.map((planet, index) => (
                <li key={index}>{planet.name}</li>
            ))}
        </ul>
    );
};

export const StarWarsPage = () => {
    return (
        <Suspense
            fallback={<div>Loading people...</div>}>
            <People />

            <Suspense
                fallback={<div>Loading planets...</div>}>
                <Planets />
            </Suspense>
        </Suspense>
    );
};