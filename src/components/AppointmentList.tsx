import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Navigator from "./Navigator";
import { clinics } from "../data";
import { Avatar, Button } from "@material-ui/core";

export interface AppointmentListProps {
  clinic: string;
  date: string;
}

const styles = {
  card: {
    cursor: "pointer",
    margin: "24px auto",
    width: 768,
    "&:hover": {
      backgroundColor: "#f3f3f3"
    }
  },
  root: {
    alignItems: "center",
    display: "flex"
  }
};

const AppointmentList = withStyles(styles, {
  name: "AppointmentList"
})(
  ({
    clinic,
    classes,
    date
  }: AppointmentListProps & WithStyles<typeof styles>) => {
    const clinicData =
      clinics.find((_, clinicIndex) => clinicIndex === parseInt(clinic)) ||
      clinics[0];
    const doctorAvailableDates = clinicData.doctors.map(doctor => ({
      ...doctor,
      available: [0, 1, 2, 3, 4, 5, 6, 7].filter(
        hour =>
          !doctor.appointments
            .filter(appointment => appointment.date.day === parseInt(date))
            .map(appointment => appointment.date.hour)
            .includes(hour)
      )
    }));
    const availableDates = doctorAvailableDates
      .map(doctor =>
        doctor.available.map(availableDate => ({
          doctor,
          hour: availableDate
        }))
      )
      .reduce((acc, curr) => [...acc, ...curr])
      .sort((a, b) => (a.hour > b.hour ? 1 : -1));
    console.log(availableDates);
    return (
      <Navigator>
        {navigate => (
          <Card>
            <Table padding="dense">
              <TableHead>
                <TableRow>
                  <TableCell>Godzina</TableCell>
                  <TableCell />
                  <TableCell>Lekarz</TableCell>
                  <TableCell>Ocena</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {availableDates.map(availableDate => (
                  <TableRow>
                    <TableCell>{availableDate.hour + 8 + ":00"}</TableCell>
                    <TableCell>
                      <Avatar src={availableDate.doctor.avatar} />
                    </TableCell>
                    <TableCell>{availableDate.doctor.name}</TableCell>
                    <TableCell>{availableDate.doctor.rating}</TableCell>
                    <TableCell>
                      <Button>Zarejestruj</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        )}
      </Navigator>
    );
  }
);
export default AppointmentList;
