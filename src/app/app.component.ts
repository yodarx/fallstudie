import { Component, OnInit } from "@angular/core";
import { Project } from "./models/project";
import { ProjectService } from "./services/project.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
