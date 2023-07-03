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




getTasks

.task-name{}


{
    "report_file_name": null,
    "release_id": "46",
    "subsystems_name": null,
    "install_date_end": null,
    "description": "11",
    "install_status_change_date": "2023-06-20 10:36:50.0",
    "release_file_name": "KGRC.rar",
    "install_status_code": "IN_PROGRESS",
    "contractor_name": "TBC Bank",
    "send_pck_code": "196",
    "report_file_id": null,
    "readme_file_id": null,
    "send_date": "2023-06-02 00:00:00.0",
    "release_file_id": "48007991",
    "acomp_text": "11",
    "id": "166",
    "install_read_me": null,
    "system_name": "IABS",
    "install_status_name": "Ð£ÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÐµÑ‚ÑÑ",
    "report_file_size_read": null,
    "install_date_begin": "2023-06-20 10:36:50.0",
    "contractor_id": "418",
    "release_code": "11",
    "install_report": null,
    "readme_file_name": null,
    "rn": "1"
}



work with file



.full-width {
  width: calc(100% - 30px);
  padding: 2px 10px 0 15px;
  height: 100%;
}

mat-card {
  width: 100%;
  padding: 0;
}

mat-toolbar {
  background: #f8fafc;
  min-height: unset;
  height: 30px;
  /*color: #4f46e5;*/
  /*border-radius: 5px;*/
}

.doc-card-task-block i {
  color: var(--gd-color-change-accent2);
}

button {
  outline: 0;
}

h5 {
  font-size: 11pt;
}

.card-name {
  padding: 0 5px;
  min-width: 120px;
  font-style: normal;
  color: #979797;
}

mat-card-header {
  margin-bottom: unset;
  height: 30px;
  border-left: 1px solid #0000001c;
  padding: 0 0 0 10px;
}

.card-result {
  max-width: 200px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-style: normal;
}

.info-card i {
  margin-left: 10px;
  margin-right: 10px;
}

.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {
  right: -1px;
  top: -3px;
  width: 20px;
  height: 20px;
}

.mat-badge-content {
  background: green;
  color: white;
}

.mat-drawer-container mat-drawer-content.mat-drawer-content {
  overflow-y: auto !important;
  max-height: 100%;
  min-width: calc(61vw - 58px);
  min-width: -moz-calc(61vw - 58px);
  min-width: -webkit-calc(61vw - 58px);
}

.file-module {
  width: 98%;
  padding: 0 0 0 5px;
  margin: 10px;
  height: 77vh;
  overflow-y: auto;
  transition: all 0.5s linear;
}

.file-hide {
  font-size: 21px;
  background: var(--gd-color-change-back3);
  display: flex;
  justify-content: flex-end;
  padding-top: 3px;
  height: 24px;
  padding-bottom: 3px;
  z-index: 99;
  align-items: center;
}

.file-hide i {
  display: block;
  color: var(--gd-color-change-fontlight);
  margin-right: 9px;
  cursor: pointer;
}

.file-module.hide-file-module {
  width: 0;
  height: 0;
  margin-right: 0;
  padding: 0;
}

