import React, { Component} from 'react'
import { Card, CardImg, CardText, CardDeck, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
    render() {
        // console.log(this.props.cats)
        return (
        <>
            <h3>Find your purrfect match</h3>
            <div>
                <Col sm="4">
                <CardDeck>
                {this.props.cats && this.props.cats.map(cat => {
                    return(
                        
                        <Card key={cat.id}>
                          <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                          <CardBody>
                            {/* <CardTitle>{cat.name}</CardTitle>
                            <CardSubtitle>{cat.age}</CardSubtitle>
                            <CardText>{cat.enjoys}</CardText> */}
                            <NavLink to={`/catshow/${cat.id}`}>
                            <Button>More Info Here</Button>
                            </NavLink>
                          </CardBody>
                        </Card>
                     
                    )
                })}
                  {/* <div className='row'>
                    <div className='col-sm-4'>.col-sm-4</div>
                    <div className='col-sm-4'>.col-sm-4</div>
                    <div className='col-sm-4'>.col-sm-4</div>
                </div> */}
                </CardDeck>
                </Col>
            </div>
          
        </>

        )
    }
}

export default CatIndex