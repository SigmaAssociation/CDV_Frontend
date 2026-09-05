import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRequest } from '../../models/create-user';
import { UserService } from '../../services/user.service';

@Component({
  standalone: true,
  selector: 'app-create-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.css',
})
export class CreateUserForm implements OnInit {
  userForm!: FormGroup;
  isCreated: boolean = false;
  isError: boolean = false;
  errorMessage:string = '';

  private nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  private phoneRegex = /^[23456789]\d{7}$/;
  private addressRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s,.\-#]+$/;
  private dpiRegex = /^\d{13}$/;
  private emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(150),
          Validators.pattern(this.nameRegex)
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(this.phoneRegex)
        ]
      ],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
          Validators.pattern(this.addressRegex)
        ]
      ],
      dpi: [
        '',
        [
          Validators.required,
          Validators.pattern(this.dpiRegex)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.maxLength(150),
          Validators.pattern(this.emailRegex)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255)
        ]
      ]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  create(): void {
    this.isCreated = true;
    if (this.userForm.valid) {
      const newUser = this.userForm.value as UserRequest;

      /**HABILITAR CUANDO ESTÉ LISTO EL ENDPOINT*/
      /**
       *this.userService.createUser(newUser).subscribe({
        next:() =>{
          this.isCreated = true;
        },
        error:(error) =>{
          this.isError = true;
          this.errorMessage = error.error;
        }
      }); 
       */
    
    }
  }

}