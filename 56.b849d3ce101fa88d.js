"use strict";(self.webpackChunksyoft=self.webpackChunksyoft||[]).push([[56],{8056:(Z,s,e)=>{e.r(s),e.d(s,{DashboardModule:()=>_});var g=e(6814),r=e(2058),c=e(4838),t=e(5879),p=e(7278);const b=[{path:"",component:(()=>{class n{constructor(i,o){this.storageService=i,this.router=o}ngOnInit(){this.getUserDetails()}getUserDetails(){this.userDetails=this.storageService.getDataFromLocalStorage(c.I.USER_DATA),this.userDetails=this.userDetails[0]}onLogout(){this.storageService.clearLocalStorage(),this.router.navigate(["/home"])}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(p.V),t.Y36(r.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:246,vars:5,consts:[[1,"nav-left"],[1,"logo"],["href","dashboard/page-not-found"],[1,"icons-nav"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/notification.png?raw=true","alt","notification"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/inbox.png?raw=true","alt","notification"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/video.png?raw=true","alt","notification"],[1,"nav-right"],[1,"search-box"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/search.png?raw=true","alt","search"],["type","text","placeholder","Search"],[1,"button",3,"click"],[1,"nav-user-icon","online"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/profile-pic.png?raw=true","alt","profile-pic"],[1,"container"],[1,"left-sidebar"],[1,"imp-links"],[1,"shortcut-links"],[1,"main-content"],[1,"story-gallery"],[1,"story","story-1"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/video.png?raw=true","alt","post-story"],[1,"story","story-2"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/member-4.png?raw=true","alt","post-story"],[1,"story","story-3"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/post-story-1%20(3).jpg?raw=true","alt","post-story"],[1,"story","story-4"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/animated-1.png?raw=true","alt","post-story"],[1,"story","story-5"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/post-story-3.jpg?raw=true","alt","post-story"],[1,"write-post-container"],[1,"user-profile"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/profile-pic.png?raw=true","alt",""],[1,"fas","fa-caret-down"],[1,"post-input-conatiner"],["rows","3",3,"placeholder"],[1,"add-post-links"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/live-video.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/photo.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/feeling.png?raw=true","alt",""],[1,"post-container"],[1,"post-row"],[1,"fas","fa-ellipsis-v"],[1,"post-text"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/member-1.jpg?raw=true","alt","",1,"post-img"],[1,"activity-icons"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/like.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/comments.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/share.png?raw=true","alt",""],[1,"post-profile-icon"],["src","./Socialbook_img/profile-pic.png","alt",""],["type","button",1,"load-more-btn"],[1,"right-sidebar"],[1,"sidebar-title"],[1,"event"],[1,"left-event"],[1,"right-event"],[1,"fas","fa-map-marker-alt"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/advertisement.png?raw=true","alt","advt",1,"sidebar-ads"],[1,"online-list"],[1,"online"],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/member-2.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/member-3.png?raw=true","alt",""],["src","https://github.com/sanketbodke/sbook/blob/main/Socialbook_img/member-4.png?raw=true","alt",""],[1,"footer"]],template:function(o,a){1&o&&(t.TgZ(0,"nav")(1,"div",0)(2,"h2",1)(3,"a",2),t._uU(4,"Syoft"),t.qZA()(),t.TgZ(5,"ul")(6,"li",3),t._UZ(7,"img",4),t.qZA(),t.TgZ(8,"li",3),t._UZ(9,"img",5),t.qZA(),t.TgZ(10,"li",3),t._UZ(11,"img",6),t.qZA()()(),t.TgZ(12,"div",7)(13,"div",8),t._UZ(14,"img",9)(15,"input",10),t.qZA(),t.TgZ(16,"button",11),t.NdJ("click",function(){return a.onLogout()}),t._uU(17,"logout"),t.qZA(),t.TgZ(18,"div",12),t._UZ(19,"img",13),t.qZA()()(),t.TgZ(20,"div",14)(21,"div",15)(22,"div",16)(23,"a",2),t._uU(24," Latest News "),t.qZA(),t.TgZ(25,"a",2),t._uU(26," Friends "),t.qZA(),t.TgZ(27,"a",2),t._uU(28," Group "),t.qZA(),t.TgZ(29,"a",2),t._uU(30," Market Place "),t.qZA(),t.TgZ(31,"a",2),t._uU(32," Watch "),t.qZA(),t.TgZ(33,"a",2),t._uU(34,"See More"),t.qZA()(),t.TgZ(35,"div",17)(36,"p"),t._uU(37,"Your Shortcuts"),t.qZA(),t.TgZ(38,"a",2),t._uU(39," Web Developers "),t.qZA(),t.TgZ(40,"a",2),t._uU(41," Android Developers "),t.qZA(),t.TgZ(42,"a",2),t._uU(43," Web Design "),t.qZA(),t.TgZ(44,"a",2),t._uU(45," HTML And CSS "),t.qZA()()(),t.TgZ(46,"div",18)(47,"div",19)(48,"div",20),t._UZ(49,"img",21),t.TgZ(50,"p"),t._uU(51,"Post Story"),t.qZA()(),t.TgZ(52,"div",22),t._UZ(53,"img",23),t.TgZ(54,"p"),t._uU(55,"Ben Taylor"),t.qZA()(),t.TgZ(56,"div",24),t._UZ(57,"img",25),t.TgZ(58,"p"),t._uU(59,"Sam Jason"),t.qZA()(),t.TgZ(60,"div",26),t._UZ(61,"img",27),t.TgZ(62,"p"),t._uU(63,"Ron Weasley"),t.qZA()(),t.TgZ(64,"div",28),t._UZ(65,"img",29),t.TgZ(66,"p"),t._uU(67,"steve So"),t.qZA()()(),t.TgZ(68,"div",30)(69,"div",31),t._UZ(70,"img",32),t.TgZ(71,"div")(72,"p"),t._uU(73),t.qZA(),t.TgZ(74,"small"),t._uU(75," Public "),t._UZ(76,"i",33),t.qZA()()(),t.TgZ(77,"div",34),t._UZ(78,"textarea",35),t.TgZ(79,"div",36)(80,"a",2),t._UZ(81,"img",37),t._uU(82,"Live Video"),t.qZA(),t.TgZ(83,"a",2),t._UZ(84,"img",38),t._uU(85,"Phot/Video"),t.qZA(),t.TgZ(86,"a",2),t._UZ(87,"img",39),t._uU(88,"Feeling/Activity"),t.qZA()()()(),t.TgZ(89,"div",40)(90,"div",41)(91,"div",31),t._UZ(92,"img",32),t.TgZ(93,"div")(94,"p"),t._uU(95),t.qZA(),t.TgZ(96,"span"),t._uU(97," November 12, 02:00A.M "),t.qZA()()(),t.TgZ(98,"a",2),t._UZ(99,"i",42),t.qZA()(),t.TgZ(100,"p",43),t._uU(101,"Happy Birthday Ella "),t._UZ(102,"br"),t.TgZ(103,"a",2),t._uU(104,"#birthday-special"),t.qZA()(),t._UZ(105,"img",44),t.TgZ(106,"div",41)(107,"div",45)(108,"div"),t._UZ(109,"img",46),t._uU(110,"897K "),t.qZA(),t.TgZ(111,"div"),t._UZ(112,"img",47),t._uU(113,"458K "),t.qZA(),t.TgZ(114,"div"),t._UZ(115,"img",48),t._uU(116,"243k "),t.qZA()(),t.TgZ(117,"div",49),t._UZ(118,"img",50)(119,"i",33),t.qZA()()(),t.TgZ(120,"div",40)(121,"div",41)(122,"div",31),t._UZ(123,"img",32),t.TgZ(124,"div")(125,"p"),t._uU(126),t.qZA(),t.TgZ(127,"span"),t._uU(128," November 12, 02:00A.M "),t.qZA()()(),t.TgZ(129,"a",2),t._UZ(130,"i",42),t.qZA()(),t.TgZ(131,"p",43),t._uU(132,"Happy Birthday Ella "),t._UZ(133,"br"),t.TgZ(134,"a",2),t._uU(135,"#birthday-special"),t.qZA()(),t._UZ(136,"img",44),t.TgZ(137,"div",41)(138,"div",45)(139,"div"),t._UZ(140,"img",46),t._uU(141,"897K "),t.qZA(),t.TgZ(142,"div"),t._UZ(143,"img",47),t._uU(144,"458K "),t.qZA(),t.TgZ(145,"div"),t._UZ(146,"img",48),t._uU(147,"243k "),t.qZA()(),t.TgZ(148,"div",49),t._UZ(149,"img",50)(150,"i",33),t.qZA()()(),t.TgZ(151,"div",40)(152,"div",41)(153,"div",31),t._UZ(154,"img",32),t.TgZ(155,"div")(156,"p"),t._uU(157),t.qZA(),t.TgZ(158,"span"),t._uU(159," November 12, 02:00A.M "),t.qZA()()(),t.TgZ(160,"a",2),t._UZ(161,"i",42),t.qZA()(),t.TgZ(162,"p",43),t._uU(163,"Happy Birthday Ella "),t._UZ(164,"br"),t.TgZ(165,"a",2),t._uU(166,"#birthday-special"),t.qZA()(),t._UZ(167,"img",44),t.TgZ(168,"div",41)(169,"div",45)(170,"div"),t._UZ(171,"img",46),t._uU(172,"897K "),t.qZA(),t.TgZ(173,"div"),t._UZ(174,"img",47),t._uU(175,"458K "),t.qZA(),t.TgZ(176,"div"),t._UZ(177,"img",48),t._uU(178,"243k "),t.qZA()(),t.TgZ(179,"div",49),t._UZ(180,"img",50)(181,"i",33),t.qZA()()(),t.TgZ(182,"button",51),t._uU(183,"Load More"),t.qZA()(),t.TgZ(184,"div",52)(185,"div",53)(186,"h4"),t._uU(187," Events "),t.qZA(),t.TgZ(188,"a",2),t._uU(189," See All "),t.qZA()(),t.TgZ(190,"div",54)(191,"div",55)(192,"h3"),t._uU(193,"18"),t.qZA(),t.TgZ(194,"span"),t._uU(195,"March"),t.qZA()(),t.TgZ(196,"div",56)(197,"h4"),t._uU(198,"Social Media"),t.qZA(),t.TgZ(199,"p"),t._UZ(200,"i",57),t._uU(201," Willson Teck Park"),t.qZA(),t.TgZ(202,"a",2),t._uU(203,"More Info"),t.qZA()()(),t.TgZ(204,"div",54)(205,"div",55)(206,"h3"),t._uU(207,"22"),t.qZA(),t.TgZ(208,"span"),t._uU(209,"March"),t.qZA()(),t.TgZ(210,"div",56)(211,"h4"),t._uU(212,"Mobile Marketimg"),t.qZA(),t.TgZ(213,"p"),t._UZ(214,"i",57),t._uU(215," Willson Teck Park"),t.qZA(),t.TgZ(216,"a",2),t._uU(217,"More Info"),t.qZA()()(),t.TgZ(218,"div",53)(219,"h4"),t._uU(220," Advertisement "),t.qZA(),t.TgZ(221,"a",2),t._uU(222," Close "),t.qZA()(),t._UZ(223,"img",58),t.TgZ(224,"div",53)(225,"h4"),t._uU(226," Conversation "),t.qZA(),t.TgZ(227,"a",2),t._uU(228," Hide Chat "),t.qZA()(),t.TgZ(229,"div",59)(230,"div",60),t._UZ(231,"img",61),t.qZA(),t.TgZ(232,"p"),t._uU(233,"Roy Clark"),t.qZA()(),t.TgZ(234,"div",59)(235,"div",60),t._UZ(236,"img",62),t.qZA(),t.TgZ(237,"p"),t._uU(238,"Sieena Watson"),t.qZA()(),t.TgZ(239,"div",59)(240,"div",60),t._UZ(241,"img",63),t.qZA(),t.TgZ(242,"p"),t._uU(243,"Ben Taylor"),t.qZA()()()(),t.TgZ(244,"footer",64),t._uU(245," sbook \xa9 2023, All Rights Reserved "),t.qZA()),2&o&&(t.xp6(73),t.Oqu(a.userDetails.user_firstname),t.xp6(5),t.MGl("placeholder","What's you mind, ",a.userDetails.user_firstname,""),t.xp6(17),t.Oqu(a.userDetails.User_name),t.xp6(31),t.Oqu(a.userDetails.User_name),t.xp6(31),t.Oqu(a.userDetails.User_name))},styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;font-family:poppins,sans-serif;box-sizing:border-box}body[_ngcontent-%COMP%]{background:#efefef}nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background:#252B48;padding:5px 5%;position:sticky;top:0;z-index:100}.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:160px;margin-right:45px;color:#fff;text-decoration:none}.nav-left[_ngcontent-%COMP%], .nav-right[_ngcontent-%COMP%]{display:flex;align-items:center}.nav-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;display:inline-block}.nav-left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:28px;margin:0 15px}.nav-user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;border-radius:50%;cursor:pointer}.search-box[_ngcontent-%COMP%]{background:#efefef;width:350px;border-radius:20px;display:flex;align-items:center;padding:0 50px}.search-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;background:transparent;padding:10px;outline:none;border:0}.online[_ngcontent-%COMP%]{position:relative}.online[_ngcontent-%COMP%]:after{content:"";width:7px;height:7px;border:2px solid #fff;border-radius:50%;background:#41db51;position:absolute;top:0;right:0}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:13px 5%}.left-sidebar[_ngcontent-%COMP%]{flex-basis:25%;position:sticky;top:70px;align-self:flex-start}.right-sidebar[_ngcontent-%COMP%]{flex-basis:25%;position:sticky;top:70px;align-self:flex-start;background:#fff;padding:20px;border-radius:4px;color:#626262}.main-content[_ngcontent-%COMP%]{flex-basis:47%}.imp-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;margin-bottom:30px;color:#626262;width:-moz-fit-content;width:fit-content}.imp-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:25px;margin-right:15px}.imp-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{color:#252b48}.imp-links[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.shortcut-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;margin-bottom:30px;color:#626262;width:-moz-fit-content;width:fit-content}.shortcut-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;border-radius:4px;margin-right:15px}.shortcut-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:25px 0;color:#626262;font-weight:500}.sidebar-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}.right-sidebar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:600;font-size:16px}.sidebar-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#252b48;font-size:12px}.event[_ngcontent-%COMP%]{display:flex;font-size:14px;margin-bottom:20px}.left-event[_ngcontent-%COMP%]{border-radius:10px;height:65px;width:65px;margin-right:15px;padding-top:10px;text-align:center;position:relative;overflow:hidden;box-shadow:0 0 10px #0000001a}.event[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.event[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;text-decoration:none;color:#252b48}.left-event[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;background:#252B48;color:#fff;font-size:10px;padding:4px 0}.sidebar-ads[_ngcontent-%COMP%]{width:100%;margin-bottom:20px;border-radius:4px}.online-list[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.online-list[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;border-radius:50%}.online-list[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%]{width:40px;border-radius:50%;margin-right:15px}.online-list[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%]:after{top:unset;bottom:5px}.story-gallery[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}.story[_ngcontent-%COMP%]{flex-basis:18%;padding-top:32%;position:relative;background-position:center;background-size:cover;border-radius:10px}.story[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:45px;border-radius:50%;top:10px;left:10px;border:5px solid #252B48}.story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:absolute;bottom:10px;width:100%;text-align:center;color:#fff;font-size:12px}.story-1[_ngcontent-%COMP%], .story-2[_ngcontent-%COMP%], .story-3[_ngcontent-%COMP%], .story-4[_ngcontent-%COMP%], .story-5[_ngcontent-%COMP%]{background-image:linear-gradient(transparent,rgba(0,0,0,.5))}.story[_ngcontent-%COMP%]{cursor:pointer}.story.story-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{top:unset;left:50%;bottom:40px;transform:translate(-50%);border:0;width:35px}.write-post-container[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:6px;padding:20px;color:#626262}.user-profile[_ngcontent-%COMP%]{display:flex;align-items:center}.user-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px;border-radius:50%;margin-right:10px}.user-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:-5px;font-weight:500;color:#626262}.user-profile[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px}.post-input-conatiner[_ngcontent-%COMP%]{padding-left:55px;padding-top:20px}.post-input-conatiner[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;border:0;outline:0;border-bottom:1px solid #ccc;background:transparent;resize:none}.add-post-links[_ngcontent-%COMP%]{display:flex;margin-top:10px}.add-post-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;color:#626262;margin-right:30px;font-size:13px}.add-post-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin-right:10px}.post-container[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:6px;padding:20px;color:#626262;margin:20px 0}.user-profile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:13px;color:#626262}.post-text[_ngcontent-%COMP%]{color:#9a9a9a;font-size:15px;margin:15px 0}.post-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#252b48;text-decoration:none}.post-img[_ngcontent-%COMP%]{width:100%;border-radius:4px;margin-bottom:5px}.post-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.activity-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;margin-right:10px}.activity-icons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin-right:30px}.post-profile-icon[_ngcontent-%COMP%]{display:flex;align-items:center}.post-profile-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;border-radius:50%;margin-right:5px}.post-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#9a9a9a}.new-pic[_ngcontent-%COMP%]{height:45px;width:45px;background-position:center}.load-more-btn[_ngcontent-%COMP%]{display:block;margin:auto;cursor:pointer;padding:5px 10px;border:1px solid #9a9a9a;color:#626262;background:transparent;border-radius:4px}.footer[_ngcontent-%COMP%]{text-align:center;color:#9a9a9a;padding:10px 0 20px;font-size:13px}.settings-menu[_ngcontent-%COMP%]{position:absolute;width:90%;max-width:350px;background:#fff;box-shadow:0 0 10px,0,0,.4;border-radius:4px;overflow:hidden;top:108%;right:2%;max-height:0;transition:max-height .3s}.settings-menu-height[_ngcontent-%COMP%]{max-height:450px}.user-profile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px;color:#252b48;text-decoration:none}.settings-menu-inner[_ngcontent-%COMP%]{padding:20px}.settings-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border:0;height:1px;background:#9a9a9a;margin:15px 0}.settings-links[_ngcontent-%COMP%]{display:flex;align-items:center;margin:15px 0}.settings-links[_ngcontent-%COMP%]   .settings-icon[_ngcontent-%COMP%]{width:38px;margin-right:10px;border-radius:50%}.settings-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;flex:1;align-items:center;justify-content:space-between;text-decoration:none;color:#626262}@media (min-width: 280px) and (max-width: 868px){.nav-left[_ngcontent-%COMP%]   .icons-nav[_ngcontent-%COMP%], .left-sidebar[_ngcontent-%COMP%], .right-sidebar[_ngcontent-%COMP%]{display:none}.search-box[_ngcontent-%COMP%]{width:250px}.main-content[_ngcontent-%COMP%]{flex-basis:100%}}@media (min-width: 869px) and (max-width: 1200px){.left-sidebar[_ngcontent-%COMP%], .right-sidebar[_ngcontent-%COMP%]{margin:0 1rem;font-size:.7srem}}.button[_ngcontent-%COMP%]{font-size:17px;margin-inline:10px;padding:.5em 2em;border:transparent;box-shadow:2px 2px 4px #0006;border-radius:4px}']})}return n})()},{path:e(9006).p.PAGE_NOT_FOUND,component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-page-not-found"]],decls:9,vars:0,consts:[["oncontextmenu","return false","onselectstart","return false","ondragstart","return false"],["id","Yak\u0131ndaYaz\u0131"],["id","imle\xe7"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"br"),t._uU(3,"> Hello Visitor \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0"),t._UZ(4,"br"),t._uU(5,"> We're Coming Soon "),t.TgZ(6,"span",2),t._uU(7,"\u2588"),t.qZA(),t._uU(8,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "),t.qZA()())},styles:['@charset "UTF-8";body[_ngcontent-%COMP%]{background:#000}#Yak\\131ndaYaz\\131[_ngcontent-%COMP%] {color:green;font-family:Monaco,monospace;font-size:24px;width:100%;text-align:center;position:absolute;top:45%;left:0;animation:.12s infinite normal _ngcontent-%COMP%_yaziyiSallandir}span[_ngcontent-%COMP%]{animation:1.5s infinite normal imle\\e7}[_ngcontent-%COMP%]::selection{background:#7021d2;color:#fff}@keyframes _ngcontent-%COMP%_yaziyiSallandir{0%{opacity:0;left:0}40%,80%{opacity:1;left:-2px}}@keyframes _ngcontent-%COMP%_imle\\e7{0%{opacity:0;left:0}40%{opacity:0;left:-2px}80%{opacity:1;left:-2px}}']})}return n})()}];let m=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(b),r.Bz]})}return n})(),_=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[g.ez,m]})}return n})()}}]);