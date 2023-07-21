import CardStats from "./CardStats"

const DashboardStats = () => {
    return (
        <div>
            <div className="relative w-full pt-20 pb-16 bg-blueGray-800">
                <div className="w-full px-4 mx-auto md:px-10">
                <div className="w-full">
                    {/* Card stats */}
                    <div className="flex flex-wrap w-full">
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="TRAFFIC"
                            statTitle="350,897"
                            statArrow="up"
                            statPercent="3.48"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName="far fa-chart-bar"
                            statIconColor="bg-red-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="NEW USERS"
                            statTitle="2,356"
                            statArrow="down"
                            statPercent="3.48"
                            statPercentColor="text-red-500"
                            statDescripiron="Since last week"
                            statIconName="fas fa-chart-pie"
                            statIconColor="bg-orange-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="SALES"
                            statTitle="924"
                            statArrow="down"
                            statPercent="1.10"
                            statPercentColor="text-orange-500"
                            statDescripiron="Since yesterday"
                            statIconName="fas fa-users"
                            statIconColor="bg-pink-500"
                        />
                    </div>
                    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
                        <CardStats
                            statSubtitle="PERFORMANCE"
                            statTitle="49,65%"
                            statArrow="up"
                            statPercent="12"
                            statPercentColor="text-emerald-500"
                            statDescripiron="Since last month"
                            statIconName="fas fa-percent"
                            statIconColor="bg-blue-400"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardStats