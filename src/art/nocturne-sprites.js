// Procedural concept sprites. Shared anatomy, family-specific feature geometry.
(function(G){
'use strict';
G.nocturneSprite=function(e,f){
 const k=e.family,s=e.stage,scale=1+s*.16;
 const colors=['#a1b5c1','#a998b1','#899b8a','#b3a492','#8792ae','#ab9ca9','#9bafab','#a5a0bd'];
 const pal={skin:colors[k%8],dark:'#4d5363',pale:'#eee9ec',accent:colors[(k+3)%8]};
 const parts=[];
 const ell=(x,y,rx,ry,c='skin',g='body')=>parts.push({t:'e',x,y,rx,ry,c,g});
 const poly=(pts,c='skin',g='body')=>parts.push({t:'p',pts,c,g});
 const line=(pts,c='dark',w=2)=>parts.push({t:'l',pts,w,c});
 const shape=f.shape;
 let ey=31;
 if(['bird','bat','moth','insect'].includes(shape)){
  ell(32,39,10*scale,14*scale);ell(32,25,10,9);
  if(shape==='bird'){poly([24,35,7,28,13,49,26,45]);poly([40,35,57,28,51,49,38,45]);poly([30,31,34,31,32,35],'dark');}
  else{poly([25,32,5,15,9,46,26,48]);poly([39,32,59,15,55,46,38,48]);line([26,21,23,9]);line([38,21,41,9]);}
  ey=25;
 }else if(['snake','slug','fish','squid','clam'].includes(shape)){
  if(shape==='snake'){ell(34,46,20,9);ell(25,36,8,15);ell(26,24,11,8);ey=24;}
  if(shape==='slug'){ell(32,43,24,12);ell(22,32,10,12);ey=30;}
  if(shape==='fish'){ell(30,35,20,12);poly([45,35,59,22,59,49]);poly([24,25,31,12,39,25]);ey=33;}
  if(shape==='squid'){ell(32,27,15,17);for(let i=0;i<5;i++)line([20+i*6,38,15+i*8,55],'skin',5);ey=28;}
  if(shape==='clam'){poly([8,43,12,22,23,15,32,12,43,15,52,22,56,43]);ell(32,43,24,10,'dark');ell(32,40,10,9,'pale');ey=39;}
 }else if(shape==='plant'){
  poly([32,19,19,52,45,52]);poly([26,36,5,26,11,43,27,44],'accent');poly([38,36,59,26,53,43,37,44],'accent');ell(32,24,13,12);ey=25;
 }else{
  ell(32,43,17*scale,12);ell(25,28,12,11);ey=28;
  for(const x of [19,29,39,46])ell(x,53,4,6,'dark');
  if(['cat','fox','dog'].includes(shape)){poly([15,23,13,9,24,19]);poly([27,18,36,9,35,26]);poly([46,43,58,25,56,46,47,49],'accent');}
  if(shape==='hare'){ell(20,12,4,13+s*2);ell(31,11,4,14+s*2);}
  if(shape==='bear'){ell(16,19,5,5);ell(34,19,5,5);ell(24,34,6,4,'accent');}
  if(shape==='frog'){ell(20,24,6,5);ell(35,24,6,5);ell(12,49,8,6);ell(51,49,8,6);ey=24;}
  if(shape==='mouse'){ell(15,19,7,7);ell(35,19,7,7);line([48,45,58,49,55,57],'accent',3);}
  if(['deer','goat'].includes(shape)){line([19,20,15,9,9,6]);line([30,20,35,9,42,6]);}
  if(shape==='tortoise'){ell(37,39,19,15,'accent','shell');ell(16,35,8,8);ey=34;}
  if(shape==='crab'){ell(10,30,8,10,'accent');ell(54,30,8,10,'accent');}
  if(shape==='otter'){ell(49,46,11,5,'accent');}
  if(shape==='lizard'){poly([44,44,62,53,46,52],'accent');}
  if(shape==='mole'){poly([10,45,21,39,25,51],'pale');poly([41,39,54,45,39,51],'pale');}
 }
 // Family motifs differ in count, placement, contour and stage growth.
 const text=e.design;
 if(/lantern|glow|light|luminous/.test(text)){ell(32,42,7+s*2,9,'pale','light');line([27,42,37,42],'accent',1);}
 if(/halo|crescent|moon/.test(text)){line([12,18,17,8,31,4,45,8,51,18],'pale',2+s);}
 if(/ribbon|drooping|hanging|trailing/.test(text)){line([13,26,8,41,12,55+s*2],'accent',3);line([48,26,54,41,50,55+s*2],'accent',3);}
 if(/button|pearl|bead|droplet/.test(text))ell(32,40,4+s,5+s,'pale','pearl');
 if(/boot|gaiter|sock|mitten/.test(text)){ell(18,51,7+s,8,'accent','boot');ell(44,51,7+s,8,'accent','boot');}
 if(/book|page|paper|parchment|film|patch/.test(text)){poly([22,35,39,32,43,48,25,51],'accent','paper');line([27,38,37,37],'pale',1);line([28,43,38,42],'pale',1);}
 if(/whisker|quill|chalk/.test(text)){line([18,31,7,29],'pale',1);line([18,34,6,37],'pale',1);line([39,31,51,28],'pale',1);}
 if(/hollow|empty|rib/.test(text)){ell(32,42,7,8,'dark','hollow');line([26,41,38,41],'accent',1);}
 if(/wing|feather|sail/.test(text)){for(let j=0;j<=s+1;j++){line([9+j*4,25+j*3,19,44],'pale',1);line([55-j*4,25+j*3,45,44],'pale',1);}}
 if(/horn|antler|branch|twig/.test(text)){for(const x of [21,40]){line([x,22,x-3,9,x+2,3],'accent',3);line([x-3,12,x-9,7],'accent',2);}}
 if(/flame|ember|candle|wick/.test(text)){for(let j=0;j<=s;j++){let x=21+j*10;poly([x-4,17,x,3+j*2,x+5,17],'pale','flame');ell(x,18,4,2,'accent');}}
 if(/leaf|fern|frond|reed|flower|petal|fung|moss|spore/.test(text)){for(let j=0;j<3+s;j++){let x=13+j*7;ell(x,16+(j%2)*5,5,3,'accent','growth');line([x,19,x+1,27],'accent');}}
 if(/veil|cloak|shroud|curtain|scarf|mantle|wrap/.test(text)){poly([14,32,8,54,18,49,22,58,29,47],'accent','veil');poly([43,32,55,56,45,50,40,59,37,46],'accent','veil');}
 if(/shell|plate|slab|stone|cairn|crag/.test(text)){for(let j=0;j<3+s;j++)ell(25+(j%3)*8,35+Math.floor(j/3)*8,6,4,'dark','plates');}
 if(/wire|thread|yarn|rope|knott|knit|lace|seam/.test(text)){line([12,42,20,47,30,40,40,47,52,42],'pale',2);line([16,46,25,51,35,45,47,51],'accent',2);}
 if(/glass|prism|mirror|crystal|slate/.test(text)){poly([31,19,43,32,32,46,23,32],'pale','crystal');line([31,20,32,44],'accent',1);}
 if(/key|lock|gate|clock|dial|reel|frame/.test(text)){line([19,13,19,6,44,6,44,19],'dark',3);ell(32,43,5,5,'dark','lock');}
 if(/quill|thorn|spine|thistle/.test(text)){for(let j=0;j<5+s;j++){let x=12+j*6;poly([x,39,x+1,23-j%3*3,x+5,40],'accent','quills');}}
 // Additional identifying mark remains consistent through each family's evolution.
 const x=18+(k%5)*6,y=39+(k%3)*4;ell(x,y,2+(k%4),2+s,'accent','mark');
 const ex=shape==='tortoise'?16:shape==='snake'?26:shape==='slug'?22:32;
 ell(ex-5,ey,2.5,3.5,'pale','eyeL');ell(ex+5,ey,2.5,3.5,'pale','eyeR');
 parts.push({t:'mouth',x:ex,y:ey+7,w:4,style:k%3===0?'frown':k%3===1?'line':'smile'});
 for(const p of parts)if(/^eye/.test(p.g||'')||p.t==='mouth')p.face=true;
 return {pal,parts};
};
})(window.G);
