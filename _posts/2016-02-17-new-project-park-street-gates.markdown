---
title: 'New project: Park Street gates'
date: 2016-02-17 16:22:00 +10:00
tags:
- News
- Events
author: Callum Flack
hero-image: "/uploads/post-hero-3.jpg"
list-image: "/uploads/post-list-hero-3.png"
---

Another problem with modals is that they work best when they are dynamically appended to the end of the <body> tag, instead of living in the DOM tree right next to whatever trigger invokes them.

This isn’t really a problem in vanilla JS, but is a problem in React. So I didn’t want to separate the solution from React, but still wanted to separate it from the modal components, because I knew that it would be handy in other components. (For example, a loading spinner that overlays the whole screen is also better off if appended to the end of the <body>.)

So I made react-displace, which I use in react-aria-modal and also use in some project-specific code for loading spinners and other things.

Modals also need to trap focus. That’s not a React-specific problem at all. So I made focus-trap to handle that in vanilla JS, so it could be used by other modal libraries and also by other UI components that may want to trap focus, like popovers with forms in them or who knows what else.

And so on. By extracting a problem and generalizing its solution you can ensure that the same (hopefully good) solution is easily available for you when that problem rises again, maybe unexpectedly, in another context.

The diversity of JS frameworks makes low-level libraries especially appealing

I’m using React a lot now, and liking it. But I do understand why other people are using Angular, Ember, web components, whatever else, no big weird framework at all, and so on. And I also know that I’ll probably be using some other component-creating-JS-tool in the future.

A React menubutton, no matter how good, is not the only menubutton that the world or I myself will need. There is not and will never be a menubutton to end all menubuttons.
Let’s say that I pull off a truly fabulous menubutton component in React, for users of React. That’s swell for Current React-Using Me, and swell for other React users; but if all the important code is written in a React-specific manner, it sucks for non-React users and for Future Me. For them, my fabulous React menubutton is about as useless as a crappy React menubutton, or none at all. When a Non-React User or Future Me tries to create a new, equally fabulous menubutton component in the UI framework of the future — let’s call it KrazyKomponents — they’re going to have to reimplement whatever made my React widget fabulous. And then if they improve their KrazyKomponents menubutton with Rad Feature X, my formerly-fabulous React component falls behind — unless I put in the labor to write my own React-specific implementation of Rad Feature X.

And so everybody loses, forever.

With react-aria-menubutton, I tried to isolate the hard problems into a vanilla JS library that I and others could re-use, even in non-React menubutton components (or, even further, in non-React, non-menubutton components). Hiding and showing stuff isn’t very hard. Neither is toggling ARIA attributes. Those problems are trivial in the React code, and probably will be in any other decent view library (current or future). But the keyboard interactions are more tricky. The up and down arrows should move focus through the items, wrapping from top to bottom and bottom to top; and it’s all so much better if your user can type letters to skip to specific menu items. So instead of solving those keyboard-interaction and focus-management problems with React-specific code, I wrote focus-group in vanilla JS, which provides an API enabling that kind of menu-y behavior.

Somebody writing ember-menubutton, or angular-menubutton, or krazykomponents-menubutton can use focus-group to get the same sweet keyboard interactions that I worked hard on for react-aria-menubutton. With those keyboard interactions taken care of, the rest of their framework-specific menubutton code might be pretty trivial, really.

Additionally, if those Ember, Angular, or KrazyKomponents authors figure out better keyboard interactions, we can update the focus-group library and react-aria-menubutton wins, too.

Everybody can win, at the same time.