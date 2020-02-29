class NowGallery {
  constructor() {
    this.items = '[data-now-gallery]'
    this.gallery = null
  }

  init () {
    this.gallery = new Tobi({
      selector: this.items,
      captions: false,
      zoom: false
    })
  }
}

new NowGallery().init()
