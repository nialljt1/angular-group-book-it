var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../src/app/bookings/bookings-list.component';
import * as import1 from '@angular/core/src/linker/view';
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
export var Wrapper_BookingsListComponent = (function () {
    function Wrapper_BookingsListComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.BookingsListComponent(p0, p1, p2);
    }
    Wrapper_BookingsListComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BookingsListComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_BookingsListComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BookingsListComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BookingsListComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BookingsListComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BookingsListComponent;
}());
var renderType_BookingsListComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BookingsListComponent_Host0 = (function (_super) {
    __extends(View_BookingsListComponent_Host0, _super);
    function View_BookingsListComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BookingsListComponent_Host0, renderType_BookingsListComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_BookingsListComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'bookings-list', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BookingsListComponent0(this.viewUtils, this, 0, this._el_0);
        this._BookingsListComponent_0_3 = new Wrapper_BookingsListComponent(this.injectorGet(import8.BookingsService, this.parentIndex), this.injectorGet(import9.SecurityService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._BookingsListComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._BookingsListComponent_0_3.context);
    };
    View_BookingsListComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BookingsListComponent) && (0 === requestNodeIndex))) {
            return this._BookingsListComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_BookingsListComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BookingsListComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_BookingsListComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BookingsListComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BookingsListComponent_Host0;
}(import1.AppView));
export var BookingsListComponentNgFactory = new import7.ComponentFactory('bookings-list', View_BookingsListComponent_Host0, import0.BookingsListComponent);
var styles_BookingsListComponent = [];
var View_BookingsListComponent2 = (function (_super) {
    __extends(View_BookingsListComponent2, _super);
    function View_BookingsListComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BookingsListComponent2, renderType_BookingsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_9 = import12.UNINITIALIZED;
        this._expr_10 = import12.UNINITIALIZED;
    }
    View_BookingsListComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', new import3.InlineArray2(2, 'style', 'height:20px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_BookingsListComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9 = import3.inlineInterpolate(1, '', this.context.$implicit.id, '');
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_3, currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = import3.inlineInterpolate(1, '', this.context.$implicit.startingAt, '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_6, currVal_10);
            this._expr_10 = currVal_10;
        }
    };
    View_BookingsListComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_BookingsListComponent2;
}(import1.AppView));
var View_BookingsListComponent1 = (function (_super) {
    __extends(View_BookingsListComponent1, _super);
    function View_BookingsListComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_BookingsListComponent1, renderType_BookingsListComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_37 = import12.UNINITIALIZED;
    }
    View_BookingsListComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'table', new import3.InlineArray2(2, 'class', 'table'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_18, 'Id', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Start Date', null);
        this._text_23 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._text_24 = this.renderer.createText(this._el_14, '\n                ', null);
        this._text_25 = this.renderer.createText(this._el_12, '\n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_12, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_28 = new import11.ViewContainer(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import14.TemplateRef_(this, 28, this._anchor_28);
        this._NgFor_28_6 = new import13.Wrapper_NgFor(this._vc_28.vcRef, this._TemplateRef_28_5, this.parentView.injectorGet(import15.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_29 = this.renderer.createText(this._el_26, '\n                ', null);
        this._text_30 = this.renderer.createText(this._el_12, '\n            ', null);
        this._text_31 = this.renderer.createText(this._el_10, '\n\n        ', null);
        this._text_32 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
        ]), null);
        return null;
    };
    View_BookingsListComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import16.NgFor) && (28 === requestNodeIndex))) {
            return this._NgFor_28_6.context;
        }
        return notFoundResult;
    };
    View_BookingsListComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_28_0_0 = this.parentView.context.Bookings;
        this._NgFor_28_6.check_ngForOf(currVal_28_0_0, throwOnChange, false);
        this._NgFor_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        var currVal_37 = import3.inlineInterpolate(1, '', this.parentView.context.message, '');
        if (import3.checkBinding(throwOnChange, this._expr_37, currVal_37)) {
            this.renderer.setText(this._text_7, currVal_37);
            this._expr_37 = currVal_37;
        }
    };
    View_BookingsListComponent1.prototype.destroyInternal = function () {
        this._vc_28.destroyNestedViews();
    };
    View_BookingsListComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BookingsListComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 28)) {
            return new View_BookingsListComponent2(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_BookingsListComponent1;
}(import1.AppView));
var renderType_BookingsListComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BookingsListComponent, {});
export var View_BookingsListComponent0 = (function (_super) {
    __extends(View_BookingsListComponent0, _super);
    function View_BookingsListComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_BookingsListComponent0, renderType_BookingsListComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    View_BookingsListComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new import11.ViewContainer(0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new import14.TemplateRef_(this, 0, this._anchor_0);
        this._NgIf_0_6 = new import17.Wrapper_NgIf(this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1
        ]), null);
        return null;
    };
    View_BookingsListComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === import18.NgIf) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        return notFoundResult;
    };
    View_BookingsListComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.securityService.IsAuthorized();
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
    };
    View_BookingsListComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
    };
    View_BookingsListComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_BookingsListComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        return null;
    };
    return View_BookingsListComponent0;
}(import1.AppView));
