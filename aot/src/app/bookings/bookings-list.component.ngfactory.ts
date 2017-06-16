/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/bookings/bookings-list.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../src/app/bookings/BookingsService';
import * as import9 from '../../../../src/app/services/SecurityService';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '@angular/common/src/directives/ng_if';
export class Wrapper_BookingsListComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BookingsListComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.BookingsListComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_BookingsListComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BookingsListComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BookingsListComponent>;
  _BookingsListComponent_0_3:Wrapper_BookingsListComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookingsListComponent_Host0,renderType_BookingsListComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'bookings-list',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BookingsListComponent0(this.viewUtils,this,0,this._el_0);
    this._BookingsListComponent_0_3 = new Wrapper_BookingsListComponent(this.injectorGet(import8.BookingsService,this.parentIndex),this.injectorGet(import9.SecurityService,this.parentIndex),this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._BookingsListComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BookingsListComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BookingsListComponent) && (0 === requestNodeIndex))) { return this._BookingsListComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BookingsListComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BookingsListComponentNgFactory:import7.ComponentFactory<import0.BookingsListComponent> = new import7.ComponentFactory<import0.BookingsListComponent>('bookings-list',View_BookingsListComponent_Host0,import0.BookingsListComponent);
const styles_BookingsListComponent:any[] = ([] as any[]);
class View_BookingsListComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_BookingsListComponent2,renderType_BookingsListComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_9 = import12.UNINITIALIZED;
    this._expr_10 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'tr',new import3.InlineArray2(2,'style','height:20px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_9:any = import3.inlineInterpolate(1,'',this.context.$implicit.id,'');
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_3,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = import3.inlineInterpolate(1,'',this.context.$implicit.startingAt,'');
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setText(this._text_6,currVal_10);
      this._expr_10 = currVal_10;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_BookingsListComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _anchor_28:any;
  /*private*/ _vc_28:import11.ViewContainer;
  _TemplateRef_28_5:any;
  _NgFor_28_6:import13.Wrapper_NgFor;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  /*private*/ _expr_37:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_BookingsListComponent1,renderType_BookingsListComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_37 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','col-md-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel panel-default'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','panel-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'h3',new import3.InlineArray2(2,'class','panel-title'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'table',new import3.InlineArray2(2,'class','table'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'thead',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n                    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n                        ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'Id',(null as any));
    this._text_20 = this.renderer.createText(this._el_16,'\n                        ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_16,'th',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'Start Date',(null as any));
    this._text_23 = this.renderer.createText(this._el_16,'\n                    ',(null as any));
    this._text_24 = this.renderer.createText(this._el_14,'\n                ',(null as any));
    this._text_25 = this.renderer.createText(this._el_12,'\n                ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_12,'tbody',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n                    ',(null as any));
    this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26,(null as any));
    this._vc_28 = new import11.ViewContainer(28,26,this,this._anchor_28);
    this._TemplateRef_28_5 = new import14.TemplateRef_(this,28,this._anchor_28);
    this._NgFor_28_6 = new import13.Wrapper_NgFor(this._vc_28.vcRef,this._TemplateRef_28_5,this.parentView.injectorGet(import15.IterableDiffers,this.parentIndex),this.parentView.ref);
    this._text_29 = this.renderer.createText(this._el_26,'\n                ',(null as any));
    this._text_30 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._text_31 = this.renderer.createText(this._el_10,'\n\n        ',(null as any));
    this._text_32 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._anchor_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (28 === requestNodeIndex))) { return this._TemplateRef_28_5; }
    if (((token === import16.NgFor) && (28 === requestNodeIndex))) { return this._NgFor_28_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_28_0_0:any = this.parentView.context.Bookings;
    this._NgFor_28_6.check_ngForOf(currVal_28_0_0,throwOnChange,false);
    this._NgFor_28_6.ngDoCheck(this,this._anchor_28,throwOnChange);
    this._vc_28.detectChangesInNestedViews(throwOnChange);
    const currVal_37:any = import3.inlineInterpolate(1,'',this.parentView.context.message,'');
    if (import3.checkBinding(throwOnChange,this._expr_37,currVal_37)) {
      this.renderer.setText(this._text_7,currVal_37);
      this._expr_37 = currVal_37;
    }
  }
  destroyInternal():void {
    this._vc_28.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 28)) { return new View_BookingsListComponent2(this.viewUtils,this,28,this._anchor_28,this._vc_28); }
    return (null as any);
  }
}
var renderType_BookingsListComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BookingsListComponent,{});
export class View_BookingsListComponent0 extends import1.AppView<import0.BookingsListComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import11.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import17.Wrapper_NgIf;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookingsListComponent0,renderType_BookingsListComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import11.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import14.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import17.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import18.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.securityService.IsAuthorized();
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_BookingsListComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}