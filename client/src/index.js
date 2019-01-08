import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import AdminProvider from './AdminProvider';
import BookingsProvider from './BookingsProvider'

ReactDOM.render(
    <BrowserRouter>
        <AdminProvider>
            <BookingsProvider>
                <App/>
            </BookingsProvider>
        </AdminProvider>
    </BrowserRouter>, 
document.getElementById('root'))