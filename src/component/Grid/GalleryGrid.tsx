import type { FC } from "react";
import Box from "@mui/material/Box";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "age",
    headerName: "色",
    width: 80,
    editable: false,
  },
  {
    field: "firstName",
    headerName: "タイトル",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "内容",
    width: 200,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const GalleryGrid: FC = () => {
  return (
    <>
      <Box sx={{ width: "80%", margin: "30px auto" }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </Box>
    </>
  );
};

export default GalleryGrid;
