import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux'
import { open } from '../../features/modal/modalSlice.js'
import './navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}));

export default function Navbar({ user, onLogout }) {
  const modal = useSelector((state) => state.modal.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  const logout = () => {
      localStorage.removeItem('user');
      onLogout();
  }

  return (
    <AppBar position="static" className="navbar">
      {!user && 
        <Toolbar>
      </Toolbar>
      } 
      {user === "guest" &&
        <Toolbar>
          <img src={logo} width="40" height="40" alt="..."/>
          <Typography variant="h6" className={classes.title}>
            Paly Robotics
          </Typography>
          <Button color="inherit" variant="outlined" onClick={() => logout()}>LOGOUT</Button>
        </Toolbar>
      }
      {user === "member" && 
        <Toolbar>
        <img src={logo} width="40" height="40" alt="..."/>
        <Typography variant="h6" className={classes.title}>
          Paly Robotics
        </Typography>
        <Button className="navbar-button" onClick={() => dispatch(open())}>+</Button>
        <Button color="inherit" variant="outlined" onClick={() => logout()}>LOGOUT</Button>
      </Toolbar>
      }
    </AppBar>
  );
}
