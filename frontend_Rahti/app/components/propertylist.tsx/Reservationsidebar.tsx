
const Reservationsidebar = () => {
    return(
       <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
                <h2 className="mb-5 text-2xl">$300 Per  4 nights</h2>

                <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                    <label className="block font-bold text-xs">Guests</label>
                    <select className="w-full ml-1 text-xm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="4">5</option>
                        <option value="4">6</option>
                        <option value="4">7</option>
                        <option value="4">8</option>
                    </select>
                </div>

                <div className="w-full mb-6 py-6 text-center text-white bg-red-500 rounded-xl hover:bg-green-600 cursor-pointer">
                    book
                </div>
                <div className="mb-4 flex justify-between align-center">
                    <p>$100 * 1 night</p>

                    <p>$100</p>
                </div>

                <div className="mb-4 flex justify-between align-center">
                    <p><b style={{color:"red"}}>Ra</b><b style={{color:"green"}}>hti</b> fee</p>

                    <p>$20</p>
                </div>

                <hr/>

                <div className="mt-4 flex justify-between align-center font-bold">
                    <p>Total</p> 

                    <p>$120</p>
                </div>

                
                
       </aside>


    ) 
};

export default Reservationsidebar;