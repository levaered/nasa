import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.scss']
})
export class NasaApodComponent {
  url: string = '';
  explanation: string = ''

  constructor(private http: HttpClient) {
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=qUkj9sV3g5Fenyocsh5YL2trZuA4tIWLBpUrhHz3')
      .subscribe((data: any) => {
        this.url = data.url; // получение URL-адреса из ответа сервера
        this.explanation = data.explanation
      });
  }
}
