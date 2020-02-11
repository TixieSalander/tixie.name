class NowGallery {
  constructor() {
    this.containers = document.querySelectorAll('[data-now-gallery]')
    this.selector = '[data-now-gallery-item]'
    this.gallery = {}
  }

  init () {
    [].forEach.call(this.containers, item => {
      const galleryIndex = item.getAttribute('data-now-gallery')
      const itemSelectors = `[data-now-gallery="${ galleryIndex }"] [data-now-gallery-item]`
      this.gallery[galleryIndex] = new Tobi({
        selector: itemSelectors,
        captions: false,
        zoom: false,
      })
    })
  }
}

new NowGallery().init()
