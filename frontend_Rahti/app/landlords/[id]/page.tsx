
import Image from 'next/image';
import Contactbutton from '@/app/components/Contactbutton';
import PropertyList from '@/app/components/propertylist.tsx/PropertyListItem';

const Landlordpage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">

                        <Image
                            src="/items/profil/p12.jpeg"
                            width={120}
                            height={100}
                            alt='joseph bershid'
                            className='rounded-full'
                        />
                        <h1 className='m-4 font-bold'>Ahmed sabiri</h1>
                        <Contactbutton />
                    </div>

                </aside>
                <div className=" mt-4 col-span-3 pl-0 md:pl-6">
                    <PropertyList />
                </div>
            </div>
        </main>
    );
};

export default Landlordpage;

