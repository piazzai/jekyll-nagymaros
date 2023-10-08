# jekyll-nagymaros

Nagymaros is a [Jekyll](https://jekyllrb.com) theme designed for conferences, workshops, and similar events. It has a simple and intuitive structure featuring four pages that provide key information about the event:

- An index, meant for basic info, contacts, and links to external sources such as submission systems.
- The conference program, adapted for multi-day schedules and color-coded for different event categories.
- A map of conference locations, customizable with markers and tooltips.
- An alphabetical list of contributors, with optional email addresses.

The theme is built with [Bootstrap 5](https://getbootstrap.com/), so it is mobile-first and fully responsive. The main typeface is [Inter](https://rsms.me/inter/), a clean sans-serif font that guarantees readability even at small screen sizes. Zilla Slab is used in display headings (or any text styled with Bootstrap's display classes). The layout is adapted from [jekyll-conference-theme](https://github.com/DigitaleGesellschaft/jekyll-theme-conference) and remains similar to it, but compared to this theme, Nagymaros aims to be simpler and easier to customize.

See the [demo](https://jekyll-nagymaros.netlify.app) to find out what the theme looks like.

![](https://github.com/piazzai/jekyll-nagymaros/blob/master/screenshot.png)

## Installation

The theme can be installed as usual by cloning or forking this repository and customizing the files. It can also be installed as a gem, in which case all theme files and directories will be conveniently hidden from view, but they will still be read and processed during Jekyll build.

If you choose to install the theme as a gem, you should create a Jekyll website including the following files:

```bash
.
├── 404.md
├── _config.yml
├── contributors.md
├── _data
│   ├── contributors.yml
│   ├── index.yml
│   ├── location.yml
│   └── program.yml
├── Gemfile
├── index.md
├── location.md
└── program.md
```

To install the theme, add this line to your `Gemfile`:

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

In case the theme is installed as a gem, you will still be able to customize hidden files by creating your own with the same names and paths. For example, if you want to change the index's layout, you can create a `_layouts` folder and place in it a customized `index.html`. During build, Jekyll will give priority to your own files over the theme's.

## Usage

Core customization occurs in `_config.yml`. Aside from the usual configuration variables (`title`, `description`, `baseurl`, `url`), you can set the value of `copyright`, which corresponds to the name of the copyright holder in the copyright notice within the theme's footer. If no value is provided for this variable, the whole copyright notice is suppressed. In addition, you can set the value of `indexing`, which determines whether you want to allow search engines to index your website. If you set it to false, web crawlers will be instructed not to index your site by placing the following code in every page's head:

```html
<meta name="robots" content="noindex, nofollow" />
```

If the value is set to true, instead, crawlers will be allowed to index your site and Jekyll will populate your pages' head with SEO tags.

The `_layouts` folder includes the layouts for the theme's four default pages, as well as a custom 404 page. A generic page layout is also available, which can be used as a basis to design new layouts and extend the theme. The `_sass` folder includes files that define the theme's appearance and color scheme. The `assets` folder includes the compiled CSS and JavaScript, along with images necessary to render the map and webfonts required by the theme's typography.

There is no need to customize the contents of any of these folders, as your website will work properly with the files provided by the theme. But you might want to customize files in `_layouts`, especially if you add new pages, and you will definitely need to customize files in `_data`.

### Pages

By default, the theme consists of four pages: `index.md`, `program.md`, `locations.md`, and `contributors.md`. You can optionally include an error page `404.md`. Other pages can be added easily. All pages should include the following front matter:

```yaml
layout: # one of the layouts stored in the layouts folder
title: # your page's title
description: # a short description of what your page contains
```

The `layout` variable determines what your page will look like. The variables `title` and `description` are used in creating the page's metadata, so their values will appear in search results if your site is indexed by search engines. If you do not set values for these variables, they will default to the site title and description set in `_config.yml`.

In addition, a page's front matter can include a `navorder` variable, whose purpose is setting the position of the page in the navigation bar within the theme's header. For example, setting `navorder: 1` will result in the page being listed first in the navigation bar. A page will only appear in the navigation bar if the `navorder` variable is set, which allows you to hide some pages from navigation if you wish.

### Data

Data that appears in the theme's default pages is set by YAML files located in the `_data` folder. In particular, the file `index.yml` contains information needed to create action buttons in the index page, including `text` and `url` for each button. If `disabled: true` is set, the button will be faded and unclickable.

The file `program.yml` contains the conference schedule and color codes for event categories. For each category, a `name` and a `color` must be provided, with colors following the naming conventions of the [Open Color](https://yeun.github.io/open-color) library. Then, for each event day, a `name` must be specified along with a list of events. Each event must have a `time` and a `title`. Optionally, an event can also have a `subtitle` and a `category`, whose name must match one of the categories configured earlier.

The file `location.yml` contains coordinates to center the map and place markers. The `center` variable must be a pair of coordinates in the form _latitude, longitude_. The `zoom` variable specifies how closely the map should be zoomed on the center location when it is first loaded. You can include a list of markers, each with an optional `text` that appears in the tooltip. For each marker, a pair of coordinates in the form _latitude, longitude_ must be set in the `coord` variable.

The file `contributors.yml` includes the list of contributors, each with `first` name and `last` name, as well as an optional `email` that makes the name clickable.

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
