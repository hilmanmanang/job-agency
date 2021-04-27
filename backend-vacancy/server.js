
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Vacancy from './models/vacancy'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hilmanmanang:1234jsexpressmongo@cluster0-o2c6v.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established succcessfully!');
});

router.route('/vacancies').get((req, res) => {
    Vacancy.find((err, vacancies) => {
        if (err)
            console.log(err);
        else
            res.json(vacancies);
    });
});

router.route('/vacancies/:id').get((req, res) => {
    Vacancy.findById(req.params.id, (err, vacancy) => {
        if (err)
            console.log(err);
        else
            res.json(vacancy);
    });
});

router.route('/vacancies/add').post((req, res) => {
    let vacancy = new Vacancy(req.body);
    vacancy.save()
        .then(vacancy => {
            res.status(200).json({ 'vacancy': 'Added successfully' })
        })
        .catch(err => {
            res.status(400).send('Failed to create new record')
        });
});

router.route('/vacancies/update/:id').post((req, res) => {
    Vacancy.findById(req.params.id, (err, vacancy) => {
        if (!vacancy)
            return next(new Error('Could not load document'));
        else
        vacancy.jobId = req.body.jobId;
        vacancy.jobTitle = req.body.jobTitle;
        vacancy.company = req.body.company;
        vacancy.state = req.body.state;
        vacancy.closeDate = req.body.closeDate;

        vacancy.save().then(vacancy => {
            res.json('Update done');
        }).catch(err => {
            res.status(400).send('Update failed');
        })
    })
})

router.route('/vacancies/delete/:id').get((req, res) => {
    Vacancy.findByIdAndRemove({ _id: req.params.id }, (err, vacancy) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);
app.listen(4000, () => console.log('Express server running on port 4000'));