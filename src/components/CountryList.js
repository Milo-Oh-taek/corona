import React from 'react'
import { Button,ButtonToolbar,ButtonGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const CountryList = ({}) => {


    return (
        <div style={{ display:'flex', justifyContent:'center', padding:20 }}>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button variant="primary">SouthKorea</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Third group">
                    <Button variant="secondary">U.K</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Fourth group">
                    <Button variant="secondary">Russia</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    )
}

export default CountryList
