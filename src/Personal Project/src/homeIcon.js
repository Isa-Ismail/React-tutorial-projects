import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link } from 'react-router-dom' 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  const classes = useStyles();

  return (
    <Link to='/'><div className={classes.root} style={{color:'var(--clr-grey-8)'}}>
      {/* <HomeIcon fontSize="small" />
      <HomeIcon />
      <HomeIcon fontSize="large" /> */}
      <HomeIcon style={{ fontSize: 40 }} />
    </div></Link>
  );
}
