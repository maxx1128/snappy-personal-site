# Personal Website

This is my personal blog! Just a brief intro to who I am, all my writing, and links to my work profiles. It's built on the below tools:

* Jekyll for static site generation
* Webpack for CSS and JS asset compilation
* Tailwind as a utility CSS framework
* PurgeCSS to remove unneeded Tailwind classes
* Turbolinks for performance

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
