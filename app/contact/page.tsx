
export default function Contact()
{
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Contact</h1>
            <div className="mt-20">
                <form className="flex justify-between flex-wrap space-y-2">
                    <div>
                    <input className="rounded-lg px-4 py-2 w-1/2" type="text" placeholder="Full name"/>
                    </div>
                    <div>
                    <input className="rounded-lg px-4 py-2 w-1/2" type="email" placeholder="Email"/>
                    </div>
                    <div>
                    <input className="rounded-lg px-4 py-2 w-full" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                    <textarea className="rounded-lg" placeholder="Message"></textarea>
                    </div>
                    <input className="rounded-xl" type="submit" />
                </form>
            </div>
        </div>
    );
}