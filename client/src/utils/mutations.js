import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($book: bookInfo!){
        saveBook(book: $book){
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation deleteBook($bookId: String!){
        deleteBook(bookId: $bookId){
            _id
            username
            email
            bookCount
            savedBooks {
                authors
                description
                title
                bookId
                image
                link
            }
        }
    }
`;