module.exports = {
  Query: {
    reservations: async (_, __, { dataSources }) => {
      return await dataSources.Reservation.find({}).exec();
    },
    reservation: async (_, { id }, { dataSources }) => {
      return await dataSources.Reservation.findOne({ _id: id }).exec();
    }
  },
  Mutation: {
    addReservation: async (_, args, { dataSources }) => {
      try {
        let response = await dataSources.Reservation.create(args);
        return response;
      } catch (e) {
        return e.message;
      }
    }
  }
};
