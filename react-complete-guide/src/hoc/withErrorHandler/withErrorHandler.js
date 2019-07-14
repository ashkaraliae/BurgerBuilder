import React, {Component} from 'react';
import Aux from '../Auxillary/Auxillary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            this.respInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }
        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.respInterceptor)

        }
        render(){
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }
        
    }
}

export default withErrorHandler;