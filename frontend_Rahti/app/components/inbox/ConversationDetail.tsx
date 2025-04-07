
'use client';
import CusttomButton from "../forms/CusttomButton";

const ConversationDetail = () => {
    return (
        <div className="max-h[400px] overflow-auto flex flex-col space-y-4">
            <div className="w-[80%] p-5 py-4px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500"> Houssam El Idrissi</p>

                <p>Hello Mr.Youssef</p>
            </div>

            <div className="w-[80%] ml-[20%] p-5 py-4px-6 rounded-xl bg-blue-200">
                <p className="font-bold text-gray-500"> Youssef el hanafi</p>

                <p>Hello Houssam how is going on !</p>
            </div>

            <div className="w-[80%] p-5 py-4px-6 rounded-xl bg-gray-200">
                <p className="font-bold text-gray-500"> Houssam El Idrissi</p>

                <p>all good thanks for asking.</p>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input 
                    type="text"
                    placeholder="Type your message here..."
                    className="w-full p-2 bg-gray-200 rounded-xl "
                 />

                 <CusttomButton
                    label="Send"
                    onClick={() => console.log("send message")}
                    className={`w-[100px]`}
                 
                 />
            </div>
        </div>
    );
};

export default ConversationDetail;