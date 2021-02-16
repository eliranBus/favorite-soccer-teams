import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import teams from './data/teams.js';
import Team from './models/teamModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Team.deleteMany();

    await Team.insertMany(teams);

    console.log('Data Imported!'.green.inverse);

    process.exit();

  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Team.deleteMany();

    console.log('Data Destroyed!'.red.inverse);

    process.exit();

  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

if(process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}