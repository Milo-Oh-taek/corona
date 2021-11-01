import { useState, useEffect } from 'react'
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_REQUEST } from '../reducers/corona';

const Contents = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const showData = useSelector(state => state.showData);
    const country = useSelector(state=> state.country);

    const confirmOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
        title: {
          display: true,
          text: `Corona status - ${country}`,
          font: { size: 20}
        }
      }
    }

    useEffect(()=>{
      console.log("Components dispatch!");
      dispatch({
        type: FETCH_REQUEST,
        data: 'kr',
      },[]);


    },[])

    return (
        <section>
          <div className="contents">
            <div>
              {isLoading? (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <Bar data={showData} options={confirmOptions} />
              )}

            </div>
          </div>
        </section>
    )
}

export default Contents;
