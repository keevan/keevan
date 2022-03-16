---
path: "/adding-comments"
date: "2022-03-16T10:00:00.001Z"
title: "Adding comments to the blog"
description: "Exploring solutions out there and which one I've picked"
tags: ['blog', 'gatsby', 'comments']
---

My blog appears to show signs of improvement - nice!. I've added a some bells and whistles but wait, what? __Hello!__

> Silence..

Ah! The blog needs a way for readers to interact with my content!

The search begins. I have looked around and I've returned with some options which may have great offerings - don't get me wrong. I want to pick the most straight forward one, one that has the least amount of steps to set up, and makes the most sense - and free to use.

## Some considerations:

### Disqus
This one probably seems like an obvious pick, but when I reached for it, I had second thoughts. Why? Because when it came to me actually wanting to put it on my blog / site, the default design seemed, convulated. Sure it has quick buttons to log in with a particular IdP like Facebook, Twitter or Google, but it felt cluttered and not something I wanted to have to manually configure styles for let alone set up.

### Webmentions
This one I saw soon after. It seems nice and promising. Setting it up seems to involve a bit more work than expected from the plugin page. I have debated using this, as opposed to my next option.

### Gitalk / Utterances
Now these two options here appealed to me instantly. Storing comments as comments in GitHub issues? Genius. (Talk about code reuse!). Using GitHub to auth? Because my readers would probably have an account on GitHub, I thought "yeah, that would work". Though, it would not hurt to see other configurable authentication methods.

### Other services
For brevity, I have decided to not mention any of the other solutions I've considered. They either did not meet my expectations on simplicity, or linked to a service I'd rather not log into, seem to involve more work than I wanted to put in for something that should not involve too much complexity or other reasons that didn't appeal to me personally.

## Conclusion
I ended up going with __webmentions.io__ because it took little time setting up<!-- TODO: save steps, add guide -->, made the most sense with where I headed and something new I wanted to learn about regardless.

Also worth mentioning that I have noticed no gatsby plugin for utterances yet. It seems like a good side project to do to explre this world of plugin creation for Gatsby

References:
- https://www.gatsbyjs.com/docs/creating-plugins/
