module.exports = {
  Query: {
    reservations: async (_, { query }, { dataSources }) => {
      if (!query) {
        return await dataSources.Reservation.find({}).exec();
      }

      const [names, hotelNames] = await Promise.all([
        dataSources.Reservation.find({
          name: { $regex: query, $options: "i" }
        }),
        dataSources.Reservation.find({
          hotelName: { $regex: query, $options: "i" }
        })
      ]);

      const results = [];
      const map = new Map();

      for (const item of [...names, ...hotelNames]) {
        if (!map.has(item.id)) {
          map.set(item.id, true);
          results.push(item);
        }
      }

      return results;
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
