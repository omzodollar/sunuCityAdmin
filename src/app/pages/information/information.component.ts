import { Component, OnInit,AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import {InformationService} from '../../services/information.service';
declare var $:any;

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit,AfterViewInit {

  constructor(private _script: ScriptLoaderService,private informationService: InformationService) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
      this._script.load('./assets/js/scripts/form-plugins.js');
      $('#summernote').summernote();
      $('#summernote_air').summernote({
          airMode: true
      });
      $('[data-provide="markdown"]').markdown({autofocus:false,savable:false});
    }
    createInformations(information){
      this.informationService.createInformations(information);
    }


}



