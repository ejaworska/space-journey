import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DatePicker from "react-datepicker";
import {addDays} from 'date-fns';
import moment from 'moment';
import TodayIcon from '@material-ui/icons/Today'; 
import "react-datepicker/dist/react-datepicker.css";
import { Box, IconButton } from '@material-ui/core';
import { fetchNeo, setUpStartDate, setUpEndDate, toggleStartCalendar, toggleEndCalendar } from '../../helpers/actions/neoActions';
import { startLoading } from '../../helpers/actions/actions';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const DateButton = styled(IconButton)({
  color: theme.palette.text.primary,
})

class DateRangeSelector extends Component {

  handleChangeStartDate = (date) => {
    this.toggleStartCalendar();
    const d = moment(date).format('YYYY-MM-DD'); 
    this.props.setUpEndDate('?');  
    this.props.setUpStartDate(d); 
  }

  handleChangeEndDate = async (date) => {
    this.toggleEndCalendar();
    const d = moment(date).format('YYYY-MM-DD');   
    this.props.setUpEndDate(d); 
    await this.props.fetchNeo(this.props.startDate, d);
  }

  toggleStartCalendar = (e) => {
    e && e.preventDefault()
    this.props.toggleStartCalendar();
  }

  toggleEndCalendar = (e) => {
    e && e.preventDefault()
    this.props.toggleEndCalendar();
  }

  render() { 
    const { isDisabledEndCalendar, startDate, endDate } = this.props;
    return (
      <Box component="span">

        <Box component="span" fontSize={12} mr={1}>from</Box>
        <Box component="span" fontSize={16}>{startDate}</Box>
        <DateButton onClick={this.toggleStartCalendar}>
          <TodayIcon />
        </DateButton>
        
        <Box component="span" fontSize={12} mr={1}>to</Box>
        <Box component="span" fontSize={16}>{endDate}</Box>
        <DateButton onClick={this.toggleEndCalendar} disabled={isDisabledEndCalendar}>
          <TodayIcon />
        </DateButton>
    
        {
            this.props.isOpenStartCalendar && (
                <DatePicker         
                    onChange={this.handleChangeStartDate}
                    withPortal
                    inline />
            )
        }

        {
          this.props.isOpenEndCalendar && (
              <DatePicker         
                  onChange={this.handleChangeEndDate}
                  minDate={addDays(new Date(this.props.startDate), 0)}
                  maxDate={addDays(new Date(this.props.startDate), 7)}
                  withPortal
                  inline />
          )
      }
      </Box>
      
     );
    }
}

DateRangeSelector.propTypes = {
  fetchNeo: PropTypes.func.isRequired,
  toggleStartCalendar: PropTypes.func.isRequired,
  toggleEndCalendar: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
  setUpStartDate: PropTypes.func.isRequired,
  setUpEndDate: PropTypes.func.isRequired,
  isOpenStartCalendar: PropTypes.bool.isRequired,
  isOpenEndCalendar: PropTypes.bool.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  isDisabledEndCalendar: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isOpenStartCalendar: state.neoReducer.isOpenStartCalendar,
  isOpenEndCalendar: state.neoReducer.isOpenEndCalendar,
  startDate: state.neoReducer.startDate,
  endDate: state.neoReducer.endDate,
  isDisabledEndCalendar: state.neoReducer.isDisabledEndCalendar
})

 
export default connect(mapStateToProps, { fetchNeo, toggleStartCalendar, toggleEndCalendar, startLoading, setUpStartDate, setUpEndDate })(DateRangeSelector);