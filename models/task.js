
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name.'],
    trim: true,
    maxlength: [20, 'Name cannot be more than 20 characters.']
  },
  completed: {
    type: Boolean,
  }
});


export default mongoose.model('Task', TaskSchema);