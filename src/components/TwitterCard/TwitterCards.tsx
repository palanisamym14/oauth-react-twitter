import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import FollowersCard from './FollowersCard';
import { connect } from 'react-redux';
class TwitterCards extends React.Component<any, any>  {
  public handleClick(eve: any) {
  }
  componentDidUpdate(prevProps: { text: any; }) {
    if (prevProps.text !== this.props.text) {
      // this.updateAndNotify();
    }
  }
  onFollowerList = () => {
    const { users } = this.props.followers;
    const { followersFilter } = this.props;
    if (users.length === 0) {
      return (<></>)
    }
    return users.filter((user: any) => {
      if (!followersFilter['searchInput']) {
        return true
      }
      const textInput = followersFilter['searchInput'].toLowerCase();
      switch (followersFilter['appliedFilter']) {
        case 'startswith':
          return user.name.toLowerCase().startsWith(textInput);
        case 'endwith':
          return user.name.toLowerCase().endsWith(textInput);
        case 'contain':
          return user.name.toLowerCase().indexOf(textInput) !== -1 ? true : false
        case 'doesnotcontain':
          return user.name.toLowerCase().indexOf(textInput) !== -1 ? false : true
        default:
          return user.name.toLowerCase().indexOf(textInput) !== -1 ? true : false
      }
    }).map((user: any, i: any) => {
      return (<Fragment key={user.id}>
        <FollowersCard user={user} />
      </Fragment>)
    });
  }
  render() {
    return (
      <Row>
        {this.onFollowerList()}
      </Row>
    );
  }
}
const mapStateToProps = (state: { twitterInfo: { followersFilter: any; }; }) => ({
  followersFilter: state.twitterInfo.followersFilter
})

export default connect(mapStateToProps)(TwitterCards);
