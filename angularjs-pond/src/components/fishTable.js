angular.module('fish-pond')
.component('fishTable', {
  bindings: {
    fishes: '<'
  },
  template: `
    <div>
      <fish-table-row ng-repeat="$ctrl.fish in fishes"></fish-table-row>
      <fish-table-row></fish-table-row>
      <fish-table-row></fish-table-row>
    </div>`
});