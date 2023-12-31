import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./home/page-not-found/page-not-found.component";
import { Routes, RouterModule, Router } from "@angular/router";
import { AuthGuardService } from "./home/auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./home/error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children:
    [{path: ':id/:name', component: UserComponent}]
  },
  { path: 'servers',
    canActivateChild: [AuthGuardService],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}) // Enables hash mode in the URL, which circumvents app error when server reroutes to a path that isn't index.html
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
