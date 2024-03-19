import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
  standalone: true
})
export class UnlessDirective {

  @Input()
  set appUnless(isHide: boolean){
    if(isHide){
      this.viewContainerRef.clear();
    }else{
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }

}
