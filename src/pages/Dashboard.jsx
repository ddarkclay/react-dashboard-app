import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TableData from '../components/TableData'
import Chart from '../components/Chart';


function Dashboard() {
  return (
    <>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <TableData />
        </Grid>
        <Grid item xs={6}>
        <Chart />
        </Grid>
       </Grid>
    </>
  )
}

export default Dashboard