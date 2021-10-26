import { takeEvery, takeLatest, call, put, all, fork } from 'redux-saga/effects'
import axios from 'axios'

function fetchApi(){
    return axios.get(`https://api.covid19api.com/total/country/kr`)
}

const dataProcess = rawData => {

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
    const showData = ({
        labels,
        datasets: [
        { 
            label: "confirmed",
            backgroundColor: "salmon",
            fill: true,
            data: arr.map(a=>a.confirmed)
        }
        ]
    });

    return showData;

}

export function* fetchCorona(){
    try {
        const response = yield call(fetchApi)
        const showData = dataProcess(response.data)
        console.log(showData);
        yield put({
            type: 'FETCH_REQUEST_SUCCESS',
            showData: showData
        })
    }catch(err){
        yield put({
            type: 'FETCH_REQUEST_FAIL',
            error: err.response.data
        })
    }

}

export function* watchFetchRequest(){
    yield takeLatest('FETCH_REQUEST', fetchCorona)
}

export default function* rootSaga(){
    yield all([fork(watchFetchRequest)]);
}

