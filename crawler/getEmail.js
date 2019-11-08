let Imap = require('imap'),
    inspect = require('util').inspect
    log = require('winston'),
    simpleParser = require('mailparser').simpleParser,
    fs = require('fs');

const imap = new Imap({
    user: 'justfordraw@163.com',
    password: 'xxx',
    host: 'imap.163.com',
    port: 993,
    tls: true
});


async function parse_email(body) {
    let parsed = simpleParser(body);
    return parsed;
};

function openInbox(cb) {
    imap.openBox('INBOX', true, cb);
}

imap.once('ready', function () {
    openInbox(function (err, box) {
        if (err) throw err;
        imap.search(['UNSEEN', ['SINCE', 'Nov 7, 2019']], function (err, results) {
            if (err) throw err;
            var f = imap.fetch(results, {
                bodies: ['TEXT'],
                struct: true
            });
            f.on('message', function (msg, seqno) {
                console.log('Message #%d', seqno);
                var prefix = '(#' + seqno + ') ';
                console.log(msg)
                let arr = [];
                msg.on('body', function (stream, info) {
                    var buffer = '';
                    stream.on('data', function(chunk) {
                        buffer += chunk.toString('utf8');
                    });
                    stream.once('end', function() {
                        console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
                    });
                    // arr.push({stream});
                    // stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
                    // console.log(prefix + 'Body');
                    // simpleParser(stream, {
                    //     skipImageLinks: true
                    // }, (err, parsed) => {
                    //     // fs.wr
                    //     // parsed.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
                    //     // console.log(parsed);
                    // });
                });
                msg.once('attributes', function (attrs) {
                    fs.writeFileSync('res.js', inspect(attrs, false, 8));
                    // stream.pipe(fs.createWriteStream('msg-' + seqno + '-body.txt'));
                    // console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
                });
                msg.once('end', function () {
                    console.log(arr)
                    fs.writeFileSync('res.js', arr);
                    // console.log(arr)
                    console.log(prefix + 'Finished');
                });
            });
            // f.on('message', processMessage)
            f.once('error', function (err) {
                console.log('Fetch error: ' + err);
            });
            f.once('end', function () {
                console.log('Done fetching all messages!');
                imap.end();
            });
        });
    });
});

function processMessage(msg, seqno) {
    console.log('Processing msg #' + seqno);

    var parser = new MailParser();
    parser.on('headers', function (headers) {
        console.log('Header: ' + JSON.stringify(headers));
    });
    parser.on('end', function (msg) {
        console.log('From: ' + msg.from);
        console.log('Subject: ' + msg.subject);
        console.log('Text: ' + msg.text);
        console.log('Html: ' + msg.html);
    });

    msg.on('body', function (stream) {
        stream.on('data', function (chunk) {
            parser.write(chunk.toString('utf8'));
        });
    });
    msg.once('end', function () {
        console.log('Finished msg #' + seqno);
        parser.end();
    });
}

imap.once('error', function (err) {
    console.log(err);
});

imap.once('end', function () {
    console.log('Connection ended');
});

imap.connect();