import { User } from '../models/User';

const firstNames: string[] = ['John', 'Jane', 'Michael', 'Emily'];
const lastNames: string[] = ['Smith', 'Johnson', 'Williams', 'Brown'];

function getRandomDate(startDate: Date): Date {
  const startTimestamp = startDate.getTime();
  const twoDaysAgoTimestamp = Date.now() - 2 * 24 * 60 * 60 * 1000;
  const randomTimestamp =
    Math.floor(Math.random() * (twoDaysAgoTimestamp - startTimestamp + 1)) +
    startTimestamp;
  return new Date(randomTimestamp);
}

const users: User[] = [];

for (let i = 0; i < 1000; i++) {
  const firstNameIndex = Math.floor(Math.random() * firstNames.length);
  const lastNameIndex = Math.floor(Math.random() * lastNames.length);

  const user: User = {
    id: `user${i}`,
    first_name: firstNames[firstNameIndex],
    last_name: lastNames[lastNameIndex],
    username: `username${i}`,
    password: `password${i}`,
    email: `user${i}@example.com`,
    registration_date: getRandomDate(new Date(2019, 0, 1)),
    age: Math.max(Math.round(normalDistribution(25, 5)), 12),
    sex: Math.random() < 0.7 ? 'male' : 'female',
    role: 'user',
  };

  users.push(user);
}

const marketer: User = {
  id: 'marketer',
  first_name: 'Mark',
  last_name: 'Smith',
  username: 'admin',
  password: 'admin',
  email: 'myemail@gmail.com',
  registration_date: new Date(),
  sex: 'male',
  age: 30,
  role: 'marketer',
};

users.push(marketer);

function normalDistribution(mean: number, std: number): number {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * std + mean;
}

export default users;