.cont-file-desc {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.desc-doc {
  transition: all 0.5s linear;
  width: 100%;
}

.desc-doc.width-desc-doc {
  width: 100%;
}

.file-module-button {
  font-size: 11pt;
  border: 1px solid #fff;
  line-height: 11pt;
  padding: 2px 5px;
  min-width: 167px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
}

.file-module-button:hover {
  background: #ffffff29;
}

.file-module-button.hide {
  display: none;
}

.user-doc-operation-mat-cont {
  width: 40%;
  height: 100%;
  padding: 7px 0 11px 5px;
  box-shadow: none;
  background: var(--gd-color-change-back3);
}

.mat-panel-title {
  background: #3f51b5;
}

/* .mat-panel-title:hover {
  background: #3f51b5 !important;
} */

::ng-deep .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:hover:not([aria-disabled=true]) {
  background: #f4f5f7;
}

::ng-deep .mat-expansion-panel-header.mat-expanded:focus, ::ng-deep .mat-expansion-panel-header.mat-expanded:hover {
  background: #f4f5f7 !important;
}

mat-panel-title {
  color: #525558;
  font-size: 12px;
  font-weight: 500;
}

::ng-deep .mat-expansion-indicator::after {
  color: #525558 !important;
}

.mat-expansion-panel-header {
  height: 27px;
  background: #f4f5f7;
  border-top: 1px solid #0000001c;
  border-bottom: 1px solid #0000001c;
}

.resize-anchor {
  position: absolute;
  right: 0;
  height: 100%;
  min-width: 5px;
  background: #ababab;
  cursor: col-resize;
  z-index: 1000;
}

.resize-anchor:hover {
  background: #5782ff !important;
}

.resize-anchor::after {
  position: absolute;
  content: '';
  background: #fff;
  min-width: 1px;
  height: 100%;
  left: 2px;
}

.resize-anchor::before {
  position: absolute;
  content: '';
  background: #fff;
  min-width: 1px;
  height: 100%;
  right: 2px;
}

.resize-block {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5px 5px 5px;
  width: 100%;
}

.resize-block-outer {
  flex-grow: 3;
  user-select: none;
  overflow: auto;
  position: relative;
}

mat-drawer-container[resizeContainer] {
  /* user-select: none; */
  background-color: var(--gd-color-change-back3) !important;
}

div[resizeAnchor] {
  touch-action: none;
}

mat-drawer-content[resizeSideContent] {
  margin-left: auto;
  width: 50%;
}

.right__block50 {
  width: 50%;
  margin-left: auto !important;
}

/* .right__block50 {
  width: 100%;
} */

.resize__block70 {
  position: absolute;
  left: 0;
}

.main__container70 {
  position: relative;
}

:host ::ng-deep .mat-ripple.mat-tab-label-active {
  background: #fff;
}

.user-doc-comment {
  position: absolute;
  display: flex;
  right: 0;
  z-index: 999;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  max-width: 30vw;
  max-height: 100%;
  transition: transform 0.2s linear;
  flex-direction: row;
  height: 100%;
}

.user-doc-comment-header {
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px;
  font-size: 14px;
  background: var(--gd-color-change-back1);
  color: var(--gd-color-change-font1);
  border-top-left-radius: 10px;
  border-left: 1px solid #0000001c;
  border-top: 1px solid #0000001c;
  position: relative;
  z-index: 5;
  overflow: hidden;
  flex-direction: column;
}

.user-doc-comment-header::after {
  content: "";
  background: var(--gd-color-change-accent2);
  border-radius: 50%;
  position: absolute;
  right: -35px;
  bottom: -56px;
  width: 90px;
  height: 90px;
  z-index: -1;
}

.user-doc-comment-header p {
  margin: 0;
  writing-mode: vertical-rl;
  padding: 15px 0;
}

.user-doc-comment-header span {
  cursor: pointer;
  color: var(--gd-color-change-accentlight);
}

.user-doc-comment-resize {
  max-width: 30vw;
  width: 100%;
  border: 1px solid #0000001c;
  /* transition: max-height .2s linear;
  max-height: 60vh; */
  min-width: 300px;
}

.show-file-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gd-color-change-accent2);
  color: var(--gd-color-change-accent2);
  background: var(--gd-color-change-backlight);
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  border-radius: 5px;
  padding: 0 10px;
  width: 150px;
}

.show-file-btn:hover {
  background: var(--gd-color-change-accent2) !important;
  color: white !important;
}

.show-file-btn span:nth-child(1) {
  display: block;
  font-size: 17px;

}

.show-file-btn span:nth-child(2) {
  display: block;
  font-size: 13px;
  margin-left: 2px;
}

app-user-doc-executors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

b {
  font-weight: 500;
  font-style: italic;
}



.oper-list {
  display: flex;
  width: 100%;
  padding: 0;
  min-height: 45px;
  background: var(--gd-color-change-back2);
  font-size: 13px;
  border-bottom: 1px solid var(--gd-color-change-border1);
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
  background-color: #FFFFFF;
  flex-direction: row;
  justify-content: flex-start;
}

.oper-list:hover {
  background-color: #f6f7f9 !important;
  border-radius: 5px;
}

.oper-list-selected {
  background-color: #eeefff !important;
  border-radius: 5px;
}

