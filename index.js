var superagent = require('superagent');

/*
1.  `_`的值必须与之下的Cookie对应，否则服务端返回404
2. 以下的http请求头是必须的，其他无所谓，不然就是404
*/


superagent.post('https://segmentfault.com/api/user/login?_=7ef046ad4f224034d7b51655238bd870')
    .set('Referer', 'https://segmentfault.com/user/login')
    .set('X-Requested-With', 'XMLHttpRequest')
    .set('Cookie', 'PHPSESSID=web1~395mahoqliohh5kclv894ibpr3; _gat=1; _ga=GA1.2.1234754628.1465797373; Hm_lvt_e23800c454aa573c0ccb16b52665ac26=1465797373; Hm_lpvt_e23800c454aa573c0ccb16b52665ac26=1465797538')
    .send({
        mail: "xxxxxx",
        password: "xxxx"
    })
    .type('form')
    .end(function(err, res) {
        if (err || !res.ok) {
            console.log(err.status);
        } else {
            console.log('yay got ' + JSON.stringify(res.body));
        }
    });
