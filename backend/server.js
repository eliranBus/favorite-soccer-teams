import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import Team from './models/teamModel.js';

dotenv.config();

connectDB();

const app = express();

// @desc Fetch all teams
// @route GET '/'
// @access Public

app.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find({});
    res.json(teams);

  } catch (error) {
    console.error(error.message)
  }
})

// @desc Update team favorite status
// @route PUT '/teams/:id'
// @access Public

app.put('/teams/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    
    team.isFavorite = team.isFavorite === true ? false : true;
    await team.save();

  } catch (error) {
    console.error(error.message)
  }
})

const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));