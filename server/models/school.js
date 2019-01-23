import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schoolSchema = new Schema({
  schools: { type: ['String'], required: true },
});

export default mongoose.model('School', schoolSchema);
