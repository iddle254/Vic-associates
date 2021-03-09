import React from "react";
import classNames from "classnames";
import Parallax from "../components/home/parallax/Parallax.js";
import GridContainer from "../components/general/grid/GridContainer.js";
import GridItem from "../components/general/grid/GridItem.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/styles/home/components.js";

import backGround from "../assets/img/bg6.jpg";
import Banner from "../components/home/banner/banner.component.jsx";
const useStyles = makeStyles(styles);

function Home() {
  const classes = useStyles();

  // header
  // banner
  // partnermessage
  // practice areas
  // clients and partners
  // reviews
  // latestnews
  // footer
  return (
    <div style={{ height: "100%" }}>
      <Parallax image={backGround}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Victor & associates</h1>
                <h3 className={(classes.subtitle, classes.textCenter)}>
                  Superior legal representation and legal services
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Banner />
      </div>
    </div>
  );
}

export default Home;
