import React from 'react'
import {AppBar , Toolbar,IconButton,Typography,Link, Grid} from "@material-ui/core";
import {Menu,AccountCircle} from "@material-ui/icons";
const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>
            <Grid container justify="space-between">
                <Grid xs={2}  item style={{display:"flex", alignItems:"center"}}>
                    <IconButton >
                        <Menu />
                    </IconButton>
                    <Typography variant="h5">Typography</Typography>
                </Grid>                
                <Grid item xs={4}   style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}> 
                    <Typography variant="h5">
                        <Link color="secondary" >
                            pixabay api
                        </Link>
                    </Typography>               
                    <Typography variant="h5">
                        <Link color="secondary" >
                        pixabay api
                        </Link>
                    </Typography>               
                
                    <Typography variant="h5">
                        <Link color="secondary">
                            pixabay api
                        </Link>
                    </Typography>
                </Grid>
                <Grid  item>
                    <IconButton >
                        <AccountCircle />                        
                    </IconButton>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
