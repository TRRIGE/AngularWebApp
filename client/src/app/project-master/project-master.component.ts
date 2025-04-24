import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectMasterService } from '../services/services.service.spec';

@Component({
  selector: 'app-project-master',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-master.component.html',
  styleUrl: './project-master.component.scss'
})
export class ProjectMasterComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectMasterService: ProjectMasterService
  ) {
    this.projectForm = this.fb.group({
      projectId: [''],
      divisionName: [''],
      projectName: [''],
      projectType: [''],
      tahsil: [''],
      mouza: [''],
      khasra: [''],
      landArea: [''],
      landAreaUnit: [''],
      budgetHead: [''],
      projectCost: [''],
      projectCostUnit: [''],
      timeLimit: [''],
      projectDept: [''],
      remark: [''],
      isPublish: [''],
      publishDate: ['']
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectMasterService.submitProject(formData).subscribe({
      next: (response) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
