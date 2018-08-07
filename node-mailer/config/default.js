const defer = require('config/defer').deferConfig;
const path = require('path');

module.exports = {
    server: {
        siteHost: 'http://localhost'
    },

    mailer: {
        transport: 'gmail',
        gmail: {
            user: 'course.test.mailer',
            password: 'course.test.password'
        },
        senders: {
            default: {
                fromEmail: 'course.test.mailer@gmail.com',
                fromName: 'javascript.ru',
                signature: "<em>Regards</em>"
            }
        }
    },

    mongoose: {
        uri: 'mongodb://localhost/app',
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                },
                poolSize: 5
            }
        }
    },

    template: {

        // template.root uses config.root
        root: defer(function() {
            return path.join(cfg.root, 'templates')
        })
    },

    root: process.cwd()
};
