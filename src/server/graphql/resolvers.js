import { getPhotos, getAlbums } from '../database/database';

const resolvers = {
  Query: {
    photos: () => getPhotos(),
    albums: (context, { current, limit }) => getAlbums(current, limit)
  }
};

export default resolvers;
