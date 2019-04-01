import React, {Component} from 'react';
import PropTypes from "prop-types";
class MyTableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        const customDate = this.state.date.toISOString();
        const dataElements = this.props.data;
        return (
            <div className="container">
                <h3>{this.props.title} - {customDate}</h3>
                <table>
                    <tbody>
                    {dataElements.map((v) => {
                        <tr key={v.name}>
                            <td>{v.name}</td>
                            <td>{v.surname}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

MyTableComponent.propTypes = {
    data: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    configOptions: PropTypes.object,
    title: PropTypes.string,
};
export default MyTableComponent;