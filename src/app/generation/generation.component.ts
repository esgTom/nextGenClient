import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Code } from '../_models/code';
import { Template } from '../_models/template';
import { NextGenDataService } from '../services/next-gen-data.service';

@Component({
  selector: 'next-gen-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {

  codes: Code[] = null;
  templates: Template[] = null;

  constructor( private route: ActivatedRoute,
        private router: Router,
      private dataService: NextGenDataService) { }

  ngOnInit() {

    this.route.data
      .subscribe((data: { codes: Code[] }) => {
        this.codes = data.codes;
      });

    this.dataService.getTemplates()
    .subscribe((data: { templates: Template[] }) => {
        this.templates = data.templates;
      });

    }

}
