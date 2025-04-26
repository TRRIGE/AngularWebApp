import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectExpenditureService } from '../services/services.service';

@Component({
  selector: 'app-project-expenditure',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-expenditure.component.html',
  styleUrl: './project-expenditure.component.scss'
})
export class ProjectExpenditureComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectExpenditureService: ProjectExpenditureService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      paymentDate: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      amountUnit: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectExpenditureService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
