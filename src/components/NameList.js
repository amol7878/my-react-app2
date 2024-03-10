import React from 'react'
import Student from './Student'

function NameList() {
    // const names = ["Sarika", "Poorva", "Ninad", "Milind", "Poorva"]
    // const nameList = names.map((el, index) => <h2 key={index}>{el}</h2>)
    const students = [
        {
            "id": 1,
            "firstName": "chinmay",
            "lastName": "deshpande"
        },
        {
            "id": 2,
            "firstName": "poorva",
            "lastName": "vyas"
        },
        {
            "id": 3,
            "firstName": "anil",
            "lastName": "deshpande"
        }
    ]

    let nameList2 = students.map(student => <Student key={student.id} student={student}/>)

    return <div>{nameList2}</div>
    // return <div>{nameList}</div>

}

export default NameList