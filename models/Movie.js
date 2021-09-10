import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
	title: {
		type: String,
		require: [true, 'por favor ingrese el titulo amigo']
	},
	plot: {
		type: String,
		require: [true, 'por favor ingrese el plot amigo']
	}
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
