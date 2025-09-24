import { Component } from "react";

class BookMyShow extends Component {
    constructor() {
        super();
        this.state = {
            ticket: 100,
            movie: "KGF"
        }
    }

    render() {
        let increment = () => {
            this.setState({
                ticket: this.state.ticket + 1,
                movie: "KGF2"
            })
        }
        console.log(this.state.ticket);

        return (
            <>
                <button onClick={increment}>Purchase</button>
                <h1>Book My Show Tickets Sold : {this.state.ticket}</h1>
                <h1>Movie Name : {this.state.movie} </h1>
            </>
        )
    }
}

export default BookMyShow