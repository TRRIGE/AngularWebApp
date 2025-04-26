import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectTechnicalPersonnalService } from '../services/services.service';

@Component({
  selector: 'app-technical-personnal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './technical-personnal.component.html',
  styleUrl: './technical-personnal.component.scss'
})
export class TechnicalPersonnalComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectTechnicalPersonnalService: ProjectTechnicalPersonnalService
  ) {
    this.projectForm = this.fb.group({
      personnelId: ['', Validators.required],
      personnelType: ['', Validators.required],
      personnelName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      licenseNumber: ['', Validators.required],
      contractorType: ['', Validators.required],
      contractorClass: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectTechnicalPersonnalService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
