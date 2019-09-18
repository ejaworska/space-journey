import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import TodayIcon from '@material-ui/icons/Today'; 
import "react-datepicker/dist/react-datepicker.css";
import { Box } from '@material-ui/core';
import { fetchApodOfDate, toggleCalendar } from '../../helpers/actions/apodActions';
import { startLoading } from '../../helpers/actions/actions';
import { styled } from '@material-ui/styles';
import theme from '../../helpers/theme';

const DateButton = styled(IconButton)({
  color: theme.palette.text.primary,
})

class DateSelector extends Component {

  handleChange = async (date) => {
    this.toggleCalendar();
    const d = moment(date).format('YYYY-MM-DD');
    this.props.startLoading();    
    await this.props.fetchApodOfDate(d); 
  }

  toggleCalendar = (e) => {
    e && e.preventDefault();
    this.props.toggleCalendar();
  }

  render() { 
    return (
      <Box component="span">
        <DateButton onClick={this.toggleCalendar} >
          <TodayIcon />
        </DateButton>
    
        {
            this.props.isOpenCalendar && (
                <DatePicker         
                    onChange={this.handleChange}
                    maxDate={new Date()}
                    withPortal
                    inline />
            )
        }
      </Box>
      
     );
    }
}

DateSelector.propTypes = {
  isOpenCalendar: PropTypes.bool.isRequired,
  fetchApodOfDate: PropTypes.func.isRequired,
  toggleCalendar: PropTypes.func.isRequired,
  startLoading: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isOpenCalendar: state.apodReducer.isOpenCalendar
})

 
export default connect(mapStateToProps, { fetchApodOfDate, toggleCalendar, startLoading })(DateSelector);