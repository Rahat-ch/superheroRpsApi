import Hero from "./models/superhero";

const resolvers = {
  Query: {
    heros: () => Hero.find()
  },
  Mutation: {
    createHero: async (_, { name, uses, wins }) => {
      const hero = new Hero({ name, uses, wins });
      await hero.save();
      return hero;
    }
  }
};

export default resolvers;