mat-card-content {
  margin-bottom: 12px !important;
  margin-top: 5px !important;
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  background: #fdfdff;
  border-left: 1px solid var(--gd-color-change-border1);
}

.user-doc-action-text-trunc {
  width: 95%;
  font-size: 13px;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #525558;
  font-weight: 500;
}

.oper-list i {
  padding: 0 0 0 10px;
}
.oper-list-details_main {
  display: flex;
}
.oper-list-details_l {
  min-width: 262px;
}
.oper-list-details_r {

}
.oper-list-details {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  padding: 0 0 0 8px;
  color: #262626;
  min-height: 20px;
  flex-wrap: nowrap;
  font-style: italic;
  justify-content: flex-start;
  font-size: 12px;
}

.oper-header-users {
  width: calc(100% - 130px);
  place-content: flex-start space-between;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-height: 45px;
}

.oper-date-and-task {
  width: 95px;
  place-content: flex-start space-between;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #939393;
  font-size: 12px;
  border-left: 1px solid #d8dadc;
}

mat-progress-bar {
  height: 2em;
  border-radius: 3px;
  background-color: steelblue;
}

::ng-deep .mat-progress-bar-fill::after {
  background-color: #8282c4;
}

::ng-deep .mat-progress-bar-buffer {
  background: #E4E8EB;
}

.file-icons {
  width: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  background: #ffffff;
  border-radius: 3px;
  color: #5858bb;
  /*border: 1px solid #5858bb;*/
  padding: 3px;
  font-weight: 500;
  height: 25px;
  font-size: 17px;
}

.file-text-content {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;
  height: 30px;
}

.file-card-name {
  color: #525558;
  width: 315px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: 1px solid #e3e3e3;
  padding: 0 15px;
}

mat-option {
  border-bottom: 1px solid #8282c44f;
  height: 30px !important;
}

.oper-author-name {
  background: #ffffff;
  border-radius: 3px;
  font-size: 13px;
  color: #8282c4;
  border: 1px solid #5858bb;
  padding: 3px;
  font-weight: 500;
}

.oper-file-content {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.oper-files {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1px 10px;
}

.oper-top-header-content {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  padding: 0 10px;
  background: var(--gd-color-change-back2);
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}

::ng-deep .form-mat-select-content .mat-form-field-appearance-outline .mat-form-field-outline-end {
  border: 1px solid var(--gd-color-change-accent2) !important;
  border-radius: 5px !important;
}

::ng-deep .form-mat-select-content .mat-form-field-appearance-outline .mat-form-field-outline-start {
  border: unset !important;
}

:host ::ng-deep .form-mat-select-content .mat-form-field-appearance-outline .mat-form-field-outline {
  background-color: var(--gd-color-change-back3);
}

:host ::ng-deep .mat-select-value {
  color: var(--gd-color-change-accent2);
}

:host ::ng-deep .mat-drawer-container {
  color: var(--gd-color-change-fontlight);
}

::ng-deep .form-mat-select-content .mat-select-value-text {
  color: var(--gd-color-change-accent2);
}

.oper-file-button {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.oper-list-row-header {
  margin: 0 10px;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  height: calc(100% - 90px);
}

.oper-list-content {
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
}

.oper-list-row-content {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  place-content: flex-start center;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 103px);
}

.oper-action-container {
  transition: all 0.5s;
}

.oper-action-content {
  transition: all 0.5s;
}

.oper-theme-tooltip {
  font-size: 18px;
}

.doc-card-full-content-b {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #f1f2f4;
  border-radius: 10px;
  padding: 5px 0;
  background-color: white;
  box-shadow: 1px 1px 7px 3px rgb(183 192 206 / 20%);
}

.doc-card-full-content-action {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #f1f2f4;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 1px 1px 7px 3px #b7c0ce33;
  flex-direction: column;
  padding-top: 5px;
}

.user-doc-action-button {
  display: flex;
  align-items: center;
  padding: 0 5px 0 0;
  justify-content: flex-end;
  margin-left: 5px;
  margin-right: 10px;
}

.user-doc-action-button button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background: #e1e4ff;
  color: #7882ff!important;
  border: 1px solid #d8dbff;
  padding: 0 4px;
  min-width: 35px;
  font-size: 12px;
}


