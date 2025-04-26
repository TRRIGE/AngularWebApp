import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectPhasesService } from '../services/services.service';

@Component({
  selector: 'app-project-phases',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-phases.component.html',
  styleUrl: './project-phases.component.scss'
})
export class ProjectPhasesComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectPhaseService: ProjectPhasesService
  ) {
    this.projectForm = this.fb.group({
      projectId: ['', Validators.required],
      phaseDate: ['', Validators.required],
      phase: ['', Validators.required],
      appointment: ['', Validators.required],
      remark: ['', Validators.required],
      documentSrNo: ['', Validators.required],
      documentName: ['', Validators.required],
      fileUpload: [null, Validators.required]
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log('Form Submitted ✅', formData);

    this.projectPhaseService.submitProject(formData).subscribe({
      next: (response: any) => {
        console.log('Project submitted successfully:', response);
      },
      error: (err: any) => {
        console.error('Error submitting project:', err);
      }
    });
  }
}
