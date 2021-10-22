import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeCountry } from '../redux/actions'

const CountryList = ({country}) => {

    const dispatch = useDispatch();

    console.log(country)

    return (
        <div style={{ display:'flex', justifyContent:'center', padding:20 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="primary" onClick={()=>{dispatch(changeCountry('kr'))}}>SouthKorea</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Third group">
                    <Button variant="secondary" onClick={()=>{dispatch(changeCountry('uk'))}}>U.K</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                    <Button variant="secondary" onClick={()=>{dispatch(changeCountry('ru'))}}>Russia</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default CountryList
