import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TasksProvider} from "../../providers/tasks/tasks";

@IonicPage()
@Component({
  selector: 'page-to-do-list',
  templateUrl: 'to-do-list.html',
})
export class ToDoListPage {

  tasks = [];

  constructor(public navCtrl: NavController,
              public tasksProvider: TasksProvider,
              public alertController: AlertController) {
  }

  ionViewDidLoad() {
    this.getTasks(null);
  }

  setCompleted(item: any) {
    this.tasksProvider.deleteTask(item._id).subscribe(
      data => {
        console.log(data);

        if(data['success']){
          this.getTasks(null);
        }
      }
    )
  }

  getTasks(refresher) {
    return this.tasksProvider.getTasks()
      .subscribe(data => {
        this.tasks = data['data'];
        if (refresher != null)
          setTimeout(() => {
            refresher.complete();
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          }, 2000);
      }, error => {
        console.log(error);
        if (refresher)
          refresher.complete();
      })



  }


  newTask() {
    this.presentAlertPrompt()
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      inputs: [
        {
          name: 'what',
          type: 'text',
          placeholder: 'What'
        },
        {
          name: 'priority',
          type: 'text',
          placeholder: 'primary/secondary/danger'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log(data);
            this.tasksProvider.newTask(data).subscribe(
              res => {
                console.log(res);
                if(res['success']){
                  this.getTasks(null);
                }
              }
            )
          }
        }
      ]
    });

    await alert.present();
  }
}
