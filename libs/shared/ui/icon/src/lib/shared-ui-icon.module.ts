import { tgnDateIcon } from './svg/company/dateIcon';
import { tgnCompanyInfo } from './svg/company/company-info';
import { tgnLogout } from './svg/logout';
import { tgnClose } from './svg/document/close';
import { tgnCreateTable } from './svg/company/createTable';
import { tgnUploadFile } from './svg/company/upLoadFile';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { tgnDocument } from './svg/side-bar-icon/document';
import { tgnHome } from './svg/side-bar-icon/home';
import { tgnMessage } from './svg/side-bar-icon/message';
import { tgnPackage } from './svg/side-bar-icon/package';
import { tgnFriends } from './svg/side-bar-icon/friends';
import { tgnLeftCircle } from './svg/resizer/leftCircle';
import { tgnRightCircle } from './svg/resizer/rightCircle';
import { tgnAddFriend } from './svg/addFriends';
import { tgnStar } from './svg/side-bar-icon/star';
import { tgnSetting } from './svg/side-bar-icon/setting';
import { tgnCompany } from './svg/side-bar-icon/company';
import { tgnAddGroup } from './svg/side-bar-icon/addGroup';
import { tgnLocation } from './svg/profile/location';
import { tgnDepartment } from './svg/profile/department';
import { tgnEmail } from './svg/profile/email';
import { tgnLink } from './svg/profile/link';
import { tgnPhone } from './svg/profile/phone';
import { tgnExp } from './svg/profile/exp';
import { tgnAction } from './svg/profile/action';
import { tgnBachelor } from './svg/profile/bachelor';
import { tgnTimeCircle } from './svg/profile/timeCircle';
import { tgnLogo } from './svg/profile/logo';
import { tgnDotMore } from './svg/friends/dotMore';
import { tgnFix } from './svg/profile/fix';
import { tgnCombine } from './svg/profile/combine';
import { tgnCollapse } from './svg/collapse';
import { tgnAdd } from './svg/addIcon';
import { tgnDropDown } from './svg/friends/dropDown';
import { tgnDelete } from './svg/friends/delete';
import { tgnDeleteGr } from './svg/friends/deleteGr';
import { tgnMoveGr } from './svg/friends/moveGr';
import { tgnKeyGr } from './svg/friends/keyGr';
import { tgnSearch } from './svg/searchIcon';
import { tgnAddCompany } from './svg/company/addComapny';
import { tgnAddEmployee } from './svg/company/addEmployee';
import { tgnIconDelete } from './svg/iconDelete';
import { tgnIconEdit } from './svg/iconEdit';
import { tgnIconHistoryEdit } from './svg/iconHistoryEdit';
import { tgnIconFile } from './svg/iconFile';
import { tgnIconDowload } from './svg/iconDowload';
import { tgnIconStart } from './svg/iconStart';
import { tgnIconDetailFile } from './svg/iconDetailFile';
import { tgnIconShared } from './svg/iconShared';
import { tgnIconPDF } from './svg/iconPDF';
import { tgnIconCSV } from './svg/iconCSV';
import { tgnSeemore } from './svg/document/seemore';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        tgnDocument,
        tgnHome,
        tgnCompany,
        tgnAdd,
        tgnLeftCircle,
        tgnFriends,
        tgnMessage,
        tgnSetting,
        tgnStar,
        tgnAddFriend,
        tgnRightCircle,
        tgnPackage,
        tgnAddGroup,
        tgnLocation,
        tgnDepartment,
        tgnEmail,
        tgnLink,
        tgnPhone,
        tgnExp,
        tgnAction,
        tgnBachelor,
        tgnTimeCircle,
        tgnCollapse,
        tgnLogo,
        tgnCombine,
        tgnFix,
        tgnDotMore,
        tgnDropDown,
        tgnDelete,
        tgnDeleteGr,
        tgnMoveGr,
        tgnKeyGr,
        tgnSearch,
        tgnAddCompany,
        tgnAddEmployee,
        tgnUploadFile,
        tgnCreateTable,
        tgnClose,
        tgnIconDelete,
        tgnIconEdit,
        tgnIconHistoryEdit,
        tgnIconFile,
        tgnIconDowload,
        tgnIconStart,
        tgnIconDetailFile,
        tgnIconShared,
        tgnIconPDF,
        tgnIconCSV,
        tgnSeemore,
        tgnLogout,
        tgnCompanyInfo,
        tgnDateIcon,
      ],
    }),
  ],
  exports: [SvgIconsModule],
})
export class SharedUiIconModule {}
