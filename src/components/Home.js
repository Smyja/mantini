import React from "react";
import "../index.css";
import { Icon } from "@iconify/react";
import {
  SimpleGrid,
  createStyles,
  Text,
  Button,
  Space,
  Badge,
} from "@mantine/core";

const useStyles = createStyles(() => ({
  boxPosition: {
    "@media (max-width: 800px)": {
      margin: "0 auto",
      width: "219px",
      height: "209px",
      left: "488px",
      top: "21.8px",
      background: "#FFFFFF",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
    },
  },
  boxP: {
    "@media (min-width: 800px)": {
      marginLeft: "79px",
      width: "219px",
      height: "209px",
      left: "488px",
      top: "21.8px",
      background: "white",
      boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.25)",
      borderRadius: "10px",
    },
  },
}));

const Home = () => {
  const { classes, cx } = useStyles();
  return (
    <div>
      <SimpleGrid
    
        breakpoints={[
          { minWidth: "sm", cols: 2 ,spacing:12},
          { minWidth: "md", cols: 3,spacing:12 },
          { minWidth: 1200, cols: 3,spacing:52 }
          
        ]}
      >
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            color="#918e9b"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            IRUACLINIC
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              BOOK
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            color="#918e9b"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            IRUACLINIC
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              BOOK
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            color="#918e9b"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            IRUACLINIC
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              BOOK
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            color="#918e9b"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            IRUACLINIC
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              BOOK
            </Text>
          </Button>{" "}
        </div>
        <div className={cx(classes.boxPosition, classes.boxP)}>
        <Space h="sm" />
          <Icon
            icon="emojione:maple-leaf"
            color="#918e9b"
            height="50"
            rotate={2}
            hFlip={true}
            vFlip={true}
            style={{marginLeft:"79px"}}
          />
          <Text align="center" color="#63BA86" weight={700}>
            IRUACLINIC
          </Text>
          <Text align="center" color="#63BA86" weight={400}>
            10AM - 5PM
          </Text>
          <Space h="xs" />
          <Text align="center" color="#63BA86" weight={400}>
            {" "}
            STATUS: <Badge color="teal">ACTIVE</Badge>
          </Text>
          <Space h="xs" />
          <Button
            style={{ backgroundColor: "#63BA86", marginLeft: "67px" }}
            size="xs"
          >
            <Text align="center" color="white" weight={400}>
              BOOK
            </Text>
          </Button>{" "}
        </div>
      </SimpleGrid>
    </div>
  );
};

export default Home;
