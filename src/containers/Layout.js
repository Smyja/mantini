import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme,List} from '@mantine/core';

const Layout = () => {
        const [opened, setOpened] = useState(false);
        const theme = useMantineTheme();
      
        return (
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
              >
              <List
      spacing="xs"
      size="sm"
      center
      icon={
        <Icon icon="codicon:home" color="#918e9b" height="30" rotate={2} hFlip={true} vFlip={true} />
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item> Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
            <Icon icon="codicon:home" color="#918e9b" height="30" rotate={2} hFlip={true} vFlip={true} />
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
       
              </Navbar>
            }
            header={
              <Header height={70} padding="md">
                {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
             <Text>Application header</Text>
            
       
                </div>
              </Header>
            }
          >
            <Text>Resize app to see responsive navbar in action</Text>
          </AppShell>
    )
}

export default Layout
