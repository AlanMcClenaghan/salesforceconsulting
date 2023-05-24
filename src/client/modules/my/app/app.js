import {LightningElement} from 'lwc'
export default class App extends LightningElement{
     name = "Alan McClenaghan"

     technologies = ['LWC OSS', 'Bootstrap', 'ExpressJs', 'Nodemailer', 'Heroku']
     
     greetingmsg = "Hello i am greeting msg from app component"

     changeName() {
         this.name="LWC OSS"
     }

     get addNumber() {
         return 1+2
     }

     nameChange(event) {
        this.name = event.detail
     }

}