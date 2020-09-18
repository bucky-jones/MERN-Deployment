const ExamController = require('../controllers/exam.controller');
module.exports = function(app){
    app.get('/api', ExamController.index);
    app.post('/api/exam/new', ExamController.createExam);
    app.get('/api/exam', ExamController.getAllExam);
    app.get('/api/exam/:id', ExamController.getExam);
    app.put('/api/exam/:id', ExamController.updateExam);
    app.delete('/api/exam/:id', ExamController.deleteExam);
}
