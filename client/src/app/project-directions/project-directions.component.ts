import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectDirectionsService } from '../services/services.service';

@Component({
  selector: 'app-project-directions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-directions.component.html',
  styleUrl: './project-directions.component.scss'
})
export class ProjectDirectionsComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectDirectionsService: ProjectDirectionsService
  ) {
    this.projectForm = this.fb.group({
      directionsBy: ['', Validators.required],
      shortNote: ['', Validators.required],
      actionDate: ['', Validators.required],
      actionTaken: ['', Validators.required],
      fileUpload: [null, Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectDirectionsService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
