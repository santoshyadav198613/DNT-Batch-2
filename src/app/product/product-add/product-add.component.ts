import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;

  get seller() {
    return this.productForm.get('seller') as FormArray;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required]),
      qty: new FormControl(''),
      spec: this.fb.group({
        weight: new FormControl(''),
        height: new FormControl(''),
        validity: new FormControl('')
      }),
      seller: this.fb.array([
        this.buildForm()
      ])
    });
  }

  private buildForm(): any {
    return this.fb.group({
      sellerName: new FormControl('', Validators.required),
      sellerAddress: new FormControl('', Validators.required),
      pan: new FormControl('')
    });
  }

  addSeller() {
    this.seller.push(this.buildForm());
  }

  removeSeller(i: number) {
    this.seller.removeAt(i);
  }

}
