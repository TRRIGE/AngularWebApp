import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectPhaseMasterService } from '../services/services.service';

@Component({
  selector: 'app-phase-master',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './phase-master.component.html',
  styleUrl: './phase-master.component.scss'
})
export class PhaseMasterComponent {
projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectPhaseMasterService: ProjectPhaseMasterService
  ) {
    this.projectForm = this.fb.group({
      phaseId: ['', Validators.required],
      phaseSequence: ['', Validators.required],
      phaseDescription: ['', Validators.required],
      mileStone: ['', Validators.required],
      appointment: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectPhaseMasterService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
