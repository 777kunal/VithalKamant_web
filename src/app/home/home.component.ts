import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(){
 

  }
  images = [
    { src: '../../assets/hote_logo.png', alt: 'Image 1', active: true },
    { src: '../../assets/hote_logo.png', alt: 'Image 2', active: false },
    { src: '../../assets/hote_logo.png', alt: 'Image 3', active: false }
  ];

  constructor() {
    this.autoScroll();
  }

  autoScroll() {
    setInterval(() => {
      const currentIndex = this.images.findIndex(img => img.active);
      let nextIndex = (currentIndex + 1) % this.images.length;
      if (nextIndex === 0 && currentIndex === this.images.length - 1) {
        nextIndex = 0;
      }
      this.images[currentIndex].active = false;
      this.images[nextIndex].active = true;
    }, 1000); 
  }
  servises=[
  {name:'Master Chefs',discripasin:'' ,img:'group'},
  {name:'Quality Food',discripasin:'' ,img:'restaurant'},
  {name:'24/7 Service',discripasin:'' ,img:'room_service'},
  {name:'Outstanding Customer Service',discripasin:'' ,img:'food_bank'},
  ]


}
