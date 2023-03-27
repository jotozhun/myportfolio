
export default function Contact()
{
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Contact</h1>
            <div className="mt-10">
            <p className="text-4xl text-left font-bold mb-4">Send an email</p>
                <form className="flex justify-between flex-wrap space-y-4">
                    <div className="w-full flex flex-shrink space-x-4">
                        <input className="rounded-lg px-4 py-2 w-1/2 shadow-md" type="text" placeholder="Full name"/>
                        <input className="rounded-lg px-4 py-2 w-1/2 shadow-md" type="email" placeholder="Email"/>
                    </div>
                    <div className="w-full">
                        <input className="rounded-lg px-4 py-2 w-full shadow-md" type="text" placeholder="Subject"/>
                    </div>
                    <div className="w-full">
                        <textarea   className="rounded-lg w-full px-4 py-2 shadow-md"
                                    placeholder="Message"
                                    style={{resize: "none"}}
                                    ></textarea>
                    </div >
                    <div className="">
                        <input className="w-28 py-2 text-white rounded-xl bg-blue-700 hover:cursor-pointer hover:bg-blue-600 hover:shadow-md" type="submit" value="Send Email"/>
                    </div>
                </form>
            </div>
        </div>
    );
}