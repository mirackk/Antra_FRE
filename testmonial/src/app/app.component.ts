import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { TestimonialService } from './testimonial.service';

interface Testimonial {
  message: string;
  id: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Testimonials</h1>
      <div class="testimonial-container">
        <div *ngFor="let testimonial of testimonials" class="testimonial">
          {{ testimonial.message }}
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
      .testimonial-container {
        height: 400px;
        overflow-y: auto;
      }
      .testimonial {
        padding: 10px;
        border-bottom: 1px solid #ccc;
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  testimonials: Testimonial[] = [];
  private limit = 5;
  private lastId: string | undefined;
  private hasNext = true;
  private loading = false;
  private container!: HTMLElement;

  constructor(private testimonialService: TestimonialService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.loadTestimonials();
  }

  ngAfterViewInit() {
    this.container = this.elementRef.nativeElement.querySelector('.testimonial-container');
    this.container.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll(): void {
    const { scrollTop, scrollHeight, clientHeight } = this.container;

    if (this.hasNext && !this.loading && scrollTop + clientHeight >= scrollHeight) {
      this.loadTestimonials();
    }
  }

  private loadTestimonials() {
    this.loading = true;
    this.testimonialService.getTestimonials(this.limit, this.lastId).subscribe(
      (response) => {
        this.testimonials = [...this.testimonials, ...response.testimonials];
        this.hasNext = response.hasNext;
        if (response.testimonials.length > 0) {
          this.lastId = response.testimonials[response.testimonials.length - 1].id;
        }
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching testimonials', error);
        this.loading = false;
      }
    );
  }
}
