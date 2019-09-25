import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import {loginInfo} from './../../../store/actions/userActionCreator';


class TopNavBar extends React.Component<any,any> {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.loginInfo(null)
  }
  render() {
    const userInfo = this.props.user?this.props.user:{};
    const profilePic = userInfo && userInfo.photos?userInfo.photos[0].value:''
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{userInfo.displayName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <img src={profilePic} className="rounded-circle" alt="Cinque Terre" />
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem >
                  <div onClick={this.toggle}>LogOut</div>
                    
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  user: state.loginData.loginInfo
})
export default connect(mapStateToProps, {loginInfo})(TopNavBar)
