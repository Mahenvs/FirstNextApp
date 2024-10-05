import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
});

// Use mongoose.model to create the Prompt model
const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;
