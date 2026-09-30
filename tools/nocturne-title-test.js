// Regression: NEW GAME must reveal its introduction before waiting for input.
'use strict';
const assert=require('assert'),H=require('./headless');
for(const saved of [false,true]){
  const G=H.loadGame().G;const errors=[];G.onError=e=>errors.push(e);
  if(saved){G.state=G.newState();G.saveGame();}
  G.titleScreen();H.runFrames(G,35);H.tap(G,'start',5);
  assert.equal(G.engine.top().constructor.name,'Menu');
  if(saved)H.tap(G,'down',3);
  H.tap(G,'a',50);
  assert.equal(G.engine.top().constructor.name,'TextBox');
  assert.equal(G.fadeLevel,0,'intro is hidden by the title fade');
  G.engine.draw(G.gfx.screen);
  assert(new Set(G.gfx.screen.data).size>10,'screen is blank');
  let naming=false,customizing=false;
  for(let i=0;i<1200;i++){
    const t=G.engine.top();
    if(t&&t.constructor.name==='TextBox')H.tap(G,'a',3);
    else if(t&&t.constructor.name==='Customizer'){customizing=true;H.tap(G,'start',3);}
    else if(t&&t.opaque&&t.constructor.name==='Object'){naming=true;H.tap(G,'start',3);}
    else H.runFrames(G,2);
    if(G.ow&&G.ow.map&&G.fadeLevel===0&&!G.scriptRunning)break;
  }
  assert(naming&&customizing,'new-game setup did not run');
  assert.equal(G.state.map,'AnemoiaHome');assert.equal(G.fadeLevel,0);assert.deepEqual(errors,[]);
  console.log('PASS visible NEW GAME → naming → customizer → home; existing save:',saved);
}
