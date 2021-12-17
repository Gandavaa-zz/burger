import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/General/Spinner';
import css from "./style.module.css";
import Order from '../../components/Order';
import * as actions from '../../redux/actions/orderActions';

const OrderPage = (props) =>{

   // Render hiihgdsenii daraa uguudul tatah
    useEffect(()=>{
        props.laodOrders(props.userId);

    })

    return <div>
            {props.loading ?
                (<Spinner />) : (
                    props.orders.map(el => <Order key={el[0]} order={el[1]} />)
                )}
        </div>;

}

// state to props 
const mapStateToProps = state => {
    return {
        orders: state.orderReducer.orders,
        loading: state.orderReducer.loading,
        userId: state.signupReducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        laodOrders: (userId) => dispatch(actions.loadOrders(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
