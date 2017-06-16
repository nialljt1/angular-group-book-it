var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../src/app/bookings/bookings-create.component';
import * as import1 from '@angular/core/src/linker/view';
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
export var Wrapper_BookingsCreateComponent = (function () {
    function Wrapper_BookingsCreateComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.BookingsCreateComponent(p0, p1, p2);
    }
    Wrapper_BookingsCreateComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BookingsCreateComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BookingsCreateComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BookingsCreateComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BookingsCreateComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BookingsCreateComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BookingsCreateComponent;
}());
var renderType_BookingsCreateComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BookingsCreateComponent_Host0 = (function (_super) {
    __extends(View_BookingsCreateComponent_Host0, _super);
    function View_BookingsCreateComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BookingsCreateComponent_Host0, renderType_BookingsCreateComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_BookingsCreateComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'bookings-create', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BookingsCreateComponent0(this.viewUtils, this, 0, this._el_0);
        this._BookingsCreateComponent_0_3 = new Wrapper_BookingsCreateComponent(this.injectorGet(import8.BookingsService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._BookingsCreateComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._BookingsCreateComponent_0_3.context);
    };
    View_BookingsCreateComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BookingsCreateComponent) && (0 === requestNodeIndex))) {
            return this._BookingsCreateComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BookingsCreateComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BookingsCreateComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BookingsCreateComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BookingsCreateComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BookingsCreateComponent_Host0;
}(import1.AppView));
export var BookingsCreateComponentNgFactory = new import7.ComponentFactory('bookings-create', View_BookingsCreateComponent_Host0, import0.BookingsCreateComponent);
var styles_BookingsCreateComponent = [];
var View_BookingsCreateComponent2 = (function (_super) {
    __extends(View_BookingsCreateComponent2, _super);
    function View_BookingsCreateComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BookingsCreateComponent2, renderType_BookingsCreateComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    View_BookingsCreateComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Id', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_5, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_6_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_6));
        this._NG_VALUE_ACCESSOR_6_4 = [this._DefaultValueAccessor_6_3.context];
        this._NgModel_6_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_6_4);
        this._NgControl_6_6 = this._NgModel_6_5.context;
        this._NgControlStatus_6_7 = new import13.Wrapper_NgControlStatus(this._NgControl_6_6);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_6));
        this._NgModel_6_5.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._el_6,
            this._text_7
        ]), [disposable_0]);
        return null;
    };
    View_BookingsCreateComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.DefaultValueAccessor) && (6 === requestNodeIndex))) {
            return this._DefaultValueAccessor_6_3.context;
        }
        if (((token === import17.NG_VALUE_ACCESSOR) && (6 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_6_4;
        }
        if (((token === import18.NgModel) && (6 === requestNodeIndex))) {
            return this._NgModel_6_5.context;
        }
        if (((token === import19.NgControl) && (6 === requestNodeIndex))) {
            return this._NgControl_6_6;
        }
        if (((token === import20.NgControlStatus) && (6 === requestNodeIndex))) {
            return this._NgControlStatus_6_7.context;
        }
        return notFoundResult;
    };
    View_BookingsCreateComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_6_1_0 = this.parentView.parentView.context.Booking.Id;
        this._NgModel_6_5.check_model(currVal_6_1_0, throwOnChange, false);
        this._NgModel_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatus_6_7.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatus_6_7.checkHost(this, this, this._el_6, throwOnChange);
    };
    View_BookingsCreateComponent2.prototype.destroyInternal = function () {
        this._NgModel_6_5.ngOnDestroy();
    };
    View_BookingsCreateComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BookingsCreateComponent2.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.Booking.Id = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BookingsCreateComponent2;
}(import1.AppView));
var View_BookingsCreateComponent1 = (function (_super) {
    __extends(View_BookingsCreateComponent1, _super);
    function View_BookingsCreateComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BookingsCreateComponent1, renderType_BookingsCreateComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_60 = import22.UNINITIALIZED;
    }
    View_BookingsCreateComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default col-md-12'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5, null);
        this._vc_7 = new import14.ViewContainer(7, 5, this, this._anchor_7);
        this._TemplateRef_7_5 = new import23.TemplateRef_(this, 7, this._anchor_7);
        this._NgIf_7_6 = new import21.Wrapper_NgIf(this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_5, '\n\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Name', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_18_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_18));
        this._NG_VALUE_ACCESSOR_18_4 = [this._DefaultValueAccessor_18_3.context];
        this._NgModel_18_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_18_4);
        this._NgControl_18_6 = this._NgModel_18_5.context;
        this._NgControlStatus_18_7 = new import13.Wrapper_NgControlStatus(this._NgControl_18_6);
        this._text_19 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_20 = this.renderer.createText(this._el_11, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Description', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_24, 'div', new import3.InlineArray2(2, 'class', 'col-xs-6'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'input', new import3.InlineArray4(4, 'style', 'width: 100%', 'type', 'text'), null);
        this._DefaultValueAccessor_31_3 = new import11.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_31));
        this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
        this._NgModel_31_5 = new import12.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_31_4);
        this._NgControl_31_6 = this._NgModel_31_5.context;
        this._NgControlStatus_31_7 = new import13.Wrapper_NgControlStatus(this._NgControl_31_6);
        this._text_32 = this.renderer.createText(this._el_29, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_24, '\n        ', null);
        this._text_34 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_5, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_36 = this.renderer.createText(this._el_5, '\n        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'div', new import3.InlineArray2(2, 'class', 'col-xs-2'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'button', import3.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, 'Create', null);
        this._text_43 = this.renderer.createText(this._el_39, '\n            ', null);
        this._text_44 = this.renderer.createText(this._el_37, '\n        ', null);
        this._text_45 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_46 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        this._NgModel_18_5.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_31));
        this._NgModel_31_5.subscribe(this, this.eventHandler(this.handleEvent_31), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_BookingsCreateComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import24.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === import16.DefaultValueAccessor) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === import17.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_4;
        }
        if (((token === import18.NgModel) && (18 === requestNodeIndex))) {
            return this._NgModel_18_5.context;
        }
        if (((token === import19.NgControl) && (18 === requestNodeIndex))) {
            return this._NgControl_18_6;
        }
        if (((token === import20.NgControlStatus) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_7.context;
        }
        if (((token === import16.DefaultValueAccessor) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3.context;
        }
        if (((token === import17.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_4;
        }
        if (((token === import18.NgModel) && (31 === requestNodeIndex))) {
            return this._NgModel_31_5.context;
        }
        if (((token === import19.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_6;
        }
        if (((token === import20.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_7.context;
        }
        return notFoundResult;
    };
    View_BookingsCreateComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.parentView.context.Booking;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = this.parentView.context.Booking.Name;
        this._NgModel_18_5.check_model(currVal_18_1_0, throwOnChange, false);
        this._NgModel_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_7.ngDoCheck(this, this._el_18, throwOnChange);
        this._DefaultValueAccessor_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_1_0 = this.parentView.context.Booking.Description;
        this._NgModel_31_5.check_model(currVal_31_1_0, throwOnChange, false);
        this._NgModel_31_5.ngDoCheck(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_7.ngDoCheck(this, this._el_31, throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        var currVal_60 = import3.inlineInterpolate(1, '\n        ', this.parentView.context.message, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_60, currVal_60)) {
            this.renderer.setText(this._text_3, currVal_60);
            this._expr_60 = currVal_60;
        }
        this._NgControlStatus_18_7.checkHost(this, this, this._el_18, throwOnChange);
        this._NgControlStatus_31_7.checkHost(this, this, this._el_31, throwOnChange);
    };
    View_BookingsCreateComponent1.prototype.destroyInternal = function () {
        this._vc_7.destroyNestedViews();
        this._NgModel_18_5.ngOnDestroy();
        this._NgModel_31_5.ngOnDestroy();
    };
    View_BookingsCreateComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BookingsCreateComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 7)) {
            return new View_BookingsCreateComponent2(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    View_BookingsCreateComponent1.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.Booking.Name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BookingsCreateComponent1.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_31_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.Booking.Description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_BookingsCreateComponent1.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.Create() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BookingsCreateComponent1;
}(import1.AppView));
var renderType_BookingsCreateComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BookingsCreateComponent, {});
export var View_BookingsCreateComponent0 = (function (_super) {
    __extends(View_BookingsCreateComponent0, _super);
    function View_BookingsCreateComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BookingsCreateComponent0, renderType_BookingsCreateComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_BookingsCreateComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import14.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import23.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import21.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BookingsCreateComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import24.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_BookingsCreateComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized();
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_BookingsCreateComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_BookingsCreateComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_BookingsCreateComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_BookingsCreateComponent0;
}(import1.AppView));
