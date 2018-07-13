import React from 'react';
import Navbar from './Navbar';
import Paper from '@material-ui/core/Paper';
const NotFound = () => (
    <div>
        <Navbar />
        <Paper style={{ padding: '20px' }} elevation={1}>
            404. Page Not Found!!
        </Paper>
    </div>
)

export default NotFound;