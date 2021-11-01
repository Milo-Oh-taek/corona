import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { FETCH_REQUEST } from '../reducers/corona'

const CountryList = ({}) => {
    const dispatch = useDispatch();
    const [country, setCountry] = useState('kr');

    useEffect (() => {
        console.log(country);
        dispatch({
            type: FETCH_REQUEST,
            data: country,
        })
    },[country]);

    return (
        <div style={{ display:'flex', justifyContent:'center', padding:20 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant={country==="kr"? "primary":"secondary"} value="kr" onClick={(e) =>{setCountry(e.target.value)}}>SouthKorea</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Third group">
                    <Button variant={country==="uk"? "primary":"secondary"} value="uk" onClick={(e) =>{setCountry(e.target.value)}}>U.K</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                    <Button variant={country==="ru"? "primary":"secondary"} value="ru" onClick={(e) =>{setCountry(e.target.value)}}>Russia</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default CountryList
