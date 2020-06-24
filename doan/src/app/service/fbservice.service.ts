import { Injectable, isDevMode } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
// import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class FbserviceService {

  private db = firebase.database();
  private auth = firebase.auth();
  // private ten: 'huy';
  // private tuoi: '24';
  // check = false;
  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.signInWithPopup(provider).then(res => {
        var email = res.user.email;
        if (email == this.admin) {
          resolve('admin');
        }
        else {
          // this.GetTypeofUser(email);
          // if(this.check == false)
          // {
          //   resolve('err');
          // }
          // else{
          resolve(this.GetTypeofUser(email));
          // this.check=false;
        }

      })
    })
  }

  GetCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged((user)=>{
        resolve(user)
      })
      
    })
  }

  admin: 'duchuy96itc@gmail.com'

  CreateAccount(email, pwd) {
    return new Promise((resolve, reject) => {
      this.auth.createUserWithEmailAndPassword(email, pwd).catch(function (error) {
        var errorcode = error.code;
        var errormessage = error.message;
        console.log('code: ' + errorcode + ', message: ' + errormessage);
      }).then(() => {
        resolve('Successful created account : ' + email);
      })
    })
  }


  Login(email, pwd) {
    return new Promise((resolve, reject) => {
      this.auth.signInWithEmailAndPassword(email, pwd).then(() => {


        // if (email == this.admin) {
        //   resolve('admin');
        // }
        // else {
        // this.GetTypeofUser(email);
        // if(this.check == false)
        // {
        //   resolve('err');
        // }
        // else{
        resolve(this.GetTypeofUser(email));
        // this.check=false;
        // }


      })
    })
  }

  GetTypeofUser(email) {
    var type = 'shit'
    return new Promise((resolve, reject) => {
      this.db.ref('account').orderByChild('uid').once('value').then((res) => {
        var list = [];
        var allItem = res.val();
        for (let key in allItem) {
          list.push(allItem[key]);
        }
        list.forEach(element => {
          if (element.email == email && element.status == 'act') {
            // this.check = true;
            type = element.type;
          }
        });
        resolve(type);
      })
    })
  }

  Logout() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        resolve('Successfull logout');
      });
    });
  }

  ForgotPwd(email) {
    this.auth.sendPasswordResetEmail(email);
  }

  // Admin_add(id, name, email, phone, password){

  //   admin.auth().createUser({
  //     uid : id,
  //     displayName : name,
  //     phoneNumber : phone,
  //     email : email,
  //     password : password
  //   }).then((res)=>{
  //     console.log('successfull created new user : ' + res.displayName);

  //   })
  // }

  //////////////////////////////////////////////////////////

  GetListGV() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('man').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          if (allItem[key].type == 'gv') {
            list.push(allItem[key]);
          }
          // list.push(allItem[key]);
        }
      }).then(() => {
        resolve(list);
      })
    })

  }

  Admin_add_gv(id, name, email) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).set({
        id: id,
        type: 'gv',
        name: name,
        email: email
      }).then(() => {
        resolve('Successfull Added GV: ' + id);
      })
    })
  }

  Admin_delete_gv(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).remove().then(() => {
        resolve('Successfull Deleted GV with id: ' + id);
      })
    })
  }

  Admin_update_gv(id, name, email) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).set({
        id: id,
        type: 'gv',
        name: name,
        email: email
      }).then(() => {
        resolve('Successfull Updated GV: ' + id);
      })
    })
  }
  ////////////////////////////////////////
  GetListSV() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('man').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          if (allItem[key].type == 'sv') {
            list.push(allItem[key]);
          }
          // list.push(allItem[key]);
        }
      }).then(() => {
        resolve(list);
      })
    })

  }

  Admin_add_sv(id, name) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).set({
        id: id,
        type: 'sv',
        name: name,
        email: null
      }).then(() => {
        resolve('Successfull Added SV: ' + id);
      })
    })
  }

  Admin_delete_sv(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).remove().then(() => {
        resolve('Successfull Deleted SV with id: ' + id);
      })
    })
  }

  Admin_update_sv(id, name) {
    return new Promise((resolve, reject) => {
      this.db.ref('man/' + id).set({
        id: id,
        type: 'sv',
        name: name,
        email: null
      }).then(() => {
        resolve('Successfull Updated SV: ' + id);
      })
    })
  }
  ////////////////////////////////////////
  Admin_add_account(id, type, email) {
    return new Promise((resolve, reject) => {
      this.db.ref('/account/' + id).set({
        email: email,
        type: type,
        status: 'not act'
      }).then(() => {
        resolve('Successfull Added Account: ' + email);
      })
    })
  }

  Admin_update_account(id, email, status, type) {
    return new Promise((resolve, reject) => {
      this.db.ref('/account/' + id).set({
        email: email,
        status: status,
        type: type
      }).then(() => {
        resolve('Successfull Updated Account: ' + email);
      })
    })
  }

  Admin_delete_account(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('account/' + id).remove().then(() => {
        resolve('Successfull Deleted account with id: ' + id);
      })
    })
  }
  /////////////////////////////////////////
  GetListObject() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('object').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          // if(allItem[key].type=='sv'){
          //   list.push(allItem[key]);
          // }
          list.push(allItem[key]);
        }
      }).then(() => {
        resolve(list);
      })
    })

  }
  Admin_add_object(id, name, tcnumber, lsnumber, start, end) {
    return new Promise((resolve, reject) => {
      this.db.ref('object/' + id).set({
        id: id,
        name: name,
        tcnumber: tcnumber,
        lsnumber: lsnumber,
        start: start,
        end: end
      }).then(() => {
        resolve('Successfull Added Object: ' + name);
      })
    })
  }

  Admin_delete_object(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('object/' + id).remove().then(() => {
        resolve('Successfull Deleted object: ' + id);
      })
    })
  }

  Admin_update_object(id, name, tcnumber, lsnumber, start, end) {
    return new Promise((resolve, reject) => {
      this.db.ref('object/' + id).set({
        id: id,
        name: name,
        tcnumber: tcnumber,
        lsnumber: lsnumber,
        start: start,
        end: end
      }).then(() => {
        resolve('Successfull Updated object to: ' + name);
      })
    })
  }

  /////////////////////////////////////////////////////
  GetListClass() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('class').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          list.push(allItem[key]);
        }
      }).then(() => {
        resolve(list);
      })
    })
  }

  Admin_add_class(id, idobj, max, idsv, name) {
    return new Promise((resolve, reject) => {
      this.db.ref('class/' + id + '/property').set({
        id: id,
        idobj: idobj,
        max: max
      })
      this.db.ref('class/' + id + '/list').push({
        idsv: idsv,
        name: name
      }).then(()=>{
        resolve('successful add sv ' + name + ' to class '+ id)
      })
    })
  }

  Admin_delete_class(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('class/' + id).remove().then(() => {
        resolve('Successfull Deleted object: ' + id);
      })
    })
  }
  
  // Admin_update_class(id, idobj, max, idsv, name) {
  //   return new Promise((resolve, reject) => {
  //     this.db.ref('class/' + id + '/property').set({
  //       id: id,
  //       idobj: idobj,
  //       max: max
  //     })
  //     this.db.ref('class/' + id + '/list').push({
  //       idsv: idsv,
  //       name: name
  //     }).then(()=>{
  //       resolve('successful add sv ' + name + ' to class '+ id)
  //     })
  //   })
  // }
  ////////////////////////////////////////////////////
  GetListSchedule() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('schedule').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          list.push(allItem[key]);
        }
      }).then(() => {
        resolve(list);
      })
    })
  }
  Admin_add_schedule(id, idclass, idteacher, day, lsstart, lsend, room) {
    return new Promise((resolve, reject) => {
      this.db.ref('schedule/' + id).set({
        id: id,
        idclass: idclass,
        idteacher: idteacher,
        day: day,
        lsstart: lsstart,
        lsend: lsend,
        room: room
      }).then(() => {
        resolve('Successfull Added Schedule: ' + id);
      })
      this.db.ref('room').push({
        id: room,
        day: day,
        start: lsstart,
        end: lsend
      })
    })
  }
  Admin_delete_schedule(id) {
    return new Promise((resolve, reject) => {
      this.db.ref('schedule/' + id).remove().then(() => {
        resolve('Successfull Deleted schedule: ' + id);
      })
    })
  }

  Admin_update_schedule(id, idclass, idteacher, day, lsstart, lsend, room) {
    return new Promise((resolve, reject) => {
      this.db.ref('schedule/' + id).set({
        id: id,
        idclass: idclass,
        idteacher: idteacher,
        day: day,
        lsstart: lsstart,
        lsend: lsend,
        room: room
      }).then(() => {
        resolve('Successfull Updated schedule : ' + id);
      })
    })
  }

  Test(id, max, start, end, idsv, name)
  {
    this.db.ref('class/'+id+'/property').set({
      max: max,
      start: start,
      end: end
    })
    this.db.ref('class/'+id+'/list').push({
      idsv: idsv,
      name: name
    })
  }

  GetFreeTeacher(day, lsstart, lsend) {
    return new Promise((resolve, reject) => {
      var ListFree = [];
      var ListSchedule
      var ListTeacher

      this.GetListGV().then((res)=>{
        ListTeacher = res
        this.GetListSchedule().then((res)=>{
          ListSchedule = res
          
          ListTeacher.forEach(teacher => {
            var check = true
            ListSchedule.forEach(element => {
              if (element.idteacher == teacher.id && element.day == day ) {
                if(  (parseInt(element.lsend) > parseInt(lsstart) && parseInt(element.lsend) <= parseInt(lsend) ) 
                || (parseInt(element.lsstart) >= parseInt(lsstart) && parseInt(element.lsstart) < parseInt(lsend) ) ){
                  check = false
                }
              }
            });
            if(check){
              ListFree.push(teacher)
            }
          });
        })
        
      }).then(()=>{
        resolve(ListFree)
      })
    })
  }
  

  AddRoom(id, day, start, end) {
    return new Promise((resolve, reject) => {
      this.db.ref('room/').push({
        id: id,
        day: day,
        start: start,
        end: end
      }).then(() => {
        resolve('success : ' + id)
      })
    })
  }
  GetListUsed() {
    return new Promise((resolve, reject) => {
      var list = [];
      this.db.ref('room').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          list.push(allItem[key]);
        }
      }).then(() => {
        console.log(list);
        
        resolve(list);
      })
    })
  }

  ListRoom = ['A001', 'A002', 'A003', 'A101', 'A102', 'A103', 'A201', 'A202', 'A201']
  GetRoomFree(day, lsstart, lsend) {
    return new Promise((resolve, reject)=>{
      var ListUsed = []
      var ListRoomFree=[]
      this.db.ref('room').orderByChild('uid').once('value').then((res) => {
        var allItem = res.val();
        for (let key in allItem) {
          ListUsed.push(allItem[key]);
        }
        this.ListRoom.forEach(room => {
          var check = true
          ListUsed.forEach(element => {
            if ( element.id == room && element.day == day) {
              if( (parseInt(element.end) > parseInt(lsstart) && parseInt(element.end) <= parseInt(lsend)) 
              || (parseInt(element.start) >= parseInt(lsstart) && parseInt(element.start) < parseInt(lsend)) ){
                check = false
              }
            }
          });
          if(check){
            ListRoomFree.push(room)
          }       
        });
      }).then(()=>{
        resolve(ListRoomFree)  
      })
    })
  }
  ///////////////////////////////////////////////////
  GetListStudentInClass(id){
    return new Promise((resolve, reject)=>{
      this.GetListClass().then((res)=>{
        var list
        list = res
        var listStudent =[]
        list.forEach(element => {
          if(element.property.id == id)
          {
            for(let key in element.list){
              listStudent.push(element.list[key])
            }
          }
        });
        resolve(listStudent)
      })
    })
  }

  Add_Attendance(id, date, students){
    this.db.ref('attendance/'+id+'-'+date).set({
      id: id,
      date: date,
      students: students
    })
  }

  GetCountbyIDandDay(id, day){
    return new Promise((resolve, reject)=>{
      this.db.ref('attendance').orderByChild('uid').once('value').then((res)=>{
        var allItem= res.val()
        var list = []
        for(let key in allItem){
          if(allItem[key].id == id && allItem[key].date == day){
            list.push(allItem[key].students)
          }
        }
        resolve(list)
      })
    })
  }
  ////////////////////////////////////////////////////

  GetInfoByClass(){
    return new Promise((resolve, reject)=>{
      this.db.ref('attendance').orderByChild('uid').once('value').then((res)=>{
        var list=[]
        var listattendance
        listattendance = res.val()
        for(let key in listattendance){
          list.push(listattendance[key])
        }
        resolve(list)
      })
    })
  }

  ////////////////////////////////////////////////////
  GetItem() {
    var list = [];
    this.db.ref('gv').orderByChild('uid').once('value').then(function (snapshot) {
      var allItem = snapshot.val();
      for (let key in allItem) {
        list.push(allItem[key]);
      }
    });
    return list;
  }
  constructor(private afAuth: AngularFireAuth) { }
}
