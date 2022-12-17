import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { faLink, faUnlink, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('cssBorderRadius') cssBorderRadius!: ElementRef<HTMLTextAreaElement>;

  icon = { faLock, faLockOpen };
  formGroup: FormGroup;
  topLeftStyle = '';
  topRightStyle = '';
  bottomLeftStyle = '';
  bottomRightStyle = '';

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      topLeftHorizontal: 0,
      topLeftVertical: 0,
      sameValueTopLeft: true,

      topRightHorizontal: 0,
      topRightVertical: 0,
      sameValueTopRight: true,

      bottomLeftHorizontal: 0,
      bottomLeftVertical: 0,
      sameValueBottomLeft: true,

      bottomRightHorizontal: 0,
      bottomRightVertical: 0,
      sameValueBottomRight: true
    });
  }

  ngOnInit(): void {
    this.formGroup.get('topLeftHorizontal')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueTopLeft')?.value;
        if(sameValue){
          this.formGroup.get('topLeftVertical')?.setValue(value, { emitEvent: false });
        }
        this.topLeftStyle = this.topLeft();
      }
    });
    this.formGroup.get('topLeftVertical')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueTopLeft')?.value;
        if(sameValue){
          this.formGroup.get('topLeftHorizontal')?.setValue(value, { emitEvent: false });
        }
        this.topLeftStyle = this.topLeft();
      }
    });

    this.formGroup.get('topRightHorizontal')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueTopRight')?.value;
        if(sameValue){
          this.formGroup.get('topRightVertical')?.setValue(value, { emitEvent: false });
        }
        this.topRightStyle = this.topRight();
      }
    });
    this.formGroup.get('topRightVertical')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueTopRight')?.value;
        if(sameValue){
          this.formGroup.get('topRightHorizontal')?.setValue(value, { emitEvent: false });
        }
        this.topRightStyle = this.topRight();
      }
    });

    this.formGroup.get('bottomLeftHorizontal')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueBottomLeft')?.value;
        if(sameValue){
          this.formGroup.get('bottomLeftVertical')?.setValue(value, { emitEvent: false });
        }
        this.bottomLeftStyle = this.bottomLeft();
      }
    });
    this.formGroup.get('bottomLeftVertical')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueBottomLeft')?.value;
        if(sameValue){
          this.formGroup.get('bottomLeftHorizontal')?.setValue(value, { emitEvent: false });
        }
        this.bottomLeftStyle = this.bottomLeft();
      }
    });

    this.formGroup.get('bottomRightHorizontal')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueBottomRight')?.value;
        if(sameValue){
          this.formGroup.get('bottomRightVertical')?.setValue(value, { emitEvent: false });
        }
        this.bottomRightStyle = this.bottomRight();
      }
    });
    this.formGroup.get('bottomRightVertical')?.valueChanges.subscribe({
      next: value => {
        const sameValue: boolean = this.formGroup.get('sameValueBottomRight')?.value;
        if(sameValue){
          this.formGroup.get('bottomRightHorizontal')?.setValue(value, { emitEvent: false });
        }
        this.bottomRightStyle = this.bottomRight();
      }
    });
  }

  copyCss(): void {
    this.cssBorderRadius.nativeElement.select();
    const css = this.cssBorderRadius.nativeElement.value;
    navigator.clipboard.writeText(css);
  }

  toggleValueCheckbox(formControl: AbstractControl | null) {
    formControl?.setValue(!formControl.value);
  }

  private topLeft(): string {
    return `${this.formGroup.get('topLeftVertical')?.value ?? 0}% ${this.formGroup.get('topLeftHorizontal')?.value ?? 0}%`;
  }

  private topRight(): string {
    return `${this.formGroup.get('topRightVertical')?.value ?? 0}% ${this.formGroup.get('topRightHorizontal')?.value ?? 0}%`;
  }

  private bottomLeft(): string {
    return `${this.formGroup.get('bottomLeftVertical')?.value ?? 0}% ${this.formGroup.get('bottomLeftHorizontal')?.value ?? 0}%`;
  }

  private bottomRight(): string {
    return `${this.formGroup.get('bottomRightVertical')?.value ?? 0}% ${this.formGroup.get('bottomRightHorizontal')?.value ?? 0}%`;
  }
}
