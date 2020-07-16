import React from 'react'

const AddNew = (props) => {

    const add = props.add
    const newName = props.newName
    const nameChange = props.nameChange
    const newNumber = props.newNumber
    const numberChange = props.numberChange

    return (
        <div>
            <h2>Add new contact</h2>
            <form onSubmit={add}>
                <div>
                    name: <input value={newName} onChange={nameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={numberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
    
}

export default AddNew