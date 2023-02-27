const Person = (props) => {
    let message = props.age >= 18? 'Go vote!' : 'Go study!';
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
    <div>
        <p>Learn some information about this person.</p>
        <ul>
            <li>Name: {props.name.slice(0,6)}</li>
            <li>Age: {props.age}</li>
            <ul>
                Hobbies:
                {hobbies}
            </ul>
        </ul>
        <h3>{message}</h3>
    </div>
    )
}