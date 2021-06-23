import React, { useEffect, useState } from "react";
import { fetchData } from "../helper/FetchData";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress, Grid } from "@material-ui/core";
import { formatDateFunc } from "../helper/FormatDate"
import UserPostCard from "../components/UserPostCard";




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


 function UserPost() {
    const { id } = useParams();
    const mainStyled = styles();


    const [userPost, setUserPost] = useState();
    

    useEffect(() => {
        fetchData(`/user/${id}/post`)
        .then((res) => setUserPost(res?.data))
        .catch()
        .finally();
   
    }, [id]);
      
    
    
    return (
      <Container className={mainStyled.wrappper}> 
        {!userPost ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={1}>
            {userPost?.map((post) => {
              const { firstName, lastName} = post.owner;
              
              return (
                <Grid item sm={4} xs={6} key={post?.id}>
                <UserPostCard
                  id={post.id}
                  userInitial={firstName[0]}
                  title={`${firstName} ${lastName}`}
                  subheader={formatDateFunc(post.publishDate)}
                  imgSrc={post.image}
                  description={post.text}
                  likes={post.likes}
                  
                  />
                  </Grid>
            );

          })}
        </Grid>
      )}     
        </Container>
                      
                
    );
                
  }
               

export default UserPost;