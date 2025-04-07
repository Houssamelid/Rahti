

import Image from 'next/image';


const myreservation = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className='mt-6 mb-2 text-2xl font-bold'>My Reservations</h1>
            <hr />

            <div className='pt-6 pb-2'>

                <div className='p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 sahdow-md border border-gray-300 rounded-xl'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image
                                fill
                                src='/items/riad/r2.avif'
                                className='hover:scale-110 object-cover transition h-full w-full'
                                alt='r2'
                            />
                        </div>
                    </div>

                    <div className='col-span-1 md:col-sapn-3 space-y-2'>
                        <h2 className='mb-4 text-xl font-bold'> Morocco,fes n°11</h2>

                        <p className='mb-2'><strong>check in date:</strong> 14/4/2025</p>
                        <p className='mb-2'><strong>check out date:</strong> 17/4/2025</p>

                        <p className='mb-2'><strong>Number of nights:</strong> 3</p>
                        <p className='mb-2'><strong>Total Price:</strong> 200$</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-red-500 hover:bg-green-600 text-white rounded-lg transition">
                            Go to Property
                        </div>

                    </div>


                </div>
            </div>

            <div className='pt-6 pb-2'>

                <div className='p-5 mt-4 grid  grid-cols-1 md:grid-cols-4 gap-4 sahdow-md border border-gray-300 rounded-xl'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image
                                fill
                                src='/items/riad/r3.avif'
                                className='hover:scale-110 object-cover transition h-full w-full'
                                alt='r2'
                            />
                        </div>
                    </div>

                    <div className='col-span-1 md:col-sapn-3 space-y-2'>
                        <h2 className='mb-4 text-xl font-bold'> Morocco,Marrakesh  n°107</h2>

                        <p className='mb-2'><strong>check in date:</strong> 17/4/2025</p>
                        <p className='mb-2'><strong>check out date:</strong> 18/4/2025</p>

                        <p className='mb-2'><strong>Number of nights:</strong> 1</p>
                        <p className='mb-2'><strong>Total Price:</strong> 100$</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-red-500 hover:bg-green-600 text-white rounded-lg transition">
                            Go to Property
                        </div>
    
                    </div>


                </div>
            </div>

            <div className='pt-6 pb-2'>

                <div className='p-5 mt-4 grid  grid-cols-1 md:grid-cols-4 gap-4 sahdow-md border border-gray-300 rounded-xl'>
                    <div className='col-span-1'>
                        <div className='relative overflow-hidden aspect-square rounded-xl'>
                            <Image
                                fill
                                src='/items/riad/r6.avif'
                                className='hover:scale-110 object-cover transition h-full w-full'
                                alt='r2'
                            />
                        </div>
                    </div>

                    <div className='col-span-1 md:col-sapn-3 space-y-2'>
                        <h2 className='mb-4 text-xl font-bold'>Morocco,Oujda n°32</h2>

                        <p className='mb-2'><strong>check in date:</strong> 20/4/2025</p>
                        <p className='mb-2'><strong>check out date:</strong> 27/4/2025</p>

                        <p className='mb-2'><strong>Number of nights:</strong> 7</p>
                        <p className='mb-2'><strong>Total Price:</strong> 600$</p>

                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-red-500 hover:bg-green-600 text-white rounded-lg transition">
                            Go to Property
                        </div>
                    </div>


                </div>
            </div>
        </main>
    );
};

export default myreservation;

