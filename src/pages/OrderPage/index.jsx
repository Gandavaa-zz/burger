import React from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/General/Spinner';


import css from "./style.module.css";
import Order from '../../components/Order';
import * as actions from '../../redux/actions/orderActions';

class OrderPage extends React.Component {

    state = {
        orders: [],
        loading: false
    }

    // Render hiihgdsenii daraa uguudul tatah
    componentDidMount() {

        //call actions from dispatcher
        this.props.laodOrders();

    }

    render() {
        console.log("========", JSON.stringify(this.state.orders));

        return <div>
            {this.props.loading ?
                (<Spinner />) : (
                    this.props.orders.map(el => <Order key={el[0]} order={el[1]} />)
                )}
        </div>;
    }
}

// state to props 
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        laodOrders: () => dispatch(actions.loadOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
