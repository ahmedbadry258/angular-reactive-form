import { RegionService } from './../../services/region.service';
import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/data/Region';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
region :Region;
  constructor(private regionService :RegionService) {
    this.region={
      regionId:0,regionName:""
    }
   }

  ngOnInit(): void {
  }
onSubmit(){
 
  this.regionService.saveRegion(this.region).subscribe(
    (data : Region) =>alert('saved successfully '),
    (err : any) =>console.log(err)
  )
  alert(this.region.regionId);
}
}
