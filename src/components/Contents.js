import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

const Contents = (props) => {
  
    const [showCountry, setShowCountry] = useState(props.send);
    const [showData, setShowData] = useState({});

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
      setShowData({
        labels,
        datasets: [
          { 
            label: "국내 확진자",
            backgroundColor: "salmon",
            fill: true,
            data: arr.map(a=>a.confirmed)
          }
      ]});


      console.log(arr);
  
    }

    useEffect(()=>{
      console.log("contents update!!!");
      fetch(`https://api.covid19api.com/total/country/${props.send}`)
      .then ((res) => res.json())
      .then(data => {

        setGraph(data);
      })
      .catch((error) => {

      })

    },[props.send])

    return (
        <section>
          <div className="contents">
            <div>
              <Bar
                  data= {showData}
                  options= {
                      {
                          title:{ display:true, text:"확진자 추이",fontSize:16}
                      },
                      {
                        legend: {display: true, position: "bottom"}
                      }

                  }        
                />
            </div>
          </div>
        </section>
    )
}

export default Contents
