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