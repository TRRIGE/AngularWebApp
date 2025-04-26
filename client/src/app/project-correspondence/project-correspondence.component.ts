import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectCorrespondenceService } from '../services/services.service';

@Component({
  selector: 'app-project-correspondence',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-correspondence.component.html',
  styleUrl: './project-correspondence.component.scss'
})
export class ProjectCorrespondenceComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectCorrespondenceService: ProjectCorrespondenceService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      correspondenceId: ['', Validators.required],
      correspondenceDate: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
      documentUpload: [null, Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectCorrespondenceService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
