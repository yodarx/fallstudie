import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private uprojects: Project[] = [
    {
      id: 1,
      name: "John Deer beschaffung",
      vorgehensart: "wasserfall",
      activities: ["preis herausfinden", "bezahlen"],
    },
    {
      id: 2,
      name: "CyrptoMiner Bauen ",
      vorgehensart: "agile",
      activities: ["blockchain verstehen"],
    },
  ];

  constructor() {}

  getprojectsFromData(): Project[] {
    return this.uprojects;
  }

  addproject(project: Project) {
    project.id = this.uprojects.length + 1;
    this.uprojects.push(project);
  }
  updateproject(project: Project) {
    const index = this.uprojects.findIndex((u) => project.id === u.id);
    this.uprojects[index] = project;
  }
  deleteproject(project: Project) {
    this.uprojects.splice(this.uprojects.indexOf(project), 1);
  }
}
