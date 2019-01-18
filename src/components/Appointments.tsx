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

export interface AppointmentsProps {}

const styles = {
  card: {
    cursor: "pointer",
    margin: "24px auto",
    width: 576,
    "&:hover": {
      backgroundColor: "#f3f3f3"
    }
  },
  root: {
    alignItems: "center",
    display: "flex"
  }
};

const Appointments: React.SFC<AppointmentsProps> = () => {
  const clinicData = clinics[0];
  const doctorAvailableDates = clinicData.doctors.map(doctor => ({
    ...doctor,
    available: [0, 1, 2, 3, 4, 5, 6, 7].filter(hour =>
      doctor.appointments
        .filter(appointment => appointment.date.day === 2)
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
                <TableCell>Data</TableCell>
                <TableCell />
                <TableCell>Lekarz</TableCell>
                <TableCell>Ocena</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {availableDates.map(availableDate => (
                <TableRow>
                  <TableCell>
                    {"02.01.2019 " + availableDate.hour + 8 + ":00"}
                  </TableCell>
                  <TableCell>
                    <Avatar src={availableDate.doctor.avatar} />
                  </TableCell>
                  <TableCell>{availableDate.doctor.name}</TableCell>
                  <TableCell>{availableDate.doctor.rating}</TableCell>
                  <TableCell>
                    <Button>Odwołaj</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </Navigator>
  );
};
export default Appointments;
