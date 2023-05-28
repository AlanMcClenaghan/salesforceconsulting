import {LightningElement} from 'lwc'
import NAV_DATA from '../../../data/navbarData.js'

export default class Navbar extends LightningElement {

    navList = NAV_DATA
    isMobileToggle = false
    isDomLoaded = false

    get openMobileNav() {
        return `collapse navbar-collapse ${this.isMobileToggle && 'show'}`
    }

    get navMobileDesign() {
        return `fixed-top navbar navbar-expand-lg navbar-dark ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient'}  `
    }
    
    toggleMobileMenu() {
        this.isMobileToggle = !this.isMobileToggle
    }

    navSelection(event) {
        event.preventDefault()
        if (this.isMobileToggle) {
            this. toggleMobileMenu()
        }
        const name = event.target.name.toLowerCase().replace(/\s/g, '')
        let tagname = name === 'home' ? 'my-navbar' : `my-${name}`
        const element = document.querySelector(tagname)
        element.scrollIntoView()
    }

    renderedCallback() {
        if (this.isDomLoaded) {
            return
        } else {
            const element = this.template.querySelector('.nav-link')
            if (element) {
                element.classList.add('active')
                this.isDomLoaded = true
            }
        }
    }
}