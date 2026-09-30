'use strict';
const assert=require('assert'),H=require('./headless');H.runFrames=(G,n)=>{for(let i=0;i<n;i++)G.engine.step();};
const driver=require('./drive');
function menu(T){for(let i=0;i<1000;i++){if(T.top().constructor.name==='Menu')return;T.press('a');}throw Error('Menu never appeared');}
function pick(T,n){for(let i=0;i<n;i++)T.press('down');T.press('a');}
for(const [choice,expected]of ['BULBASAUR_NOCTURNE','CHARMANDER_NOCTURNE','SQUIRTLE_NOCTURNE'].entries()){
 const T=driver.make('?map=NorthForest_Nocturne&x=17&y=6'),G=T.G;G.setFlag('NC_CROSSED');G.ow.player.dir='up';T.press('a');menu(T);pick(T,choice);assert.notEqual(T.settle(false),-1);assert.equal(G.state.starter,expected);assert.equal(G.state.companionOrigin.name,G.state.rival);assert(!G.state.companionOrigin.revealed);
 for(const side of ['front','back','icon'])G.pokeSprite(expected,side);assert(G.saveGame());assert.equal(G.loadSave().companionOrigin.kind,'rival');
}
for(const [choice,money,delta]of [[0,1000,200],[1,1000,0],[0,0,0],[2,1000,0]]){
 const T=driver.make('?map=AnemoiaMart_Nocturne&x=6&y=3'),G=T.G;G.state.money=money;G.ow.player.dir='up';T.press('a');menu(T);pick(T,0);menu(T);pick(T,choice);assert.notEqual(T.settle(false),-1);assert.equal(G.state.money,money-delta);assert.equal(G.bag.count('POKE_BALL'),choice===2||money===0?0:1);
}
const T=driver.make(),G=T.G;T.settle(false);G.state.party=[new G.Mon('MIRTH',7)];G.state.starter='MIRTH';G.state.boxes[0].push(new G.Mon('DREAD',7));G.ow.load('AnemoiaHome',6,7,'up');assert.equal(G.state.party[0].species,'BULBASAUR_NOCTURNE');assert.equal(G.state.boxes[0][0].species,'CHARMANDER_NOCTURNE');assert.equal(G.state.companionOrigin.kind,'rival');
console.log('PASS: all three canonical expressions and sprites, hidden companion identity, voluntary payment/taking/cancel/insufficient money, legacy party and box migration.');
