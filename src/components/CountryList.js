import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'

const CountryList = (props) => {

    const sendCountry = (which) => {
        props.getCountry(which);
        console.log("countryList:sendCountry");
    }

    return (
        <div style={{ display:'flex', justifyContent:'center', padding:20 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="primary" onClick={()=>{sendCountry('kr');}}>SouthKorea</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Third group">
                    <Button variant="secondary" onClick={()=>{sendCountry('uk');}}>U.K</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                    <Button variant="secondary" onClick={()=>{sendCountry('ru');}}>Russia</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default CountryList
