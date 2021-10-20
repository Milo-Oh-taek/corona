import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = (showData) => {
    return (
        <div>
            <Bar
                data= {showData}
                options= {
                    {
                        title:{ display:true, text:"확진자 추이"}
                    }

                }        
            />
        </div>
    )
}

export default BarChart
