import React from "react"

function Greet (props) {
    console.log(props);
    return (
        <div>
            <h1>
                Hello {props.name} aka {props.nickname}
            </h1>
            {props.children}
        </div>
    );
}

const Greet2 = ({name, nickname}) => {
    return (
        
        <h1>
            Hello {name} aka {nickname}
        </h1>
        
   );
};

const Greet3 = (props) => {
    const {name, nickname} = props;
    return (
        <div>
            <h1>
                {name} aka {nickname}
            </h1>
            {props.children}
        </div>
    );
}

export { Greet, Greet2, Greet3 };

//const Greet = () => <h1>Hello Katrina</h1>

//export default Greet