(function () {
'use strict';
var app= angular.module('app',[]);
app.controller('formValidationController',function($filter)
{
var vm = this; //jshint ignore:line
vm.objtofilter=[
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":141,"RefTypeVal":"Others","TypeDescTxt":""},
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":142,"RefTypeVal":"Equity investment out of scope","TypeDescTxt":"䤀䘀䌀✀猀 攀焀甀椀琀礀 椀渀瘀攀猀琀洀攀渀琀 爀攀瀀爀攀猀攀渀琀猀 氀攀猀猀 琀栀愀渀 ㄀㔀─ 漀昀 琀漀琀愀氀 攀焀甀椀琀礀"},
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":142,"RefTypeVal":"Equity investment out of scope","TypeDescTxt":"䤀䘀䌀✀猀 攀焀甀椀琀礀 椀渀瘀攀猀琀洀攀渀琀 爀攀瀀爀攀猀攀渀琀猀 氀攀猀猀 琀栀愀渀 ㄀㔀─ 漀昀 琀漀琀愀氀 攀焀甀椀琀礀"},
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":143,"RefTypeVal":"Equity investment - no or minimal change","TypeDescTxt":"Already existing equity investee and IFC's equity ownership percentage has either (i) remained the same (ii) changed minimally (iii) is already accounted for under the FVO"},
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":144,"RefTypeVal":"No equity investment","TypeDescTxt":"IFC does not have an equity interest in the client"},
{"RefTypeCd":"SI_SCOPE_OUT_REASON","RefTypeId":145,"RefTypeVal":"Accounting Policy Decision","TypeDescTxt":"Where a separate Accounting Policy is prepared and the guidance on consolidation is contemplated, an additional review would result in duplication."}
]

console.log("filtered array obj data---------",$filter('filter')(vm.objtofilter,{RefTypeId:vm.objtofilter[1].RefTypeId})[0]);
vm.filteredobj=$filter('filter')(vm.objtofilter,{RefTypeId:vm.objtofilter[1].RefTypeId})[0];
console.log(vm.objtofilter.indexOf(vm.filteredobj));
vm.objtofilter.splice(vm.objtofilter.indexOf(vm.filteredobj),3);// if 2nd argument not passed
// then it will delete all data from that starting position(1st argument). But if 2nd argument in mentioned
//then it will delete that number of records from that first argument. 
console.log(vm.objtofilter);
vm.submitForm=function()
{
//   if ($scope.myForm.$valid) {
alert("All entered values are valid.Form submitted successfully.");
// }
}
});
}
)();