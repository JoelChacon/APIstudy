var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var KalElSchema = new Schema({
	sex: String,
	name: String
})

module.exports = mongoose.model("KalEl", KalElSchema);