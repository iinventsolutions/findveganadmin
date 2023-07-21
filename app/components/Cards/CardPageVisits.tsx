import React from "react";

const pageVisitsData = [
  {
    pageName: "/argon/",
    visitors: "4,569",
    uniqueUsers: "340",
    bounceRate: "46,53%",
  },
  {
    pageName: "/argon/index.html",
    visitors: "3,985",
    uniqueUsers: "319",
    bounceRate: "46,53%",
  },
  {
    pageName: "/argon/charts.html",
    visitors: "3,513",
    uniqueUsers: "294",
    bounceRate: "36,49%",
  },
  {
    pageName: "/argon/tables.html",
    visitors: "2,050",
    uniqueUsers: "147",
    bounceRate: "50,87%",
  },
  {
    pageName: "/argon/profile.html",
    visitors: "1,795",
    uniqueUsers: "190",
    bounceRate: "46,53%",
  },
];

export default function CardPageVisits() {
  return (
    <div className="w-full mb-6 bg-white rounded shadow-lg">
      <div className="px-4 py-3 mb-0 border-0 rounded-t">
        <div className="flex items-center">
          <div className="flex-grow w-full px-4">
            <h3 className="text-base font-semibold text-blueGray-700">Page visits</h3>
          </div>
          <div className="flex-grow-0 w-full px-4 text-right">
            <button className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none" type="button">
              See all
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase border border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Page name
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase border border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Visitors
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase border border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Unique users
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-left uppercase border border-l-0 border-r-0 bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap">
                Bounce rate
              </th>
            </tr>
          </thead>
          <tbody>
            {pageVisitsData.map((data, index) => (
              <tr key={index}>
                <td className="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  {data.pageName}
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  {data.visitors}
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  {data.uniqueUsers}
                </td>
                <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                  <i className={`fas fa-arrow-${data.bounceRate.includes("up") ? "up text-emerald-500" : "down text-orange-500"} mr-4`}></i>
                  {data.bounceRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
