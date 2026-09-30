// Nocturne opening: flags are persistent and all failed encounters are repeatable.
(function (G) {
  'use strict';
  const S=G.S, flag=n=>S.flag('NC_'+n), set=n=>S.set('NC_'+n);
  const isNC=m=>m && m.d.realm;
  const oldState=G.newState;
  G.newState=()=>Object.assign(oldState(),{map:'AnemoiaHome',x:6,y:7,dir:'up',name:'NORM',rival:'ROWAN',lastOutdoor:'AnemoiaTown',realm:'waking',campaign:'nocturne',lastHealTown:{map:'AnemoiaTown',x:7,y:11}});
  const oldMusic=G.mapMusic, oldName=G.mapDisplayName;
  G.mapMusic=m=>isNC(m)?(m.d.realm==='nocturne'?'tower':m.name.startsWith('North')?'forest':'pallet'):oldMusic(m);
  G.mapDisplayName=m=>isNC(m)?m.d.display:oldName(m);
  function heal(){for(const m of G.state.party)m.healFull();}
  function* travel(to,x,y){yield* S.warp(to,x,y,'down');G.ow.showBanner();}
  function* blocked(text,back){yield* S.say(text);yield* S.movePlayer(back || 'D');}
  G.nocturneObjective=function(){
    if(!flag('ACCIDENT'))return 'Visit Oak at the lab south of town.';
    if(!flag('RESTED'))return 'Go home. Talk to Mother.';
    if(!flag('CROSSED'))return 'Follow the pale watcher into North Forest.';
    if(!flag('KEY'))return 'Search the far northeast corner of Anemoia.';
    if(!flag('GLASSES'))return 'Search the flowers southwest of the crossroads.';
    if(!flag('HINGE'))return 'Use the terminal inside the Nocturne lab.';
    if(!flag('STARTER'))return 'Return to the stump in North Forest.';
    if(!flag('EMPTY_HOME'))return 'Go home with your new companion.';
    if(!flag('BALLS'))return 'Follow Veilook through North Forest again.';
    if(!G.state.dex.caught.GLIM)return 'East Path: weaken Glim, then use a Poke Ball.';
    if(!flag('COMPLETE'))return 'Return to Anemoia. Check the Center terminal.';
    return 'Explore, collect echoes, and train your companions.';
  };
  function* echo(n,text){yield* S.say(text);if(!flag('ECHO_'+n)){set('ECHO_'+n);G.state.nocturneEchoes=(G.state.nocturneEchoes||0)+1;yield* S.say('You remember an echo. '+G.state.nocturneEchoes+' / 6.');}}
  function* starter(){
    if(!flag('HINGE')){yield* S.say('Three shallow faces in an ancient stump. They have no expression yet.');return;}
    if(flag('STARTER')){yield* S.say('The face you chose is missing. The other two look away.');return;}
    yield* S.say('Three expressions wake in the wood. A smile. A tear. A frightened gasp.\fWhich one do you answer?');
    const r=yield* G.choose(['MIRTH / SMILE','MOURN / TEAR','DREAD / FEAR','LEAVE'],{x:20,y:20,w:200});
    if(r<0||r===3)return;
    const sp=['MIRTH','MOURN','DREAD'][r];
    yield* S.say(sp+' steps out of the stump. Its eyes are pale, but it seems to recognize you.');
    G.state.starter=sp;G.state.party.push(new G.Mon(sp,7));G.dexCaught(sp);set('STARTER');S.set('EVENT_GOT_STARTER');S.set('EVENT_GOT_POKEDEX');heal();
    yield* S.say('You are no longer walking alone.\fReturn home. Mother should see this.');
  }
  function* veil(){
    if(!flag('RESTED')){yield* S.say('The watcher does not move. You should go home.');return;}
    if(!flag('CROSSED')){
      yield* S.say('VEILOOK looks past your shoulder. The forest goes silent.\fIt slips between two trees that were not there a moment ago.');
      set('CROSSED');yield* travel('NorthForest_Nocturne',20,8);
      yield* S.say('The light has changed. The way south still leads to Anemoia.\fYou can hear no birds.');return;
    }
    if(!flag('HINGE')){yield* S.say('Veilook watches the path south. Something is waiting in the empty town.');return;}
    if(!flag('STARTER')){yield* S.say('It turns toward the stump beside it.');return;}
    if(!flag('EMPTY_HOME')){yield* S.say('The watcher faces south. Go home first.');return;}
    if(!flag('BALLS')){
      set('BALLS');yield* travel('NorthForest_Nocturne',20,8);
      G.bag.add('POKE_BALL',10);G.bag.add('POTION',5);heal();
      yield* S.say('A small field kit hangs from a branch: ten POKé BALLS and five POTIONS.\fA note: "Bring a little light back. The east path is open."');return;
    }
    yield* S.say('Veilook remains on this side of the trees. The waking world feels very far away.');
  }
  function* glim(){
    if(!flag('BALLS')){yield* S.say('A faint light trembles in the grass. You have nothing to catch it with.');return;}
    if(G.state.dex.caught.GLIM){yield* S.say('Glim\'s light shivers in your bag. More lights move through the tall grass.');return;}
    yield* S.say('A GLIM waits on the path.\fChoose FIGHT to weaken it, then ITEM and POKé BALL. CONFUSION can hit every opening creature.\fIf it faints or escapes, talk to this light again.');
    // Refills keep this mandatory capture recoverable after losses, failed throws or selling balls.
    if(G.bag.count('POKE_BALL')<5)G.bag.add('POKE_BALL',5-G.bag.count('POKE_BALL'));
    heal();const r=yield* G.startWildBattle('GLIM',4,{noBlackout:true});heal();
    if(r==='caught'){set('GLIM');yield* S.say('For the first time since the crossing, something in this place seems glad to see you.\fReturn to the Center in Anemoia.');}
    else yield* S.say('A little light gathers here again. You can try once more.');
  }
  function* terminal(){
    heal();G.state.lastHealTown={map:'AnemoiaTown_Nocturne',x:7,y:24};
    yield* S.say('No nurse. No voices. The terminal hums, and your companions recover.');
    if(G.state.dex.caught.GLIM&&!flag('COMPLETE')){
      set('COMPLETE');G.saveGame();yield* S.say('OPENING COMPLETE\fYou brought a little light home.\fYour game was saved. The Center, Mart, forest and East Path remain open. Six echoes are hidden around the opening region.\fBeyond the eastern boundary, the next chapter is still unwritten.');
    }
  }
  const texts={
    TOWN_SIGN:'ANEMOIA\fHome and rival\'s house: north. Oak\'s lab: south. Center: southwest. Mart: southeast. North Forest: north road. East Path: east road.',
    LAB_SIGN:'OAK\'S LAB. The windows reflect the wrong side of the street.',CENTER_SIGN:'POKéMON CENTER. Recovery terminal and storage PC.',MART_SIGN:'MART. Supplies available at the unattended counter.'
  };
  for(const [name,d] of Object.entries(G.MAPDATA.maps)){
    if(!d.realm)continue;
    const nc=d.realm==='nocturne';
    G.defMapScript(name,{
      enter(){
        G.state.realm=d.realm;
        if(name==='AnemoiaHome' && flag('STARTER'))S.hide('MOTHER');
        if(name==='AnemoiaLab' && flag('ACCIDENT'))S.hide('RIVAL');
        if(name==='AnemoiaHome' && flag('STARTER')&&!flag('EMPTY_HOME'))return(function*(){set('EMPTY_HOME');yield* S.say('The kettle is cold. The chair is empty.\fMother is gone. The house feels as if nobody has ever lived here.\fSomething pale passes the window, moving north.');})();
        if(name==='AnemoiaHome'&&!flag('AWAKE'))return(function*(){set('AWAKE');yield* S.say('ANEMOIA. A morning like any other.\fMother says Oak is expecting you and '+G.state.rival+' at the lab today.\fMove with arrows or the D-pad. A talks and reads. START opens your bag and saves. SELECT shows your next objective.');})();
        return null;
      },
      step(x,y){
        const e=(d.exits||[]).find(e=>e.x===x&&e.y===y);
        if(e)return(function*(){
          if(name.startsWith('AnemoiaTown')&&e.to.startsWith('NorthForest')&&!flag('RESTED')){yield* blocked('The forest can wait. '+(!flag('ACCIDENT')?'Oak is expecting you at his lab.':'Mother is waiting at home.'));return;}
          if(e.to==='AnemoiaLab_Nocturne'&&(!flag('KEY')||!flag('GLASSES'))){yield* blocked('The lab is locked. Look for Oak\'s key and something that belonged to him.');return;}
          if(e.to.startsWith('EastPath')&&!flag('BALLS')){yield* blocked('The east road ends in a wall of shadow.','L');return;}
          yield* travel(e.to,e.tx,e.ty);
        })();
        if(name==='AnemoiaLab'&&!flag('ACCIDENT')&&y<=8)return(function*(){
          const r=S.actor('RIVAL');yield* S.say(G.state.rival+': "Finally! Come on, let\'s choose first."');
          if(r)yield* S.move(r,'U',2);S.shake(5);G.sfx&&G.sfx('bump');yield* G.fadeOut(12);yield* S.wait(35);
          S.hide('RIVAL');set('ACCIDENT');yield* G.fadeIn(18);
          yield* S.say('A stumble. A sharp sound. Then nothing.\fOak kneels beside '+G.state.rival+'. He does not get up.\fOAK: "I... He\'s gone. Please, go home. I\'ll come and speak to your mother."');
        })();
        return null;
      },
      talk:{
        MOTHER:function*(){if(!flag('ACCIDENT')){yield* S.say('MOTHER: "Oak is expecting you. The lab is south of the crossroads. Don\'t keep him waiting."');return;}set('RESTED');yield* S.say('MOTHER: "You\'re shaking. Sit down a moment. Oak will explain."\fYou wait. He does not come.\fThrough the window, a pale shape watches from the north road.');},
        OAK:function*(){yield* S.say(flag('ACCIDENT')?'OAK: "Please go home. I need a moment."':'OAK: "You\'re both here. There\'s no need to hurry."');},
        RIVAL:function*(){yield* S.say(G.state.rival+': "The professor keeps everything hidden away. Come closer."');},
        NEIGHBOR:function*(){yield* S.say(flag('ACCIDENT')?'She has not heard anything from the lab. You cannot find the words.':'"The north woods are older than this town. We leave the stump alone."');},
        RIVAL_MOTHER:function*(){yield* S.say(flag('ACCIDENT')?'"Have you seen '+G.state.rival+'? He promised he\'d be back for lunch."':'"He went ahead to the lab. Always in such a hurry."');},
        VEILOOK:veil,GLIM:glim
      },
      sign:Object.assign({},Object.fromEntries(Object.entries(texts).map(([k,v])=>[k,function*(){yield* S.say(v);}])),{
        GLASSES:function*(){if(!nc){yield* S.say('Flowers bend toward the lab.');return;}if(flag('GLASSES')){yield* S.say('The flowers have stopped moving.');return;}set('GLASSES');yield* S.say('Oak\'s cracked glasses lie in the flowers.\fYou wrap them carefully. A shape in the glass points northeast.');},
        LAB_KEY:function*(){if(!nc){yield* S.say('A patch of pale flowers beside the fence.');return;}if(flag('KEY')){yield* S.say('Nothing else among the flowers.');return;}set('KEY');yield* S.say('A cold brass key. OAK is scratched into its side.\fThe glasses and key belong at the lab.');},
        LAB_HINGE:function*(){if(!nc){yield* S.say('The terminal is dark. Its reflection is not.');return;}if(!flag('HINGE')){set('HINGE');yield* S.say('The glasses fit into a narrow groove beside the screen.\f"OUTSIDE IS INSIDE. INSIDE IS OUTSIDE."\fYou turn the key. The room folds around you.');yield* travel('AnemoiaLab',6,9);yield* S.say('The lab is warm again. The stump in North Forest may have changed.');}else yield* S.say('The terminal has gone quiet.');},
        STUMP:starter,HEAL_TERMINAL:terminal,
        PC_TERMINAL:function*(){if(G.state.party.length)yield* G.usePC();else yield* S.say('No companions to store yet.');},
        SHOP_TERMINAL:function*(){if(!flag('BALLS')){yield* S.say('The counter display is dark.');return;}yield* G.mart(['POKE_BALL','POTION','ANTIDOTE']);},
        HOME_DIARY:function*(){yield* echo('HOME','Your handwriting: "If I wake somewhere else, remember the way home."');},
        RIVAL_DIARY:function*(){yield* echo('RIVAL','A page in '+G.state.rival+'\'s notebook: "Tomorrow, we both start."');},
        LAB_NOTES:function*(){yield* echo('LAB','Oak\'s notes: "A place can remember a person after the person is gone. Do not mistake memory for life."');},
        FOREST_MEMORY:function*(){yield* echo('FOREST','A ribbon around a branch. You remember laughing here, but not with whom.');},
        FOREST_WARNING:function*(){yield* echo('WARNING','Carved into bark: "Answer one face. Never answer all three."');},
        EAST_MEMORY:function*(){yield* echo('EAST','A little footprint filled with light. For a moment, you remember a road beyond this one.');},
        EAST_BOUNDARY:function*(){yield* S.say('Beyond here: the next chapter.\fThe opening ends in Anemoia. You can still explore and train here.');}
      })
    });
  }
  // Realm treatment is applied before dialogue/UI, keeping text legible.
  const oldDark=G.ambientDark;
  G.ambientDark=function(s,ow,cx,cy){if(oldDark)oldDark(s,ow,cx,cy);if(!isNC(ow.map)||ow.map.d.realm!=='nocturne')return;const tint=G.gfx.hex('#69748d');for(let i=0;i<s.data.length;i++)s.data[i]=G.gfx.mix(s.data[i],tint,.28);for(let i=0;i<14;i++){const x=(i*71+ow.t*.15)%320,y=(i*43+Math.sin(ow.t/65+i)*7)%180;s.pset(x|0,y|0,G.gfx.hex('#c5bfd6'));}};
  const oldUpdate=G.Overworld.prototype.update;
  G.Overworld.prototype.update=function(f){oldUpdate.call(this,f);if(f&&isNC(this.map)&&!this.locks&&!G.scriptRunning&&G.input.pressed.select)G.spawnScript(S.say(G.nocturneObjective()),'objective');};
  G.newGameIntro=function*(){G.state=G.newState();G.state.trainerId=Math.floor(Math.random()*65536);yield* G.say('POKéMON NOCTURNE\fA town remembers. A forest watches.\fWhat should we call you?');G.state.name=yield* G.namingScreen('YOUR NAME?','NORM',7);if(G.customizeLook)G.state.look=yield* G.customizeLook(G.state.look);G.startGame(G.state);yield* G.fadeIn(20);};
  class NocturneTitle{
    constructor(){this.opaque=true;this.t=0;this.done=false;}
    update(f){this.t++;if(f&&this.t>20&&(G.input.pressed.a||G.input.pressed.start))this.done=true;}
    draw(s){s.clear(G.gfx.hex('#151929'));for(let i=0;i<38;i++)s.pset(i*73%320,(i*41+Math.sin(this.t/50+i)*3)|0,G.gfx.hex('#6d7899'));G.font.drawOutlined(s,'POKéMON',130,20,G.gfx.hex('#d9d8e8'),G.PAL.black);G.logoText(s,'NOCTURNE',160,40,3,'#dad6e8','#8b88b3','#3d4266','#0b0d1a');s.blit(G.pokeSprite('VEILOOK','front',64),128,78);G.font.drawSmall(s,'A TOWN REMEMBERS. A FOREST WATCHES.',64,151,G.gfx.hex('#a5acc3'));if((this.t>>5)%2===0)G.font.drawSmall(s,'PRESS START',135,166,G.PAL.white);}
  }
  G.titleScreen=function(){G.spawnScript((function*(){const t=new NocturneTitle();yield* G.engine.run(t);G.engine.push(t);const r=yield* G.choose(G.hasSave()?['CONTINUE','NEW GAME']:['NEW GAME'],{x:10,y:70,w:120,noCancel:true});yield* G.fadeOut(15);G.engine.pop(t);if(G.hasSave()&&r===0){G.startGame(G.loadSave());yield* G.fadeIn(15);}else yield* G.newGameIntro();})(),'nocturne-title');};
  G.playIntro=G.titleScreen;
})(window.G);
