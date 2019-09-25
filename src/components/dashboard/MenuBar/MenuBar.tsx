import React from 'react';
import {Row, Col } from 'reactstrap';
import SearchBar from '../SearchBar/SearchBar';
import { connect } from 'react-redux';

import './MenuBar.css'
class MenuBar extends React.Component<any, any> {
  constructor(props:any){
    super(props)
    this.onchangeSearchText = this.onchangeSearchText.bind(this);
  }
  onchangeSearchText(e:any){
    console.log(e)
  }
  render() {
    return (
      <div className="menu-container">
        <Row>
          <Col md='6'>
            <Row>
            <Col xs='3'>
            <div>ALL</div>
            </Col>
            <Col xs='3'>
            <div>Published</div>
            </Col>
            <Col xs='3'>

            <div>Drafts</div>
            </Col>
            <Col xs='3'>
            <div>Archived</div>
            </Col>
            </Row>
          </Col>
          <Col md='6'>

            <div>
              <SearchBar onchangeSearchText={this.props.onchangeSearchText}/>
            </div>
          </Col>
        </Row>
        
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  user: state.twitterInfo
})

export default connect(mapStateToProps, { })(MenuBar)