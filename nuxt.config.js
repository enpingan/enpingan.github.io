export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    script: [
      {
        src: "~assets/js/main.js"
      },
    ]
  },
  css: [
    '~/assets/css/main.css',
  ],
}