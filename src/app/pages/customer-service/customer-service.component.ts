import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements OnInit {
  mostrarFormulario:boolean = true;
  formulario:FormGroup;
  
  constructor(public Form:FormBuilder) {
      this.formulario = this.Form.group({
        nombreCompleto:['',[Validators.required]],
        telefono:['',[Validators.required, Validators.pattern(/[0-9]/), Validators.maxLength(9), Validators.minLength(9)]],
        dirigido:['',[Validators.required]],
        Email:['',[Validators.required, Validators.email]],
        mensaje:['',[Validators.required]],
      })
   }

  ngOnInit(): void {
  }

  enviarDatos(){
      this.mostrarFormulario = false;
      console.log(this.formulario.value);
  }
}
