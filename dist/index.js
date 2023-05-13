"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _dotenv = require('dotenv'); var dotenv = _interopRequireWildcard(_dotenv);
dotenv.config()
const app = _express2.default.call(void 0, )
app.get('/', (req, res) => res.send('Hello World!'))
const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))