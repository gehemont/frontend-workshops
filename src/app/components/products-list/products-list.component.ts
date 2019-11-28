import { Component, Input } from '@angular/core';
import { ProductTableItemVM } from '../../store/products/products.models';
import { DemoFacade } from '../../demo/demo';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  public show = true;

  // NOTE - this is madness! never do it this way. its just for the DEMO!
  @Input() productsFacade: DemoFacade;

  // [1]
  // constructor(@Inject(DEMO_FACADE) private productsFacade: DemoFacade) {
  // }

  // [2]
  // public productsFacade: DemoFacade;
  // constructor(private _injector: Injector) {
  //   this.productsFacade = _injector.get(DEMO_FACADE);
  // }

  trackByFn(index: number, product: ProductTableItemVM): string {
    return product.storeId;
  }

}
