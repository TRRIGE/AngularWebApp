import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectMasterService } from '../services/services.service';

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
      projectId: ['', Validators.required],
      divisionName: ['', Validators.required],
      projectName: ['', Validators.required],
      projectType: ['', Validators.required],
      tahsil: ['', Validators.required],
      mouza: ['', Validators.required],
      khasra: ['', Validators.required],
      landArea: ['', Validators.required],
      landAreaUnit: ['', Validators.required],
      budgetHead: ['', Validators.required],
      projectCost: ['', Validators.required],
      projectCostUnit: ['', Validators.required],
      timeLimit: ['', Validators.required],
      projectDept: ['', Validators.required],
      remark: ['', Validators.required],
      isPublish: ['', Validators.required],
      publishDate: ['', Validators.required]
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
