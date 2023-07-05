DF_RC_LABEL_PROTOCOLS - table

Write_Label_Protocol - procedure

DF_RC_LABEL_PROTOCOLS_SQ - sequence

DF_RC_LABEL_PROTOCOLS_V - view

DF_RC_LABEL_PROTOCOL - synonym


    "target": "http://10.50.50.139:7003/api",


{
  "name": "docflow3",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {}
}



62653
65765

30.05.2023 13:06:15

DF_S_LABELS


https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/
https://www.w3schools.com/go/go_conditions.php




//Add_Rc_Condition


create table DF_RC_LABEL_PROTOCOLS
(
  id            NUMBER not null,
  label_id      NUMBER not null,
  state         VARCHAR2(1) not null,
  creation_date DATE not null,
  updated_by    NUMBER(15) not null,
  rc_id         NUMBER not null,
)


create or replace view df_s_conditions_v as
Select t.Id,
         t.Parent_Id,
         t.Name,
         Core_Util.Get_Fio_Short(t.Created_By, 1) Fio,
         t.State,
         t.Created_By,
         t.Creation_Date,
         t.Updated_By,
         t.Update_Date,
         t.Color,
         t.Text_Color,
         Core_Util.Get_Dict_Name('STATES', t.State) State_Name,
         (Select Count(1) From Df_s_Conditions d Where d.Parent_Id = t.Id And d.State = 'A') Has_Child
    From Df_s_Conditions t;


{
    "id": "142",
    "state": "Y",
    "creation_date": "2023-06-14 16:14:43.0",
    "rn": "1",
    "fio": "Белецкая О.А.",
    "rc_id": "65765",
    "label_id": "1401"
}

открипил 
закрепил 

1402




DF_MY_DOC_OUT_V







import {HdUpgradesComponent} from "@app/helpdesk/hd-upgrades/hd-upgrades.component";

import {HdUpgradesComponent} from "@app/helpdesk/hd-upgrades/hd-upgrades.component";

,
  {
    path: 'upgrades',
    component: HdUpgradesComponent,
    canActivate: [AuthGuard],
  },


  //Установлен
  //Ожидает установки
  //Устанавливается



CLIENT_UPG_TABS

fas fas-history

SUCCESS
ERROR
"IN_PROGRESS"
WAIT


Set_Install_Contractor_Report..


INSTALL_STATUS_CODE


34500

Error - Ошибка
Succes


label metki

"target": "http://10.50.50.139:7003/api",

http://git.fido.uz/fido-biznes/dev/docflow-3.0/docflow3/-/project_members?tab=0




eskini upgradeni o'chirib yangi



1502 ----- Исходящий документ (done)
322 --- Входящие документы (done)
2 --- Внутренние (done)
78 --- Все заявки (done)
148 --- Все проекты (done)

padding: 0 5px;
    min-width: 120px;
    font-style: normal;
    color: #979797;




getTasks

.task-name{}

df_util  - Get_St_Status_Count


count






odilfayz22@gmail.com





