import React from 'react';
import Spinner from '../../components/General/Spinner';
import axios from '../../axios-orders';

import css from "./style.module.css";

import Order from '../../components/Order';

class OrderPage extends React.Component {

    state = {
        orders: [],
        loading: false
    }

    // Render hiihgdsenii daraa uguudul tatah
    componentDidMount() {
        this.setState({ loading: true });

        axios.get('/orders.json').then(response => {
            this.setState({ orders: Object.entries(response.data).reverse() });
        }).catch(err => console.log(err))
            .finally(() => { this.setState({ loading: false }) });
    }

    render() {
        return <div>
            {this.state.loading ?
                (<Spinner />) : (
                    this.state.orders.map(el => <Order key={el[0]} order={el[1]} />)
                )}
        </div>;
    }
}

export default OrderPage;
