var dest = './dest';
var src = './app';

module.exports = {
  sass: {
    src: src + '/sass/**/*.{sass,scss,css}',
    dest: dest + '/css',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    },
    outputName: 'app.css'
  },
  browserify: {
    settings: {
      transform: ['reactify']
    },
    src: src + '/js/components/index.jsx',
    dest: dest + '/js',
    outputName: 'app.js',
  },
  watch: {
    src: 'app/**/*.*',
    tasks: ['build']
  }
};