.doc-card-block-header {
  width: 100%;
  padding: 2px 15px;
  border-bottom: 1px solid #bdbdbd;
  margin: 0 0 15px 0;
  font-size: 15px;
  font-weight: 500;
  color: #5e5e5e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.doc-card-block-header button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin: 0 5px;
}

.doc-card-task-block {
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 0 15px;
}

.doc-card-info-block {
  overflow: auto;
  width: 100%;
  height: 100%;
}

.card-result-theme {
  display: flex;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  padding: 10px;
  width: calc(100% - 4px);
  overflow: auto;
  max-height: 150px;
}

.oper-list-details-theme {
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  padding: 0 0 0 8px;
  color: #262626;
  min-height: 22px;
  flex-wrap: nowrap;
  font-style: italic;
  justify-content: flex-start;
  position: relative;
  font-size: 13px;
  height: 100%;
  margin-top: 6px;
}

.card-name-theme {
  background-color: white;
  z-index: 1;
  min-width: 50px;
  position: absolute;
  left: 30px;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  top: -10px;
}

.user-doc-task-buttons {
  border-left: 1px solid #d8dadc;
  min-height: 45px;
  min-width: 90px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.user-doc-file-list {
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 0 15px;
}

.user-doc-emp-list {
  overflow: auto;
  width: 100%;
  height: calc(100% - 45px);
  padding: 0 15px;
  position: relative;
}

.user-doc-action-list {
  width: 100%;
  height: 100%;
  padding: 0 15px;
  overflow: hidden;
}

.user-doc-file-content {
  transition: all 0.5s;
  display: none;
  opacity: 0;
  flex: 1 1 100%;
  box-sizing: border-box;
  max-width: 50%;
}

.user-doc-assign-content {
  transition: all 0.5s;
  display: flex;
  opacity: 1;
}

.user-doc-left-side {
  transition: all 0.5s;
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  max-width: 50%;
  opacity: 1;
  width: 100%;
}

.user-doc-main {
  width: calc(100% - 40px) !important;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
}

#doc-emp-content1 {
  font-size: 14px;
  font-weight: 400;
  max-width: 99%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #d8d8d8;
}

#doc-emp-content2 {
  font-size: 14px;
  font-weight: 400;
  max-width: 99%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-bottom: 1px solid #d8d8d8;
}

.doc-detail-content {
  transition: all 0.5s;
  display: flex;
  opacity: 1;
}

.doc-task-content {
  transition: all 0.5s;
  opacity: 1;
}

.user-doc-task-action {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
}

