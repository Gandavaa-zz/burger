
import React, { Component } from "react";

// Burger builder-g class turliin component hiie
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

// import { promises } from "fs";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

const INGREDIENT_NAMES = {
    bacon: 'Гахайн мах',
    cheese: 'Бяслаг',
    meat: 'Үхрийн мах',
    salad: 'Салад'
}

class BurgerPage extends Component {
    // Хадгалагдах утгыг өгнө
    state = {
        Ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0, 
            meat: 0
        }, 
        totalPrice: 1000, 
        purchasing: false,
        confirmOrder: false, 
        lastCustomerName: "N/A",
        loading: false
    }

    // component tatagdsanii daraa
    componentDidMount = () => {
        this.setState({ loading: true});

        axios.get('/orders.json').then( response => {
            // object to massive
            let arr = Object.entries(response.data);
            arr = arr.reverse();
            arr.forEach(el=>{
                console.log(el[1].hayag.name + '='+ el[1].dun);
            })

            const LastOrder = arr[arr.length -1 ][1];
            // console.log(LastOrder);
            this.setState({ 
                lastCustomerName: LastOrder.hayag.name,
                Ingredients: LastOrder.orts, 
                totalPrice: LastOrder.dun
            })          
        }).catch(err => console.log(err))
        .finally(() => { this.setState({ loading: false})});

    }

    showConfirmModal = () => {
        this.setState({ confirmOrder: true});
    }
    
    closeConfirmModal = () => {
        this.setState({ confirmOrder: false});
    }

    continueOrder = () => {
        // Захиалга энэ хэсэгт орж ирнэ.
        const order = {
            orts: this.state.Ingredients,
            dun: this.state.totalPrice, 
            hayag: {
                name: 'Амараа', 
                city: 'Ub',
                street: 'ХУД-4р хороо 4тоот'
            }
        }           
        /*eslint no-unused-vars: "error"*/     
        this.setState({loading : true});

        axios.post('/orders.json', order).finally(()=> {
            this.setState({loading: false})
        });

        console.log('continue pressed!!');
    }

    /* dotood state uusgehed shine objectoor uusgedeg */
    ortsNemeh = (type) => {
        /* object new copy*/
        const newIngredients = { ...this.state.Ingredients};
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        /* object-n index-рүү массив аар хандаж болно*/
        newIngredients[type]++;
        /* Purchase is set */     
        this.setState({ totalPrice:newPrice, Ingredients: newIngredients, purchasing: true});
    }

    ortsHasah = (type) => {
        if (this.state.Ingredients[type] > 0){
            const newIngredients = { ...this.state.Ingredients};
            newIngredients[type]--;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

            this.setState({
                totalPrice:newPrice, 
                Ingredients: newIngredients, 
                purchasing:newPrice > 1000
            });
        }       
    }

    // minimium called render()
    // after render we call componentDidMount

    render(){
        const disabledIngredients = {...this.state.Ingredients};

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0            
        }

        return (
            <div>
                <Modal 
                    closeConfirmModal ={this.closeConfirmModal}
                    show={this.state.confirmOrder}>

                    {this.state.loading ? <Spinner/> : (
                    <OrderSummary 
                        onCancel={this.closeConfirmModal}
                        onContinue={this.continueOrder}
                        price = {this.state.totalPrice}
                        ingredients={this.state.Ingredients} 
                        ingredientNames = {INGREDIENT_NAMES}
                    />)}

                </Modal>

                {this.state.loading && <Spinner/>}
                
                <p style={{ width:'100%', tesxtAlign: "center", fontSize: "28px"}}>
                    Сүүлчийн захиалагч: {this.state.lastCustomerName}
                </p>

                <Burger orts= {this.state.Ingredients}/>                
                <BuildControls         
                    showConfirmModal = {this.showConfirmModal}
                    ingredientNames = {INGREDIENT_NAMES}
                    disabled={!this.state.purchasing}
                    price = {this.state.totalPrice}
                    disabledIngredients={disabledIngredients} 
                    ortsNemeh={this.ortsNemeh}
                    ortsHasah={this.ortsHasah}/>
            </div>
        )
    }
}

export default BurgerPage;