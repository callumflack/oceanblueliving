---
title: Artistic privacy
date: 2016-05-17 15:39:00 +10:00
tags:
- Ideas
author: LeaAnne Cassaniti
hero-image: 
list-image: 
---

When we work at scale, we often find that we spend a large amount of our time reading, maintaining, and refactoring existing code, rather than writing and adding new features. This is the reason we focus so much on things like architectures, naming conventions, methodologies, preprocessors, scalability, etc.: because writing CSS is easy; looking after it is not.

What we want is to be able to write code that is as transparent and self-documenting as possible. Transparency means that it is clear and obvious (to others) in its intent; self-documenting means that we don’t have to lose time to writing and reading lengthy, supplementary documentation.

The need for this is particularly true when working with languages like HTML and CSS. Their declarative nature means there is no control flow to give clues as to the state or shape of the project, and the fact that the two languages are written separately but exist so closely often provides a large disconnect between some CSS’ source and where it is implemented. That is to say, we may see classes all throughout our markup, but that is only one very small part of the picture: somewhere else there is the corresponding CSS that completes the other half of the story. Cross-referencing these classes to ensure their proper treatment (reusing them elsewhere in the DOM, binding onto them to make modifications, deleting them to remove styling, etc.) requires a very diligent developer, and consumes a lot of time.

How many times have you looked at a piece of HTML only to wonder which classes do what, which classes are related to each other (if at all), which classes are optional, which classes are recyclable, which classes can you delete, and so on? A lot of times, I’m willing to bet.

Naming conventions like BEM do a fantastic job to help communicate the roles and responsibilities of the classes we find in our HTML, and if you’re not yet using BEM then I urge you to stop reading this article right now and to start with that instead—this post will be levelling BEM up a notch.

To quickly recap, BEM gives us two very useful suffixes—__element and --modifier—that we append onto our classes in order to tell us the role of certain bits of UI, for example: