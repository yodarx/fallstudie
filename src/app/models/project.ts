export interface Project {
  id: number;
  name: string;
  vorgehensart: "wasserfall" | "agile";
  activities: string[];
}
