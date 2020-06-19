(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IdCCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCCarouselComponent", function() { return IdCCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function IdCCarouselComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, slide_r1.subtitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, slide_r1.text), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class IdCCarouselComponent {
    constructor(translate) {
        this.translate = translate;
        this.sliders = [];
    }
    ngOnInit() {
        this.titleCarrusel = this.translate.instant('carrusel.title');
        this.sliders.push({
            imagePath: '../../../../assets/images/carrusel.svg',
            subtitle: 'carrusel.slideFirst.subtitle',
            text: 'carrusel.slideFirst.text'
        }, {
            imagePath: '../../../../assets/images/carrusel2.svg',
            subtitle: 'carrusel.slideSecond.subtitle',
            text: 'carrusel.slideSecond.text'
        }, {
            imagePath: '../../../../assets/images/qr.svg',
            subtitle: 'carrusel.slideThird.subtitle',
            text: 'carrusel.slideThird.text'
        }, {
            imagePath: '../../../../assets/images/carrusel3.svg',
            subtitle: 'carrusel.slideFourth.subtitle',
            text: 'carrusel.slideFourth.text'
        });
    }
}
IdCCarouselComponent.ɵfac = function IdCCarouselComponent_Factory(t) { return new (t || IdCCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
IdCCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCCarouselComponent, selectors: [["app-id-c-carousel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])], decls: 23, vars: 4, consts: [[1, "carrousel"], ["id", "slider"], ["checked", "", "type", "radio", "name", "slider", "id", "slide1"], ["type", "radio", "name", "slider", "id", "slide2"], ["type", "radio", "name", "slider", "id", "slide3"], ["type", "radio", "name", "slider", "id", "slide4"], ["id", "slides"], ["id", "overflow"], [1, "inner"], ["class", "slide", 4, "ngFor", "ngForOf"], ["id", "controls"], ["for", "slide1"], ["for", "slide2"], ["for", "slide3"], ["for", "slide4"], ["id", "bullets"], [1, "slide"], [1, "row", "name"], [1, "row", "description", 3, "innerHTML"], [1, "slide-content"], ["alt", "", 1, "img_slider", 3, "src"]], template: function IdCCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, IdCCarouselComponent_div_12_Template, 8, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "carrusel.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliders);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@font-face {\n  font-family: nunito-bold;\n  src: url(\"/assets/fonts/Nunito-Bold.ttf\") format(\"truetype\");\n  font-weight: normal;\n}\n@font-face {\n  font-family: nunito-regular;\n  src: url(\"/assets/fonts/Nunito-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n}\n@font-face {\n  font-family: nunito-light;\n  src: url(\"/assets/fonts/Nunito-Light.ttf\") format(\"truetype\");\n  font-weight: normal;\n}\n\n.carrousel[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 24px 0 32px 0;\n  max-width: 750px;\n  background-color: #5A33FF;\n  border-radius: 10px;\n  margin: 0px 30px;\n}\n.carrousel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  margin: 0px !important;\n  padding: 0px 20px;\n  font-family: nunito-bold;\n  font-weight: normal;\n  font-size: 24px;\n}\n#slider[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 100%;\n  text-align: center;\n}\n#slider[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n#slider[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n#slides[_ngcontent-%COMP%] {\n  padding: 31px 0px 0px 0px;\n  position: relative;\n  z-index: 1;\n}\ndiv.name[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  justify-content: center;\n  margin: 0px;\n  font-family: nunito-bold;\n  font-weight: normal;\n  font-size: 16px;\n}\ndiv.description[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  justify-content: center;\n  padding: 9px 30px 32px 30px;\n  margin: 0px;\n  font-family: nunito-regular;\n  font-weight: normal;\n  font-size: 16px;\n}\n#overflow[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n}\n#slide1[_ngcontent-%COMP%]:checked    ~ #slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n#slide2[_ngcontent-%COMP%]:checked    ~ #slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin-left: -100%;\n}\n#slide3[_ngcontent-%COMP%]:checked    ~ #slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin-left: -200%;\n}\n#slide4[_ngcontent-%COMP%]:checked    ~ #slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin-left: -300%;\n}\n#slide5[_ngcontent-%COMP%]:checked    ~ #slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  margin-left: -400%;\n}\n#slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  -webkit-transform: translateZ(0);\n  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);\n}\n#slides[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  width: 500%;\n}\n#slides[_ngcontent-%COMP%]   .slide[_ngcontent-%COMP%] {\n  width: 20%;\n  float: left;\n  display: block;\n  height: 100%;\n  color: #FFFFFF;\n}\n#controls[_ngcontent-%COMP%] {\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 35px;\n  z-index: 3;\n  position: relative;\n}\n#controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  transition: opacity 0.2s ease-out;\n  width: 20px;\n  height: 0px;\n  opacity: 1;\n}\n#controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n#slide1[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(2), #slide2[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(3), #slide3[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(4) {\n  background: url(\"/../../assets/images/siguiente.png\") no-repeat;\n  float: right;\n  margin: 35px 40px 0px 0px;\n  height: 50px;\n  width: 100px;\n  padding: 0px;\n  display: block;\n}\n#slide4[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(4) {\n  background: url(\"/../../assets/images/siguiente_gris.png\") no-repeat;\n  float: right;\n  margin: 35px 40px 0px 0px;\n  height: 50px;\n  width: 100px;\n  padding: 0px;\n  display: block;\n}\n#slide2[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(1), #slide3[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(2), #slide4[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(3) {\n  background: url(\"/../../assets/images/anterior.png\") no-repeat;\n  float: left;\n  margin: 35px 0px 0px 40px;\n  height: 50px;\n  width: 100px;\n  padding: 0px;\n  display: block;\n}\n#slide1[_ngcontent-%COMP%]:checked    ~ #controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(1) {\n  background: url(\"/../../assets/images/anterior_gris.png\") no-repeat;\n  float: left;\n  margin: 35px 0px 0px 40px;\n  height: 50px;\n  width: 100px;\n  padding: 0px;\n  display: block;\n}\n#bullets[_ngcontent-%COMP%] {\n  margin: 0 0 0;\n  text-align: center;\n}\n#bullets[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin: 0px 5px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n#slide1[_ngcontent-%COMP%]:checked    ~ #bullets[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(1), #slide2[_ngcontent-%COMP%]:checked    ~ #bullets[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(2), #slide3[_ngcontent-%COMP%]:checked    ~ #bullets[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(3), #slide4[_ngcontent-%COMP%]:checked    ~ #bullets[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #FFFFFF;\n}\n@media screen and (max-width: 768px) {\n  .carrousel[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    padding: 24px 0 32px 0;\n    max-width: 750px;\n    background-color: #5A33FF;\n    border-radius: 10px;\n    margin: 0px 0px;\n  }\n  .carrousel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    margin: 0px !important;\n    padding: 0px 101px;\n    font-family: nunito-bold;\n    font-weight: normal;\n    font-size: 24px;\n  }\n}\n\n@media (min-width: 1700px) and (max-width: 3100px) {\n  .carrousel[_ngcontent-%COMP%] {\n    padding: 34px 0 42px 0;\n  }\n  .carrousel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: nunito-bold;\n    font-weight: normal;\n    font-size: 32px;\n  }\n\n  #slides[_ngcontent-%COMP%] {\n    padding: 41px 0px 0px 0px;\n  }\n\n  .img_slider[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 260px;\n  }\n\n  div.name[_ngcontent-%COMP%] {\n    font-family: nunito-bold;\n    font-weight: normal;\n    font-size: 23px;\n  }\n\n  div.description[_ngcontent-%COMP%] {\n    padding: 16px 30px 40px 30px;\n    font-family: nunito-regular;\n    font-weight: normal;\n    font-size: 23px;\n  }\n}\n\n@media screen and (max-width: 1280px) {\n  .carrousel[_ngcontent-%COMP%] {\n    margin: 0px 15px;\n  }\n}\n@media screen and (max-width: 967px) {\n  .carrousel[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .carrousel[_ngcontent-%COMP%] {\n    margin: 0px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9KQnVyZ29zRy9TaXRlcy9mdW5jaW9uYWxlcy9zb3lfeW8vc295eW9fd2ViX3Rlc3Qvc3JjL2Fzc2V0cy9zY3NzL3BhcnRpYWxzL192YXJfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvaWQtYy1jYXJvdXNlbC9pZC1jLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0pCdXJnb3NHL1NpdGVzL2Z1bmNpb25hbGVzL3NveV95by9zb3l5b193ZWJfdGVzdC9zcmMvYXBwL3BhZ2VzL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvaWQtYy1jYXJvdXNlbC9pZC1jLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0Usd0JBQUE7RUFDQSw0REFBQTtFQUNBLG1CQUFBO0FDUkY7QURXQTtFQUNFLDJCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtBQ1RGO0FEYUE7RUFDRSx5QkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7QUNYRjtBQ2JBLFdBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEZUY7QUNiRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VGa0JGLHdCQS9CSTtFQWdDSixtQkVsQnNCO0VGbUJ0QixlRW5COEI7QURpQmhDO0FDYkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEZ0JGO0FDYkE7RUFDRSxhQUFBO0FEZ0JGO0FDYkE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QURnQkY7QUNiQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEZ0JGO0FDYkE7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VGWEEsd0JBL0JJO0VBZ0NKLG1CRVdvQjtFRlZwQixlRVU0QjtBRGtCOUI7QUNmQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFRm5CQSwyQkE5Qkk7RUErQkosbUJFbUJvQjtFRmxCcEIsZUVrQjRCO0FEb0I5QjtBQ2pCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLGNBQUE7QURvQkY7QUNqQkE7RUFDRSxrQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLGtCQUFBO0FEb0JGO0FDakJBO0VBQ0Usa0JBQUE7QURvQkY7QUNqQkE7RUFDRSxrQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLGdDQUFBO0VBQ0EsNkRBQUE7QURvQkY7QUNqQkE7RUFDRSxXQUFBO0FEb0JGO0FDakJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURvQkY7QUNqQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QURvQkY7QUNqQkE7RUFDRSxpQ0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRG1CRjtBQ2ZBO0VBQ0UsVUFBQTtBRGtCRjtBQ2ZBOzs7RUFHRSwrREFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURrQkY7QUNmQTtFQUNFLG9FQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRGtCRjtBQ2ZBOzs7RUFHRSw4REFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QURrQkY7QUNmQTtFQUNFLG1FQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRGtCRjtBQ2ZBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FEa0JGO0FDZkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QURrQkY7QUNmQTs7OztFQUlFLHlCQUFBO0FEa0JGO0FDZkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RURrQkY7RUNoQkU7SUFDRSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxrQkFBQTtJRnBLSix3QkEvQkk7SUFnQ0osbUJFb0t3QjtJRm5LeEIsZUVtS2dDO0VEb0JoQztBQUNGO0FDaEJBLFNBQUE7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7RURrQkY7RUNqQkU7SUY5S0Ysd0JBL0JJO0lBZ0NKLG1CRThLd0I7SUY3S3hCLGVFNktnQztFRHFCaEM7O0VDbEJBO0lBQ0UseUJBQUE7RURxQkY7O0VDbkJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RURzQkY7O0VDcEJBO0lGekxBLHdCQS9CSTtJQWdDSixtQkV5THNCO0lGeEx0QixlRXdMOEI7RUR5QjlCOztFQ3RCQTtJQUNFLDRCQUFBO0lGOUxGLDJCQTlCSTtJQStCSixtQkU4THNCO0lGN0x0QixlRTZMOEI7RUQyQjlCO0FBQ0Y7QUN4QkEsUUFBQTtBQUNBO0VBQ0U7SUFDRSxnQkFBQTtFRDBCRjtBQUNGO0FDeEJBO0VBQ0U7SUFDRSxlQUFBO0VEMEJGO0FBQ0Y7QUN2QkE7RUFDRTtJQUNFLGVBQUE7RUR5QkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvaWQtYy1jYXJvdXNlbC9pZC1jLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyaWFibGVzXG4kZm5iOiBudW5pdG8tYm9sZDtcbiRmbnI6IG51bml0by1yZWd1bGFyO1xuJGZubDogbnVuaXRvLWxpZ2h0O1xuXG4vLyBDb2xvcnNcblxuLy8gRm9udHNcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBudW5pdG8tYm9sZDtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvTnVuaXRvLUJvbGQudHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbnVuaXRvLXJlZ3VsYXI7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL051bml0by1SZWd1bGFyLnR0ZicpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbnVuaXRvLWxpZ2h0O1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9OdW5pdG8tTGlnaHQudHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8vIFNpemVzXG5cblxuQG1peGluIGZvbnQgKCRmb250TmFtZSwgJGZvbnRXZWlnaHQsICRmb250U2l6ZSl7XG4gIGZvbnQtZmFtaWx5OiAkZm9udE5hbWU7XG4gIGZvbnQtd2VpZ2h0OiAkZm9udFdlaWdodDtcbiAgZm9udC1zaXplOiAkZm9udFNpemU7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG51bml0by1ib2xkO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvTnVuaXRvLUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBudW5pdG8tcmVndWxhcjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL051bml0by1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbnVuaXRvLWxpZ2h0O1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvTnVuaXRvLUxpZ2h0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi8qQ2Fyb3VzZWwqL1xuLmNhcnJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDAgMzJweCAwO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUEzM0ZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDBweCAzMHB4O1xufVxuLmNhcnJvdXNlbCBoMiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1mYW1pbHk6IG51bml0by1ib2xkO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbiNzbGlkZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNzbGlkZXIgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2xpZGVyIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNzbGlkZXMge1xuICBwYWRkaW5nOiAzMXB4IDBweCAwcHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbmRpdi5uYW1lIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IG51bml0by1ib2xkO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4IDMwcHggMzJweCAzMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IG51bml0by1yZWd1bGFyO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNvdmVyZmxvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jc2xpZGUxOmNoZWNrZWQgfiAjc2xpZGVzIC5pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4jc2xpZGUyOmNoZWNrZWQgfiAjc2xpZGVzIC5pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwJTtcbn1cblxuI3NsaWRlMzpjaGVja2VkIH4gI3NsaWRlcyAuaW5uZXIge1xuICBtYXJnaW4tbGVmdDogLTIwMCU7XG59XG5cbiNzbGlkZTQ6Y2hlY2tlZCB+ICNzbGlkZXMgLmlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0zMDAlO1xufVxuXG4jc2xpZGU1OmNoZWNrZWQgfiAjc2xpZGVzIC5pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtNDAwJTtcbn1cblxuI3NsaWRlcyAuaW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgODAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcbn1cblxuI3NsaWRlcyAuaW5uZXIge1xuICB3aWR0aDogNTAwJTtcbn1cblxuI3NsaWRlcyAuc2xpZGUge1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiNjb250cm9scyB7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzVweDtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29udHJvbHMgbGFiZWwge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuI2NvbnRyb2xzIGxhYmVsOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuI3NsaWRlMTpjaGVja2VkIH4gI2NvbnRyb2xzIGxhYmVsOm50aC1jaGlsZCgyKSxcbiNzbGlkZTI6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMyksXG4jc2xpZGUzOmNoZWNrZWQgfiAjY29udHJvbHMgbGFiZWw6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lndWllbnRlLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAzNXB4IDQwcHggMHB4IDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzbGlkZTQ6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoNCkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2ltYWdlcy9zaWd1aWVudGVfZ3Jpcy5wbmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMzVweCA0MHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2xpZGUyOmNoZWNrZWQgfiAjY29udHJvbHMgbGFiZWw6bnRoLWNoaWxkKDEpLFxuI3NsaWRlMzpjaGVja2VkIH4gI2NvbnRyb2xzIGxhYmVsOm50aC1jaGlsZCgyKSxcbiNzbGlkZTQ6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2ltYWdlcy9hbnRlcmlvci5wbmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzNXB4IDBweCAwcHggNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzbGlkZTE6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2ltYWdlcy9hbnRlcmlvcl9ncmlzLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDM1cHggMHB4IDBweCA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2J1bGxldHMge1xuICBtYXJnaW46IDAgMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNidWxsZXRzIGxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuI3NsaWRlMTpjaGVja2VkIH4gI2J1bGxldHMgbGFiZWw6bnRoLWNoaWxkKDEpLFxuI3NsaWRlMjpjaGVja2VkIH4gI2J1bGxldHMgbGFiZWw6bnRoLWNoaWxkKDIpLFxuI3NsaWRlMzpjaGVja2VkIH4gI2J1bGxldHMgbGFiZWw6bnRoLWNoaWxkKDMpLFxuI3NsaWRlNDpjaGVja2VkIH4gI2J1bGxldHMgbGFiZWw6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnJvdXNlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNHB4IDAgMzJweCAwO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBMzNGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgfVxuICAuY2Fycm91c2VsIGgyIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxMDFweDtcbiAgICBmb250LWZhbWlseTogbnVuaXRvLWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi8qc2FmYXJpKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxNzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzMTAwcHgpIHtcbiAgLmNhcnJvdXNlbCB7XG4gICAgcGFkZGluZzogMzRweCAwIDQycHggMDtcbiAgfVxuICAuY2Fycm91c2VsIGgyIHtcbiAgICBmb250LWZhbWlseTogbnVuaXRvLWJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cblxuICAjc2xpZGVzIHtcbiAgICBwYWRkaW5nOiA0MXB4IDBweCAwcHggMHB4O1xuICB9XG5cbiAgLmltZ19zbGlkZXIge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICB9XG5cbiAgZGl2Lm5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiBudW5pdG8tYm9sZDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgfVxuXG4gIGRpdi5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweCAzMHB4IDQwcHggMzBweDtcbiAgICBmb250LWZhbWlseTogbnVuaXRvLXJlZ3VsYXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbn1cbi8qb3Ryb3MqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jYXJyb3VzZWwge1xuICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2N3B4KSB7XG4gIC5jYXJyb3VzZWwge1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhcnJvdXNlbCB7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvcGFydGlhbHMvdmFyX21peGlucyc7XG4vKkNhcm91c2VsKi9cbi5jYXJyb3VzZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwIDMycHggMDtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVBMzNGRjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAwcHggMzBweDtcblxuICBoMiB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBAaW5jbHVkZSBmb250KCRmbmIsIG5vcm1hbCwgMjRweCk7XG4gIH1cbn1cblxuI3NsaWRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3NsaWRlciBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzbGlkZXIgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3NsaWRlcyB7XG4gIHBhZGRpbmc6IDMxcHggMHB4IDBweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuZGl2Lm5hbWUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4O1xuICBAaW5jbHVkZSBmb250KCRmbmIsIG5vcm1hbCwgMTZweCk7XG59XG5cbmRpdi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4IDMwcHggMzJweCAzMHB4O1xuICBtYXJnaW46IDBweDtcbiAgQGluY2x1ZGUgZm9udCgkZm5yLCBub3JtYWwsIDE2cHgpO1xufVxuXG4jb3ZlcmZsb3cge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3NsaWRlMTpjaGVja2VkIH4gI3NsaWRlcyAuaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuI3NsaWRlMjpjaGVja2VkIH4gI3NsaWRlcyAuaW5uZXIge1xuICBtYXJnaW4tbGVmdDogLTEwMCU7XG59XG5cbiNzbGlkZTM6Y2hlY2tlZCB+ICNzbGlkZXMgLmlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMDAlO1xufVxuXG4jc2xpZGU0OmNoZWNrZWQgfiAjc2xpZGVzIC5pbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAtMzAwJTtcbn1cblxuI3NsaWRlNTpjaGVja2VkIH4gI3NsaWRlcyAuaW5uZXIge1xuICBtYXJnaW4tbGVmdDogLTQwMCU7XG59XG5cbiNzbGlkZXMgLmlubmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDgwMG1zIGN1YmljLWJlemllcigwLjc3MCwgMC4wMDAsIDAuMTc1LCAxLjAwMCk7XG59XG5cbiNzbGlkZXMgLmlubmVyIHtcbiAgd2lkdGg6IDUwMCU7XG59XG5cbiNzbGlkZXMgLnNsaWRlIHtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4jY29udHJvbHMge1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvbnRyb2xzIGxhYmVsIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2Utb3V0O1xuICAvL2Rpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgb3BhY2l0eTogMTtcbiAgLy9vcGFjaXR5OiAwLjQ7XG59XG5cbiNjb250cm9scyBsYWJlbDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNzbGlkZTE6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMiksXG4jc2xpZGUyOmNoZWNrZWQgfiAjY29udHJvbHMgbGFiZWw6bnRoLWNoaWxkKDMpLFxuI3NsaWRlMzpjaGVja2VkIH4gI2NvbnRyb2xzIGxhYmVsOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lndWllbnRlLnBuZycpIG5vLXJlcGVhdDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDM1cHggNDBweCAwcHggMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI3NsaWRlNDpjaGVja2VkIH4gI2NvbnRyb2xzIGxhYmVsOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQ6IHVybCgnLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc2lndWllbnRlX2dyaXMucG5nJykgbm8tcmVwZWF0O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMzVweCA0MHB4IDBweCAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2xpZGUyOmNoZWNrZWQgfiAjY29udHJvbHMgbGFiZWw6bnRoLWNoaWxkKDEpLFxuI3NsaWRlMzpjaGVja2VkIH4gI2NvbnRyb2xzIGxhYmVsOm50aC1jaGlsZCgyKSxcbiNzbGlkZTQ6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2ltYWdlcy9hbnRlcmlvci5wbmdcIikgbm8tcmVwZWF0O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzNXB4IDBweCAwcHggNDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzbGlkZTE6Y2hlY2tlZCB+ICNjb250cm9scyBsYWJlbDpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2ltYWdlcy9hbnRlcmlvcl9ncmlzLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDM1cHggMHB4IDBweCA0MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2J1bGxldHMge1xuICBtYXJnaW46IDAgMCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNidWxsZXRzIGxhYmVsIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMCk7XG59XG5cbiNzbGlkZTE6Y2hlY2tlZCB+ICNidWxsZXRzIGxhYmVsOm50aC1jaGlsZCgxKSxcbiNzbGlkZTI6Y2hlY2tlZCB+ICNidWxsZXRzIGxhYmVsOm50aC1jaGlsZCgyKSxcbiNzbGlkZTM6Y2hlY2tlZCB+ICNidWxsZXRzIGxhYmVsOm50aC1jaGlsZCgzKSxcbiNzbGlkZTQ6Y2hlY2tlZCB+ICNidWxsZXRzIGxhYmVsOm50aC1jaGlsZCg0KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJyb3VzZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjRweCAwIDMycHggMDtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1QTMzRkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDBweCAwcHg7XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAwcHggMTAxcHg7XG4gICAgICBAaW5jbHVkZSBmb250KCRmbmIsIG5vcm1hbCwgMjRweCk7XG4gICAgfVxuICB9XG59XG5cbi8qc2FmYXJpKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxNzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzMTAwcHgpe1xuICAuY2Fycm91c2VsIHtcbiAgICBwYWRkaW5nOiAzNHB4IDAgNDJweCAwO1xuICAgIGgyIHtcbiAgICAgIEBpbmNsdWRlIGZvbnQoJGZuYiwgbm9ybWFsLCAzMnB4KTtcbiAgICB9XG4gIH1cbiAgI3NsaWRlcyB7XG4gICAgcGFkZGluZzogNDFweCAwcHggMHB4IDBweDtcbiAgfVxuICAuaW1nX3NsaWRlciB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMjYwcHg7XG4gIH1cbiAgZGl2Lm5hbWUge1xuICAgIEBpbmNsdWRlIGZvbnQoJGZuYiwgbm9ybWFsLCAyM3B4KTtcbiAgfVxuXG4gIGRpdi5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTZweCAzMHB4IDQwcHggMzBweDtcbiAgICBAaW5jbHVkZSBmb250KCRmbnIsIG5vcm1hbCwgMjNweCk7XG4gIH1cbn1cblxuLypvdHJvcyovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmNhcnJvdXNlbCB7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTY3cHgpIHtcbiAgLmNhcnJvdXNlbCB7XG4gICAgbWFyZ2luOiAwcHggMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJyb3VzZWwge1xuICAgIG1hcmdpbjogMHB4IDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-carousel',
                templateUrl: './id-c-carousel.component.html',
                styleUrls: ['./id-c-carousel.component.scss'],
                providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IdCUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCUserComponent", function() { return IdCUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class IdCUserComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IdCUserComponent.ɵfac = function IdCUserComponent_Factory(t) { return new (t || IdCUserComponent)(); };
IdCUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IdCUserComponent, selectors: [["app-id-c-user"]], decls: 11, vars: 6, consts: [[1, "col-md-9", "user"], [1, "row"], [1, "col-md-3", "tel"], ["src", "../../../../assets/images/telefono.svg", "alt", "", 1, "img_telephone"], [1, "col-md-9", "c-user"], [1, "row", "title-user"], [1, "row", "text-user"]], template: function IdCUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "dashboard.title-register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "dashboard.text-register"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-id-c-user',
                templateUrl: './id-c-user.component.html',
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/modules/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/id-c-user/id-c-user.component */ "./src/app/pages/modules/dashboard/components/id-c-user/id-c-user.component.ts");
/* harmony import */ var _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/id-c-carousel/id-c-carousel.component */ "./src/app/pages/modules/dashboard/components/id-c-carousel/id-c-carousel.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





class DashboardComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 25, vars: 9, consts: [[1, "container_dashboard"], [1, "container_base"], [1, "row", "in-line"], [1, "col-md-6"], [1, "row", "logo"], ["src", "../../../../assets/images/logo.svg", "alt", "", 1, "img"], [1, "row"], [1, "col-md-12"], [1, "welcome"], [1, "text-welcome", 3, "innerHTML"], [1, "text-help"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-id-c-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-id-c-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, "dashboard.welcome"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "dashboard.text-welcome"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, "dashboard.text-help"));
    } }, directives: [_components_id_c_user_id_c_user_component__WEBPACK_IMPORTED_MODULE_1__["IdCUserComponent"], _components_id_c_carousel_id_c_carousel_component__WEBPACK_IMPORTED_MODULE_2__["IdCCarouselComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/modules/modules.index.ts":
/*!************************************************!*\
  !*** ./src/app/pages/modules/modules.index.ts ***!
  \************************************************/
/*! exports provided: ProfileComponent, DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/modules/profile/profile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__["ProfileComponent"]; });

/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/modules/dashboard/dashboard.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]; });





/***/ }),

/***/ "./src/app/pages/modules/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/modules/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, consts: [[1, "container", "m-5"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is my profile\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/routing-path */ "./src/app/configs/routing-path.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modules.index */ "./src/app/pages/modules/modules.index.ts");







const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
        children: [
            {
                path: '',
                redirectTo: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
                pathMatch: 'full'
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.path,
                component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/pages/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.dashboard.breadcrumb
                }
            },
            {
                path: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.path,
                component: _modules_modules_index__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                data: {
                    breadcrumb: _configs_routing_path__WEBPACK_IMPORTED_MODULE_2__["RoutingPath"].appRouting.pages.modules.profile.breadcrumb
                }
            }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 1, vars: 0, template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");





class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map