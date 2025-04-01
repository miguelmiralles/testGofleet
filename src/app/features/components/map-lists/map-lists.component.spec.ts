import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapListsComponent } from './map-lists.component';

describe('MapListsComponent', () => {
  let component: MapListsComponent;
  let fixture: ComponentFixture<MapListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
