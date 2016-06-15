---
title: Testing config permalinks
date: 2016-06-15 20:17:00 +10:00
author: Joe Burns
---

When we work with Stateful Themes (that is to say, themes that we toggle on and off) we normally do so by adding a class to the body element. Examples of this approach to theming include style-switchers (a user can toggle between different themes) and sub-sections of a site (all blog posts have one theme colour, all news pages have another theme colour, etc.). We simply add a class high up the DOM which then invokes that theme for that particular page.

A simple way to denote any theme-related classes is to simply prepend them with t-. Seeing a t- class in your HTML should tell you that Ah, right, the view probably looks the way it currently does because we have a theme invoked.

Now, all of the namespaces we’ve looked at so far are mainly of use to us in our markup, but Theme namespaces are helpful in both our HTML and our CSS. Seeing, for example, .t-light in our markup tells us that the entire DOM has a current state applied to it, which is important to know whilst debugging. Seeing that class in our CSS also tells us a lot: it helps to sandbox and isolate any chunks of theme-related CSS inside namespaced rulesets: