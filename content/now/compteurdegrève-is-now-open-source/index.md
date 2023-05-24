---
title: CompteurDeGrève is now open-source
show_title: true
date: 2023-05-24T16:09:55.329Z
images:
  - 2023-02-28-desktop-onepage-success.png
  - compteur-de-greve_loading-state.png
  - compteur-de-greve_fluid-typography.png
---
I finally took the time to make a static postmortem version of [CompteurDeGreve.fr](http://CompteurDeGreve.fr "http\://compteurdegreve.fr/") and publish the website's source code. It's now available [on Github](https://github.com/GuerillaHQ/compteur-de-greve "https\://github.com/GuerillaHQ/compteur-de-greve").

This project had as goal to offer an independent platform to count the participation during the French strike of March 7th of 2023 against Macron's pension reform(/destruction) for helping improving engagement around that date. The second goal was to gather resources on why and how participate in the mobilization.\
\
I worked on the website's design during a weekend and coded it with the help of Milia during a sleepless night of early March. Kind of a guerrilla type of project, since we didn't had much time and we needed to get it published as soon as possible.  \
\
I used [Eleventy](https://www.11ty.dev) as builder and a mix of Netlify's [On-Demand Builder](https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/) and [AlpineJS](https://alpinejs.dev) in a progressive enhancement mindset. 

Eleventy [easy integration](https://www.11ty.dev/docs/plugins/serverless/) with Netlify's "on-demand builder" servers functions allowed to quickly serve the static website containing a slightly outdated version of the counter: the number fetched from the API at build time and a new version was updated (if needed) at best every 15min. \
Then the JavaScript would handover and update the counter by pooling the API directly from time to time. That way even if JavaScript was disabled or had crashed, we would have a pretty accurate counter.\
\
I'm pretty happy on how quickly i was able to make a responsive version thanks to fluid typography (cf third gallery image).


Some improvements could have been done :

* Improve clarity of states changes when handled with JavaScript through ARIA semantic. 
* A more advanced shared cookie exchange with the API would have allow to directly display the "already-clicked" message when coming back to later on the page. 

We also had a possible delayed feature to generate on the go social cards (open-graph/twitter card).\
The idea was to include a dynamic message *"{number} people gonna go on strike. It's more than the population of {city}!"* to help create some engagement while the counter was increasing. \
A prototype was made, but I never had the energy to implement it after the big crunch.

Anyway, thank you again Salomé (who worked on the counter API) and Caroline De Haas (who initiated and managed the project) for this collaboration ❤️. It was a intense but great experience!

{{< image src="screenshot.png" alt="website screenshot">}}