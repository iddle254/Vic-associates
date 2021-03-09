import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "./Header.js";
import Button from "../button/Button.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/styles/navbar/navbarsStyle.js";

const useStyles = makeStyles(styles);

function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Victor and associates"
        color="dark"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                className={classes.navLink + " " + classes.socialIconsButton}
              >
                {/* <i
                  className={
                    classes.socialIcons +
                    " " +
                    classes.marginRight5 +
                    " fab fa-twitter"
                  }
                />{" "} */}
                About us
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                className={classes.navLink + " " + classes.socialIconsButton}
              >
                <i
                  className={
                    classes.socialIcons +
                    " " +
                    classes.marginRight5 +
                    " fab fa-facebook"
                  }
                />{" "}
                Insights
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                color="transparent"
                className={classes.navLink + " " + classes.socialIconsButton}
              >
                <i
                  className={
                    classes.socialIcons +
                    " " +
                    classes.marginRight5 +
                    " fab fa-instagram"
                  }
                />{" "}
                Contact us
              </Button>
            </ListItem>
          </List>
        }
      />
    </div>
  );
}

export default Navbar;
