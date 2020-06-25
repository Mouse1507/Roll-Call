import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlertController
} from '@ionic/angular';
import {
  FbserviceService
} from '../../service/fbservice.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.page.html',
  styleUrls: ['./manage-class.page.scss'],
})
export class ManageClassPage implements OnInit {

  constructor(public alert: AlertController, private fbs: FbserviceService) {}

  ngOnInit() {
    this.init()

  }
  ListClass: any
  init() {
    this.fbs.GetListClass().then((res) => {
      this.ListClass = res;

    })

  }
  clickBtn(event) {
    document.querySelector('.btn-teacher.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  }
  async addForm() {
    const alert = await this.alert.create({
      cssClass: 'add-form',
      header: 'Thêm Class',
      inputs: [{
          name: 'id',
          type: 'text',
          placeholder: 'ID class',
        },
        {
          name: 'idobj',
          type: 'text',
          placeholder: 'ID môn học',
        },
        {
          name: 'max',
          type: 'text',
          placeholder: 'Số lượng sv tối đa',
        },
        {
          name: 'idsv',
          type: 'text',
          placeholder: 'ID Sinh viên',
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Tên sv',
        }
      ],
      buttons: [{
        text: 'Hủy',
        role: 'cancel',
        cssClass: 'cancel-alert',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Đồng ý',
        handler: (res) => {
          this.fbs.Admin_add_class(res.id, res.idobj, res.max, res.idsv, res.name).then((mes) => {
            console.log(mes);
            this.init()
          })
        }
      }]
    });

    await alert.present();
  }

  async showInfo(item) {
    // var students=[]
    // item.list.forEach(element => {
    //   {
    //     students.push(element)
    //   }
    // })
    const alert = await this.alert.create({
      header: 'Infor',
      inputs: [{
          disabled: true,
          value: 'ID: ' + item.property.id
        },
        {
          disabled: true,
          value: 'ID môn học: ' + item.property.idobj
        },
        {
          disabled: true,
          value: 'Số lượng tối đa: ' + item.property.max
        },
        {
          disabled: true,
          value: 'DS sv: ' + item.list
        },
      ],
      buttons: [{
        text: 'Đóng'
      }]
    });
    await alert.present();
  }

  // async editForm() {
  //   const alert = await this.alert.create({
  //     cssClass: 'edit-form',
  //     header: 'Thay đổi thông tin',
  //     inputs: [
  //       {
  //         name: 'name',
  //         type: 'text',
  //         placeholder: 'họ và tên',
  //       },
  //       {
  //         name: 'id',
  //         type: 'text',
  //         placeholder: 'id',
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Hủy bỏ',
  //         role: 'cancel',
  //         cssClass: 'cancel-alert',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Đồng ý',
  //         handler: () => {
  //           console.log('Confirm Ok');
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
  async delete(id) {
    const alert = await this.alert.create({
      header: 'Bạn có muốn xóa không',
      subHeader: 'Bạn sẽ không thể khôi phục thao tác này',
      buttons: [{
          text: 'Hủy',
          role: 'huy',
          cssClass: 'cancel-alert',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Đồng ý',
          handler: () => {
            this.fbs.Admin_delete_class(id).then((mes) => {
              console.log(mes);
              this.init()
            })
          }
        }
      ]
    })
    await alert.present();
  }
  filterSearch(searchBar) {
    var value = searchBar.currentTarget.value.toUpperCase();
    if (!value) {
      this.init();
      return;
    }
    this.ListClass = this.ListClass.filter(grid => {
      if (grid.property.id || value) {
        return grid.property.id.toUpperCase().indexOf(value) > -1;
      }
    });
  }
}