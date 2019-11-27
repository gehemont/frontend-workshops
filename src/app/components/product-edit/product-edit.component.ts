import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductTableItemVM } from '../../store/products/products.models';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnDestroy {

  productFormGroup: FormGroup = this._fb.group({
    name: this._fb.control(''),
    partNumber: this._fb.control(''),
    price: this._fb.group({
      value: this._fb.control('')
    })
  });

  @Input() set product(value: ProductTableItemVM) {
    this.productFormGroup.reset();
    this.productFormGroup.patchValue(value);
  }

  @Output() productChange: EventEmitter<ProductTableItemVM> = new EventEmitter<ProductTableItemVM>();
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _fb: FormBuilder) {
  }

  emitSave() {
    this.productChange.emit(this.productFormGroup.value);
  }

  cancelUpdate() {
    this.productFormGroup.reset();
    this.cancelEdit.emit();
  }

  ngOnDestroy(): void {
    console.log('ProductEditComponent::ngOnDestroy');
  }
}
