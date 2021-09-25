import React, { Component } from "react";

// Burger builder-g class turliin component hiie
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
    // Хадгалагдах утгыг өгнө
    state = {
       confirmOrder: false       
    }
    
    showConfirmModal = () => {
       this.setState({ confirmOrder: true});
    }
    
    closeConfirmModal = () => {
       this.setState({ confirmOrder: false});
    }

    // Jumps to Shipping 
    continueOrder = () => {       
    
       this.props.history.push("/ship");        
    
    }
   
    // after render we call componentDidMount
    render(){
        // console.log(this.props);

        return (
            <div>
                <Modal 
                    closeConfirmModal ={this.closeConfirmModal}
                    show={this.state.confirmOrder}>

                    {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}                        
                    />)}
                </Modal>

                <Burger/>                

                <BuildControls         
                    showConfirmModal = {this.showConfirmModal}                                        
                    // ortsNemeh={this.props.addRecipeBurger}
                    // ortsHasah={this.props.subRecipeBurger}
                />
            </div>
        )
    }
}


export default BurgerPage;