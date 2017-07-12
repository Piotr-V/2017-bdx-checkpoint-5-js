import algo1Component from './algo1'
import algo2Component from './algo2'

let algoModule = angular.module('app.algo', [])
    .component('algo1', algo1Component)
    .component('algo2', algo2Component)
    .name

export default algoModule