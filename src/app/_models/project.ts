export class Project {
    ProjectId: number;
    ProjectName: String;
    ProjectDescription: String;
    CreatedBy: String;
    CreatedDate: String;
    ModifiedBy: String;
    ModifiedDate: String;

    constructor(projectId: number, projectName: String, projectDescription: String) {
        this.ProjectId = projectId;
        this.ProjectName = projectName;
        this.ProjectDescription = projectDescription;
    }
}
