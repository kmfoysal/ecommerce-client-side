import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { userRequest } from '../../../requestMethod';


export default function OrdersTable() {
    const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Products</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.name}</TableCell>
              <TableCell align="right">{order.address.city}</TableCell>
              <TableCell align="right">{order.name}</TableCell>
              <TableCell align="right">${order.amount}</TableCell>
              <TableCell align="right">{order.createdAt}</TableCell>
              <TableCell align="right">
                <Button>{order.status}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
