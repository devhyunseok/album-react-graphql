import gql from 'graphql-tag';

export const ALBUM_LIST = gql`
    {
        albums(current: 1, limit: 10) {
            id
            userId
            title
        }
    }
`;

export const ALBUM_THUMBNAIL = gql`
    {
        albumThumbnail(albumId: 1) {
            thumbnailUrl
        }
    }
`;

