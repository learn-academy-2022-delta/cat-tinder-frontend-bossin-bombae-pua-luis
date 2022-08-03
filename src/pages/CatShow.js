import React, { Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class CatShow extends Component {
    render() {
        // console.log(this.props.cat)
        let { cat } =this.props
        return (
            <>
                <Card>
                    <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Hi my name is</CardTitle>
                        <CardSubtitle>{cat.age}</CardSubtitle>
                        <CardText>{cat.enjoys}</CardText>
                        <Button>Button</Button>
                    </CardBody>
             </Card>
            </>
        )
    }
}

export default CatShow