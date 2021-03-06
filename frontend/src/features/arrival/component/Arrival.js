import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {TextField} from "@material-ui/core";
import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'Guest Name', headerName: 'Guest Name', width: 130 },
    { field: 'Guest Nationality', headerName: 'Guest Nationality', width: 160 },
    { field: 'Request', headerName: 'Request', width: 90 },
    {field: 'Room-t', headerName: 'Room-t', type: 'number', width: 90},
    {field: 'Room-n', headerName: 'Room-n', type: 'number', width: 90},
    {field: 'Price', headerName: 'Price', type: 'number', width: 70},
    {field: 'Meal', headerName: 'Meal', width: 70},
    {field: 'Check-in', headerName: 'Check-in', type: 'number', width: 100},
    {field: 'Check-out', headerName: 'Check-out', type: 'number', width: 100},
    {field: 'Night', headerName: 'Night', type: 'number', width: 70},
    {field: 'Notes', headerName: 'Notes', width: 90},
    {field: 'Hide ', headerName: 'Hide',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Arrival =()=>{
    return (
        <Container>
            <Grid container sm={12} spacing={6}>
                        <Grid item sm={12}></Grid>

                <Grid container item sm={12}>
                    <Grid container item sm={6} >
                        <Grid item sm={6} display="flex" justifyContent="center" >

                            <Button variant="contained" sx={{
                                color:"white",
                                width:'9vw'
                            }}
                            >
                                Add-Guest

                            </Button>
                        </Grid>
                        <Grid item sm={6} display="flex" justifyContent="center" >
                            <Button variant="contained" sx={{
                                color:"white",
                                width:'9vw'
                            }}
                            >
                                Day-Table

                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>

                        <TextField id="outlined-search" label="Search Here" type="search"
                                   style={{
                                       width:'30vw'
                                   }}
                        />

                    </Grid>
                </Grid>
                <Grid item sm={12}></Grid>
            </Grid>
            <Grid container spacing={5} sm={12}>
                <Grid item sm={12}></Grid>
                <Grid item sm={12} >
                    <div style={{ height: "100vh", width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={12}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );

}
export default Arrival;


