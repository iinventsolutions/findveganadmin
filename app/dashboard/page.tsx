import DashboardStats from "../components/Cards/DashboardStats"
// import CardLineChart from "../components/Cards/CardLineChart"
import CardLineChart2 from "../components/Cards/CardLineChart2"
import CardBarChart from "../components/Cards/CardBarChart"
import CardPageVisits from "../components/Cards/CardPageVisits"
import CardSocialTraffic from "../components/Cards/CardSocialTraffic"

const page = () => {
    return (
        <div>
            <div className="w-full">
                <DashboardStats />
            </div>
            <div className="flex flex-wrap">
                <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                    <CardLineChart2 />
                </div>
                <div className="w-full px-4 xl:w-4/12">
                    <CardBarChart />
                </div>
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
                    <CardPageVisits />
                </div>
                <div className="w-full px-4 xl:w-4/12">
                    <CardSocialTraffic />
                </div>
            </div>
        </div>
    )
}

export default page