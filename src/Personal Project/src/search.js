import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Route,Link} from 'react-router-dom'
import ShowRoom from './ShowRoom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
export const List=[];

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [search, setSearch]= React.useState('')
  const [car, setCar]= React.useState([])
  const Handler=(event)=>{
    event.preventDefault()
    if(search){
      const R= ShowRoom.filter(car=>car.model.toLowerCase().includes(search.toLowerCase()))
      setCar(R)
      List.push(...R)
      console.log(List)
  }
  return (<>
    <Paper component="form" className={classes.root}>
       <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        value={search}
        placeholder="Search Cars"
        onChange={(e)=>setSearch(e.target.value)}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={Handler}>
        <Link to={`/QueryCar/${search}`}> <SearchIcon /> </Link> 
      </IconButton>
    
    </Paper>
    </>
  );
}
}