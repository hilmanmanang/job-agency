import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Vacancy = new Schema({
    jobId: {
        type: String
    },
    jobTitle: {
        type: String
    },
    company: {
        type: String
    },
    state: {
        type: String
    },
    closeDate: {
        type: Date
    }
})

export default mongoose.model('Vacancy', Vacancy);