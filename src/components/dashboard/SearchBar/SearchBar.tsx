import React from 'react';
import './SearchBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { onsearchText } from '../../../store/actions/twitterActionCreator';
import { Input } from 'reactstrap';

class SearchBar extends React.Component<any, any>  {
  constructor(props:any){
    super(props)
    this.state ={
      searchText:''
    }
    // this.onchangeSearchText = this.onchangeSearchText.
  }
  onchangeSearchText(e:any){
    e.preventDefault()
    this.setState({ searchText: e.target.value })
    this.props.updateSearchText({searchInput:e.target.value});
  }
  onFilterchange(e:any){
    e.preventDefault()
    this.props.updateSearchText({appliedFilter:e.target.value});

  }
  render() {
    return (
      <>
      <div className="left-container">
        <div className="form-group has-search">
          <FontAwesomeIcon className="form-control-feedback" icon={faSearch} />
          <input type="text" className="form-control"
          onChange={this.onchangeSearchText.bind(this)}
          placeholder="Search Courses" />
        </div>
        <div>
        <FontAwesomeIcon className="" icon={faFilter} />
        <Input type="select" name="select" id="exampleSelect" 
          onChange={this.onFilterchange.bind(this)}>
            <option value="default">default</option>
            <option value="startswith">starts with</option>
            <option value="contains">contains</option>
            <option value="doesnotcontains">doesnot contains</option>
            <option value="endwith">ends with</option>
          </Input>
          </div>
        </div>
      </>
    );
  }
}


const mapStateToProps = (state: any) => ({
  searchText: state.twitterInfo.onsearchText
})

const mapDispatchToProps = (dispatch:any) => {
  return {
    updateSearchText: (searchText: any) => dispatch(onsearchText(searchText))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
