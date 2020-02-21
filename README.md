# Personal Website

This is my personal blog! Just a brief intro to who I am, all my writing, and links to my work profiles. It's built on Jekyll, my favorite static site generator. It relies on NPM scripts to compile CSS and serve the the Jekyll files.

A previous version used Turbolinks and TailwindCSS, but I stripped them out to cut down on external dependencies. Now it's my own Sass setup and a custom service worker.

## Install Workflow Dependencies

```
$ gem install bundler # if not already installed
$ npm -g install yarn
```

## Install Application Dependencies

```
$ bundle install
$ yarn install
```

## Run the Dev Environment

This runs a basic Sass compilation and Jekyll build, watching for changes on both sides.

```
$ yarn dev
$ yarn write     # Only compile and watch Jekyll
$ yarn sass:dev  # Only compile and watch Sass
```

## Build for Production

This builds Jekyll and a production-ready version of the styles without watching for changes. The server should run this command before hosting the files.

```
$ yarn prod
```
