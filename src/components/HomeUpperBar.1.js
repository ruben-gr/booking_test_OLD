import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import DatePickers from './DateInputNOTNEEDED'
import { Link } from 'react-router-dom';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loginButton: {
    color: '#FBFBFF',
    cursor: 'pointer',
  }
};

function dateLimit() {
  let date1 = new Date();
  let date2 = new Date();
  let minLimit = (date1.getDate() + 1)
  date1.setDate(minLimit)
  let maxLimit = (date2.getDate() + 31)
  date2.setDate(maxLimit)
  return {
    minDate: (date1.toISOString().split("T")[0]),
    maxDate: (date2.toISOString().split("T")[0])
  }
}

function onDateInput(value) {
  if (value < dateLimit().minDate || value > dateLimit().maxDate) {
    alert('The date must be within 60-day period starting with today')
  } else {
    let id = "date:" + value.slice(-2) + value.slice(5, 7) + value.slice(2, 4)
    console.log(id)
    console.log(value, dateLimit().minDate, dateLimit().maxDate)
    let distance = document.getElementById(id).offsetTop
    window.scrollBy(0, distance)
  }

}

// ComponentDidMount

function ButtonAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className="ui input" style={{ paddingRight: '1em' }}>
            <input type='date' min={dateLimit().minDate} max={dateLimit().maxDate} onInput={(e) => onDateInput(e.target.value)} style={{ padding: 0, lineHeight: '1em', background: '#FBFBFF' }} />
            <div style={{display:"flex", justifyContent: "flex-start", alignItems: "center", paddingLeft:"0.5em"}} >
              <i className={"search icon "+classes.loginButton} onClick={()=>{}

              }></i>
            </div>
         
          
            
          </div>
          <div className={classes.grow} />
          <Link to="/signup">
            <Button className={classes.loginButton}>
              Sign up
            </Button>
          </Link>
          <Link to="/login">
            <Button className={classes.loginButton} style={{ color: "#15cda8", fontWeight: "bold", marginLeft: "0.5em", border: "solid 0.25em #15cda8" }}>
              Sign in
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);