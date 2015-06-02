'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superior ' + chalk.red('ElectronReactFlux') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'what is your project name?',
        default: this.appname,
        store: true
      },
      {
        type: 'input',
        name: 'appDesc',
        message: 'what is your description?',
        default: '',
        store: true
      },
      {
        type: 'list',
        name: 'ui',
        message: 'do you want to use ui library?',
        store: true,
        choices: [
          {
          name: 'none',
          value: 'none'
          }, {
            name:'react-bootstrap',
            value: 'react-bootstrap'
          }, {
            name: 'material-ui',
            value: 'material-ui'
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.appName = props.appName;
      this.appDesc = props.appDesc;
      this.ui = props.ui;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );

      this.fs.copy(
        this.templatePath('app'),
        this.destinationPath('app')
      );

      mkdirp('app/js/actions');
      mkdirp('app/js/constants');
      mkdirp('app/js/stores');
      mkdirp('app/js/utils');

      this.fs.copy(
        this.templatePath('gulp'),
        this.destinationPath('gulp')
      );
      switch (this.uiChoice) {
        case 'material-ui':
          this.npmInstall(['material-ui-sass'], { save: true });
        case 'react-bootstrap':
          this.npmInstall(['react-bootstrap'], { save: true });
        default:
          break;
      }
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
