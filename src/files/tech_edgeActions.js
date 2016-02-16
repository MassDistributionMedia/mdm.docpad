/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'mini-node-out'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1330, function(sym, e) {
         this.play();

      });
      //Edge binding end

   })("mini-node-out");
   //Edge symbol end:'mini-node-out'

   //=========================================================
   
   //Edge symbol: 'node1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         this.play("pulse-node1");

      });
      //Edge binding end

   })("node1");
   //Edge symbol end:'node1'

   //=========================================================
   
   //Edge symbol: 'WAVE-OUT'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         this.play();

      });
      //Edge binding end

   })("wave-out");
   //Edge symbol end:'wave-out'

   //=========================================================
   
   //Edge symbol: 'mini-node-up'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         this.play();

      });
      //Edge binding end

   })("mini-node-up");
   //Edge symbol end:'mini-node-up'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-73945849");