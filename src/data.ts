import * as johnny from "./images/johnny.jpg";
import * as tiffany from "./images/tiffany.jpg";

export interface Patient {
  name: string;
}
export interface Date {
  day: number;
  hour: number;
}
export interface Appointment {
  date: Date;
  patient: Patient;
}
export interface Doctor {
  appointments: Appointment[];
  avatar: any;
  code: string;
  name: string;
  rating: number;
}
export interface Clinic {
  doctors: Doctor[];
  name: string;
}

export const patients: Patient[] = [
  {
    name: "Zofia Pawlacz"
  },
  {
    name: "Jan Paweł"
  },
  {
    name: "Miś Uszatek"
  },
  {
    name: "Thor Odinson"
  }
];
export const doctors: Doctor[] = [
  {
    appointments: [
      {
        date: {
          day: 2,
          hour: 0
        },
        patient: patients[0]
      },
      {
        date: {
          day: 2,
          hour: 3
        },
        patient: patients[1]
      }
    ],
    avatar: johnny,
    code: "0000001",
    name: "Grzesznik Jan",
    rating: 6.9
  },
  {
    appointments: [
      {
        date: {
          day: 1,
          hour: 0
        },
        patient: patients[0]
      },
      {
        date: {
          day: 3,
          hour: 6
        },
        patient: patients[3]
      }
    ],
    avatar: tiffany,
    code: "0000002",
    name: "Matylda Grabowska",
    rating: 9.6
  }
];
export const clinics: Clinic[] = [
  {
    doctors: doctors.filter((_, idx) => [0, 1].includes(idx)),
    name: "Klinika chirurgii ogólnej"
  }
];
