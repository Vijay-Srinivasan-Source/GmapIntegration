import { Component, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latLng = new google.maps.LatLng(13.0827, 80.2707);

  apikey = environment.gmap.apikey;

  ngOnInit() {
     const mapProp = {
      center: this.latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
     const marker = new google.maps.Marker({
      position: this.latLng,
      map: this.map ,
      title: 'Hello World!'
    });
  }
}
