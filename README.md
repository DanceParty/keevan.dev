## Personal Site

### Adding a new post

1. If the category of the post is not yet in `posts`, create a new folder inside of `posts` (i.e. `travel`)

2. Add your new blog post inside of the category folder `posts/travel/vancouver.md`

3. Add the content into your blog post and it should create the nav-link as well as the dynamic page automatically

```
---
title: 'vancouver 2021'
date: '2020-01-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
```

### Adding images to posts
