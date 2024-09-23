# jekyll-nagymaros

Nagymaros is a [Jekyll](https://jekyllrb.com) theme designed for conferences, workshops, meetings, and similar events. It has a simple and intuitive structure featuring four pages that provide key information about the event:

- An index for alerts, basic details, and links to external sources such as submission systems.
- A program, allowing for single or multi-day schedules and color-coded event categories.
- A map of conference locations, customizable with markers, areas, and tooltips.
- An alphabetical list of participants, with optional roles, affiliations, and email addresses.

The theme is based on [Bootstrap 5](https://getbootstrap.com/), which makes it mobile-first and fully responsive. Body text is set in Inter, a clean sans-serif typeface that guarantees readability at small screen sizes. A slab-serif typeface, Zilla Slab, is used instead in display headings. The layout is adapted from [jekyll-conference-theme](https://github.com/DigitaleGesellschaft/jekyll-theme-conference) and remains quite similar to it, but compared to this theme, Nagymaros aims to be simpler and easier to customize.

See the [demo](https://piazzai.github.io/jekyll-nagymaros/) to find out what the theme looks like.

![](https://github.com/piazzai/jekyll-nagymaros/blob/master/screenshot.png)

## Installation

The theme can be installed as usual by cloning this repository and editing the files. However, it is far more convenient to install it as a gem, in which case all the files you do not want or need to customize remain hidden from view, but will still be read and processed during build.

If you choose to install the theme as a gem, your site should include at a minimum the following files:

```bash
.
├── 404.md
├── _config.yml
├── _data
│   ├── index.yml
│   ├── map.yml
│   ├── participants.yml
│   └── program.yml
├── Gemfile
├── index.md
├── map.md
├── participants.md
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

The easiest way to set up a new website in this way is to clone the contents of the `demo` folder. This provides a working set of files to get you started.

After you are done creating the basic files, create a local gem library and run bundler:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

To customize hidden files, you can create new files with the same names and paths. For example, to change the layout of the index page, you can create a `_layouts` folder and a file `index.html` within this folder that contains your custom code. During build, Jekyll will give priority to your files over the theme's.

## Usage

Core customization occurs in `_config.yml`. Aside from the usual configuration variables, you can set a value for `home`, which will determine the destination of the site title button in the header, as well as the return link from the 404 page. Only use this if you want these buttons to lead somewhere different than the index.

Next, you can set a value for `copyright`, which corresponds to the name of the copyright holder in the notice within the theme's footer. If no value is provided for this variable (default), the whole copyright notice is suppressed.

Finally, you can set a value for `indexing`, which tells search engine crawlers whether to index your site. The default value is `false`, and in this case the following code is included in the head of every page:

```html
<meta name="robots" content="none">
```

If you set the value to `true`, however, the above code will not be included, crawlers will be allowed to index your site, and Jekyll will populate the head of every page with SEO tags through the `jekyll-seo-tag` plugin.

Data that appears in the theme's four default pages must be configured via YAML files located in the `_data` folder. See the corresponding files in `demo/_data` to understand how to write your own YAML, or better yet, clone these files and edit them.

The order of appearance of pages in the theme's navigation bar is determined by the value of `navorder` set in each page's front matter. For example, setting `navorder: 1` will make the page appear first in the list. Note that a page will only appear in the navigation bar if the `navorder` variable is set, so it is possible to hide some pages from navigation simply by not giving this variable a value.

Customizing the CSS is possible by creating a file `_sass/_custom.scss`. You can use this both to define new styles or to overwrite the theme's defaults. The file will be automatically compiled during build.

For convenience, customization of the theme's color scheme is also possible via YAML. In this case, create a file `_data/skin.yml` and assign new colors from the [Open Color](https://yeun.github.io/open-color) library to various HTML elements. Make sure to stick to the library's color-number naming convention. Here is an example:

```yaml
body:
  bg: gray-0              # background
  color: gray-8           # body text
a:
  color: blue-7           # links
  hover: blue-9           # links when hovering
digit:
  bg: gray-3              # background of digit on 404 page
header:
  bg: gray-4              # background of navigation bar
index:
  bg: gray-2              # background of index container
```

The variables are named after the HTML elements they style. The colors to which they are set in this example are actually the theme's defaults. If no value is provided for some variables, or if `_data/skin.yml` does not exist, the theme assumes the default colors. See `assets/css/styles.scss` for a complete list of defaults.

## Credits

This theme builds on the following projects:

- [Bootstrap](https://getbootstrap.com/)
- [Inter](https://rsms.me/inter/)
- [jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference)
- [Leaflet.js](https://leafletjs.com/)
- [Open Color](https://yeun.github.io/open-color)
- [Zilla Slab](https://github.com/mozilla/zilla-slab)

## Bugs

If you find any problem using the theme, please [open an issue](https://github.com/piazzai/jekyll-nagymaros/issues).
