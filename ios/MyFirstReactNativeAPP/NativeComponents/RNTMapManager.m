//
//  RNTMapManager.m
//  MyFirstReactNativeAPP
//
//  Created by 朱鹏 on 2017/11/7.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RNTMapManager.h"

@implementation RNTMapManager

RCT_EXPORT_MODULE();

- (UIView *)view{
  
  return [[MKMapView alloc]init];
  
}


@end
