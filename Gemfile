source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# downgrade to older jekyll to resolve gh-pages gem error
# which depends on older version of jekyll 
gem "jekyll", "3.8.5"
# gem "jekyll", "~> 4.0.0"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"


# DO: To deploy in gh-pages
gem 'github-pages'

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem 'jekyll-seo-tag'
  gem 'jekyll-analytics'
  gem 'jekyll-pwa-plugin'
  gem 'jekyll-sitemap'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

# Chart.js library
gem 'chart-js-rails'

# Google Analytics
# gem 'jekyll-analytics' moved to githubpages group:

# PWA, see https://github.com/lavas-project/jekyll-pwa
# gem 'jekyll-pwa-plugin'