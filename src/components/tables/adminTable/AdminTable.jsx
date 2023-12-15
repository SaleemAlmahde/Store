import React from 'react';
import { Container, Table } from 'react-bootstrap';
import RawTable from './RawTable';
import { useState, useEffect } from 'react';

const AdminTable = () => {

  const productsData = [
    {
        name: "product 1",
        price: "200 sp",
        number: "3"
    },
    {
        name: "product 2",
        price: "300 sp",
        number: "7"
    },
    {
        name: "product 3",
        price: "500 sp",
        number: "1"
    },
    {
        name: "product 4",
        price: "2500 sp",
        number: "6"
    },
]
const [products, setProducts] = useState(productsData)

useEffect(() => {
}, [])


    return (
        <Container style={{backgroundColor:"green"}}>
          <input type="search" name="" id="" />
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
      
        {
          products.map((item, index) => {
            return (
                <RawTable index={index} name={item.name} price={item.price} number={item.number} />
            )
        })
        }
      </tbody>
    </Table>
    </Container>
    );
}

export default AdminTable;
