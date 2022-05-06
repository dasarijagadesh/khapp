import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { AptitudeComponent } from './aptitude/aptitude.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { EditbioComponent } from './editbio/editbio.component';
import { EditemailComponent } from './editemail/editemail.component';
import { EditnameComponent } from './editname/editname.component';
import { EditnumberComponent } from './editnumber/editnumber.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EditusernameComponent } from './editusername/editusername.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { FaqComponent } from './faq/faq.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LibraryComponent } from './library/library.component';
import { MypurchaseComponent } from './mypurchase/mypurchase.component';
import { NotificationComponent } from './notification/notification.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { PaidversionComponent } from './paidversion/paidversion.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PaymentunsuccessComponent } from './paymentunsuccess/paymentunsuccess.component';
import { ReasoningComponent } from './reasoning/reasoning.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { TopicmaterialComponent } from './topicmaterial/topicmaterial.component';
import { UpdatesComponent } from './updates/updates.component';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { WalletComponent } from './wallet/wallet.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { DoubtsviewComponent } from './doubtsview/doubtsview.component';
import { PdfviewComponent } from './pdfview/pdfview.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'aptitude/:catid', component: AptitudeComponent },
  { path: 'doubts', component: DoubtsComponent },
  { path: 'doubtsview', component: DoubtsviewComponent },
  { path: 'editbio', component: EditbioComponent },
  { path: 'editemail', component: EditemailComponent },
  { path: 'editname', component: EditnameComponent },
  { path: 'editnumber', component: EditnumberComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'editusername', component: EditusernameComponent },
  { path: 'emailverify', component: EmailverifyComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'mypurchase', component: MypurchaseComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'otpverify', component: OtpverifyComponent },
  { path: 'paidversion/:catid', component: PaidversionComponent },
  { path: 'paymentsuccess', component: PaymentsuccessComponent },
  { path: 'paymentunsuccess', component: PaymentunsuccessComponent },
  { path: 'reasoning', component: ReasoningComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'topicmaterial', component: TopicmaterialComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'subscription/:subid', component: SubscriptionComponent },
  { path: 'Pdfview', component: PdfviewComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
