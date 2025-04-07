
import PropertyList from '../components/propertylist.tsx/PropertyListItem';


const myproperties = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className='my-6 text-2xl font-bold'> My Properties </h1>
            <hr/>
            <div className=" mt-4 col-span-3 pl-0 md:pl-6">
                <PropertyList />
            </div>
        </main>
    );
}

export default myproperties;