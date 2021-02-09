namespace Home {
  console.log('gqf test')
  
  class Header {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is header'
      document.body.appendChild(div)
    }
  }
  
  class Content {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is content'
      document.body.appendChild(div)
    }
  }
  
  class Footer {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is footer'
      document.body.appendChild(div)
    }
  }
  
  export class Page {
    constructor() {
      new Header()
      new Content()
      new Footer()
    }
  }
}