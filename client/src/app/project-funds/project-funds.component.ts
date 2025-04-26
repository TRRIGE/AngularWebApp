import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectFundsService } from '../services/services.service';

@Component({
  selector: 'app-project-funds',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-funds.component.html',
  styleUrl: './project-funds.component.scss'
})
export class ProjectFundsComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectFundService: ProjectFundsService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      fundId: ['', Validators.required],
      amountAllocated: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      fundReceivedDate: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectFundService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
