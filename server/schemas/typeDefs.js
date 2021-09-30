const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input bookInfo {
        authors: [String],
        description: String,
        title: String,
        bookId: String,
        image: String,
        link: String
    }
    type Book {
        _id: ID
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: bookInfo!): User
        deleteBook(bookId: String!): User
    }
`;

module.exports = typeDefs;