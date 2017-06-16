/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../src/app/services/SecurityService';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.AppComponent(p0);
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
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'my-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(import8.SecurityService,this.parentIndex));
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import7.ComponentFactory<import0.AppComponent> = new import7.ComponentFactory<import0.AppComponent>('my-app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
class View_AppComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_AppComponent1,renderType_AppComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'class','navigationLinkButton'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Login',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.Login()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_AppComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_AppComponent2,renderType_AppComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'class','navigationLinkButton'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Logout',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),[disposable_0]);
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.Logout()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _RouterLinkWithHref_21_3:import10.Wrapper_RouterLinkWithHref;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _el_30:any;
  _RouterLinkWithHref_30_3:import10.Wrapper_RouterLinkWithHref;
  _text_31:any;
  _text_32:any;
  _el_33:any;
  _el_34:any;
  _RouterLinkWithHref_34_3:import10.Wrapper_RouterLinkWithHref;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _el_38:any;
  _RouterLinkWithHref_38_3:import10.Wrapper_RouterLinkWithHref;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _anchor_42:any;
  /*private*/ _vc_42:import9.ViewContainer;
  _TemplateRef_42_5:any;
  _NgIf_42_6:import11.Wrapper_NgIf;
  _text_43:any;
  _el_44:any;
  _anchor_45:any;
  /*private*/ _vc_45:import9.ViewContainer;
  _TemplateRef_45_5:any;
  _NgIf_45_6:import11.Wrapper_NgIf;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _text_50:any;
  _el_51:any;
  /*private*/ _vc_51:import9.ViewContainer;
  _RouterOutlet_51_5:import12.Wrapper_RouterOutlet;
  _text_52:any;
  _text_53:any;
  _arr_66:any;
  _arr_67:any;
  _arr_68:any;
  _arr_69:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_66 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_67 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_68 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_69 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','container','style','margin-top: 15px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'nav',new import3.InlineArray2(2,'class','navbar navbar-default'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','container-fluid'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_7,'button',new import3.InlineArray16(12,'aria-controls','navbar','aria-expanded','false','class','navbar-toggle collapsed','data-target','#navbar','data-toggle','collapse','type','button'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'Toggle navigation',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_9,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_15 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_9,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_17 = this.renderer.createText(this._el_9,'\n                    ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_9,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_19 = this.renderer.createText(this._el_9,'\n                ',(null as any));
    this._text_20 = this.renderer.createText(this._el_7,'\n                ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_7,'a',new import3.InlineArray2(2,'class','navbar-brand'),(null as any));
    this._RouterLinkWithHref_21_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_21,'img',new import3.InlineArray8(6,'height','40','src','assets/damienbod.jpg','style','margin-top:-10px;'),(null as any));
    this._text_23 = this.renderer.createText(this._el_7,'\n            ',(null as any));
    this._text_24 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray4(4,'class','navbar-collapse collapse','id','navbar'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n                ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_28 = this.renderer.createText(this._el_27,'\n                    ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_27,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_29,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_30_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_31 = this.renderer.createText(this._el_30,'Bookings',(null as any));
    this._text_32 = this.renderer.createText(this._el_27,'\n                    ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_27,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_34 = import3.createRenderElement(this.renderer,this._el_33,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_34_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_35 = this.renderer.createText(this._el_34,'Create Booking',(null as any));
    this._text_36 = this.renderer.createText(this._el_27,'\n                    ',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_27,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_37,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_38_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_39 = this.renderer.createText(this._el_38,'Secured Files Download',(null as any));
    this._text_40 = this.renderer.createText(this._el_27,'\n\n                    ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_27,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._anchor_42 = this.renderer.createTemplateAnchor(this._el_41,(null as any));
    this._vc_42 = new import9.ViewContainer(42,41,this,this._anchor_42);
    this._TemplateRef_42_5 = new import16.TemplateRef_(this,42,this._anchor_42);
    this._NgIf_42_6 = new import11.Wrapper_NgIf(this._vc_42.vcRef,this._TemplateRef_42_5);
    this._text_43 = this.renderer.createText(this._el_27,'\n                    ',(null as any));
    this._el_44 = import3.createRenderElement(this.renderer,this._el_27,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._anchor_45 = this.renderer.createTemplateAnchor(this._el_44,(null as any));
    this._vc_45 = new import9.ViewContainer(45,44,this,this._anchor_45);
    this._TemplateRef_45_5 = new import16.TemplateRef_(this,45,this._anchor_45);
    this._NgIf_45_6 = new import11.Wrapper_NgIf(this._vc_45.vcRef,this._TemplateRef_45_5);
    this._text_46 = this.renderer.createText(this._el_27,'\n              \n                ',(null as any));
    this._text_47 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._text_48 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_49 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_50 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_51 = import3.createRenderElement(this.renderer,this._el_0,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_51 = new import9.ViewContainer(51,0,this,this._el_51);
    this._RouterOutlet_51_5 = new import12.Wrapper_RouterOutlet(this.parentView.injectorGet(import17.RouterOutletMap,this.parentIndex),this._vc_51.vcRef,this.parentView.injectorGet(import18.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_52 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_53 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_21,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_21));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_30,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_30));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_34,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_34));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_38,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_38));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._el_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._anchor_42,
      this._text_43,
      this._el_44,
      this._anchor_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._text_53
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._RouterLinkWithHref_21_3.context; }
    if (((token === import19.RouterLinkWithHref) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) { return this._RouterLinkWithHref_30_3.context; }
    if (((token === import19.RouterLinkWithHref) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 35)))) { return this._RouterLinkWithHref_34_3.context; }
    if (((token === import19.RouterLinkWithHref) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._RouterLinkWithHref_38_3.context; }
    if (((token === import16.TemplateRef) && (42 === requestNodeIndex))) { return this._TemplateRef_42_5; }
    if (((token === import20.NgIf) && (42 === requestNodeIndex))) { return this._NgIf_42_6.context; }
    if (((token === import16.TemplateRef) && (45 === requestNodeIndex))) { return this._TemplateRef_45_5; }
    if (((token === import20.NgIf) && (45 === requestNodeIndex))) { return this._NgIf_45_6.context; }
    if (((token === import21.RouterOutlet) && (51 === requestNodeIndex))) { return this._RouterOutlet_51_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_21_0_0:any = this._arr_66('/bookings/list');
    this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0,throwOnChange,false);
    this._RouterLinkWithHref_21_3.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_30_0_0:any = this._arr_67('/bookings/list');
    this._RouterLinkWithHref_30_3.check_routerLink(currVal_30_0_0,throwOnChange,false);
    this._RouterLinkWithHref_30_3.ngDoCheck(this,this._el_30,throwOnChange);
    const currVal_34_0_0:any = this._arr_68('/bookings/create');
    this._RouterLinkWithHref_34_3.check_routerLink(currVal_34_0_0,throwOnChange,false);
    this._RouterLinkWithHref_34_3.ngDoCheck(this,this._el_34,throwOnChange);
    const currVal_38_0_0:any = this._arr_69('/securefile/securefiles');
    this._RouterLinkWithHref_38_3.check_routerLink(currVal_38_0_0,throwOnChange,false);
    this._RouterLinkWithHref_38_3.ngDoCheck(this,this._el_38,throwOnChange);
    const currVal_42_0_0:boolean = !this.context.securityService.IsAuthorized();
    this._NgIf_42_6.check_ngIf(currVal_42_0_0,throwOnChange,false);
    this._NgIf_42_6.ngDoCheck(this,this._anchor_42,throwOnChange);
    const currVal_45_0_0:any = this.context.securityService.IsAuthorized();
    this._NgIf_45_6.check_ngIf(currVal_45_0_0,throwOnChange,false);
    this._NgIf_45_6.ngDoCheck(this,this._anchor_45,throwOnChange);
    this._RouterOutlet_51_5.ngDoCheck(this,this._el_51,throwOnChange);
    this._vc_42.detectChangesInNestedViews(throwOnChange);
    this._vc_45.detectChangesInNestedViews(throwOnChange);
    this._vc_51.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_21_3.checkHost(this,this,this._el_21,throwOnChange);
    this._RouterLinkWithHref_30_3.checkHost(this,this,this._el_30,throwOnChange);
    this._RouterLinkWithHref_34_3.checkHost(this,this,this._el_34,throwOnChange);
    this._RouterLinkWithHref_38_3.checkHost(this,this,this._el_38,throwOnChange);
  }
  destroyInternal():void {
    this._vc_42.destroyNestedViews();
    this._vc_45.destroyNestedViews();
    this._vc_51.destroyNestedViews();
    this._RouterLinkWithHref_21_3.ngOnDestroy();
    this._RouterLinkWithHref_30_3.ngOnDestroy();
    this._RouterLinkWithHref_34_3.ngOnDestroy();
    this._RouterLinkWithHref_38_3.ngOnDestroy();
    this._RouterOutlet_51_5.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 42)) { return new View_AppComponent1(this.viewUtils,this,42,this._anchor_42,this._vc_42); }
    if ((nodeIndex == 45)) { return new View_AppComponent2(this.viewUtils,this,45,this._anchor_45,this._vc_45); }
    return (null as any);
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_21_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_30(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_30_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_34(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_34_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_38(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_38_3.handleEvent(eventName,$event) && result);
    return result;
  }
}