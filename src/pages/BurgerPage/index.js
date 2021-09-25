
import React, { Component } from "react";
import { connect } from "react-redux"

// Burger builder-g class turliin component hiie
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/burgerActions";


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

    continueOrder = () => {       
       const params = [];
       for (let orts in this.props.burgeriinOrts){            
           params.push(orts + '=' + this.props.burgeriinOrts[orts]);
       }
       params.push('dun='+this.props.niitUne);
       this.props.history.push({
           pathname: '/ship', 
           search: params.join("&")
       });        
       this.closeConfirmModal();        
    }
   
    // after render we call componentDidMount
    render(){
        // console.log(this.props);
        const disabledIngredients = {...this.props.burgeriinOrts};

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0            
        }
        // console.log("hey", this.props);
        return (
            <div>
                <Modal 
                    closeConfirmModal ={this.closeConfirmModal}
                    show={this.state.confirmOrder}>

                    {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}
                        price = {this.props.niitUne}
                        ingredients={this.props.burgeriinOrts} 
                        ingredientNames = {this.props.ingredientNames}
                    />)}
                </Modal>
                <Burger orts= {this.props.burgeriinOrts}/>                
                <BuildControls         
                    showConfirmModal = {this.showConfirmModal}
                    ingredientNames = {this.props.ingredientNames}
                    disabled={!this.props.purchasing}
                    price = {this.props.niitUne}
                    disabledIngredients={disabledIngredients} 
                    ortsNemeh={this.props.addRecipeBurger}
                    ortsHasah={this.props.subRecipeBurger}/>
            </div>
        )
    }
}

// two parameter can send to this
// convert State to Props
const mapStateToProps = state => {
    return {
        burgeriinOrts: state.ingredients,
        niitUne: state.totalPrice, 
        purchasing: state.purchasing, 
        ingredientNames: state.ingredientNames
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRecipeBurger:  ortsNer => dispatch(actions.addIngredient(ortsNer)),
        subRecipeBurger:  ortsNer => dispatch(actions.removeIngredient(ortsNer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerPage);