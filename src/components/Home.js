import React from 'react'
import "../index.css";
import { SimpleGrid,createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
    boxPosition:{
        '@media (max-width: 800px)': {
        marginLeft:"79px",
        width: "189px",
        height: "179px",
        left: "488px",
        top: "21.8px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px"
        
      }
    },
    boxP:{
        '@media (min-width: 800px)': {
        marginLeft:"79px",
        width: "189px",
        height: "179px",
        left: "488px",
        top: "21.8px",
        background: "red",
        boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "10px"
        
      }
    }
    
  }))
  
const Home = () => {
    const { classes,cx } = useStyles();
    return (
        <div>
      <SimpleGrid
  breakpoints={[
    { minWidth: 'sm', cols: 2 },
    { minWidth: 'md', cols: 3 },
    { minWidth: 1200, cols: 4 },
  ]}
>
  <div className={cx(classes.boxPosition,classes.boxP)}>1</div>
  <div className={cx(classes.boxPosition,classes.boxP)}>2</div>
  <div className={cx(classes.boxPosition,classes.boxP)}>3</div>
</SimpleGrid>

        </div>
    )
}

export default Home
