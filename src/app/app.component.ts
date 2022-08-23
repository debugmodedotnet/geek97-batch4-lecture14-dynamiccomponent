// import { Component, ViewChild, ViewContainerRef } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'dynamic loading';
//   message = "Hello from Parent";
//   gcom: any;
//   @ViewChild('mydiv', { static: true, read: ViewContainerRef }) vcr?: ViewContainerRef

//   constructor() {

//   }

//    async openGreet(){
//     if(this.vcr != undefined){
//       this.vcr.clear();
//       const {GreetComponent} = await import('./greet/greet.component');
//       this.gcom=  this.vcr.createComponent(GreetComponent);
//       this.gcom.instance.greetMessage = this.message; 
//       this.gcom.instance.sendMessageEvent.subscribe(
//         (data:any)=>{
//           alert(data);
//         }
//       )
//     }
// }

//   // openGreet() {

//   //   if (this.vcr != undefined) {
//   //     this.vcr.clear();

//   //     import('./greet/greet.component').then(({ GreetComponent }) => {
//   //       if (this.vcr != undefined) {
//   //         this.gcom = this.vcr.createComponent(GreetComponent);
//   //         this.gcom.instance.greetMessage = this.message;
//   //         this.gcom.instance.sendMessageEvent.subscribe(
//   //           (data: any) => {
//   //             alert(data);
//   //           }
//   //         )
//   //       }
//   //     })

//   //   }

//   // }

//   removeGreet() {

//     // this.vcr.remove(0);

//   }

// }


import { Component, ComponentFactoryResolver, HostListener, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic loading';
  count = 0; 
  caddedarray: string[] = [];

  
  @HostListener('window:scroll', []) onScroll(e: Event): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.count = this.count + 1; 
      this.loadNextComponent(this.count);
    }
  }

  constructor(private vcr: ViewContainerRef, private cfr : ComponentFactoryResolver){

  }

  async loadNextComponent(count: number){

    if(count > 1 && count <3){
      if (this.caddedarray.findIndex(t => t == "c3") == -1) {
      const {Child3Component} = await import('./child3/child3.component');
      this.vcr.createComponent(Child3Component);
      this.caddedarray.push("c3");
      }
    }

    else if(count > 3 && count < 5){
      if (this.caddedarray.findIndex(t => t == "c4") == -1) {
      const {Child4Component} = await import('./child4/child4.component');
      this.vcr.createComponent(Child4Component);
      this.caddedarray.push("c4");
      }

    }
    else if( count > 5 && count < 7){
      if (this.caddedarray.findIndex(t => t == "c5") == -1) {
      const {Child5Component} = await import('./child5/child5.component');
      this.vcr.createComponent(Child5Component);
      this.caddedarray.push("c5");
      }

    }

  }
}

