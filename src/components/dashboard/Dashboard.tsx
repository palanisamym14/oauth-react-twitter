import React from 'react';
import TopNavBar from './TopNavBar/TopNavBar';
import MenuBar from './MenuBar/MenuBar';
import TwitterCards from '../TwitterCard/TwitterCards';
import { Container } from 'reactstrap';
import './Dashboard.css'
import { connect } from 'react-redux';
import { getFollowersDetails, onSessionLogout } from '../../store/actions/userActionCreator';
class Dashboard extends React.Component<any, any>  {
  constructor(props:any){
    super(props)
    this.onchangeSearchText = this.onchangeSearchText.bind(this);
  }
  onchangeSearchText(e:any){
    console.log(e)
  }
  UNSAFE_componentWillMount(){
    this.props.getFollowersDetails(this.props.userDetails.username)
  }
  render() {
    return (
      <>
      <div className="topbar-fixed">
        <Container>
          <TopNavBar onchangeSearchText={this.props.onchangeSearchText}/>
          <MenuBar />
        </Container>
        </div>
        <div className="content-area">

        <Container>
          <TwitterCards followers={this.props.followers}/>
        </Container>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state: { loginData: { loginInfo: any; followersList: any; }; loading: any; }) => ({
  userDetails: state.loginData.loginInfo,
  loading: state.loading,
  followers: state.loginData.followersList
})

const mapDispatchToProps = (dispatch: { (arg0: any): void; (arg0: any): void; }) => {
  return {
      getFollowersDetails: (username: any) => dispatch(getFollowersDetails(username)),
      onSessionLogout: () => dispatch(onSessionLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
