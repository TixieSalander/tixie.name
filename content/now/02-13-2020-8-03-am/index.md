---
title: '02/13/2020 8:03 AM'
date: 2020-02-13T07:03:25.699Z
---
Update on my volume control work: I decided the control should be always visible, showing it only on hover would risk to be too tricky for the user. On the affordance side, just a regular slider wouldn't be very explicit.

So i tried to make something similar to the Vimeo player: a right triangle.

{{< image src="Volume control triangle.png" alt="player showcase with a right triangle volume control">}}

The next question was: would it be codable, since i wanted to keep it as an `input type="range"` (for accessibility reason but also because i didn't wanted to code all the component's interactivity).

Spoiler: I've successfuly done a working prototype!

It's working only on Firefox (my main browser) for now, because of the browser-specific pseudo-elements, but I'm planning to use a PostCSS plugin (like [this one](https://github.com/jonathantneal/postcss-input-range)) to do the dirty work for me.

<p><iframe height="244" style="width: 100%;" scrolling="no" title="Customized Range POC" src="https://codepen.io/Tixie/embed/preview/MWwgoRR?height=244&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></p>

For the people on another browser, i should looks like at the end:

{{< image src="6f4a5b4a18e3f020.gif" alt="an animated demo of triangle volume control">}}
