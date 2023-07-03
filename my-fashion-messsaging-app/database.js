import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('capstoneproject', 'PHI50', 'capstone', {
  host: 'localhost',
  dialect: 'postgres'
});



