function legend(e,o){legend(e,o,null)}function legend(e,o,l,a){a="undefined"!=typeof a?a:"<%=label%>",e.className="legend";for(var n=o.hasOwnProperty("datasets")?o.datasets:o;e.hasChildNodes();)e.removeChild(e.lastChild);var t=l?showTooltip:noop;n.forEach(function(o,n){var r=document.createElement("div");r.className="title",e.appendChild(r);var d=document.createElement("div");d.className="color-sample",d.style.backgroundColor=o.hasOwnProperty("strokeColor")?o.strokeColor:o.color,d.style.borderColor=o.hasOwnProperty("fillColor")?o.fillColor:o.color,r.appendChild(d),legendNode=a.replace("<%=value%>",o.value),legendNode=legendNode.replace("<%=label%>",o.label);var s=document.createTextNode(legendNode);s.className="text-node",r.appendChild(s),t(l,r,n)})}function showTooltip(e,o,l){var a=Chart.helpers,n=e.segments;"undefined"!=typeof n&&(a.addEvent(o,"mouseover",function(){var o=n[l];o.save(),o.fillColor=o.highlightColor,e.showTooltip([o]),o.restore()}),a.addEvent(o,"mouseout",function(){e.draw()}))}function noop(){}