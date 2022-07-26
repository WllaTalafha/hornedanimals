import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "../data.json";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: Data,
        }
    }



    filterBeastByHornNumber = (e)=>{
        const hornNumber = parseInt(e.target.value);
        let filteredData = Data;
        if(hornNumber){
          filteredData= filteredData.filter(item => item.horns === hornNumber); 
        }
        this.setState({filter : filteredData})
        }

    render() {
        return (
            <>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
                    <Form.Select id="disabledSelect" onChange={this.filterBeastByHornNumber} >
                        <option value=''>All</option>
                        <option value='1'>One Beast</option>
                        <option value='2'>Two Beast</option>
                        <option value='3'>Three Beast</option>
                        <option value='100'>A hundred Beast</option>
                    </Form.Select>
                </Form.Group>

            

            <Row xs={2} md={3} className="g-4">
                {this.state.filter.map((item , index) => {
                    return (
                        <Col key={index}>
                            <HornedBeast imgUrl={item.image_url} title={item.title} description={item.description}  key ={index}/>
                        </Col>
                    )
                }
                )
                }
            </Row>
            </>
        )
    }
}

export default Main;


