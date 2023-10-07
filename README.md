# jekyll-nagymaros

Nagymaros is a [Jekyll](https://jekyllrb.com) theme designed for conferences, workshops, and similar events. It has a simple and intuitive structure featuring four pages that contain key information about the event:

- An index, meant for basic information, contact people, and links to external sources.
- The conference program, adapted for multi-day schedules and color-coded for different event categories.
- A map of conference locations.
- An alphabetical list of contributors or participants.

The theme is built with [Bootstrap 5](https://getbootstrap.com/) and is fully responsive. The typography follows the [Mozilla Protocol](https://protocol.mozilla.org/), with [Inter](https://rsms.me/inter/) set as the default font and Zilla Slab used in display-sized headings. The layout is adapted from [jekyll-conference-theme](https://github.com/DigitaleGesellschaft/jekyll-theme-conference), but compared to this, Nagymaros aims to be simpler and easier to customize.

See the [demo](https://jekyll-nagymaros.netlify.app) to check what the theme looks like.

![](https://github.com/piazzai/jekyll-nagymaros/blob/master/screenshot.png)

## Installation

The theme can be installed by cloning or forking this repository and customizing the files. It can also be installed as a gem, in which case all files and directories will stay hidden from view but will be read and processed during build.

To install the theme as a gem, add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-nagymaros"
```

And add this line to `_config.yml`:

```yaml
theme: jekyll-nagymaros
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-nagymaros

## Usage

The theme consists of four pages: `index.md`, `program.md`, `locations.md`, and `contributors.md`. New pages can be added easily, and should include the following front matter:

```yaml
layout: page
title: Your Page's Title
description: This is a short description of what your page contains
```

The `layout` variable determines what your page looks like. The four basic pages have special layouts, which can be found in the `_layout` folder. A generic `page` layout is a stripped-down version that includes only title and concent, which can be taken as a starting point to design new layouts and extend the theme.

In addition, your pages can contain a `navorder` variable in the front matter, which specifies in what position the page will be listed in the top navigation bar. Pages will only appear in this bar if a `navorder` value is provided.

Core customization occurs in the `_config.yml` file located in the root directory. Aside from the usual configuration variables, this file allows setting a value for the Boolean variable `indexing`. If the value of this variable is set to `false`, web crawlers will be instructed not to index your site, which will make it much less likely to appear in search engine results.

In the configuration file, users will also find a `copyright` variable. This determines the name of the copyright holder in the notice appearing in the theme's footer. The notice is suppressed if no value is provided for this variable.

Data that appears throughout the site is set by YAML files located in the `_data` folder. In particular, `index.yml` includes the information needed to create buttons in the index page; `program.yml` includes the conference schedule and color codes for event categories; `location.yml` contains coordinates to center the map and place markets; and `contributors.yml` includes the list of contributors, with optional email addresses.

The `_sass` folders includes files that set layout and color scheme. Finally, the `assets` folder includes the compiled CSS and Javascript, along with images necessary to display the map and fonts that consitute the site's typography.

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
