'use client';

import apiService from "@/app/services/ApiService";
import { useEffect, useState } from "react";
import PropertyListItem from "./PropertyListItem";

export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
    guests: number;   // Added new fields
    bedrooms: number;
    bathrooms: number;
    country: string;
    category: string;
};

const PropertyList = () => {
    const [properties, setproperties] = useState<PropertyType[]>([]);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const getProperties = async () => {
        const tmpProperties = await apiService.get("/api/properties/")
        setproperties(tmpProperties.data);
    };
    
    useEffect(() => {
        getProperties();
    }, []);

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">R I A D S</h1>
                <button 
                    onClick={toggleTheme} 
                    className={`p-2 rounded transition duration-300 ${theme === 'dark' ? 'bg-gray-600 text-white' : 'bg-gray-300 text-black'}`}>
                    Toggle Theme
                </button>
            </div>
            <hr className="m-5"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    properties.map((property) => {
                        return (
                            <PropertyListItem key={property.id} property={property} />
                        );  
                    })
                }
            </div>
        </div>
    );
};

export default PropertyList;