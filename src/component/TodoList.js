import React, { useState } from 'react'
import image from '../component/todo.svg'

const TodoList = () => {

    const [inputData, setInputData] = useState(''); //state for textarea to catch the data 
    const [items, setitems] = useState([]); // storing the data from textarea to items array

    const handleOnChange = (e) => { //to write in text area
        setInputData(e.target.value);
    }

    const handleClick = () => {
        if (!inputData) { // using if statement to secure from saving empty data
            alert('please enter data');
        } else {

            setitems([...items, inputData]);
            setInputData('');
        }
    }


    const handleDelete = (id) => {
        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        })
        setitems(updatedItems);

    }



    const removeAll = () => {
        setitems([]);
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={image} alt="todologo" />
                        <figcaption>Add your list here 👇</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍🏻 Enter your text here' value={inputData} onChange={handleOnChange} />
                        <i className="fa fa-plus add-btn" title='A dd item' onClick={handleClick}></i>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem, ind, id) => {
                                return (
                                    < >
                                        <div className="eachItem" key={id}>
                                            <h3>{elem} </h3>
                                            <i className="far fa-trash-alt add-btn" title='Delete item' onClick={() => handleDelete(ind)}></i>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className="showItems">
                        <button className="btn" onClick={removeAll}><span>Remove All</span></button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TodoList
