# jekyll-nagymaros

Nagymaros is a [Jekyll](https://jekyllrb.com) theme designed for conferences, workshops, and similar events. It has a simple and intuitive structure featuring four pages that contain key information about the event:

- An index, meant for basic information and links to external sources, such as hotels and abstract submission systems.
- The conference program, adapted for multi-day schedules and color-coded for different event categories.
- A map of conference locations.
- An alphabetical list of contributors or participants.

The theme is built with [Bootstrap 5](https://getbootstrap.com/) and is fully responsive. The typography follows the [Mozilla Protocol](https://protocol.mozilla.org/), with [Inter](https://rsms.me/inter/) set as the default font and Zilla Slab used in display-sized headings. The layout is adapted from [jekyll-conference-theme](https://github.com/DigitaleGesellschaft/jekyll-theme-conference), but compared to this theme, Nagymaros aims to be simpler and easier to customize.

See the [demo](https://jekyll-nagymaros.netlify.app) to get a sense of what the theme looks like.

![](https://github.com/piazzai/jekyll-nagymaros/blob/master/screenshot.png)

## Installation

The theme can be installed by cloning or forking this repository and customizing the files. Alternatively, it can be installed as a gem, in which case all files and directory will stay hidden from view but will nonetheless be read and processed as Jekyll builds your website.

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

The website consists of four pages: `index.md`, `program.md`, `locations.md`, and `contributors.md`. Each of these pages has a special layout, which can be found in the `_layouts` folder. A generic `page.html` layout is also available that can be used as a basis to extend the website. New pages can be created easily, and the navigation bar will populate itself with all pages present in the site's root directory for which a `navorder` value is provided in the front matter.

Data that appears throughout the website is set by YAML files in the `_data` folder. In particular, `index.yml` includes the information needed to create buttons in the index page; `program.yml` includes the conference schedule and color codes for event categories; `location.yml` contains coordinates to center the map and place markets; and `contributors.yml` includes the list of contributors, with optional email addresses.

## Credits

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/jekyll-nagymaros. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled. To add a custom directory to your theme-gem, please edit the regexp in `jekyll-nagymaros.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
