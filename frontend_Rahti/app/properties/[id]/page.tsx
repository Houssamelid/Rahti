import Image from 'next/image';
import Reservationsidebar from '@/app/components/propertylist.tsx/Reservationsidebar';
const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            {/* Main Image Section */}
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    src="/items/riad/r1.avif"
                    alt="riad1"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Property Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Left Side */}
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Riad in Fes, Morocco</h1>
                    <span className='mb-6 block text-lg text-gray-600'>
                        8 Guests • 4 bedrooms • 8 beds • 4 baths
                    </span>
                    <hr />

                    <div className='py-6 flex items-center space-x-4'>
                        <Image
                            src="/items/profil/p1.webp"
                            alt="riad1"
                            width={50}
                            height={50}
                            className="rounded-full"
                        />
                        <p><strong>Ahmed Berwish</strong></p>
                        <hr />
                        <p className='mt-6 text-lg'>
                            Experience the charm of traditional Moroccan hospitality in this beautifully restored riad.
                            Nestled in the heart of the medina, this property offers a serene escape with its authentic
                            decor, tranquil courtyard, and modern comforts. Perfect for travelers seeking an unforgettable
                            stay in a historic yet cozy setting.
                        </p>

                    </div>
                </div>

                {/* Right Side */}
                <div className="col-span-2">
                    <Reservationsidebar />
                </div>
            </div>
        </main>
    );
}

export default PropertyDetailPage;
