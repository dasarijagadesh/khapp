import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
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
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DoubtsviewComponent } from './doubtsview/doubtsview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PdfviewComponent } from './pdfview/pdfview.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    AptitudeComponent,
    DoubtsComponent,
    EditbioComponent,
    EditemailComponent,
    EditnameComponent,
    EditnumberComponent,
    EditprofileComponent,
    EditusernameComponent,
    EmailverifyComponent,
    FaqComponent,
    FeedbackComponent,
    LibraryComponent,
    MypurchaseComponent,
    NotificationComponent,
    OtpverifyComponent,
    PaidversionComponent,
    PaymentsuccessComponent,
    PaymentunsuccessComponent,
    ReasoningComponent,
    ResetpasswordComponent,
    ShopComponent,
    SigninComponent,
    SignupComponent,
    TermsComponent,
    TopicmaterialComponent,
    UpdatesComponent,
    VerifyotpComponent,
    WalletComponent,
    SubscriptionComponent,
    DoubtsviewComponent,
    PdfviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
