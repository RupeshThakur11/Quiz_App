var keystone = require('keystone');

keystone.init({

  'name': 'LPIC quiz app',

  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],

  'views': 'templates/views',
  'view engine': 'jade',
  'port':3002,
  'auto update': true,
  'mongo': 'mongodb://127.0.0.1/my-project',
  'cloudinary config':{
    cloud_name: 'my-cloud',
    api_key   : 'abc',
    api_secret: '123',
  },

  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': '(your secret here)'
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'users': 'User',
  'LPIC1': 'LPIC1',
  'posts': ['posts', 'post-categories'],
  'galleries': 'galleries',
  'enquiries': 'enquiries'
});


keystone.start();
