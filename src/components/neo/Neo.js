import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Box } from '@material-ui/core';
import NeoHeading from './NeoHeading';
import { startLoading, stopLoading } from '../../helpers/actions/actions';
import { fetchNeo, setUpStartDate, setUpEndDate } from '../../helpers/actions/neoActions';
import { NeoTable } from './table/NeoTable';
import CircularIndeterminate from '../ProgressView';
import moment from 'moment';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const Container = styled(Box)({
  flexGrow: 1,
  padding: theme.spacing(3),
});

class Neo extends Component {

  componentDidMount = async () => {
    this.props.startLoading();
    const startDate = moment().subtract(7,'d').format('YYYY-MM-DD');
    const endDate = moment().format('YYYY-MM-DD');
    this.props.setUpStartDate(startDate);
    this.props.setUpEndDate(endDate);
    await this.props.fetchNeo(startDate, endDate);
}

  componentDidUpdate = (prevProps) => {
      if (prevProps.isLoading === this.props.isLoading ) {
          this.props.stopLoading();
      }
  }

  neoView = data => {
    return (
      <Container>
        <NeoHeading />
        <NeoTable data={data}/>
      </Container>
    )
  }

  render() { 
    const { isLoading, data } = this.props;
    return ( 
      <React.Fragment>
        { isLoading ? <CircularIndeterminate /> :  this.neoView(data)}       
      </React.Fragment>
     );
  }
}

Neo.propTypes = {
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchNeo: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  stopLoading: PropTypes.func.isRequired, 
  setUpStartDate: PropTypes.func.isRequired,
  setUpEndDate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.neoReducer.data,
  isLoading: state.neoReducer.isLoading
})

export default connect(mapStateToProps, { fetchNeo, startLoading, stopLoading, setUpStartDate, setUpEndDate })(Neo);
