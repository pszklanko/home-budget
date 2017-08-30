/*jshint esversion: 6 */

import home from './templates/home.vue';
import needs from './templates/needs.vue';
import budget from './templates/budget.vue';
import saving from './templates/saving.vue';
import about from './templates/about.vue';

const routes = [
    { path: '/home', component: home },
    { path: '/needs', component: needs },
    { path: '/budget', component: budget },
    { path: '/saving', component: saving },
    { path: '/about', component: about }
]

export default routes;