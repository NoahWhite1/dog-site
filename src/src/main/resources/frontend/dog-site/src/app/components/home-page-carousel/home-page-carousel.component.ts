import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.css']
})
export class HomePageCarouselComponent implements OnInit {

  currentImage:string;
  allImages:Array<string> = [];
  currentPos:number = 0;
  constructor() { }

  ngOnInit(): void {
    this.allImages.push('../../../assets/images/carousel/puppyGroup1.jpg');
    this.allImages.push('../../../assets/images/carousel/puppyGroup2.jpg')
    this.currentImage = this.allImages[0];
  }

  rotateCarouselImage(newPos:number){
    if(this.currentPos + newPos < 0){
      this.currentPos = this.allImages.length - 1;
    }
    else if(this.currentPos + newPos > this.allImages.length - 1){
      this.currentPos = 0;
    }
    else{
      this.currentPos += newPos;
    }
    this.currentImage = this.allImages[this.currentPos];
  }

}
