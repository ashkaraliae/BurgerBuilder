import React,{ Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route,Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component{

    // No longer we need state since we are handling this on reducer
    // state ={
    //     ingredients: null,
    //     totalPrice: 0
    // }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    // Commented as part introducing reducx:-
    // componentWillMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for(let param of query.entries()){
    //         //['salad','1']
    //         if(param[0] === 'price' ){
    //             price = +param[1];
    //         }
    //         else{
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }
    render(){
        let summary = <Redirect to='/' />
        if(this.props.ings){
            const purchaseRedirect = this.props.purchased ? <Redirect to='/'/> : null;
            summary = ( 
            <div>
                {purchaseRedirect}
                <CheckoutSummary 
                    ingredients={this.props.ings} 
                    checkoutCancelled = {this.checkoutCancelledHandler}
                    checkoutContinued = {this.checkoutContinuedHandler}/>
                    <Route
                        path = {this.props.match.url + '/contact-data'}
                        component = {ContactData}/>
            </div>)
        }
         return summary;
    }

}
const mapStateToProps = state => {
    return{
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        purchased: state.order.purchased

    }
};

export default connect(mapStateToProps) (Checkout);