import "./App.css";

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Container from "./components/Container";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import AppointmentDateComponent, {
  AppointmentDateProps
} from "./components/AppointmentDate";
import AppointmentListComponent, {
  AppointmentListProps
} from "./components/AppointmentList";
import Navigator from "./components/Navigator";

const AppointmentDate: React.SFC<RouteComponentProps<AppointmentDateProps>> = ({
  match: {
    params: { clinic }
  }
}) => <AppointmentDateComponent clinic={clinic} />;
const AppointmentList: React.SFC<RouteComponentProps<AppointmentListProps>> = ({
  match: {
    params: { clinic, date }
  }
}) => <AppointmentListComponent clinic={clinic} date={date} />;

export const App: React.SFC = () => (
  <Navigator>
    {navigate => (
      <>
        <AppBar>
          <Toolbar onClick={() => navigate("/")}>Przychodnia XYZ</Toolbar>
        </AppBar>
        <div style={{ marginTop: 100 }}>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/appointment" component={Appointment} />
              <Route
                exact
                path="/appointment/:clinic"
                component={AppointmentDate}
              />
              <Route
                exact
                path="/appointment/:clinic/:date"
                component={AppointmentList}
              />
            </Switch>
          </Container>
        </div>
      </>
    )}
  </Navigator>
);

export default App;
