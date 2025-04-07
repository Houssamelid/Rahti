import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyProps {
    property: PropertyType;
}

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <div className="relative w-full h-56">
                <Image
                    src={property.image_url}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    alt={`Image of ${property.title}`}
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                <p className="text-sm text-gray-600">{`${property.price_per_night} $/night`}</p>
                <p className="text-sm text-gray-500">{`Guests: ${property.guests} | Bedrooms: ${property.bedrooms} | Bathrooms: ${property.bathrooms}`}</p>
            </div>
        </div>
    )
};

export default PropertyListItem;