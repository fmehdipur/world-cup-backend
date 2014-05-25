Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"a-icon\">&#8962;</div>\n        <div>Home</div>\n      ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"a-icon\">&#128200;</div>\n        <div>Predict</div>\n      ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"a-icon\">&#128362;</div>\n        <div>Consensus</div>\n      ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "name", {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n          unknown\n        ");
  }

  data.buffer.push("<div class=\"a-layout--vertical fill-up\">\n  <div class=\"a-layout__panel a-toolbar\">\n    <div class=\"a-toolbar__group\">\n\n      ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("a-toolbar__group__item--clickable loose br")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("a-toolbar__group__item--clickable loose br")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "groups", options) : helperMissing.call(depth0, "link-to", "groups", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      \n      ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("a-toolbar__group__item--clickable loose br")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "consensus", options) : helperMissing.call(depth0, "link-to", "consensus", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n    </div>\n\n    <div class=\"a-toolbar__group bl\">\n      ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("user-panel a-toolbar__group__item loose br")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "profile", "model", options) : helperMissing.call(depth0, "link-to", "profile", "model", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      <a href=\"/logout\" class=\"a-toolbar__group__item--clickable loose\">\n        <div class=\"a-icon\">&#59201;</div>\n        <div>Logout</div>\n      </a>\n    </div>\n  </div>\n  \n  <div class=\"a-layout__panel--full fill-up\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/a-group"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <div class=\"a-toolbar__group__item stretch-self slim\">\n          <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("winner.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag\">\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <div class=\"a-toolbar__group__item stretch-self slim\">\n          <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("runnerUp.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag\">\n        </div>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"team a-layout__panel--full a-bar loose bb--listed a-switch\">\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "team.isWinner", {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <div class=\"a-switch__default\">\n        <div class=\"mr--slim\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        <div>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "team.fifaRank", {hash:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"a-switch__content a-button__group\">\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "advanceTeam", "team", "winners", {hash:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          <div class=\"a-button__body\">Winner</div>\n        </div>\n\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "advanceTeam", "team", "runnerUps", {hash:{},contexts:[depth0,depth0,depth0],types:["STRING","ID","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          <div class=\"a-button__body\">Runner up</div>\n        </div>\n      </div>\n\n    </div>\n  ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"mr\">1:</div>\n      ");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "team.isRunnerUp", {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program9(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"mr\">2:</div>\n        ");
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n          <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("team.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<small>[");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.fifaRank", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("]</small>");
  return buffer;
  }

  data.buffer.push("<div class=\"a-layout--vertical\">\n  <div class=\"a-layout__panel a-toolbar header-style is-fixed bb\">\n    <div class=\"a-toolbar__group\">\n      <div class=\"a-toolbar__group__item slim\">\n        <strong>Group ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong>\n      </div>\n    </div>\n\n    <div class=\"a-toolbar__group\">\n      <div class=\"a-toolbar__group__item slim\">\n        <small>Advancing:</small>\n      </div>\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "winner", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "runnerUp", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "team", "in", "teams", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/a-matchup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("winner.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag\">\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <div class=\"a-layout__panel--full center__wrapper a-switch bb--listed\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "team.isStageWinner", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <div class=\"a-switch__default\">\n        <div class=\"mr--slim\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        <div>\n          ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "team.fifaRank", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"a-switch__content a-button__group\">\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "advanceTeam", "team", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":a-button team.isStageWinner")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n          <div class=\"a-button__body\">Winner</div>\n        </div>\n      </div>\n    </div>\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"a-icon mr\">&#9733;</div>\n      ");
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("team.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<small>[");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.fifaRank", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("]</small>");
  return buffer;
  }

  data.buffer.push("<div class=\"a-layout--vertical\">\n\n  <div class=\"a-layout__panel a-bar--space-between regular bb\">\n    <small>Advancing:</small>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "winner", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "team", "in", "teams", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/a-team"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleProperty", "isShowingDetails", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button stretch-self\">\n          <div class=\"a-icon a-button__icon\">&#59141;</div>\n        </div>\n\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n\n        <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("model.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("1. ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("2. ");
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<small>[");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.rank", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("]</small>");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n      <div class=\"a-button__group center__wrapper small\">\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "wasClicked", 1, {hash:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          Winner\n        </div>\n\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "wasClicked", 2, {hash:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          Runner up\n        </div>\n      </div>\n    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "property", "in", "properties", {hash:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleProperty", "isShowingDetails", {hash:{},contexts:[depth0,depth0],types:["STRING","STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button center__wrapper mt\">\n    <div class=\"a-button__icon a-icon\">&#10006;</div>\n    <div class=\"a-button__body\">Close</div>\n  </div>\n\n");
  return buffer;
  }
function program14(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n    <div class=\"a-property\">\n      <div class=\"a-property__key\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "property.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n      <div class=\"a-property__value\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "property.value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n    </div>\n  ");
  return buffer;
  }

function program16(depth0,data) {
  
  
  data.buffer.push("\n  \n  <div class=\"team-actions a-button__group center__wrapper\">\n    \n  </div>\n\n");
  }

  data.buffer.push("<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":regular isShowingDetails:bb")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  \n    <div class=\"a-bar mb dotdotdot\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isHovering", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n      \n      <div>\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isStageWinner", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isStageRunnerUp", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "model.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "model.rank", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n      </div>\n    </div>\n\n    ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.unless.call(depth0, "isShowingDetails", {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isShowingDetails", {hash:{},inverse:self.program(16, program16, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["consensus"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"fill-up center__wrapper\">\n  <h2>Check back soon...</h2>\n</div>\n");
  
});

Ember.TEMPLATES["finals"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "moveOn", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          <div class=\"a-button__icon a-icon\">&#9873;</div>\n          <div class=\"a-button__body\">Complete</div>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"small\">Place your bets</div>\n      ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                <div class=\"a-layout__panel--full center__wrapper a-switch bb--listed\">\n\n                  <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("team.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n\n                  <div class=\"a-switch__default\">\n                    <div class=\"mr--slim\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    <div>\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "team.fifaRank", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n\n                  <div class=\"a-switch__content a-button__group\">\n                    <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectWinner", "team", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n                      <div class=\"a-button__body\">Winner</div>\n                    </div>\n                  </div>\n\n                </div>\n              ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<small>[");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.fifaRank", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("]</small>");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n                <div class=\"a-layout__panel--full center__wrapper a-switch bb--listed\">\n\n                  <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("team.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n\n                  <div class=\"a-switch__default\">\n                    <div class=\"mr--slim\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "team.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n                    <div>\n                      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "team.fifaRank", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n                    </div>\n                  </div>\n\n                  <div class=\"a-switch__content a-button__group\">\n                    <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectThirdPlaceWinner", "team", {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n                      <div class=\"a-button__body\">Winner</div>\n                    </div>\n                  </div>\n\n                </div>\n              ");
  return buffer;
  }

  data.buffer.push("<div class=\"a-layout--vertical\">\n  <div class=\"a-layout__panel--half a-bar--space-around bb\">\n    <div class=\"stage-header\">\n      <span class=\"a-icon\">&#127942;</span>\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("user.finalWinner.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n\n      <span class=\"a-icon\">&#9733;</span>\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("runnerUp.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag mr\">\n\n      <span class=\"a-icon\">&#9734;</span>\n      <img ");
  hashContexts = {'src': depth0};
  hashTypes = {'src': "STRING"};
  options = {hash:{
    'src': ("user.thirdPlaceWinner.flagImage")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || (depth0 && depth0['bind-attr'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(" class=\"small-flag\">\n    </div>\n\n    <div class=\"link-next center__wrapper\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "readyToMoveOn", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"a-layout__wrapper a-layout__panel--double\">\n    <div class=\"a-layout\">\n\n      <div class=\"a-layout__wrapper a-layout__panel--full mb--big--listed\">\n        <div class=\"a-layout\">\n          <div class=\"a-layout__wrapper a-layout__panel--double br\">\n            <div class=\"a-layout--vertical\">\n\n              <div class=\"a-layout__panel is-fixed slim header-style bb text-center\">\n                Final\n              </div>\n              \n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "team", "in", "finalTeams", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n            </div>\n          </div>\n\n          <div class=\"a-layout__wrapper a-layout__panel--full\">\n            <div class=\"a-layout--vertical\">\n              \n              <div class=\"a-layout__panel is-fixed slim header-style bb text-center\">\n                Third Place\n              </div>\n\n              ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "team", "in", "thirdPlaceTeams", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["groups"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToPlayoffs", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          <div class=\"a-button__icon a-icon\">&#127942;</div>\n          <div class=\"a-button__body\">To playoffs</div>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"small\">Place your bets</div>\n      ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"a-layout__wrapper a-layout__panel--full bb--listed\">\n          <div class=\"a-layout\">\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "group", "in", "part", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n              ");
  hashContexts = {'title': depth0,'teams': depth0,'winners': depth0,'runnerUps': depth0,'classNames': depth0};
  hashTypes = {'title': "ID",'teams': "ID",'winners': "ID",'runnerUps': "ID",'classNames': "STRING"};
  options = {hash:{
    'title': ("group.group_id"),
    'teams': ("group.teams"),
    'winners': ("user.groupWinners"),
    'runnerUps': ("user.groupRunnerUps"),
    'classNames': ("a-layout__panel--full a-layout__wrapper br--listed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['a-group'] || (depth0 && depth0['a-group'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "a-group", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"a-layout--vertical\">\n  <div class=\"a-layout__panel--half a-bar--space-around bb\">\n    <div class=\"stage-header\">Group Stage</div>\n    \n    <div class=\"link-next center__wrapper\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "readyToMoveOn", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"a-layout__panel--double a-layout__wrapper\">\n    <div class=\"a-layout--vertical\">\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "part", "in", "groupParts", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <div class=\"a-button__icon a-icon\">&#128200;</div>\n    <div class=\"a-button__body regular\">Start speculating</div>\n  ");
  }

  data.buffer.push("<div class=\"a-layout__wrapper center__wrapper fill-up\">\n  ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("a-button")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || (depth0 && depth0['link-to'])),stack1 ? stack1.call(depth0, "groups", options) : helperMissing.call(depth0, "link-to", "groups", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["playoffs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n        <div ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "moveOn", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"a-button\">\n          <div class=\"a-button__icon a-icon\">&#9873;</div>\n          <div class=\"a-button__body\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "nextPlayoff.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <div class=\"small\">Place your bets</div>\n      ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n        <div class=\"a-layout__wrapper a-layout__panel--full mb--big--listed\">\n          <div class=\"a-layout\">\n\n            ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "match", "in", "part", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n              ");
  hashContexts = {'teams': depth0,'winners': depth0,'losers': depth0,'classNames': depth0};
  hashTypes = {'teams': "ID",'winners': "ID",'losers': "ID",'classNames': "STRING"};
  options = {hash:{
    'teams': ("match.teams"),
    'winners': ("userStageWinners"),
    'losers': ("userStageLosers"),
    'classNames': ("a-layout__panel--full mr--big--listed br--listed bl--listed bt bb")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['a-matchup'] || (depth0 && depth0['a-matchup'])),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "a-matchup", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"a-layout--vertical\">\n  <div class=\"a-layout__panel--half a-bar--space-around\">\n\n    <div class=\"stage-header\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentPlayoff.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n\n    <div class=\"link-next center__wrapper\">\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "readyToMoveOn", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n  </div>\n\n  <div class=\"a-layout__wrapper a-layout__panel--double\">\n    <div class=\"a-layout--vertical\">\n\n      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "part", "in", "matchupParts", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["profile"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"profile-wrapper fill-up center__wrapper\">\n  <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n  <div>Winner: ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "finalWinner.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n</div>\n");
  return buffer;
  
});