.user-doc-task-action button {
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffeaa4;
  color: #bd9001;
  border: 1px solid #ffd13d;
  font-size: 13px;
  width: 30px;
  min-width: unset;
  padding: 0;
  margin: 0 5px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

.user-doc-task-action button i {
  color: #bd9001;
  padding: unset;
}


.row-highlight {
  background-color: #babeff !important;
}

tr.mat-header-row {
  height: 45px !important;
}

.mat-row {
  height: 30px !important;
}

.mat-row:hover {
  background-color: #f6f6ff !important;
}

th.mat-header-cell {
  border-right: 1px solid #dddfe0;
  text-align: center;
}

.mat-cell {
  border-right: 1px solid #f2f3f3;
  padding-right: unset !important;
}

th.mat-header-cell:first-of-type, td.mat-cell:first-of-type, td.mat-footer-cell:first-of-type {
  padding-left: 0 !important;
  min-width: 30px;
}

.doc-task-progress {
  border: 2px solid #8088f68a;
  border-radius: 3px;
  margin: 0 5px;
  position: relative;
  z-index: 1;
  font-weight: 500;
}

.doc-task-progress-line {
  position: absolute;
  background-color: #727cf5a6;
  height: 100%;
  z-index: -1;
}

.task-text-content {
  max-width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-name {
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.task-expandable-button {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.task-expandable-button button {
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.task-main-content {
  font-size: 13px;
  border: 1px solid #d8dadc;
  width: 100%;
}
.mat-row:nth-child(even){
  background-color: #f1f2ff;
}

.mat-row:nth-child(odd){
  background-color: white;
}

.user-doc-task-hours {
  width: 100%;
  padding: 0 15px;
  display: flex;
}

.user-doc-task-hours button {
  margin: 0 10px;
}

.user-doc-task-hours button {
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 5px 0;
}

.user-doc-task-executors {
  color: #0013f5;
  font-weight: 500;
}

.user-doc-warnings {
  color: red !important;
}

.user-doc-author {
  padding: 0 5px;
  color: #979797;
  font-size: 12px;
}

.user-doc-author:hover {
  color: steelblue !important;
}

.user-doc-emp-state {
  font-size: 11px;
  border-radius: 5px;
  padding: 10px 10px;
  font-weight: 500;
  margin: 2px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 90px;
  justify-content: space-between;
  height: 21px;
}

.user-doc-waiting {
  background-color: #e1e1e1 !important;
  border: 1px solid #c5c5c5;
  color: #787878;
}

.user-doc-waiting i {
  color: #787878;
}

.user-doc-accept {
  background-color: #b3e8ff !important;
  border: 1px solid #7ed8ff;
  color: #007bb1;
}

.user-doc-accept i {
  color: #007bb1;
}

.user-doc-cancel {
  color: #c75d1f;
  background: #ffd5bc;
  border: 1px solid #e9b79a;
}

.user-doc-cancel i {
  color: #c75d1f;
}

.user-doc-done {
  background-color: #c7ffc3 !important;
  border: 1px solid #8bed86;
  color: #0ab900;
}

.user-doc-done i {
  color: #0ab900;
}

.doc-card-full-content-b i {
  padding: 0 5px 0 0;
}

.oper-asg-status {
  max-width: 70px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.doc-action-state {
  display: flex;
  align-items: center;
  padding: 0 5px;
  font-weight: 500;
  color: #626262;
  font-size: 12px;
}

.doc-action-type {
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0 0 5px;
}

.doc-action-type-rows {
  margin-left: 5px;
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 20px;
}

.doc-action-row {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.doc-action-type i {
  padding: 0 5px;
}

.oper-button-content {
  height: 35px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.doc-action-middle {
  width: calc(100% - 45px);
  flex-direction: row;
  box-sizing: border-box;
  display: flex;
  border-left: 1px solid #e7e8e9;
  margin-left: 2px;
}

::ng-deep .doc-action-buttons .mat-mdc-menu-content {
  min-width: 160px;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.oper-action-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: unset !important;
  font-size: 12px;
  height: 25px;
  width: 35px;
  padding: 0 !important;
  color: #4a58ff;
  background: #fff;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
}

.oper-action-menu i {
  padding: 0 10px;
}

.doc-card-vote-block {
  overflow: auto;
  width: 100%;
  height: 100%;
  padding: 0 15px;
}

.doc-card-block-header.file {
  padding: 3px 15px;
}

.main-button {
  background: #e0f5ff;
  color: #4570d1;
  border: 1px solid #b6e2f7;
}

.secondary-button {
  background: #fff6d6;
  color: #ab8d24;
  border: 1px solid #f7e8b2;
}

.main-button i, .secondary-button i {
  font-size: 14px;
  line-height: 13px;
}

.main-button span, .secondary-button span {
  font-size: 11px;
}

:host ::ng-deep .mat-tooltip-custom.user-doc-date {
  font-size: 12px;
  color: #979797;
}

@media (max-width: 1366px) {
  .doc-card-block-header {
    font-size: 12px;
  }
  .doc-card-block-header.file {
    padding-top: 2px;
    padding-bottom: 0;
  }
  .file-hide  {
    padding-top: 1px;

  }
}

@media (max-width: 1100px) {
  .cont-file-desc {
    flex-direction: column-reverse;
  }
  .file-module {
    width: 100%;
  }
  .desc-doc {
    width: 100%;
  }
}

.doc-card-block-header i {
  padding: 0 5px 0 0;
}

.log-content {
  transition: all 0.5s;
  opacity: 1;
}

.user-content {
  transition: all 0.5s;
  opacity: 1;
}

.oper-header-rows {
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-row-ins-title {
  color: darkcyan;
  font-size: 12px;
}

.action-row-auth-title {
  color: var(--gd-color-change-accent2);
  font-size: 12px;
}

.doc-action-ins-color i {
  color: darkcyan;
}

.doc-action-auth-color i {
  color: var(--gd-color-change-accent2);
}

:host ::ng-deep .doc-card-full-content-b .mat-tab-header {
  padding: 0 10px;
}

.status-design {
  text-align: center;
  font-weight: 500;
  border-radius: 6px;
  width: 85px;
}

.status-create {
  border: 1px solid #c5c5c5;
  background-color: #ffffff;
  color: #4e4e4e;
}

.status-work {
  border: 1px solid #00fb33;
  background-color: #c3ffcf;
  color: #007216;
}

.status-cancel {
  border: 1px solid #ff9c9c;
  background-color: #ffd3d3;
  color: #ff0000;
}

.status-report {
  border: 1px solid #5795ff;
  background-color: #c5f6ff;
  color: #21707e;
}
.subsystem-chip-type {
  width: auto;
  padding: 0 5px;
  margin: 1px;
  background-color: #626dff;
  color: white;
  border-radius: 10px;
}
.hd-inc-subsys{
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
}
.hd-inc-accept{
  width: 70px;
  height: 22px;
  display: flex;
  background-color: #ffffff;
  color: #5b9dd7;
  border-radius: 5px;
  border: 1px solid #5b9dd7;
  cursor: pointer;
}
.hd-inc-accept:hover{
  background-color: #5b9dd7;
  color: #ffffff;
  border: none;
}

.hd-inc-accept p{
  font-size: 11px;
  margin: auto;
  cursor: pointer;
}

.file-card {
  padding: 0;
  min-height: 40px;
  border-radius: 2px;
  border-bottom: 1px solid #0000001c;
  font-size: 13px;
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-name {
  width: 98%;
  font-weight: 400;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #464646;
}

:host .file-card:hover {
  background: #e2e3f5;
  cursor: pointer;
  border-radius: 5px;
}

.cardselected {
  background: #e2e3f5 !important;
  cursor: pointer;
  border-radius: 5px;
}

button {
  outline: 0;
}

mat-card {
  width: 100%;
  padding: 10px;
}

.file-icons {
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: nowrap;
  min-height: 40px;
  font-size: 30px;
  color: #898989;
  min-width: 39px;
}

.file-text-content {
  flex-direction: column;
  box-sizing: border-box;
  display: flex;
  width: 82%;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5px;
}

.user-doc-file-button {
  display: flex;
  align-items: center;
  padding: 0 5px 0 0;
  justify-content: flex-end;
  margin-left: 5px;
}

.user-doc-file-button button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 0 !important;
  min-width: 35px;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
  background: #f7feff;
  color: #626dff!important;
  border: 1px solid #bcc1ff;
}

#button-delete {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  padding: 0 !important;
  min-width: 35px;
  box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
  background: #f7feff;
  color: #ff0000!important;
  border: 1px solid #ff6c6c;
}

.user-doc-file-author {
  color: #787878;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-doc-file-date {
  font-size: 12px;
  color: #787878;
  align-items: center;
  display: flex;
  padding: 0 5px;
}

.user-doc-file-date {
  font-size: 12px;
  color: #787878;
  align-items: center;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 80px;
}

.work-type {
  color: #977302;
  min-width: 70px;
  text-align: center;
  background-color: #ffeaa4;
  border-radius: 5px;
  border: 1px solid #ffd13d;
  font-size: 11px;
  line-height: 15px;
}

.report-type {
  color: #1b8cbd;
  min-width: 70px;
  text-align: center;
  background-color: #b3e8ff;
  border-radius: 5px;
  border: 1px solid #66cbf7;
  font-size: 11px;
  line-height: 15px;
}

.main-type {
  color: #1d9716;
  min-width: 70px;
  text-align: center;
  background-color: #c7ffc3;
  border-radius: 5px;
  border: 1px solid #8bed86;
  font-size: 11px;
  line-height: 15px;
}

.user-doc-button-content {
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  min-width: 175px;
}

.first-content {
  width: calc(100% - 175px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.mat-mdc-card {
  box-shadow: unset !important;
}


Ошибка


Установлен

install_status_name


 disabled="{{filesService.getFilesList('report').length == 0}}"