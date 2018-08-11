var express = require('express');
var router = express.Router();
let comment = {};

/* html 转码 */
function html_encode(str){
  var s = '';
  if (str.length == 0) {
    return ''
  }else{
    s = str.replace(/&/g,'&gt;');
    s = str.replace(/</g,'&lt;');
    s = str.replace(/>/g,'&gt;');
    s = str.replace(/\s/g,'&nbsp;');
    s = str.replace(/\'/g,'&#39;');
    s = str.replace(/\'/g,'&#quot;');
    s = str.replace(/\n/g,'<br/>');
    return s
  }
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection', 0);
  res.render('index', { title: 'Express', xss: req.query.xss }); // 反射型实例
});

/* GET comment page. */
router.get('/comment', function(req, res, next) {
  comment.v = html_encode(req.query.comment);
  res.json({
    success: true
  })
});

/* GET comment data. */
router.get('/getComment', function(req, res, next) {
  res.json({
    comment: comment.v
  })
});

module.exports = router;
