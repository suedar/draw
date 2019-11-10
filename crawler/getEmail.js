let Imap = require('imap'),
    fs = require('fs');



function openInbox(imap, cb) {
    imap.openBox('INBOX', true, cb);
}

function handleStr(msg) {
    const arr = msg.split('\r\n\r\n');
    const headArr = arr[0].split('\r\n');
    const body = Buffer.from(arr[3], 'base64').toString('utf8');
    const fromEmail = /\<([^]*)\>/.exec(headArr[0])[1];
    const nickName = headArr[1].slice(9);
    // location: [x, y], color: '#ccc';
    try {
        const contentArr = body.split('color');
        if (contentArr.length === 1) {
            return {};
        }
        const locArr = /\[[^]*\]/.exec(contentArr[0])[0].split(',');
        const color = /\'[^]*\'/.exec(contentArr[1])[0];
        return {
            fromEmail, nickName,
            x: locArr[0].slice(1),
            y: locArr[1].slice(0, -1),
            color: color.slice(1, -1)
        }
    } catch (error) {
        console.log(error)
        return {};
    }
}


function initALl(cb) {
    const imap = new Imap({
        user: 'justfordraw@163.com',
        password: 'xxxx',
        host: 'imap.163.com',
        port: 993,
        tls: true
    });

    imap.once('ready', function () {
        const arr = [];
        openInbox(imap, function (err, box) {
            if (err) throw err;
            imap.search(['UNSEEN', ['SINCE', 'Nov 7, 2019']], function (err, results) {
                if (err) throw err;
                var f = imap.fetch(results, {
                    bodies: ['HEADER.FIELDS (TO FROM SUBJECT)','TEXT'],
                    struct: true
                });
                // const file = fs.createWriteStream('newRes.txt', {
                //     encoding: 'utf8'
                // })
                f.on('message', function (msg, seqno) {
                    // console.log('Message #%d', seqno);
                    var prefix = '(#' + seqno + ') ';
                    var buffer = '';
                    msg.on('body', function (stream, info) {
                        stream.on('data', function(chunk) {
                            buffer += chunk.toString('utf8');
                        });
                        stream.once('end', function() {
                            // file.write(JSON.stringify(buffer));
                        });
                    });
                    msg.once('attributes', function (attrs) {
                        // console.log(attrs)
                    });
                    msg.once('end', function () {
                        const res = handleStr(buffer);
                        if (Object.keys(res).length !== 0) {
                            arr.push(res)
                        }
                        // console.log(prefix + 'Finished');
                    });
                });
                f.once('error', function (err) {
                    // console.log('Fetch error: ' + err);
                });
                f.once('end', function () {
                    // console.log('Done fetching all messages!');
                    // fs.writeFileSync('a.js', arr);
                    // file.end();
                    imap.end();
                    cb(arr)
                    // return arr;
                });
            });
        });
    });

    imap.once('error', function (err) {
        console.log(err);
    });

    imap.once('end', function () {
        // console.log('Connection ended');
    });
    imap.connect();
}

module.exports.getEmail = initALl;