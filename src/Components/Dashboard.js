import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export default function Dashboard() {
    return (
        <div className="flex justify-center text-center p-10">
            <PieChart className="w-96"
                data={[
                    { title: 'One', value: 25, color: 'orange'},
                    { title: 'Two', value: 20, color: 'red' },
                    { title: 'Three', value: 55, color: 'green'},
                ]}
                label={({ dataEntry }) => dataEntry.value + "%"}
                labelStyle={{   fontSize: '10px',
                fontFamily: 'sans-serif',
                  }}
            />
            <div className="flex flex-col">
            <div className="flex text-white">
                <div className="w-10 h-5 mr-5" style={{backgroundColor: 'green'
                  }}>{'\u00A0'}</div>Completed
            </div>
            <div className="flex text-white">
                <div className="w-10 h-5 mr-5" style={{backgroundColor: 'red'
                  }}>{'\u00A0'}</div>Minimum Required
            </div>
            <div className="flex text-white">
                <div className="w-10 h-5 mr-5" style={{backgroundColor: 'orange'
                  }}>{'\u00A0'}</div>For Bonus
            </div>
            </div>
        </div>
    );
}