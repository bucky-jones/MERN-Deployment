module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

const { Exam } = require('../models/exam.model');
module.exports.createExam = (request, response) => {
    const { name, type, description, skill_one, skill_two, skill_three } = request.body;
    Exam.create({
        name,
        type,
        description,
        skill_one,
        skill_two,
        skill_three
    })
        .then(exam => response.json(exam))
        .catch(err => response.status(400).json(err))
}

module.exports.getAllExam = (request, response) => {
    Exam.find({}).sort({type: 1})
        .then(exams => response.json(exams))
        .catch(err => response.json(err))
}

module.exports.getExam = (request, response) => {
    Exam.findOne({_id:request.params.id})
        .then(exam => response.json(exam))
        .catch(err => response.json(err))
}

module.exports.updateExam = (request, response) => {
    Exam.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedExam => response.json(updatedExam))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteExam = (request, response) => {
    Exam.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}


