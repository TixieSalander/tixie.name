---
title: Testing the new experimental viewTransition API
show_title: true
date: 2023-05-25T22:05:33.719Z
---
I've been playing with the experimental [ViewTransition API](https://developer.chrome.com/docs/web-platform/view-transitions/), and with the new "viewTransition API for navigations" that allow with just a few lines of CSS to define the common elements between pages from a classic website and get that smooth transition on page change.\
\
This is for now experimental and only in the latest Chrome/Chromium under flag, so it demand some step to be able to play with it.

{{< image src="now-playing-view-transition-api_setup-in-chrome.png" alt="Go on chrome://flags in the address bar and then ensable 'viewTransition API' and 'viewTransition API for navigations'">}}

But by adding only a [meta tag](https://github.com/GuerillaHQ/now-playing/commit/5846cbb5ebefac46b8a10cf9825d6ce81f20df97#diff-ec6e7cb6e89cbe10d49085811bd67ad23df375247295fc387da90f5fdc56de7f) and [few lines of CSS](https://github.com/GuerillaHQ/now-playing/commit/5846cbb5ebefac46b8a10cf9825d6ce81f20df97#diff-b2ff2a8d1f2a8a15c65288757c8b9acde7bec0ef491acb8048f1ddb61985cc41) I made it working on **[Now Playing](https://music.guerilla.studio/)**, my favorite music collection:



{{< video-player
    src="now-playing-view-transition-api-demo.mp4"
    src-webm="now-playing-view-transition-api-demo.webm"
    src-small="now-playing-view-transition-api-demo-720.mp4"
    src-small-webm="now-playing-view-transition-api-demo-720.webm"
    poster="now-playing-view-transition-api_video-poster.png"
    width="702"
    height="540"
    muted="true"
    loop="true"
    autoplay="true"
>}}
