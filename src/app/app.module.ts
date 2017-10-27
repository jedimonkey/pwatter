import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import 'hammerjs';

import { AppComponent } from './app.component';

import { ConfigService } from './config.service';
import { PushService } from './push.service';
import { TweetService } from './tweet.service';

import { ControlNgswComponent } from './control-ngsw/control-ngsw.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetFeedsComponent } from './tweet-feeds/tweet-feeds.component';

import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ControlPushComponent } from './control-push/control-push.component';
import { ControlBroadcastComponent } from './control-broadcast/control-broadcast.component';

import { WindowRef } from './window-ref';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    PostTweetComponent,
    ControlPushComponent,
    TweetFeedsComponent,
    ControlBroadcastComponent,
    ControlNgswComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ConfigService,
    TweetService,
    PushService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
