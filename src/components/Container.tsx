import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

interface ContainerProps {
  children: React.ReactNode | React.ReactNodeArray;
}

const styles = {
  root: {
    margin: "0 auto",
    maxWidth: 568,
    width: "100%"
  }
};

const Container = withStyles(styles, {
  name: "Container"
})(({ children, classes }: ContainerProps & WithStyles<typeof styles>) => (
  <div className={classes.root}>{children}</div>
));
export default Container;
