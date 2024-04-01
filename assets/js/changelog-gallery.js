class ChangelogGallery {
  constructor() {
    this.items = '[data-changelog-gallery]'
    this.gallery = null
  }

  init () {
    this.gallery = new Tobi({
      selector: this.items,
      zoom: false
    })
  }
}

new ChangelogGallery().init()
