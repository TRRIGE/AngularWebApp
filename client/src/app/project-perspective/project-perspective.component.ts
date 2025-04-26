import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-perspective',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './project-perspective.component.html',
  styleUrl: './project-perspective.component.scss'
})
export class ProjectPerspectiveComponent {
  perspectiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.perspectiveForm = this.fb.group({
      projectId: ['', Validators.required],
      projectPerspective: this.fb.array([this.createPerspectiveGroup()])
    });
  }

  get perspectiveControls() {
    return (this.perspectiveForm.get('projectPerspective') as FormArray).controls;
  }

  createPerspectiveGroup(): FormGroup {
    return this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileChange(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
  
    if (file) {
      const perspectiveArray = this.perspectiveForm.get('projectPerspective') as FormArray;
      perspectiveArray.at(index).get('file')?.setValue(file);
    }
  }

  onSubmit(): void {
    if (this.perspectiveForm.invalid) {
      this.perspectiveForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('projectId', this.perspectiveForm.get('projectId')?.value);

    const perspectiveArray = this.perspectiveForm.get('projectPerspective') as FormArray;
    perspectiveArray.controls.forEach((ctrl, index) => {
      formData.append('projectPerspective[]', ctrl.get('file')?.value);
    });

    console.log('✅ Form Submitted', this.perspectiveForm.value);
    // You can post formData using HttpClient here
  }
}
