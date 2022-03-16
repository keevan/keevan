---
path: "/adding-the-bells-and-whistles-to-a-gatsby-blog"
date: "2022-03-14T12:00:15.251Z"
title: "Adding the Bells and Whistles to a Gatsby Blog"
description: "Plugins that will help you and the reader."
tags: ['blog', 'gatsby']
draft: true
---

Digging further into the current state of blogging and what I've come to expect from a good blog, I've noticed some non-mandatory, useful features that could enhance the experience for the writer and reader. Some of which I've added in the first post, but I'll include here for completeness.

- Automatic gatsby deploys with Github Actions
- Estimated read time
- Setting up Font and Styling
- Automatically showing the last updated date
- Better handling for blog images (modal / lightbox)
- Setting a blog initial image
- [Automatically generating a preview image for social previews (with and without an image)](#social-preview-images)
- Have a checklist of SEO bits and tick them off
- Draft feature

I love how there exists plugins out there in Gatby's ecosystem that has filled most if not every point mentioned. I'll link and detail the ones I have found. You can open the link to the plugin listing yourself to see all the options, but I'll detail the changes I've had to make.

#### Estimated read time
https://www.gatsbyjs.com/plugins/gatsby-remark-reading-time/?=reading

#### Social preview images
https://www.gatsbyjs.com/plugins/gatsby-plugin-open-graph-images

#### Last updated at
https://www.gatsbyjs.com/plugins/gatsby-transformer-gitinfo/?=gitinfo

Oh, and I'll need to implement the landing page and blog listing. Sounds fun.
