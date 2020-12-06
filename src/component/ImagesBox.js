import React,{useState,useEffect} from 'react'
import {GridList,GridListTile} from "@material-ui/core";
import axios from "axios";
import {makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',      
    },
    gridList: {
      width: "100%",
      height: 700,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));
const ImagesBox = ({images}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
           { images.length>0?
              <GridList className={classes.gridList} cellHeight={200}>                  
                     { images.map((image,index)=>
                      <GridListTile style={{width:"33%"}}  key={index} >
                              <img src={image.largeImageURL} style={{width:"100%",height:"100%"}}  />
                      </GridListTile>
                      )}                  
              </GridList>:
        <div></div>}
       </div>  
    )
}

export default ImagesBox
