import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    {
        albums(current: 1, limit: 10) {
            id
            userId
            title
        }
    }
`;
