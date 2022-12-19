import React from "react";
import "./field.css"

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { content: "", flipped: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ content: this.props.count, flipped: true });
    }

    render() {
        if (this.props.count === 9) {
            return (
                <div className="tile red" onClick={this.handleClick}>
                    {this.state.content}
                </ div >
            );
        }
        return (
            <div className="tile" onClick={this.handleClick}>
                {this.state.content}
            </div >
        );
    }
}

export default Tile;