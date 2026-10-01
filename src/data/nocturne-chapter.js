// Chapter two: authored exploration spaces, no ending or rival reveal.
(function(G){
'use strict';
const labels=G.LABELS.nocturne_overworld,idx=l=>labels.indexOf(l);
function rect(d,x,y,w,h,l){for(let yy=y;yy<y+h;yy++)for(let xx=x;xx<x+w;xx++)d.cells[yy*d.w+xx]=idx(l);}
function map(name,w,h,inside,display){const ts='nocturne_'+(inside?'house':'overworld');const d={cnst:name.toUpperCase(),ts,tsc:ts,w,h,cells:Array(w*h).fill(idx(inside?'floor':'grass')),border:Array(4).fill(idx(inside?'wall':'tree2')),conns:{},warps:[],signs:[],objs:[],hidden:[],exits:[],realm:'nocturne',nocturneInterior:!!inside,display};for(const [x,y,ww,hh]of [[0,0,w,1],[0,h-1,w,1],[0,0,1,h],[w-1,0,1,h]])rect(d,x,y,ww,hh,inside?'wall':'tree2');G.MAPDATA.maps[name]=d;return d;}
function sign(d,id,x,y,l='sign'){rect(d,x,y,1,1,l);d.signs.push({x,y,text:id,textLabel:id});}
function exit(d,x,y,to,tx,ty){rect(d,x,y,1,1,'door');d.exits.push({x,y,to,tx,ty});}
function house(d,x,y,to){rect(d,x,y,5,2,'roof_house');rect(d,x,y+2,5,2,'wall');rect(d,x+1,y+2,1,1,'window');exit(d,x+2,y+3,to,6,8);return[x+2,y+4];}
const east=G.MAPDATA.maps.EastPath_Nocturne;
// The eastern boundary is now a road; preserve the old sign as a trail marker.
const boundary=east.signs.find(s=>s.textLabel==='EAST_BOUNDARY');boundary.x=29;boundary.y=8;rect(east,31,10,1,1,'path');sign(east,'EAST_BOUNDARY',29,8);
east.signs=east.signs.filter((s,i,a)=>a.findIndex(v=>v.textLabel===s.textLabel)===i);
exit(east,32,10,'PathOfGrief',2,7);
rect(east,13,3,3,4,'tree2');rect(east,14,6,2,4,'path');rect(east,15,3,7,3,'grass');sign(east,'EAST_CACHE',19,3,'flowers');sign(east,'EAST_CLEARING',20,5);sign(east,'EAST_TRAIL',25,10);
for(const [name,w]of [['PathOfGrief',48],['PathOfGriefRemembered',34],['PathOfGriefFamiliar',22]]){
 const d=map(name,w,15,false,'PATH OF GRIEF');rect(d,1,1,w-2,13,'tree2');rect(d,1,6,w-2,3,'path');
 exit(d,1,7,'EastPath_Nocturne',31,10);exit(d,w-2,7,'Desiderium',2,13);
 sign(d,'GRIEF_MARKER',Math.floor(w/2),5,'cut_tree');
 // Explicitly empty even if the underlying engine retains a prior encounter list.
 G.DATA.wild[d.cnst]={grass:{rate:0,mons:[]},water:{rate:0,mons:[]}};
}
const town=map('Desiderium',38,28,false,'DESIDERIUM');rect(town,1,12,36,3,'path');rect(town,17,3,3,22,'path');
exit(town,1,13,'PathOfGrief',46,7);exit(town,36,13,'Stillwood',2,13);
const houses=[['DesideriumCenter',5,7],['DesideriumMart',26,7],['DesideriumGym',5,18],['DesideriumHouse',26,18]];
for(const [name,x,y]of houses){const [tx,ty]=house(town,x,y,name);const d=map(name,14,11,true,name==='DesideriumHouse'?'UNLOCKED HOUSE':name.replace('Desiderium','DESIDERIUM ').toUpperCase());exit(d,6,9,'Desiderium',tx,ty);
 if(name==='DesideriumCenter'){sign(d,'HEAL_TERMINAL',6,2,'pc');sign(d,'PC_TERMINAL',8,2,'pc');}
 if(name==='DesideriumMart')sign(d,'SHOP_TERMINAL',6,2,'counter');
 if(name==='DesideriumGym'){rect(d,4,2,6,2,'floor_tile');sign(d,'UNCLAIMED_BADGE',6,2,'table');sign(d,'GYM_RECORD',3,5);}
 if(name==='DesideriumHouse'){rect(d,2,2,3,1,'bookshelf');rect(d,9,2,2,2,'table');sign(d,'OAK_PHOTO',9,2,'table');sign(d,'HOUSE_NOTE',3,2,'bookshelf');}
}
sign(town,'DESIDERIUM_SIGN',16,12);sign(town,'DESIDERIUM_CENTER_SIGN',5,11);sign(town,'DESIDERIUM_MART_SIGN',26,11);sign(town,'DESIDERIUM_GYM_SIGN',5,22);sign(town,'STILLWOOD_SIGN',33,11);
rect(town,23,16,5,2,'water');rect(town,10,4,4,2,'flowers');
const wood=map('Stillwood',42,30,false,'STILLWOOD');rect(wood,1,12,39,3,'path');rect(wood,11,4,3,22,'path');rect(wood,28,5,3,20,'path');
rect(wood,3,3,7,6,'tall_grass');rect(wood,16,4,9,6,'tall_grass');rect(wood,16,18,10,7,'tall_grass');rect(wood,33,17,5,7,'water');
rect(wood,16,11,9,1,'tree2');rect(wood,16,15,9,1,'tree2');rect(wood,5,19,5,6,'tree2');
exit(wood,1,13,'Desiderium',35,13);sign(wood,'STILLWOOD_REST',12,4,'cut_tree');sign(wood,'STILLWOOD_CACHE',29,23,'flowers');sign(wood,'STILLWOOD_MEMORY',29,5);sign(wood,'STILLWOOD_EDGE',39,13);
function encounters(d,mons,rate){G.DATA.wild[d.cnst]={grass:{rate,mons},water:{rate:0,mons:[]}};}
encounters(east,[[5,'GLIM'],[6,'GLIM'],[6,'HUSHLET'],[7,'HUSHLET'],[6,'LACELING'],[7,'VELIMP'],[8,'REEDLEAP'],[8,'WICKIT'],[9,'VELIMP'],[9,'WICKIT']],48);
encounters(wood,[[11,'FERNIP'],[12,'TINESPRIG'],[12,'PEBBLIT'],[13,'NIBBIT'],[13,'SCUFFAWN'],[14,'MOSSLIT'],[14,'LACELING'],[15,'FELLIP'],[16,'FERNIP'],[18,'LUMOURN']],52);
// Display names correct the waking/shadow distinction without breaking existing saves.
G.MAPDATA.maps.AnemoiaTown.display='PALLET TOWN';G.MAPDATA.maps.AnemoiaTown_Nocturne.display='ANEMOIA';
for(const name of ['AnemoiaHome','AnemoiaCenter','AnemoiaMart'])G.MAPDATA.maps[name].display=name.replace('Anemoia','PALLET ').toUpperCase();
G.NOCTURNE.version=3;
})(window.G);
