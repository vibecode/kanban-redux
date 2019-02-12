(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a,o,r,i,c,l=n(0),s=n.n(l),u=n(80),d=n.n(u),p=n(19),E=n(3),f=n(4),h=n(6),O=n(5),v=n(7),g=n(8),y=n(9),b=n.n(y),N=n(11),m=n(36),j=n.n(m),D=Object(N.DragSource)("NOTE",{beginDrag:function(e){return{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(a=Object(N.DropTarget)("NOTE",{hover:function(e,t){var n=e.id,a=t.getItem().id;a!==n&&e.onMoveNote(a,n)}},function(e,t){return{connectDropTarget:e.dropTarget()}})((o=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"handleDelete",value:function(){this.props.onDeleteNote(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,a=e.isDragging,o=e.children;return t(n(s.a.createElement("div",{className:j.a.noteContainer},s.a.createElement("li",{className:j.a.note,style:{opacity:a?0:1}},o),s.a.createElement("button",{className:j.a.deleteNote,onClick:this.handleDelete}))))}}]),t}(l.Component),Object(g.a)(o.prototype,"handleDelete",[b.a],Object.getOwnPropertyDescriptor(o.prototype,"handleDelete"),o.prototype),a=o))||a)||a,_=n(51),L=n.n(_),k=(r=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"checkEnter",value:function(e){"Enter"===e.key&&this.handleFinishEdit(e)}},{key:"handleFinishEdit",value:function(e){var t=e.target.value;this.props.onEdit&&t.trim()&&this.props.onEdit(this.props.id,t)}},{key:"handleValueClick",value:function(){this.props.onValueClick(this.props.id)}},{key:"renderEdit",value:function(){var e=this;return s.a.createElement("input",{className:L.a.input,ref:function(t){return t?t.selectionEnd=e.props.value.length:null},type:"text",autoFocus:!0,defaultValue:this.props.value,onBlur:this.handleFinishEdit,onKeyPress:this.checkEnter})}},{key:"renderValue",value:function(){return s.a.createElement("div",{className:L.a.valueContainer,onClick:this.handleValueClick},s.a.createElement("span",null,this.props.value))}},{key:"render",value:function(){var e=this.props.isEditing;return s.a.createElement("div",null,e?this.renderEdit():this.renderValue())}}]),t}(l.Component),Object(g.a)(r.prototype,"checkEnter",[b.a],Object.getOwnPropertyDescriptor(r.prototype,"checkEnter"),r.prototype),Object(g.a)(r.prototype,"handleFinishEdit",[b.a],Object.getOwnPropertyDescriptor(r.prototype,"handleFinishEdit"),r.prototype),Object(g.a)(r.prototype,"handleValueClick",[b.a],Object.getOwnPropertyDescriptor(r.prototype,"handleValueClick"),r.prototype),r),C=n(84),T=n.n(C),A=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.onValueClick,a=e.onEditNote,o=e.onDeleteNote,r=e.onMoveNote;return s.a.createElement("ul",{className:T.a.notesList},t.map(function(e){var t=e.id,i=e.task,c=e.isEditing;return s.a.createElement(D,{key:t,id:t,onDeleteNote:o,onMoveNote:r},s.a.createElement(k,{isEditing:c,id:t,value:i,onValueClick:n,onEdit:a}))}))}}]),t}(l.Component),I=n(25),w=n.n(I),M={hover:function(e,t){var n=e.lane.id,a=e.lane.notes.length,o=t.getItem().id,r=t.getItemType();a||"NOTE"!==r?n!==o&&"LANE"===r&&e.onMoveLane(o,n):e.attachToLane(n,o)}},x=Object(N.DragSource)("LANE",{beginDrag:function(e){return{id:e.lane.id}},isDragging:function(e,t){return e.id===t.getItem().id}},function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}})(i=Object(N.DropTarget)(["NOTE","LANE"],M,function(e){return{connectDropTarget:e.dropTarget()}})((c=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"handleCreateNote",value:function(){this.props.onCreateNote(this.props.lane.id)}},{key:"handleDeleteNote",value:function(e){this.props.onDeleteNote(this.props.lane.id,e)}},{key:"handleDeleteLane",value:function(){var e=this,t=this.props.lane;this.props.onDeleteLane(t.id),t.notes.forEach(function(t){return e.props.onDeleteLane(null,t)})}},{key:"render",value:function(){var e=this.props,t=e.lane,n=e.allNotes,a=e.onEditLane,o=e.onEditNote,r=e.onMoveNote,i=e.connectDragSource,c=e.connectDropTarget,l=t.notes.map(function(e){return n.find(function(t){return t.id===e})}).filter(function(e){return e});return i(c(s.a.createElement("div",{className:w.a.lane},s.a.createElement("button",{className:w.a.deleteLane,onClick:this.handleDeleteLane}),s.a.createElement("h2",{className:w.a.laneHeader},s.a.createElement(k,{id:t.id,isEditing:t.isEditing,value:t.name,onEdit:a,onValueClick:a})),s.a.createElement("button",{className:w.a.addNote,onClick:this.handleCreateNote},"+"),s.a.createElement(A,{notes:l,onValueClick:o,onEditNote:o,onDeleteNote:this.handleDeleteNote,onMoveNote:r}))))}}]),t}(l.Component),Object(g.a)(c.prototype,"handleCreateNote",[b.a],Object.getOwnPropertyDescriptor(c.prototype,"handleCreateNote"),c.prototype),Object(g.a)(c.prototype,"handleDeleteNote",[b.a],Object.getOwnPropertyDescriptor(c.prototype,"handleDeleteNote"),c.prototype),Object(g.a)(c.prototype,"handleDeleteLane",[b.a],Object.getOwnPropertyDescriptor(c.prototype,"handleDeleteLane"),c.prototype),i=c))||i)||i,V=n(13),P=n.n(V),S=function(e,t){return{type:"ATTACH_TO_LANE",payload:{laneId:e,noteId:t}}},F=function(e,t,n){return{type:"note"===e?"MOVE_NOTE":"MOVE_LANE",payload:{sourceId:t,targetId:n}}},H=Object(p.b)(function(e){return{allNotes:e.notes}},function(e){return{onCreateNote:function(t){var n,a=(n="New task",{type:"CREATE_NOTE",payload:{id:P.a.v4(),isEditing:!0,task:n}});e(a),e(S(t,a.payload.id))},onDeleteNote:function(t,n){e({type:"DELETE_NOTE",payload:n}),t&&e(function(e,t){return{type:"DETACH_FROM_LANE",payload:{laneId:e,noteId:t}}}(t,n))},onEditNote:function(t,n){var a={id:t};n?(a.task=n,a.isEditing=!1):a.isEditing=!0,e(function(e){return{type:"UPDATE_NOTE",payload:e}}(a))},onMoveNote:function(t,n){e(F("note",t,n))},attachToLane:function(t,n){e(S(t,n))}}})(x),R=n(85),U=n.n(R),J=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onEditLane,n=e.onDeleteLane,a=e.onMoveLane,o=this.props.lanes.map(function(e){return s.a.createElement(H,{key:e.id,lane:e,onEditLane:t,onDeleteLane:n,onMoveLane:a})});return s.a.createElement("div",{className:U.a.lanes},o)}}]),t}(l.Component),W=n(86),$=n.n(W),B=n(52),G=n.n(B),q=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:G.a.topContainer},s.a.createElement("button",{className:G.a.addLane,onClick:this.props.onCreateLane},"+ Add column")),s.a.createElement(J,{lanes:this.props.lanes,onEditLane:this.props.onEditLane,onDeleteLane:this.props.onDeleteLane,onMoveLane:this.props.onMoveLane}))}}]),t}(l.Component),z=Object(N.DragDropContext)($.a)(Object(p.b)(function(e){return{lanes:e.lanes}},function(e){return{onCreateLane:function(){var t;e((t="New column",{type:"CREATE_LANE",payload:{id:P.a.v4(),name:t,notes:[],isEditing:!0}}))},onEditLane:function(t,n){var a={id:t};n?(a.name=n,a.isEditing=!1):a.isEditing=!0,e(function(e){return{type:"UPDATE_LANE",payload:e}}(a))},onDeleteLane:function(t){e({type:"DELETE_LANE",payload:{id:t}})},onMoveLane:function(t,n){e(F("lane",t,n))}}})(q)),K=n(20),Q=n(10),Y=n(24),Z=[],X=n(26),ee=n.n(X),te=[{id:P.a.v4(),name:"Todo",notes:[]},{id:P.a.v4(),name:"In progress",notes:[]},{id:P.a.v4(),name:"Complete",notes:[]}],ne=Object(K.b)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_NOTE":return[].concat(Object(Y.a)(e),[t.payload]);case"UPDATE_NOTE":return e.map(function(e){return t.payload.id===e.id?Object(Q.a)({},e,t.payload):e});case"DELETE_NOTE":return e.filter(function(e){return e.id!==t.id});default:return e}},lanes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_LANE":return[].concat(Object(Y.a)(e),[t.payload]);case"UPDATE_LANE":return e.map(function(e){return e.id===t.payload.id?Object(Q.a)({},e,t.payload):e});case"DELETE_LANE":return e.filter(function(e){return e.id!==t.payload.id});case"ATTACH_TO_LANE":var n=t.payload,a=n.laneId,o=n.noteId;return e.map(function(e){return e.notes.indexOf(o)>=0?Object(Q.a)({},e,{notes:e.notes.filter(function(e){return e!==o})}):e.id===a?Object(Q.a)({},e,{notes:[].concat(Object(Y.a)(e.notes),[o])}):e});case"DETACH_FROM_LANE":var r=t.payload,i=r.laneId,c=r.noteId;return e.map(function(e){return e.id===i?Object(Q.a)({},e,{notes:e.notes.filter(function(e){return e!==c})}):e});case"MOVE_NOTE":var l=t.payload,s=l.sourceId,u=l.targetId,d=e.filter(function(e){return~e.notes.indexOf(s)})[0],p=e.filter(function(e){return~e.notes.indexOf(u)})[0],E=d.notes.indexOf(s),f=p.notes.indexOf(u);return d.id===p.id?e.map(function(e){return e.id===d.id?Object(Q.a)({},e,{notes:ee()(d.notes,{$splice:[[E,1],[f,0,s]]})}):e}):e.map(function(e){return e.id===d.id?Object(Q.a)({},e,{notes:ee()(e.notes,{$splice:[[E,1]]})}):e.id===p.id?Object(Q.a)({},e,{notes:ee()(e.notes,{$splice:[[f,0,s]]})}):e});case"MOVE_LANE":var h=t.payload,O=h.sourceId,v=h.targetId,g=e.find(function(e){return e.id===O}),y=e.findIndex(function(e){return e.id===O}),b=e.findIndex(function(e){return e.id===v});return ee()(e,{$splice:[[y,1],[b,0,g]]});default:return e}}}),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(K.c)(ne,e)},oe=n(87),re=n.n(oe),ie=n(88),ce=n.n(ie);n(210);var le=re.a.createInstance({name:"kanban"});le.getItem("state").then(function(e){return e||void 0}).then(function(e){return ae(e)},function(e){return console.log(e),ae(null)}).then(function(e){d.a.render(s.a.createElement(p.a,{store:e},s.a.createElement(z,null)),document.getElementById("root")),e.subscribe(ce()(function(){le.setItem("state",e.getState())},1e3))}),"serviceWorker"in navigator&&window.addEventListener("load",function(){var e="".concat("/kanban-redux","/service-worker.js");navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})})},25:function(e,t,n){e.exports={lane:"Lane_lane__3iW1Z",laneHeader:"Lane_laneHeader__wp2wv",deleteLane:"Lane_deleteLane__82Ej9",addNote:"Lane_addNote__lMOYg"}},36:function(e,t,n){e.exports={note:"Note_note__3AiGQ",noteContainer:"Note_noteContainer__2vzE5",deleteNote:"Note_deleteNote__6TGyh"}},51:function(e,t,n){e.exports={input:"Editable_input__IkdHJ",valueContainer:"Editable_valueContainer__3TlnO"}},52:function(e,t,n){e.exports={topContainer:"App_topContainer__2bdJI",addLane:"App_addLane__2c1oU"}},84:function(e,t,n){e.exports={notesList:"Notes_notesList__24GiB"}},85:function(e,t,n){e.exports={lanes:"Lanes_lanes__q2bc0"}},89:function(e,t,n){e.exports=n(211)}},[[89,1,2]]]);
//# sourceMappingURL=main.0b84c578.chunk.js.map