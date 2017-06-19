import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetMostWatchedByIdComponent } from './get-most-watched-by-id/get-most-watched-by-id.component';
import { GetMostWatchedByLimitComponent } from './get-most-watched-by-limit/get-most-watched-by-limit.component';
import { GetMostWatchedByLanguageComponent } from './get-most-watched-by-language/get-most-watched-by-language.component';
import { MainComponent } from './main/main.component';




const appRoutes : Routes = [
    { path: '', redirectTo: '/allMovies', pathMatch: 'full'},
    { path: 'allMovies', component: MainComponent},
    { path: 'getmostWatchedByLanguage', component: GetMostWatchedByLanguageComponent},
    { path: 'getMostWatchedByLimit', component: GetMostWatchedByLimitComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
