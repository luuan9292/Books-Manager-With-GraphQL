import React, { Component } from "react";
import { gql } from "apollo-boost";
import {graphql} from "react-apollo";

//Use query GraphQL on Reactjs
const getBooksQuery = gql`
    {
        books {
            id,
            name,
            genre
        }
    }
`

class BookList extends Component {
    render() {
    console.log(this.props)
        return (
            <div>
                <ul id="book-list">
                    <li>Book name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
