'use client'

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    // maintainAspectRatio: false,
    responsive: true,
    plugins: {
    legend: {
    position: 'top' as const,
    },
        title: {
        display: false, // Hide the title
        text: 'Chart.js Bar Chart',
    },
},

scales: {
    x: {
    display: false, // Hide the x-axis labels
    },
    y: {
    display: true, // Hide the y-axis labels
    },
},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
    {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#ea64a7',
    },
    {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#4c50c3',
    },
],
};

const CardBarChart = () => {
    return (
        <div className='h-full p-4 shadow-md'>
            <div className="relative flex-1 flex-grow w-full max-w-full">
                <h6 className="mb-1 text-xs font-semibold uppercase text-blueGray-100">
                    PERFORMANCE
                </h6>
                <h2 className="text-xl font-semibold text-gray-500">Total Orders</h2>
            </div>
            <Bar height={300} options={options} data={data} />
        </div>
);
};

export default CardBarChart;
