import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(SlickCarouselComponent, { static: true }) carousel!: SlickCarouselComponent;

  images: string[] = [
    'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80'
  ];

  testimonials: any[] = [
    { content: 'Testimonial 1', author: 'John Doe' },
    { content: 'Testimonial 2', author: 'Jane Smith' },
    { content: 'Testimonial 3', author: 'Michael Johnson' },
    { content: 'Testimonial 3', author: 'Michael Johnson' },
    { content: 'Testimonial 3', author: 'Michael Johnson' },
    { content: 'Testimonial 3', author: 'Michael Johnson' }
  ];

  activeImageIndex = 0;
  imageTimer: any;

  slickCarouselConfig = {
    autoplay: true,
    autoplaySpeed: 4000, 
    arrows: false,
    dots: false
  };

  ngOnInit() {
    this.startImageTimer();
  }

  ngOnDestroy() {
    this.stopImageTimer();
  }

  startImageTimer() {
    this.imageTimer = setInterval(() => {
      this.changeImage();
    }, this.slickCarouselConfig.autoplaySpeed);
  }

  stopImageTimer() {
    clearInterval(this.imageTimer);
  }

  changeImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
  }


}
