import React from 'react'

function Person({person}) {
  return (
    <div>
        <h1>
            My friend {person.name} is a {person.title} with {person.company}
        </h1>
    </div>
  );
}

export default Person;