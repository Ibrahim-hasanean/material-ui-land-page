import React,{useState,useEffect} from 'react'
import axios from "axios";
import {TextField , Grid} from "@material-ui/core"
const Search = ({images,setImages}) => {
    const [search,setSearch] = useState("flowers")
    useEffect(()=>{
        getImages()
    },[search])
    let onsearch = async(e)=>{
       setSearch(e.target.value)
    }    
    let getImages = async()=>{
        
        let images =await axios.get(`https://pixabay.com/api/?key=19030154-34bbbe24347bb98514e6f7474&q=${search}&image_type=photo&per_page=50&page=2`);
        console.log(images)
        setImages(images.data.hits)
    }    
    return (
        <Grid style={{margin:"16px"}}>
            <TextField onChange={onsearch}  label="search" />
        </Grid>
    )
}

export default Search
