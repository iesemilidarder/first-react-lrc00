import React, {Component} from 'react';
import PropTypes from "prop-types";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

class DummyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const myData = this.props.data;
        console.log(myData);
        return <header className="row">

            <div className="col-md-12">


            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ROQUETA</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            {myData.map((o) => {
                                    return <a key={o.label} href={o.link}
                                              onClick={()=>this.props.onclick(o.id)}>{' '}{o.label}</a>
                                }
                            )}
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        </header>;
    }
}

DummyHeader.propTypes = {
    data: PropTypes.array.isRequired,
    onclick: PropTypes.func.isRequired
};
export default DummyHeader;