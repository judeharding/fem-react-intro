// function components or stateless functions
const Pet = (props) => {
    return React.createElement("div", {}, 
        [
            React.createElement('h1', {}, props.name), 
            React.createElement('h2', {}, props.animal), 
            React.createElement('h3', {}, props.breed) 
        ]
    );
}

// CLASS components are more flexible than FUNCTION components

class App extends React.Component{
    handleTitleClick(){
        alert("you clicked the title");
    }
    render() {
        return React.createElement("div", {}, 
            [
                React.createElement('h1', {onClick: this.handleTitleClick }, 'Adopt Me'),
                React.createElement(Pet, {
                    name: "luna", 
                    animal: "dog", 
                    breed: "havanese"
                }),
                React.createElement(Pet, {
                    name: "pepper", 
                    animal: "bird", 
                    breed: "cockatiel"
                }),
                React.createElement(Pet, {
                    name: "doink", 
                    animal: "cat", 
                    breed: "rex"
                })
            ]
        );
    }
}


ReactDOM.render(React.createElement(App), document.getElementById('root'));
