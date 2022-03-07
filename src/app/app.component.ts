import { Component, OnInit } from "@angular/core";
import { Project } from "./models/project";
import { ProjectService } from "./services/project.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  projects: Project[];
  projectForm: boolean;
  isNewproject: boolean;
  newproject: any = {};
  editprojectForm: boolean;
  editedproject: any = {};

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects = this.getprojects();
  }

  getprojects(): Project[] {
    return this.projectService.getprojectsFromData();
  }

  showEditprojectForm(project: Project) {
    if (!project) {
      this.projectForm = false;
      return;
    }
    this.editprojectForm = true;
    this.editedproject = project;
  }

  showAddprojectForm() {
    // resets form if edited project
    if (this.projects.length) {
      this.newproject = {};
    }
    this.projectForm = true;
    this.isNewproject = true;
  }

  saveproject(project: Project) {
    if (this.isNewproject) {
      // add a new project
      this.projectService.addproject(project);
    }
    this.projectForm = false;
  }

  updateproject() {
    this.projectService.updateproject(this.editedproject);
    this.editprojectForm = false;
    this.editedproject = {};
  }

  removeproject(project: Project) {
    this.projectService.deleteproject(project);
  }

  cancelEdits() {
    this.editedproject = {};
    this.editprojectForm = false;
  }

  cancelNewproject() {
    this.newproject = {};
    this.projectForm = false;
  }
}
