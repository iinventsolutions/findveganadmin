import Table from "../components/Table"


const page = () => {
    return (
        <div className="w-full">
            <div className="flex p-4 pt-20">
                <div className="p-2 bg-green-700">
                    <h1 className="text-white text-md font-lignt">STORE PAYOUT MANAGEMENT</h1>
                </div>
            </div>
            <div className="relative flex flex-col h-auto px-4 mt-16">
                <Table />
            </div>
        </div>
    )
}

export default page