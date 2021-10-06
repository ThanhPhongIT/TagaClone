import { MessageContentComponent } from './../../../message-content/src/lib/message-content/message-content.component';
import { LayoutMsComponent } from './../../../../ui/layout/src/lib/layout/layout.component';
// import { LayoutMsComponent } from '@taga-now/taga-now/message/ui/layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TagaNowMessageUiMsMainHeaderModule } from '@taga-now/taga-now/message/ui/ms-main-header';
// import { TagaNowMessageUiMsMainBodyModule } from '@taga-now/taga-now/message/ui/ms-main-body';

@NgModule({
  imports: [CommonModule, TagaNowMessageUiMsMainHeaderModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: MessageContentComponent,
        children:[
          {
            path: 'ms-content/:id',
            loadChildren: async () => 
            ( await import('@taga-now/taga-now/message/feature/message-content')
            ).TagaNowMessageFeatureMessageContentModule,
          },
        ]
      }
      
    ]),
  ]
})
export class TagaNowMessageFeatureShellModule {}
