import React from 'react';
import TwitterLogin from 'react-twitter-auth';
import { connect } from 'react-redux';
import { loginInfo } from './../store/actions/twitterActionCreator';

class LoginComponent extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onFailed() {

  }
  
  onSuccess(response: any) {
    response.json().then((data: any) => {
      this.props.loginInfo(data);
    });

  }
  render() {
    return (
      <div className="vh-center">
        <TwitterLogin loginUrl="http://localhost:4000/api/auth/twitter"
          onFailure={this.onFailed} onSuccess={this.onSuccess}
          requestTokenUrl="http://localhost:4000/api/auth/twitter/callback" />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.twitterInfo
})

export default connect(mapStateToProps, {loginInfo})(LoginComponent);
