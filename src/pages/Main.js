import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container  } from "@material-ui/core";
import axios from 'axios';


const styles = makeStyles((theme) => ({
    wrappper: {
      marginTop: "10rem",
      height: "calc(100vh - 19.0625rem)",
      textAlign: "center"
    },
    avatar: {
      margin: "1rem auto",
      backgroundColor: theme.palette.secondary.main
    }
  }));


function Main() {
    const [userList, setUserList] = useState();
    const mainStyled = styles();
    const { REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN } = process.env;

    const fetchData = async () => {
      const response = await axios.get( `${REACT_APP_API_BASE_URL}/user` , { 
      headers: {
         "app-id":  REACT_APP_API_TOKEN,
         },
  
    });
    setUserList(response?.data?.data);
  };
    
    useEffect(() => {
      fetchData();
      
    }, []);

    console.log(userList);
      
    return  <Container className={mainStyled.wrappper} maxWidth="sm"> 
            MAIN PAGE    
            </Container>
}

export default Main;