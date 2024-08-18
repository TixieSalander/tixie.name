# Tixie.name

Code of https://tixie.name


## Project setup

### Install hugo
[Install Documentation](https://gohugo.io/getting-started/installing/)

### Launch dev server

```
hugo server
```

### Build for production

```
hugo --baseURL $URL
```

As it `$URL` is an env variable but you can harcode it in the build command.


## Use DecapCMS in local mode

This website use [Decap](https://decapcms.org/) backoffice to manage albums easily.
And it's possible to use it while working in local:

### Install JS dependencies

`npm i` (or `npm ci` if you don't want to impact the package-lock)

### Run local API

1. Uncomment `local_backend: true` in admin/config.yml (remember to not commit this change)
2. While running [development hugo server](#launch-dev-server) launch this command in another terminal: `npx decap-server`

### Admin your website in local

Go to you website's local url + `/admin` (by default it's `http://localhost:1313/admin`). Enjoy!


## Credits
  * [Higgcss](https://github.com/robinparisi/higgcss) - The minimal CSS framework I use as skeleton
  * [Tobi](https://github.com/rqrauhvmra/Tobi/) - The minimal lib for lightbox

## License
  * My logo and blog posts (images included) are under [Creative Commons BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/), except other folks showcased work who belong to their respective owners.
  * Code (except the libraries I'm using) is under [“I'm so tired” 1.0](LICENSE) license. Please **take the time** to read and *check if you're allowed* to use it before doing so. (*Thank you luna who made it* \[[source](https://olmewe.com/notes/istsl)\].)
