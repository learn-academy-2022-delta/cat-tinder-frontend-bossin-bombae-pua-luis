import React, { Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        console.log(this.props.cats)
        return (<>
            <h3>Find your purrfect match</h3>
            <div>
                {this.props.cats && this.props.cats.map(cat => {
                    return(
                        <Card key={cat.id}>
                            <CardImg top width="100%" src={cat.image}  alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{cat.name}</CardTitle>
                                <CardSubtitle>{cat.age}</CardSubtitle>
                                <NavLink to={`/catshow/${cat.id}`}>
                                <Button>More Info Here</Button>
                                </NavLink>
                            </CardBody>
                        </Card>
                    )
                })}
                </div>
            </>
        )
    }
}

export default CatIndex