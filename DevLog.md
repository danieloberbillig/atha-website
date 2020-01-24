# ATHA Webpage

## Git
git remote add origin https://github.com/danieloberbillig/atha-website.git
git push -u origin master


## Ruby and Jekyll Setup
- follow install instructions: https://jekyllrb.com/docs/installation/windows/
- needs full Ruby environment + other gems

## Start Jekyll Project
1. install and initialize: https://jekyllrb.com/docs/
2. bundle init:  https://jekyllrb.com/docs/step-by-step/01-setup/
3. Follow step by step tutorial: https://jekyllrb.com/docs/step-by-step/01-setup/



## Run Jekyll

outputs static site to _site
```
jekyll build
```

same as above + apply each change instantly
```
jekyll serve
```



# Jekyll Liquid
- variables available under *page* variable
```
---
my_number: 5
---

{{ page.my_number }}
```

How to commtent out in Liquid:
        {% comment %}
        {% include d3-example.html %}
        {% endcomment %}



# Layouts
- Layouts are templates that wrap around your content; in _layouts

# Includes
- include tag allows you to include content from another file stored in an _includes folder; single source for source code that repeats around the site or for improving the readability


# Troubleshoot:
- by default index.html ignored if file index.markdown exist in root


# Deployment
https://jekyllrb.com/docs/step-by-step/10-deployment/
- have gem file to ensure the version of Jekyll and other gems remains consistent across different environments
```
bundle install
```

to use gemfile -> restrict ruby to only use gems from gemfile
```
bundle exec jekyll serve
```

when Gemfile changes, run update
```
bundle update
```

- read about dev vs prod environment variable to include analytics in prod


<<<<<<< HEAD
## Deploy on Github Pages
- Github > Settings > Enable Git Pages
- see url: https://danieloberbillig.github.io/atha-website/
- update Gem file (comment out, comment in and run 
    bundle install
    bundle update
    and
    bundle update github-pages)
- 


## Deploy on HEROKU
- atha-survey
- atha-pipeline
- stage: production (?) 


=======
>>>>>>> parent of 90a3dbe... update gem file to run on github pages

## Run production build
```
JEKYLL_ENV=production bundle exec jekyll build
```




## d3 integration
tried
    gem install d3-rails
but it looked suspicious and seems to be for ruby on rails pipeline only



# ATHA

## ToDo
- have content as sticky side links on right
- ask if line breaks are ok - not sure if new pdf page starts
- look at danHeader for index.html -> just copy&paste, must be broken for lack of grid container
    also added to scss and added import in main -> check if this the right way to do
- chk _config.yml if not broken



# Charts
Research
- Plotly        free javascript version - looks great
- Chartist      very limited charts
- Chart.js
- Highcharts    BEST free for non-profit - atha seems not to be non-profit
- to change height: disable aspectratio in options
     options: {
        maintainAspectRatio: false,

- dataset structure: example radar chart
       data: {
        labels: [
            'Item 1',
            'Item 2',
            'Item 3'
        ],
        datasets: [
            {
                label: 'Male',
                data: [22, 84, 7, 24],
                backgroundColor: ["rgb(0, 150, 150)"],
            },
            {
                label: 'Female',
                data: [22, 84, 7, 24],
                backgroundColor: ["rgb(0, 250, 250)"],
            }
        ],
    },

# Ruby Gems
- seem to be installed mostly in ruby central runtime folder on C:\Ruby26-x64\lib\ruby\gems\2.6.0\gems

- how are they shipped via app??

e.g. Install Chart.js as ruby gem
https://github.com/coderbydesign/chart-js-rails
    1. add to gemfile:
        gem 'chart-js-rails'
    2. Excute
        bundle
       Or install manually
        gem install chart-js-rails
    3. add to app.js file
        require Chart.min


# Scrollspy via Materializecss
- see https://materializecss.com/scrollspy.html
- all content (whole website text content) needs to be wrapped in a div .row
=> turns out to wreck my whole layout

# Trying native code for scrollspy
https://css-tricks.com/sticky-smooth-active-nav/


# Jekyl Plugins  
- add to Gem file to have them available on other systems e.g.
    gem 'jekyll-analytics'
    and then run *bundle* to install gem instead of manually
    gem install jekyll-analytics
- Gem file: if i use gh-pages: have gems in GROUP: jekyll-plugins do...

https://github.com/digitalsparky/jekyll-minifier
    - not working, known bug?

https://github.com/hendrikschneider/jekyll-analytics
    - installed for google analytics
    - gh-pages automatially set env to prod
    - for local test run: *JEKYLL_ENV=production jekyll serve*
    - NOT WORKING - KNOWN ISSUE: DO MANUAL INSTEAD FOLLOWING
        https://michaelsoolee.com/google-analytics-jekyll/
https://github.com/lavas-project/jekyll-pwa
    - added to Gem file and used *bundle* to install gem
    - No Manifesto.json specified yet
https://github.com/jekyll/jekyll-sitemap
    - was already included in my boilerplate