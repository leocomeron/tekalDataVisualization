import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const dataCellStyle = { borderBottom: "none", color: "#e8e8e9", fontSize: "1rem" };
const titleCellStyle = { color: "#e8e8e9", fontSize: "1.2rem" };

export default function BasicTable(props) {
  return (
    <TableContainer style={{ backgroundColor: "#0f5155" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={titleCellStyle}>SECTOR</TableCell>
            <TableCell style={titleCellStyle} align="center">
              TYPE
            </TableCell>
            <TableCell style={titleCellStyle} align="center">
              m1 MEDIA
            </TableCell>
            <TableCell style={titleCellStyle} align="center">
              m2 MEDIA
            </TableCell>
            <TableCell style={titleCellStyle} align="center">
              m3 MEDIA
            </TableCell>
            <TableCell style={titleCellStyle} align="center">
              MEDIA
            </TableCell>
            <TableCell style={titleCellStyle} align="center">
              QUANTITY
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.processedData.map((data) => (
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell style={dataCellStyle} component="th" scope="row">
                {data.sector !== "" && data.sector}
                {data.sector === "" && "Not defined"}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {(data.type === 0 && "Photo") || "Video"}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {data.m1MediaScore}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {data.m2MediaScore}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {data.m3MediaScore}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {data.mediaScore}
              </TableCell>
              <TableCell style={dataCellStyle} align="center">
                {data.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
