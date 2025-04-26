import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTimeLimitExtensionService } from '../services/services.service';

@Component({
  selector: 'app-time-limit-extension',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './time-limit-extension.component.html',
  styleUrl: './time-limit-extension.component.scss'
})
export class TimeLimitExtensionComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectTimeLimitExtensionService: ProjectTimeLimitExtensionService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      extensionDate: ['', Validators.required],
      timeLimit: ['', [Validators.required, Validators.min(1)]],
      uploadFile: [null, Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectTimeLimitExtensionService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
