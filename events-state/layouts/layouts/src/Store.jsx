import React, { Component } from 'react';
import products from './products';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardsView';

export default class selectedProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: 'view_list'
        };
    }

    switchView() {
        if (this.state.icon === 'view_list') {
          this.setState({ icon: 'view_module'});
        } else {
          this.setState({ icon: 'view_list' });
        }
    }
    
    render() {
        return(
            <>
                <IconSwitch 
                    icon={this.state.icon} 
                    onSwitch={() => { this.switchView() }}
                />
                {this.state.icon === 'view_list' ? (
                        <ListView products={products} />
                    ) : (
                        <CardsView cards={products} />
                )}
            </>
        )
    }
}
