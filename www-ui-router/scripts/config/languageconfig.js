/**
 * Created by Alvin on 3/3/2016.
 */
angular.module('languageModule',  ['pascalprecht.translate'])
    .config(['$translateProvider',function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'language/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('zh_cn');
    }])
