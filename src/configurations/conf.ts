import { configType, User } from "../types/animalType";

export const config: configType[] = [
  {
    type: "dog",
    name: "Rex",
    age: 3,
    color: "brown",
    breed: "German Shepherd",
    owner: "John Doe",
    ownerEmail: "john.doe@example.com",
    ownerPhone: "1234567890",
    ownerAddress: "123 Main St, Anytown, USA",
    ownerCity: "Anytown",
    ownerState: "CA",
  },
  {
    type: "cat",
    name: "Whiskers",
    age: 2,
    color: "black",
    breed: "Siamese",
    owner: "Jane Doe",
    ownerEmail: "jane.doe@example.com",
    ownerPhone: "0987654321",
    ownerAddress: "456 Main St, Anytown, USA",
    ownerCity: "Anytown",
    ownerState: "CA",
  },
  {
    type: "bird",
    name: "Tweety",
    age: 1,
    color: "yellow",
    breed: "Parrot",
    owner: "John Doe",
    ownerEmail: "john.doe@example.com",
    ownerPhone: "1234567890",
    ownerAddress: "123 Main St, Anytown, USA",
    ownerCity: "Anytown",
    ownerState: "CA",
  },
];

export const user: User[] = [
  {
    username: "emregulbay",
    password: "123",
    userId: 1,
  },
];

export const addToConfig = (animal: configType) => {
  config.push(animal);
};

export const getConfig = async (animalType?: string) => {
  if (animalType) {
    return config.filter((x) => x.type === animalType);
  }
  return config;
};

export const checkUserId = (userId: number) => {
    return !!(user.find(u => u.userId === userId))
}
