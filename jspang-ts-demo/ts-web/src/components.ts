namespace Components {
  export class Header {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is header'
      document.body.appendChild(div)
    }
  }
  
  export class Content {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is content'
      document.body.appendChild(div)
    }
  }
  
  export class Footer {
    constructor() {
      const div = document.createElement('div')
      div.innerHTML = 'this is footer'
      document.body.appendChild(div)
    }
  }
}