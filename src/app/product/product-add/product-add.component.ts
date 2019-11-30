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
      name: new FormControl({ value:'', disabled: true  }, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
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

    this.bindData();
  }

  bindData() {
    this.productForm.patchValue({
      name: 'IPhone 11',
      price: '$1000',
      spec: {
        weight: '100',
        height: '100',
        validity: 'NA'
      },
      seller: [
        {
          sellerName: 'Amazon',
          sellerAddress:'ac.vom',
          pan: 'gfdgfdg'
        },
        {
          sellerName: 'flipkart',
          sellerAddress:'dsjfghfg',
          pan: 'gffldj'
        }
      ]
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

  addProduct() {
    console.log(this.productForm.getRawValue());
  }

}
