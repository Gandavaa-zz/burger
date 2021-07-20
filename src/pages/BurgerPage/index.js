import React, { Component } from "react";

// Burger builder-g class turliin component hiie
import Burger from "../../components/Burger";

import BuildControls from "../../components/BuildControls";

const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

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
        purchasing: false
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
    render(){
        const disabledIngredients = {...this.state.Ingredients};

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0            
        }

        return (
            <div>
                <Burger orts= {this.state.Ingredients}/>                
                <BuildControls 
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