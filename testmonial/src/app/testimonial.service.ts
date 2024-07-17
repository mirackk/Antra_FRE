// testimonial.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Testimonial {
  message: string;
  id: string;
}

interface TestimonialResponse {
  hasNext: boolean;
  testimonials: Testimonial[];
}

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  private apiUrl = '/api/fe/testimonials';

  constructor(private http: HttpClient) {}

  getTestimonials(limit: number, after?: string): Observable<TestimonialResponse> {
    let url = `${this.apiUrl}?limit=${limit}`;
    if (after) {
      url += `&after=${after}`;
    }
    console.log(url);
    return this.http.get<TestimonialResponse>(url);
  }
}
