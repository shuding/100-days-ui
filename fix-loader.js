module.exports = function (s) {
	return s.replace(/url\([\'\"]/g, function (p) {
		return p + './';
	});
}
