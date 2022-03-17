const { withFaust } = require('@faustjs/next');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = { withFaust,   async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
};
