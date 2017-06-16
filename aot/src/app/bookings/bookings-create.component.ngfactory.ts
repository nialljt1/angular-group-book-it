/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../src/app/bookings/bookings-create.component';
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
import * as import11 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import12 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import13 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/forms/src/directives/default_value_accessor';
import * as import17 from '@angular/forms/src/directives/control_value_accessor';
import * as import18 from '@angular/forms/src/directives/ng_model';
import * as import19 from '@angular/forms/src/directives/ng_control';
import * as import20 from '@angular/forms/src/directives/ng_control_status';
import * as import21 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/core/src/change_detection/change_detection_util';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/common/src/directives/ng_if';
export class Wrapper_BookingsCreateComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BookingsCreateComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.BookingsCreateComponent(p0,p1,p2);
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
var renderType_BookingsCreateComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BookingsCreateComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BookingsCreateComponent>;
  _BookingsCreateComponent_0_3:Wrapper_BookingsCreateComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookingsCreateComponent_Host0,renderType_BookingsCreateComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'bookings-create',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BookingsCreateComponent0(this.viewUtils,this,0,this._el_0);
    this._BookingsCreateComponent_0_3 = new Wrapper_BookingsCreateComponent(this.injectorGet(import8.BookingsService,this.parentIndex),this.injectorGet(import9.SecurityService,this.parentIndex),this.injectorGet(import10.Router,this.parentIndex));
    this.compView_0.create(this._BookingsCreateComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BookingsCreateComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BookingsCreateComponent) && (0 === requestNodeIndex))) { return this._BookingsCreateComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BookingsCreateComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BookingsCreateComponentNgFactory:import7.ComponentFactory<import0.BookingsCreateComponent> = new import7.ComponentFactory<import0.BookingsCreateComponent>('bookings-create',View_BookingsCreateComponent_Host0,import0.BookingsCreateComponent);
const styles_BookingsCreateComponent:any[] = ([] as any[]);
class View_BookingsCreateComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _DefaultValueAccessor_6_3:import11.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_6_4:any[];
  _NgModel_6_5:import12.Wrapper_NgModel;
  _NgControl_6_6:any;
  _NgControlStatus_6_7:import13.Wrapper_NgControlStatus;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_BookingsCreateComponent2,renderType_BookingsCreateComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-xs-2'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Id',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-xs-6'),(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_5,'input',new import3.InlineArray4(4,'style','width: 100%','type','text'),(null as any));
    this._DefaultValueAccessor_6_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_6));
    this._NG_VALUE_ACCESSOR_6_4 = [this._DefaultValueAccessor_6_3.context];
    this._NgModel_6_5 = new import12.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_6_4);
    this._NgControl_6_6 = this._NgModel_6_5.context;
    this._NgControlStatus_6_7 = new import13.Wrapper_NgControlStatus(this._NgControl_6_6);
    this._text_7 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_6));
    this._NgModel_6_5.subscribe(this,this.eventHandler(this.handleEvent_6),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.DefaultValueAccessor) && (6 === requestNodeIndex))) { return this._DefaultValueAccessor_6_3.context; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (6 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_6_4; }
    if (((token === import18.NgModel) && (6 === requestNodeIndex))) { return this._NgModel_6_5.context; }
    if (((token === import19.NgControl) && (6 === requestNodeIndex))) { return this._NgControl_6_6; }
    if (((token === import20.NgControlStatus) && (6 === requestNodeIndex))) { return this._NgControlStatus_6_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_6_1_0:any = this.parentView.parentView.context.Booking.Id;
    this._NgModel_6_5.check_model(currVal_6_1_0,throwOnChange,false);
    this._NgModel_6_5.ngDoCheck(this,this._el_6,throwOnChange);
    this._NgControlStatus_6_7.ngDoCheck(this,this._el_6,throwOnChange);
    this._NgControlStatus_6_7.checkHost(this,this,this._el_6,throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_6_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_6_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.parentView.context.Booking.Id = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_BookingsCreateComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import14.ViewContainer;
  _TemplateRef_7_5:any;
  _NgIf_7_6:import21.Wrapper_NgIf;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _DefaultValueAccessor_18_3:import11.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_18_4:any[];
  _NgModel_18_5:import12.Wrapper_NgModel;
  _NgControl_18_6:any;
  _NgControlStatus_18_7:import13.Wrapper_NgControlStatus;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _DefaultValueAccessor_31_3:import11.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_31_4:any[];
  _NgModel_31_5:import12.Wrapper_NgModel;
  _NgControl_31_6:any;
  _NgControlStatus_31_7:import13.Wrapper_NgControlStatus;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  /*private*/ _expr_60:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_BookingsCreateComponent1,renderType_BookingsCreateComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_60 = import22.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','panel panel-default col-md-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-heading'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_7 = new import14.ViewContainer(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import23.TemplateRef_(this,7,this._anchor_7);
    this._NgIf_7_6 = new import21.Wrapper_NgIf(this._vc_7.vcRef,this._TemplateRef_7_5);
    this._text_8 = this.renderer.createText(this._el_5,'\n\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_5,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'div',new import3.InlineArray2(2,'class','col-xs-2'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'Name',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_11,'div',new import3.InlineArray2(2,'class','col-xs-6'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_16,'input',new import3.InlineArray4(4,'style','width: 100%','type','text'),(null as any));
    this._DefaultValueAccessor_18_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_18));
    this._NG_VALUE_ACCESSOR_18_4 = [this._DefaultValueAccessor_18_3.context];
    this._NgModel_18_5 = new import12.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_18_4);
    this._NgControl_18_6 = this._NgModel_18_5.context;
    this._NgControlStatus_18_7 = new import13.Wrapper_NgControlStatus(this._NgControl_18_6);
    this._text_19 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._text_20 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_5,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'div',new import3.InlineArray2(2,'class','col-xs-2'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Description',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_24,'div',new import3.InlineArray2(2,'class','col-xs-6'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'input',new import3.InlineArray4(4,'style','width: 100%','type','text'),(null as any));
    this._DefaultValueAccessor_31_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer,new import15.ElementRef(this._el_31));
    this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
    this._NgModel_31_5 = new import12.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_31_4);
    this._NgControl_31_6 = this._NgModel_31_5.context;
    this._NgControlStatus_31_7 = new import13.Wrapper_NgControlStatus(this._NgControl_31_6);
    this._text_32 = this.renderer.createText(this._el_29,'\n            ',(null as any));
    this._text_33 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._text_34 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_35 = import3.createRenderElement(this.renderer,this._el_5,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_36 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_38 = this.renderer.createText(this._el_37,'\n            ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_37,'div',new import3.InlineArray2(2,'class','col-xs-2'),(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'\n                ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_39,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'Create',(null as any));
    this._text_43 = this.renderer.createText(this._el_39,'\n            ',(null as any));
    this._text_44 = this.renderer.createText(this._el_37,'\n        ',(null as any));
    this._text_45 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_46 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_18));
    this._NgModel_18_5.subscribe(this,this.eventHandler(this.handleEvent_18),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_31,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_31));
    this._NgModel_31_5.subscribe(this,this.eventHandler(this.handleEvent_31),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_41,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_41));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import24.NgIf) && (7 === requestNodeIndex))) { return this._NgIf_7_6.context; }
    if (((token === import16.DefaultValueAccessor) && (18 === requestNodeIndex))) { return this._DefaultValueAccessor_18_3.context; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_18_4; }
    if (((token === import18.NgModel) && (18 === requestNodeIndex))) { return this._NgModel_18_5.context; }
    if (((token === import19.NgControl) && (18 === requestNodeIndex))) { return this._NgControl_18_6; }
    if (((token === import20.NgControlStatus) && (18 === requestNodeIndex))) { return this._NgControlStatus_18_7.context; }
    if (((token === import16.DefaultValueAccessor) && (31 === requestNodeIndex))) { return this._DefaultValueAccessor_31_3.context; }
    if (((token === import17.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_31_4; }
    if (((token === import18.NgModel) && (31 === requestNodeIndex))) { return this._NgModel_31_5.context; }
    if (((token === import19.NgControl) && (31 === requestNodeIndex))) { return this._NgControl_31_6; }
    if (((token === import20.NgControlStatus) && (31 === requestNodeIndex))) { return this._NgControlStatus_31_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.parentView.context.Booking;
    this._NgIf_7_6.check_ngIf(currVal_7_0_0,throwOnChange,false);
    this._NgIf_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    this._DefaultValueAccessor_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    const currVal_18_1_0:any = this.parentView.context.Booking.Name;
    this._NgModel_18_5.check_model(currVal_18_1_0,throwOnChange,false);
    this._NgModel_18_5.ngDoCheck(this,this._el_18,throwOnChange);
    this._NgControlStatus_18_7.ngDoCheck(this,this._el_18,throwOnChange);
    this._DefaultValueAccessor_31_3.ngDoCheck(this,this._el_31,throwOnChange);
    const currVal_31_1_0:any = this.parentView.context.Booking.Description;
    this._NgModel_31_5.check_model(currVal_31_1_0,throwOnChange,false);
    this._NgModel_31_5.ngDoCheck(this,this._el_31,throwOnChange);
    this._NgControlStatus_31_7.ngDoCheck(this,this._el_31,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    const currVal_60:any = import3.inlineInterpolate(1,'\n        ',this.parentView.context.message,'\n    ');
    if (import3.checkBinding(throwOnChange,this._expr_60,currVal_60)) {
      this.renderer.setText(this._text_3,currVal_60);
      this._expr_60 = currVal_60;
    }
    this._NgControlStatus_18_7.checkHost(this,this,this._el_18,throwOnChange);
    this._NgControlStatus_31_7.checkHost(this,this,this._el_31,throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._NgModel_18_5.ngOnDestroy();
    this._NgModel_31_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 7)) { return new View_BookingsCreateComponent2(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_18_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.Booking.Name = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_31(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_31_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.Booking.Description = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_41(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.Create()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_BookingsCreateComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BookingsCreateComponent,{});
export class View_BookingsCreateComponent0 extends import1.AppView<import0.BookingsCreateComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import14.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import21.Wrapper_NgIf;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookingsCreateComponent0,renderType_BookingsCreateComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import14.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import23.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import21.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._anchor_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import24.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
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
    if ((nodeIndex == 0)) { return new View_BookingsCreateComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}