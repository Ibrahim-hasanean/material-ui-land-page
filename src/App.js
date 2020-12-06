import './App.css';
import {Button,ButtonGroup ,ThemeProvider,createMuiTheme,Checkbox,FormControlLabel,Typography , TextField} from "@material-ui/core";
import {orange, purple} from "@material-ui/core/colors";
import {useState} from "react";
import {Save } from "@material-ui/icons";
import {AppBar,Toolbar,IconButton} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {Grid,Paper,Container} from "@material-ui/core"
//19030154-34bbbe24347bb98514e6f7474
import NavBar from "./component/NavBar";
import ImagesBox from './component/ImagesBox';
import Search from "./component/Search";
function App() {
  const [images,setImages]= useState([])
  const [checked,setChecked] = useState(false)
  const theme = createMuiTheme({
    typography:{
      h2:{
        fontSize:24,
      }
    },    
    palette:{      
      primary:{
        main:purple[500],        
      },
      secondary:{
        main:orange[500]
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <div className="App-header">
        <Container maxWidth="lg">
          <NavBar />        
          <Search images={images} setImages={setImages} />  
          <ImagesBox images={images} />      
        </Container>
        
      </div>


    {/* <Container maxWidth="lg">
        <div className="App">
          <div className="App-header">
          <AppBar color="primary">
            <Toolbar>
              <IconButton>
                <Menu />
              </IconButton>
              <Typography>tobygtophy</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>   
          <Grid container spacing={2} justify="center">
            <Grid  item xs={2}>
                <Paper  style={{width: "100%", height:200}}>
                  <Typography>heloo</Typography>
                </Paper>
            </Grid>
            <Grid  item  xs={2} >
                <Paper style={{width: "100%", height:200}}  />
            </Grid> 
            <Grid  item  xs={2} >
                <Paper style={{width: "100%", height:200}} />
            </Grid> 
            <Grid  item   xs={2}>
                <Paper style={{width: "100%", height:200}} />
            </Grid> 
          </Grid>
          <TextField size="medium" label="input" variant="filled" />
          <Typography variant="h2" color="secondary">typography </Typography>
          <Typography variant="body1">typography </Typography>
          <Typography variant="caption">typography </Typography>
            <ButtonGroup size="large"  variant="contained">
              <Button startIcon={<Save />} color="primary">Save</Button>
              <Button color="secondary" >Cancel</Button>
            </ButtonGroup>
            <FormControlLabel 
              control={<Checkbox
                checked={checked}
                onChange={(e)=> setChecked(e.target.checked)} color="primary" />          
                }
                label="checkbox"  
                />            
          </div>
        </div>
      </Container> */}
    </ThemeProvider>
  );
}

export default App;
