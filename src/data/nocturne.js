// Hand-authored Nocturne content. Generated Kanto data stays untouched.
(function (G) {
  'use strict';
  G.NOCTURNE = { version: 1, startMap: 'AnemoiaHome', worldRoot: 'AnemoiaTown' };
  const labels = ['grass','path','tree2','flowers','tall_grass','water','roof_house','wall','window','door','sign','floor','wall','bookshelf','table','bed','mat','floor_tile','counter','pc','cut_tree'];
  const walk = new Set(['grass','path','flowers','tall_grass','door','floor','floor_tile','mat']);
  // Separate semantic tilesets share existing painters, with explicit collision.
  for (const file of ['overworld','house','lab']) {
    const key = 'nocturne_' + file;
    G.LABELS[key] = labels;
    G.MAPDATA.quads[key] = labels.map(l => [0,0,l === 'tall_grass' ? 2 : walk.has(l) ? 0 : 3,0]);
    G.MAPDATA.tilesets[key] = { file:key, pass:[0,2], grass:2, counters:[], doors:[], warps:[], water:false };
  }
  const id = l => labels.indexOf(l);
  function map(name, w, h, interior, realm) {
    const ts = 'nocturne_' + (interior || 'overworld');
    const d = { cnst:name.toUpperCase(), ts, tsc:ts, w,h, cells:Array(w*h).fill(id(interior ? 'floor' : 'grass')), border:Array(4).fill(id(interior ? 'wall':'tree2')), conns:{},warps:[],signs:[],objs:[],hidden:[], realm:realm || 'waking', display:name };
    // Renderer chooses outdoor/interior from file; GameMap uses semantic labels above.
    d.nocturneInterior = !!interior;
    G.MAPDATA.maps[name] = d;
    rect(d,0,0,w,1,interior?'wall':'tree2'); rect(d,0,h-1,w,1,interior?'wall':'tree2');
    rect(d,0,0,1,h,interior?'wall':'tree2'); rect(d,w-1,0,1,h,interior?'wall':'tree2');
    return d;
  }
  function rect(d,x,y,w,h,l) { for(let yy=y;yy<y+h;yy++) for(let xx=x;xx<x+w;xx++) d.cells[yy*d.w+xx]=id(l); }
  function object(d,n,x,y,sprite) { d.objs.push({id:n,x,y,sprite,move:'STAY',dir:'DOWN',textLabel:n}); }
  function sign(d,n,x,y,l) { rect(d,x,y,1,1,l || 'sign'); d.signs.push({x,y,text:n,textLabel:n}); }
  function exit(d,x,y,to,tx,ty) { rect(d,x,y,1,1,'door'); (d.exits || (d.exits=[])).push({x,y,to,tx,ty}); }
  function house(d,x,y,doorX) { rect(d,x,y,5,2,'roof_house');rect(d,x,y+2,5,2,'wall');rect(d,x+1,y+2,1,1,'window');rect(d,x+3,y+2,1,1,'window');rect(d,doorX,y+3,1,1,'door'); }
  for (const realm of ['waking','nocturne']) {
    const suf=realm==='waking'?'':'_Nocturne';
    const t=map('AnemoiaTown'+suf,40,30,null,realm); t.display='ANEMOIA / '+realm.toUpperCase();
    rect(t,3,12,34,3,'path'); rect(t,19,2,3,26,'path');
    house(t,5,7,7);house(t,28,7,30);house(t,17,20,19);house(t,5,20,7);house(t,28,20,30);
    exit(t,7,10,'AnemoiaHome'+suf,6,8);exit(t,30,10,'RivalHome'+suf,6,8);
    exit(t,19,23,'AnemoiaLab'+suf,6,10);exit(t,7,23,'AnemoiaCenter'+suf,6,8);exit(t,30,23,'AnemoiaMart'+suf,6,8);
    exit(t,20,2,'NorthForest'+suf,20,31);exit(t,37,13,'EastPath'+suf,2,10);
    sign(t,'TOWN_SIGN',18,12);sign(t,'LAB_SIGN',17,24); sign(t,'CENTER_SIGN',5,24);sign(t,'MART_SIGN',28,24);
    rect(t,3,3,5,2,'flowers');rect(t,30,15,5,3,'water');
    sign(t,'GLASSES',12,17,'flowers');sign(t,'LAB_KEY',33,5,'flowers');
    if(realm==='waking'){ object(t,'NEIGHBOR',15,13,'girl');object(t,'RIVAL_MOTHER',31,12,'mom'); }
    for(const kind of ['AnemoiaHome','RivalHome','AnemoiaCenter','AnemoiaMart']) {
      const d=map(kind+suf,14,11,'house',realm);d.display=kind.replace(/([a-z])([A-Z])/g,'$1 $2').toUpperCase();
      exit(d,6,9,'AnemoiaTown'+suf,kind==='AnemoiaHome'?7:kind==='RivalHome'?30:kind==='AnemoiaCenter'?7:30,kind.includes('Home')?11:24);
      rect(d,2,2,3,1,'bookshelf');rect(d,9,2,2,2,'table');
      if(kind==='AnemoiaHome'){rect(d,2,5,2,2,'bed'); sign(d,'HOME_DIARY',4,2,'bookshelf');if(realm==='waking')object(d,'MOTHER',9,6,'mom');}
      if(kind==='RivalHome')sign(d,'RIVAL_DIARY',5,2,'bookshelf');
      if(kind==='AnemoiaCenter'){sign(d,'HEAL_TERMINAL',6,2,'pc');sign(d,'PC_TERMINAL',8,2,'pc');}
      if(kind==='AnemoiaMart')sign(d,'SHOP_TERMINAL',6,2,'counter');
    }
    const lab=map('AnemoiaLab'+suf,14,13,'lab',realm);lab.display='OAK\'S LAB / '+realm.toUpperCase();
    exit(lab,6,11,'AnemoiaTown'+suf,19,24);rect(lab,2,2,3,1,'bookshelf');rect(lab,9,2,3,1,'bookshelf');rect(lab,6,2,2,1,'table');
    sign(lab,'LAB_NOTES',3,2,'bookshelf');sign(lab,'LAB_HINGE',10,5,'pc');
    if(realm==='waking'){object(lab,'OAK',6,4,'oak');object(lab,'RIVAL',8,6,'blue');}
    const f=map('NorthForest'+suf,40,34,null,realm);f.display='NORTH FOREST / '+realm.toUpperCase();
    rect(f,3,3,34,27,'tree2');
    // A winding walk with two quiet clearings; no wild battles before a starter.
    rect(f,19,23,3,9,'path');rect(f,10,23,12,3,'path');rect(f,10,14,3,12,'path');rect(f,10,14,20,3,'path');rect(f,27,5,3,12,'path');rect(f,16,5,14,3,'path');
    rect(f,7,20,8,5,'grass');rect(f,23,11,10,7,'grass');rect(f,14,3,9,7,'grass');
    exit(f,20,32,'AnemoiaTown'+suf,20,3);sign(f,'FOREST_MEMORY',8,22);sign(f,'FOREST_WARNING',24,13);sign(f,'STUMP',17,5,'cut_tree');object(f,'VEILOOK',20,5,'monster');
    const e=map('EastPath'+suf,34,22,null,realm);e.display='EAST PATH / '+realm.toUpperCase();rect(e,1,9,31,3,'path');rect(e,5,3,8,5,'tall_grass');rect(e,17,14,9,5,'tall_grass');
    exit(e,1,10,'AnemoiaTown'+suf,36,13);sign(e,'EAST_BOUNDARY',31,10);object(e,'GLIM',9,10,'monster');sign(e,'EAST_MEMORY',21,13);
    if(realm==='nocturne')G.DATA.wild[e.cnst]={grass:{rate:22,mons:Array(10).fill([4,'GLIM'])},water:{rate:0,mons:[]}};
  }
  const roster=[
    ['MIRTH','GRASS',[52,48,55,42,62],'A smile with no reason to smile. It curls around warm memories.'],
    ['MOURN','WATER',[58,44,58,38,61],'Its tears rise instead of falling. It listens at empty doorways.'],
    ['DREAD','FIRE',[46,60,44,60,49],'A small, restless ember. It flinches before anything moves.'],
    ['GLIM','NORMAL',[38,35,38,48,42],'A little light that remembers being followed. It hates being alone.'],
    ['VEILOOK','GHOST',[65,45,60,85,80],'It watches the space beside you. Nobody remembers its arrival.'],
    ['NOCTEYE','PSYCHIC',[90,85,90,100,155],'Its pale gaze rests on places that no longer exist.']
  ];
  G.nocturneRoster=roster.map(r=>r[0]);
  roster.forEach(([name,type,stats,entry],i)=>{
    G.DATA.species[name]=Object.assign({},G.DATA.species.BULBASAUR,{id:name,name,hp:stats[0],atk:stats[1],def:stats[2],spd:stats[3],spc:stats[4],types:name==='NOCTEYE'?['GHOST','PSYCHIC']:[type,type],catchRate: name==='GLIM'?255:150,baseExp:55,dex:152+i,cat:'NOCTURNE',ht:[1,8],wt:80,moves1:name==='GLIM'?['TACKLE','GROWL']:['CONFUSION','TACKLE'],learn:[[7,type==='FIRE'?'EMBER':type==='WATER'?'WATER_GUN':type==='GRASS'?'VINE_WHIP':'CONFUSION'],[12,'SWIFT']],evos:[],tmhm:[],growth:'MEDIUM_FAST'});
    G.DATA.dexOrder[152+i]=name;G.DEX_TEXT = G.DEX_TEXT || {}; G.DEX_TEXT[name]=entry;
    const colors=['#a5b49b','#8ca9be','#b38c9c','#b8c9db','#9492b4','#8986a5'];
    G.defMon(name,{pal:{skin:colors[i],dark:'#55546d',pale:'#eeeaf5'},parts:[
      {t:'p',pts:[17,47,12,60,29,54,46,60,49,47],c:'skin',g:'body'},
      {t:'e',x:32,y:40,rx:i===5?19:15,ry:17,c:'skin',g:'body'},
      {t:'p',pts:[19,30,21,12,29,26,37,26,43,12,46,31],c:'skin',g:'ears'},
      {t:'e',x:25,y:35,rx:3,ry:4,c:'pale',g:'eyeL',z:2}, {t:'e',x:39,y:35,rx:3,ry:4,c:'pale',g:'eyeR',z:2},
      {t:'mouth',x:32,y:44,w:5,style:i===0?'smile':i===2?'open':'frown'},
      {t:'e',x:31,y:52,rx:5,ry:3,c:'dark',g:'mark',z:2}
    ]});
  });
})(window.G);
