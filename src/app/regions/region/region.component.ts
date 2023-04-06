
import { Region } from '../../data/Region';
import { RegionService } from '../../services/region.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regionList:Region[]=[];
  selectedRegion:Region={regionId:0,regionName:""};

  constructor(private regionService:RegionService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("component Region Work")
   
    this.findAll();
    let regionId : number= parseInt(this.route.snapshot.params['id']);
    this.regionService.getRegionById(regionId).subscribe(
      (data : Region) =>this.selectedRegion=data,
      (error :any) =>console.log(error)
    )
  }


  deleteRegion(id:Number){
  
    this.regionService.deleteRegion(id).subscribe(
      (data :string) => alert(data),
      
      (err :any) =>console.log(err)  ,
        ()=> this.findAll() )
    
  }
  findAll(){
    this.regionService.getAllRegions().subscribe(
      (data:Region[]) =>this.regionList=data,
      (error :any) =>console.log(error),
      () =>console.log("All Done Getting Books")

    );
  }
  editRegion(id: number){
    console.log(id)
    this.regionService.getRegionById(id).subscribe(
      (data: Region) =>console.log(data),
      (error:any)=>console.log(error)
    )
  }
}
