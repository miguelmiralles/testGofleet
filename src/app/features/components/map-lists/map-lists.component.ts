import { AfterViewInit, Component, computed, ElementRef, input, OnDestroy, OnInit, signal, viewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { ISubmission } from '../../../core/models/submissions.interface';
import { SubmissionItemComponent } from '../submission-item/submission-item.component';

@Component({
  selector: 'gofleet-map-lists',
  imports: [
    CommonModule,
    GoogleMap,
    MapMarker,
    SubmissionItemComponent
],
  templateUrl: './map-lists.component.html',
  styleUrl: './map-lists.component.scss'
})
export class MapListsComponent implements AfterViewInit, OnDestroy, OnInit {

  listContainer = viewChild<ElementRef>('listContainer');
  mapContainer = viewChild<ElementRef>('mapContainer');

  submissions = input.required<ISubmission[]>();
  submissionSelected = signal<ISubmission>({} as ISubmission);

  options: google.maps.MapOptions = {
    center: { lat: 43.65415887992029, lng: -79.60416181242202 },
    zoom: 12,
    disableDefaultUI: true,
    fullscreenControl: true,
    styles: [
      {
        featureType: "poi",
        stylers: [
         { visibility: "off" }
        ]   
       }
    ]
  };

  markerPositions = computed(() => 
    this.submissions().map((submission: ISubmission) => ({
      position: {
        lat: submission.location.latitude,
        lng: submission.location.longitude,
      },
      title: `${submission.location.address}`,
      options: {
        animation: google.maps.Animation.DROP,
        draggable: false,
        icon: this.iconSrc
      },
      submission: submission
    }))
  );

  iconSrc: google.maps.Icon = { 
    url: 'assets/icons/marker.svg'
  };

  googleMapsLoaded = signal(false);

  async ngOnInit() {
    await google.maps.importLibrary("core");
    this.iconSrc = {
      ...this.iconSrc,
      scaledSize: new google.maps.Size(40, 40)
    };
    this.googleMapsLoaded.set(true);
  }


  ngAfterViewInit() {
    this.adjustListHeight();
    window.addEventListener('resize', () => this.adjustListHeight());
  }

  ngOnDestroy() {
    window.removeEventListener('resize', () => this.adjustListHeight());
  }

  selectSubmission(submission: ISubmission) {
    this.submissionSelected.set(submission);
  }

  /* 
    This function adjusts the height of the list and the map container
  */
  private adjustListHeight() {
    const listElement = this.listContainer()?.nativeElement;
    const rect = listElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const topPosition = rect.top;
    const availableHeight = viewportHeight - topPosition - 16;
    listElement.style.maxHeight = `${availableHeight}px`;
    const mapElement = this.mapContainer()?.nativeElement;
    mapElement.style.height = `${availableHeight}px`;
  }
}
