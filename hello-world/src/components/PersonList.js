import React from 'react'
import Person from './Person';

function PersonList() {
    const persons = [
        { id: 1, name: "Katrina", title: "Web Developer", company: "Google" }, 
        { id: 2, name: "Amanda", title: "Web Designer", company: "StartUp"},
        { id: 3, name: "Jenn", title: "Project Manager", company: "Microsoft"},
        { id: 4, name: "Rory", title: "Data Scientist", company: "Meta" },
        { id: 5, name: "Romy", title: "Analyst", company: "AI" },
        
    ];
    const personList = persons.map ((person) => (
        <Person key={person.id} person={person} />
    ));

      return <div>{personList}</div>;
}

export default PersonList;