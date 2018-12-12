import React from "react";

class Winner extends React.Component {
    render() {
        console.log(this.props.winner);
        return (
            <>
                <div class="card mt-5">
                    <h5 class="card-header">Výsledek</h5>
                    <div className="card-body">
                        <h6>{this.props.correctAnswer}</h6>
                        <p>{this.props.winner}</p>
                        <button
                            class="btn btn-primary m-2 mr-5 ml-5 text-uppercase"
                            onClick={this.props.generateNew}
                        >
                            Další otázka
            </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Winner;
