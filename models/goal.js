const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let progressSchema = new Schema({
    date: Date,
    quantity: Number,
    notes: String
})

let goalSchema = new Schema({
    goalText: String,
    goalType: String, //iterative, cumulative
    dateSet: Date,
    dateDone: Date,
    plan: String,
    phoneReminders: Boolean,
    phoneRemindersInterval: String,
    emailReminders: Boolean,
    emailRemindersInterval: String,
    tone: String,
    notes: String,
    progress: [progressSchema],
    goalSet: String, //{type: Schema.Types.ObjectId, ref: 'GoalSet'}
    user: String //{type: Schema.Types.ObjectId, ref: 'User'}
}, {
    timestamps: true
})
module.exports = mongoose.model('Goal', goalSchema)