import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DummyHeader from './component/DummyHeader';


const myWebData = [{
    id: 1,
    label: "Inicio",
    link: "#",
    title: "Inicio",
    content: "Esta es la pagina de inicio espero que te guste :) Lorem ipEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsusum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}, {
    id: 2,
    label: "Contact", link: "#",
    title: "Contacto",
    content: "Esto es el contacto Lorem ipsum dolor sit amet,Esto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsu consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}, {
    id: 3,
    label: "Tienda", link: "#",
    title: "Tienda",
    content: "Bienvenido a la tienda... Esto es uno de los tests para sabEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuEsto es uno de los tests para saber si voy por buan camino o no... Lorem ipsuer si voy por buan camino o no... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam magnam repudiandae tempora tempore temporibus veniam veritatis? Alias aut beatae fugit."
}];

class MyWebApp extends Component {
    constructor(props) {
        super(props);
        this.state = {currentId: 1};
        //binding!!! WTF
        this._changeSelection = this._changeSelection.bind(this);
        //this._getElement = this._getElement.bind(this);
    }

    _changeSelection(id) {
        if (id !== undefined) {
            this.setState({currentId: id});
        }
    }

    _getElement(i) {
        if (i !== undefined) {
            for (let q = 0; q < myWebData.length; q++) {
                if (myWebData[q].id === i) {
                    return myWebData[q];
                }
            }
            /* NO: myWebData.map(q => {})*/
        }
        return {title: 404, content: "Mierder!"};
    }

    render() {
        const content = this._getElement(this.state.currentId);
        console.log("Seleccionado:" + this.state.currentId);
        console.log(content);
        return <React.Fragment>
            <DummyHeader data={myWebData}
                         onclick={this._changeSelection}/>
            <main className={"row"}>
                <div className="col-md-8">
                    <h1>{content.title}</h1>
                    <p>{content.content}</p>
                </div>
                <div className="col-md-4">
                    <p>{content.content}</p>
                </div>
            </main>



            <footer className={"row"}>Hola mundo, aqui estais viendo el footer</footer>
        </React.Fragment>;
    }
}


ReactDOM.render(<MyWebApp/>, document.getElementById('app'));
