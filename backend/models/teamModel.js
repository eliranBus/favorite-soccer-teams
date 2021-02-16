import mongoose from 'mongoose';

const teamSchema = mongoose.Schema({
  isFavorite: {
    type: Boolean,
    required: true,
    default: false
  },
  crest: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  yearFounded: {
    type: Number,
    required: true
  } 
}, {
  timestamps: true
})

const Team = mongoose.model('Team', teamSchema);

export default Team;