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


# Layouts
- Layouts are templates that wrap around your content; in _layouts

# Includes
- include tag allows you to include content from another file stored in an _includes folder; single source for source code that repeats around the site or for improving the readability


# Troubleshoot:
- by default index.html ignored if file index.markdown exist in root