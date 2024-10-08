import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonAvatar, IonTitle, IonToolbar, IonLabel, IonButton, IonImg, IonBadge, IonGrid, IonRow, IonCol, IonIcon, IonItem, IonText, IonCard } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, IonText, IonItem, IonIcon, IonCol,IonAvatar, IonRow, IonGrid, IonAvatar, IonBadge, IonImg, IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]})
export class HomePage {
  constructor() {}
}
