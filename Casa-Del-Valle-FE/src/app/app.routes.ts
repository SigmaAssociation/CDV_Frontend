import { Routes } from '@angular/router';
import { StartPage } from './pages/start-page/start-page';
import { UserStoryGuidePage } from './pages/user-story-guide-page/user-story-guide-page';
import { ModelGuidePage } from './pages/model-guide-page/model-guide-page';
import { DesignGuidePage } from './pages/design-guide-page/design-guide-page';

export const routes: Routes = [
    {
        path: 'guide/user-story',
        component: UserStoryGuidePage
    },
    {
        path: 'guide/model',
        component: ModelGuidePage
    },
    {
        path: 'guide/design',
        component: DesignGuidePage
    },
    {
        path: '',
        component: StartPage,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
