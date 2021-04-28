import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from 'react-router-dom'
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '4px',
  },
}))(Badge);
export default function CustomizedBadges({cart}) {
  return (
    <Link to='/Cart'>
    <IconButton aria-label="cart" style={{color:'white', marginLeft:'23rem'}}>
      <StyledBadge badgeContent={cart} color="blue" style={{color:'white'}}>
        <ShoppingCartIcon/>
        
      </StyledBadge>
    </IconButton>
    </Link>
  );
}
