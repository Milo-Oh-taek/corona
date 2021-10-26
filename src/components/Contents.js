import { useState, useEffect } from 'react'
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRequestAction } from '../reducers/corona';

const Contents = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const showData = useSelector(state => state.showData);
    console.log("showData")
    console.log(showData)
    console.log("theend")

    

    const confirmOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: `Corona status - `,
          font: { size: 18}
        }
      }
    }

    const setGraph = (rawData) => {
      const arr = rawData.reduce((acc,cur) => {
        const parseDate = new Date(cur.Date);
        const year = parseDate.getFullYear();
        const month = parseDate.getMonth();
        const date = parseDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        const findItem = acc.find(a=> a.year === year && a.month === month);

        if(!findItem){
          acc.push({year, month, date, confirmed, active, death, recovered})
        }
        if(findItem && findItem.date < date){
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.year = year;
          findItem.month = month;
          findItem.recovered = recovered;
          findItem.confirmed = confirmed;
        }
        return acc;
      },[])

      const labels = arr.map(a => `${a.month+1}월`);
      // setShowData({
      //   labels,
      //   datasets: [
      //     { 
      //       label: "confirmed",
      //       backgroundColor: "salmon",
      //       fill: true,
      //       data: arr.map(a=>a.confirmed)
      //     }
      // ]});


      console.log(arr);
  
    }

    useEffect(()=>{
      console.log("useEffect 시~작");
      dispatch(fetchRequestAction());
      console.log("useEffect 끝");

    },[])

    return (
        <section>
          <div className="contents">
            <div>
              <Bar data={showData} options={confirmOptions} />
            </div>
          </div>
        </section>
    )
}

export default Contents
