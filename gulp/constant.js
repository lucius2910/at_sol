// Generated on 2019-06-01 using generator-jhipster 4.13.3
'use strict';

var gulp = require('gulp'),
    ngConstant = require('gulp-ng-constant'),
    rename = require('gulp-rename');

var util = require('./utils'),
    config = require('./config');

module.exports = {
    ngconstant_dev: ngconstant_dev,
    ngconstant_prod: ngconstant_prod
}

function ngconstant_dev() {
    return ngConstant({
        name: 'atSolApp',
        constants: {
            VERSION: util.parseVersion(),
            DEBUG_INFO_ENABLED: true,
            BUILD_TIMESTAMP: '',
            APP_CONSTANTS:{
                DEVICE_STATUS: [
                    {
                        value: '1',
                        title: 'Hoạt động'
                    },
                    {
                        value: '0',
                        title: 'Không hoạt động'
                    },
                ],
                DEVICE_STATUS_SEARCH: [
                    {
                        value: 'all',
                        title: 'Tất cả'
                    },
                    {
                        value: '1',
                        title: 'Hoạt động'
                    },
                    {
                        value: '0',
                        title: 'Không hoạt động'
                    },
                ],
                DEVICE_TYPE: [
                    {
                        value: '1',
                        title: 'Loại 1'
                    },
                    {
                        value: '0',
                        title: 'Loại 2'
                    },
                ],
                DEVICE_TYPE_SEARCH: [
                    {
                        value: 'all',
                        title: 'Tất cả'
                    },
                    {
                        value: '1',
                        title: 'Loại 1'
                    },
                    {
                        value: '0',
                        title: 'Loại 2'
                    },
                ]
            }
            
        },
        template: config.constantTemplate,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest(config.app + 'app/'));
}

function ngconstant_prod() {
    return ngConstant({
        name: 'atSolApp',
        constants: {
            VERSION: util.parseVersion(),
            DEBUG_INFO_ENABLED: true,
            BUILD_TIMESTAMP: '',
            APP_CONSTANTS:{
                DEVICE_STATUS: [
                    {
                        value: '1',
                        title: 'Hoạt động'
                    },
                    {
                        value: '0',
                        title: 'Không hoạt động'
                    },
                ],
                DEVICE_STATUS_SEARCH: [
                    {
                        value: 'all',
                        title: 'Tất cả'
                    },
                    {
                        value: '1',
                        title: 'Hoạt động'
                    },
                    {
                        value: '0',
                        title: 'Không hoạt động'
                    },
                ]
            }
            
        },
        template: config.constantTemplate,
        stream: true
    })
    .pipe(rename('app.constants.js'))
    .pipe(gulp.dest(config.app + 'app/'));
}
