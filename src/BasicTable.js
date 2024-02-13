import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "./data/customersNew";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const sortedArray = data
    .sort((a, b) => {
      if (a[a.length - 1] === "Bangalore") {
        return 1;
      } else {
        return -1;
      }
    })
    .filter((item) => item[5] !== "Test");

  const testArray = data.filter((item) => item[5] === "Test");
  const masterArray = sortedArray.concat(testArray);

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", tableLayout: "fixed", overflowWrap: "break-word" }}
        aria-label="simple table"
      >
        <TableHead sx={{ "& .MuiTableCell-root": { fontWeight: "bold" } }}>
          <TableRow>
            <TableCell align="center">S no.</TableCell>
            <TableCell>Salon name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">Website</TableCell>
            <TableCell align="center">Admin Domain</TableCell>
            <TableCell align="center">User facing</TableCell>
            <TableCell align="center">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {masterArray.map((row, index) => {
            const [name, admin, email, password, userFacing, city] = row;
            return (
              <TableRow
                key={`row${index}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="center">{email}</TableCell>
                <TableCell align="center">{password}</TableCell>
                <TableCell align="center">
                  <a
                    href={`https://store.hivepath.io/${password}`}
                    target="_blank"
                  >
                    {`store.hivepath.io/${password}`}
                  </a>
                </TableCell>
                <TableCell align="center">
                  <a href={`${admin}`} target="_blank">
                    {admin}
                  </a>
                </TableCell>
                <TableCell align="center">
                  <a href={`${userFacing}`} target="_blank">
                    {userFacing}
                  </a>
                </TableCell>
                <TableCell align="center">{city}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
