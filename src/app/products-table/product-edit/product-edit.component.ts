import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ProductTableItemVM } from '../../store';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProductEditComponent),
      multi: true
    }
  ]
})
export class ProductEditComponent implements OnInit, ControlValueAccessor {

  productFormGroup: FormGroup = this._fb.group({
    name: this._fb.control(''),
    partNumber: this._fb.control(''),
    price: this._fb.group({
      value: this._fb.control('')
    })
  });

  @Input() set product(value: ProductTableItemVM) {
    this.productFormGroup.patchValue(value);
  }

  @Output() productChange: EventEmitter<ProductTableItemVM> = new EventEmitter<ProductTableItemVM>();
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };

  registerOnChange(fn: (newVal: ProductTableItemVM) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  writeValue(obj: ProductTableItemVM): void {
    this.productFormGroup.patchValue(obj);
  }

  emitSave() {
    this.productChange.emit(this.productFormGroup.value);
  }

  cancelUpdate() {
    this.productFormGroup.reset();
    this.cancelEdit.emit();
  }
}
