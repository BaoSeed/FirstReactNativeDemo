//
//  CalendarManager.m
//  MyFirstReactNativeAPP
//
//  Created by 朱鹏 on 2017/11/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

//如果你不指定，默认就会使用这个Objective-C类的名字。
RCT_EXPORT_MODULE();

//你必须明确的声明要给 Javascript 导出的方法，否则 React Native 不会导出任何方法。声明通过 RCT_EXPORT_METHOD() 宏来实现：
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
