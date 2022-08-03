import React, { Component} from 'react'
import { Card, CardImg, CardText, CardDeck, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
    render() {
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
                            <NavLink to={`/catshow/${cat.id}`}>
                            <Button>More Info Here</Button>
                            </NavLink>
                          </CardBody>
                        </Card>
                     
                    )
                })}
                </CardDeck>
                </Col>
            </div>
          
        </>

        )
    }
}

export default CatIndex