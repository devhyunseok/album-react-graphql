import { getPhotos, getAlbums, getAlbumThumbnail } from '../database/database';

const resolvers = {
  Query: {
    photos: () => getPhotos(),
    albums: (context, { current, limit }) => getAlbums(current, limit),
    albumThumbnail: (ctx, { albumId } ) => getAlbumThumbnail(albumId),
  }
};

export default resolvers;
