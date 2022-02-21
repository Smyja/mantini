import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Contact from "../components/Contact";

import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  List,
  createStyles ,
  Group,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  header:{
    '@media (min-width: 800px)': {
      backgroundColor: "blue",
      left:"260px",
      position:"relative"
    }
  },
  navvbar:{
      '@media (min-width: 800px)': {
      top:"0px"
    }
  }
  
}))


const Layout = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const { classes } = useStyles();
  return (
    <BrowserRouter>
      <AppShell
        // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
        navbarOffsetBreakpoint="sm"
        // fixed prop on AppShell will be automatically added to Header and Navbar
        fixed
        navbar={
          
  
           
          <Navbar
            padding="md"
            // Breakpoint at which navbar will be hidden if hidden prop is true
            hiddenBreakpoint="sm"
            // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
            hidden={!opened}
            // when viewport size is less than theme.breakpoints.sm navbar width is 100%
            // viewport size > theme.breakpoints.sm – width is 300px
            // viewport size > theme.breakpoints.lg – width is 400px
            width={{ sm: 300, lg: 260 }}
            className={classes.navvbar}
            
          >
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <Icon
                  icon="codicon:home"
                  color="#918e9b"
                  height="30"
                  rotate={2}
                  hFlip={true}
                  vFlip={true}
                />
              }
            >
  
              <List.Item
                component={NavLink}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    backgroundColor: isActive ? "red" : "",
                  };
                }}
                to="/"
              >
                Home
              </List.Item>
              <List.Item
                component={NavLink}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    backgroundColor: isActive ? "red" : "",
                  };
                }}
                to="/about"
              >
                About
              </List.Item>
              <List.Item
                component={NavLink}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    backgroundColor: isActive ? "red" : "",
                  };
                }}
                to="/contact"
              >
                mmand
              </List.Item>
  
    
            </List>
          </Navbar>
        }
        header={
          <Header height={70} padding="md">
            {/* Handle other responsive styles with MediaQuery component or createStyles function */}
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text  className={classes.header}>Application header</Text>
              <Group direction="row" spacing="20" position="right" style={{marginLeft:"auto"}}><List style={{display:"flex",gap: "30px",
margin:"30px",listStyle: "none"}}><List.Item>Joe</List.Item><List.Item>Joe</List.Item><List.Item>Joe</List.Item></List></Group>
         
            </div>
          </Header>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
};

export default Layout;
