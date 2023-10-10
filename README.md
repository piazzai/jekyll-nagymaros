# jekyll-nagymaros

Nagymaros is a [Jekyll](https://jekyllrb.com) theme designed for conferences, workshops, meetings, and similar events. It has a simple and intuitive structure featuring four pages that provide key information about the event:

- An index, meant for basic details and links to external sources, such as submission systems.
- The conference program, adaptable to multi-day schedules and with color-coded event categories.
- A map of conference locations, customizable with markers, areas, and tooltips.
- An alphabetical list of contributors, with optional roles and email addresses.

The theme is built with [Bootstrap 5](https://getbootstrap.com/), for which reason it is mobile-first and fully responsive. The main typeface is Inter, a clean sans-serif font that guarantees readability at small screen sizes. A slab-serif typeface, Zilla Slab, is used in display headings. The layout is adapted from [jekyll-conference-theme](https://github.com/DigitaleGesellschaft/jekyll-theme-conference) and remains quite similar to it, but compared to this theme, Nagymaros aims to be simpler and easier to customize.

See the [demo](https://jekyll-nagymaros.netlify.app) to find out what the theme looks like.

![](https://github.com/piazzai/jekyll-nagymaros/blob/master/screenshot.png)

## Installation

The theme can be installed as usual by cloning this repository and editing the files. However, it is far more convenient to install it as a gem, in which case all the files you do not want or need to customize remain hidden from view, but will nonetheless be read and processed during Jekyll build.

If you choose to install the theme as a gem, you should create a Jekyll website including these files:

```bash
.
├── 404.md
├── _config.yml
├── contributors.md
├── _data
│   ├── contributors.yml
│   ├── index.yml
│   ├── locations.yml
│   └── program.yml
├── Gemfile
├── index.md
├── locations.md
└── program.md

```

To install the theme, you can then add this line to your `Gemfile`:

```ruby
gem "jekyll-nagymaros"
```

And this line to `_config.yml`:

```yaml
theme: jekyll-nagymaros
```

The easiest way to set up a new website with this theme is to clone the contents of the `demo` folder. This provides a working set of files to get you started.

After you are done creating the basic files, run bundler:

    $ bundle

Or install the gem yourself as:

    $ gem install jekyll-nagymaros

In case the theme is installed as a gem, you will be able to customize hidden files by creating new files with the same names and paths. For example, to change the layout of the index page, you can create a `_layouts` folder and a file `index.html` within this folder that contains your code. During build, Jekyll will give priority to your own files over the theme's.

## Usage

Core customization occurs in `_config.yml`. Aside from the usual configuration variables, you can set a variable `copyright` that corresponds to the name of the copyright holder in the notice within the theme's footer. If no value is provided for this variable, the notice is suppressed. In addition, you can set the variable `indexing`, which tells search engine crawlers whether to index your site. If this is falsey, the following code is placed in every page's head:

```html
<meta name="robots" content="noindex, nofollow" />
```

If the value is truthy, instead, crawlers will be allowed to index your site and Jekyll will populate every page's head with SEO tags.

The `_layouts` folder includes the layouts for the theme's four default pages, as well as a custom 404 page. A generic page layout is also available that can be used as a starting point to design new layouts and extend the theme. The `_sass` folder includes SCSS files that define the theme's appearance and color scheme. The `assets` folder includes compiled CSS and JavaScript, images, and webfonts. There is no *need* to customize files within these folders, as your website will work properly with the defaults provided. However, you might want to customize layouts, especially if you add new pages, and you will definitely need to customize site data.

All pages should include the following front matter:

```yaml
layout: # one of the layouts stored in the layouts folder
title: # your page's title
description: # a short description of what your page contains
```

The `layout` variable determines what your page looks like. The variables `title` and `description` are used by Jekyll to create metadata, so their values will appear in search engine results, if your site is indexed, and your visitors' browser tab. If you do not set values for these variables, they will default to the site title and description in `_config.yml`.

The front matter can include an optional `navorder` variable, which determines your page's position in the navigation bar within the theme's header. For example:

```yaml
navorder: 1
```

This will result in the page being listed first. A page will only appear in the navigation bar if the `navorder` variable is truthy, so you are free to hide pages from navigation by not declaring the variable.

Data that appears throughout the theme's default pages must be configured via YAML files located in `_data`. In particular, `index.yml` should provide information needed to create action buttons in the index page; `program.yml` should provide the conference schedule and color codes for event categories; `locations.yml` should provide coordinates to center the map and place markers, as well as optional tooltip texts; finally, `contributors.yml` should include the list of participants, with optional emails and roles.

Please refer to the YAML files in `demo/_data` to understand how to write your own YAML, or better yet, clone these files and edit them.

## Credits

The theme builds on the following projects:

- [Bootstrap](https://getbootstrap.com/)
- [Inter](https://rsms.me/inter/)
- [jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference)
- [Leaflet.js](https://leafletjs.com/)
- [Open Color](https://yeun.github.io/open-color)
- [Zilla Slab](https://github.com/mozilla/zilla-slab)

## Bugs

If you find any problem using this theme, please [open an issue](https://github.com/piazzai/jekyll-nagymaros/issues).
