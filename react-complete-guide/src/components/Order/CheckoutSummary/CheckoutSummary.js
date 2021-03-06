import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const checkoutSummary = (props) =>{

    return(
        <div className={classes.CheckoutSummary}>
            <h1>
                Have a yummy Burger!
                <div style={{width: '90%', height: '300px', margin: 'auto'}}>
                    <Burger ingredients={props.ingredients}/>
                </div>
                <Button 
                    btnType='Danger'
                    clicked={props.checkoutCancelled}
                    >
                    
                    CANCEL</Button>
                <Button
                    btnType='Success'
                    clicked={props.checkoutContinued}                    
                    >
                    CONTINUE</Button>
            </h1>
        </div>
    );
}

export default checkoutSummary;