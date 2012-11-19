// Copyright 2012 The Closure Xaml Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Indicates where an element should be displayed on the horizontal axis
 * relative to the allocated layout slot of the parent element.
 */

goog.provide('goog.xaml.HorizontalAlignment');

/**
 * @enum {number}
 */
goog.xaml.HorizontalAlignment = {
    Left:0,
    Center:1,
    Right:2,
    Stretch:3
};

/**
 * @type {number}
 */
goog.xaml.HorizontalAlignment.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.HorizontalAlignment");