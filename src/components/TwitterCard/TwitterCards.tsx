import React, { Fragment } from 'react';
import { Row} from 'reactstrap';
import FollowersCard from './FollowersCard';
class TwitterCards extends React.Component<any, any>  {
  public handleClick(eve: any) {
  }
  render() {
    const { users } = this.props.followers;
    // const {followersFilter} = this.props;
    const followerList = users.map((user: any, i: any) => {
      return (<Fragment key={user.id}>
        <FollowersCard user={user}/>
      </Fragment>)
    });
    return (
      <Row>
        {followerList}
      </Row>
    );
  }
}

export default TwitterCards;
