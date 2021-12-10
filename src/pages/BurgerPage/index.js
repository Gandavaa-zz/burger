import React, { Component, useState } from "react";

// Burger builder-g class turliin component hiie
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

const BurgerPage = (props) => {

    // initial value state
    const [confirmOrder, setConfirmOrder] = useState(false);
    
    // val 0, 
    // val 1 function байна

    
    const showConfirmModal = () => {
       setConfirmOrder(true)
    }
    
    const closeConfirmModal = () => {
       setConfirmOrder(false)
    }

    // Jumps to Shipping 
    const continueOrder = () => {       
    
       props.history.push("/ship");        
    
    }
   
    // after render we call componentDidMount
    return (
        <div>
            <Modal 
                closeConfirmModal ={closeConfirmModal}
                show={confirmOrder}>
             
                <OrderSummary 
                    onCancel={closeConfirmModal}
                    onContinue={continueOrder}                        
                />
            </Modal>

            <Burger/>                

            <BuildControls         
                showConfirmModal = {showConfirmModal}                                        
                // ortsNemeh={this.props.addRecipeBurger}
                // ortsHasah={this.props.subRecipeBurger}
            />
        </div>
    )
    
}


export default BurgerPage;