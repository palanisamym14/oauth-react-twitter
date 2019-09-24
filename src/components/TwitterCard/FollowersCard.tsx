import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';
import './FollowersCard.css';
class FollowersCard extends React.Component<any, any>  {
  render() {
    const { user } = this.props
    return (
      <Col xs="6" lg="3" className="text-left">
        <Card>
          <CardImg top width="100%" src={user.profile_image_url_https} alt="Card image cap" />
          <CardBody>
            <CardTitle>{user.name}</CardTitle>
            <CardSubtitle>{user.screen_name}</CardSubtitle>
            {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default FollowersCard;
