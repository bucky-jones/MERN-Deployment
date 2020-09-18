const mongoose = require('mongoose');
const ExamSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required:[true, "Name required!!"],
            minlength: [3, "Name must be at least 3 characetrs!!"]
        },
        type: { 
            type: String,
            required:[true, "Type required!!"],
            minlength: [3, "Type must be at least 3 characetrs!!"]
        },
        description: { 
            type: String,
            required:[true, "Description required!!"],
            minlength: [3, "Description must be at least 3 characetrs!!"]
        },
        skill_one: { 
            type: String
        },
        skill_two: { 
            type: String
        },
        skill_three: { 
            type: String
        }

}, { timestamps: true });
module.exports.Exam = mongoose.model('Exam', ExamSchema);
