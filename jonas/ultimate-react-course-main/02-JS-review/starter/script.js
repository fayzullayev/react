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


322 --- Входящие документы (done)
1502 ----- Исходящий документ (done)
2 --- Внутренние (done)
78 --- Все заявки (done)
148 --- Все проекты (done)

padding: 0 5px;
    min-width: 120px;
    font-style: normal;
    color: #979797;






df_util  - Get_St_Status_Count

ntd_releases_trg_st_hist






odilfayz22@gmail.com



{
    "curr_date": "-98",
    "color": null,
    "done_date": null,
    "subsystem_ids": null,
    "description": null,
    "subsystem_names": null,
    "line_id": "2327",
    "fio": "Ð¥Ð¾ÑˆÐ¸Ð¼Ð¾Ð² Ð.Ð .",
    "inspector_id": "62",
    "action_id": "64505",
    "file_ids": null,
    "begin_type": null,
    "theme": "322 test Y",
    "text": "test pod",
    "deadline": "2023-03-30 00:00:00.0",
    "is_done_flag": "N",
    "priority_name": "Ð¡Ñ€ÐµÐ´Ð½Ð¸Ð¹",
    "reg_num": "322",
    "author": "Ð‘ÐµÐ»ÐµÑ†ÐºÐ°Ñ Ðž.Ð.",
    "status_name": "Ð¡Ð¾Ð·Ð´Ð°Ð½Ð¾",
    "system_id": null,
    "is_archive_flag": "N",
    "system_name": null,
    "task_state": "CREATE",
    "creation_date": "2023-03-09 14:33:39.0",
    "classification": "TASK",
    "priority": "4",
    "created_by": "62",
    "classific_name": "Ð—Ð°Ð´Ð°Ñ‡Ð°",
    "plan_time": null,
    "date_begin": "2023-03-09 00:00:00.0",
    "done_user_id": null,
    "to_user_id": "443",
    "parent_id": null,
    "days": "22",
    "progress": "0",
    "order_num": "1",
    "has_child": "0",
    "rn": "1",
    "author_id": "62",
    "executor_id": "443"
}