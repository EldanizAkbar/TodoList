import React from 'react';
import "../css/todoform.css"
import { BsFillXCircleFill } from "react-icons/bs";
class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    addItem() {
        if(this.state.newItem==""){
            alert("Input can't be empty");
        }
        else{

       
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()

        };
        const list = [...this.state.list]

        list.push(newItem);

        this.setState({
            list,
            newItem: ""
        })
    }

    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });
    }
    render() {
        return (
            <div>
                <div class="row mx-auto">
                    <div class='col-8 mx-auto'>
                        <h1 className="mt-5">What's the Plan for Today?</h1>
                    </div>
                </div>

                <div class="row mx-auto mt-3">
                    <div class='col-12 col-sm-8 col-lg-5 mx-auto'>

                        <form className="d-flex justify-content-center">
                            <input
                                class="int p-3 w-100"
                                type="text"
                                value={this.state.newItem}
                                onChange={e => this.updateInput("newItem", e.target.value)}
                                placeholder="Add a todo" />

                            <button type="button" class="btn px-3" onClick={() => this.addItem()}>
                                Add
                            </button>
                        </form>
                    </div>
                </div>

                <div className="row mx-auto mt-3">
                    <div className="col-12 col-sm-8 col-lg-5 mx-auto">
                        <ul class="list-group">
                            {this.state.list.map(item => {
                                return (
                          
                                    <li class="list-group-item mt-3 mb-2" key={item.id} >
                                        {item.value}
                                        <BsFillXCircleFill
                                    className="todo-item"
                                    onClick={() => this.deleteItem(item.id)}>
                                 </BsFillXCircleFill>
                                    </li>
                                   

                                )
                            })}

                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default TodoForm;