import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UnitBoardComponent } from './unit-board/unit-board.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { QrCodeViewComponent } from './qr-code-view/qr-code-view.component';
import { SigningViewComponent } from './signing-view/signing-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'unitBoard',
    pathMatch: 'full',
  },
  {
    path: 'unitBoard',
    component: UnitBoardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'unitDetail',
    component: UnitDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'qrCode',
    component: QrCodeViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signature',
    component: SigningViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
