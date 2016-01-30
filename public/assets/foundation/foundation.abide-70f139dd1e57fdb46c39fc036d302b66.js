!function(t,a,e,i){"use strict";Foundation.libs.abide={name:"abide",version:"5.3.3",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(t,a,i){var r=e.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,n=t.value,s=r===n;return s}}},timer:null,init:function(t,a,e){this.bindings(a,e)},events:function(a){var e=this,i=e.S(a).attr("novalidate","novalidate"),r=i.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),i.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(t){var a=/ajax/i.test(e.S(this).attr(e.attr_name()));return e.validate(e.S(this).find("input, textarea, select").get(),t,a)}).on("reset",function(){return e.reset(t(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(t){e.validate([this],t)}).on("keydown.fndtn.abide",function(t){r.live_validate===!0&&(clearTimeout(e.timer),e.timer=setTimeout(function(){e.validate([this],t)}.bind(this),r.timeout))})},reset:function(a){a.removeAttr(this.invalid_attr),t(this.invalid_attr,a).removeAttr(this.invalid_attr),t(".error",a).not("small").removeClass("error")},validate:function(t,a,e){for(var i=this.parse_patterns(t),r=i.length,n=this.S(t[0]).closest("form"),s=/submit/.test(a.type),d=0;r>d;d++)if(!i[d]&&(s||e))return this.settings.focus_on_invalid&&t[d].focus(),n.trigger("invalid"),this.S(t[d]).closest("form").attr(this.invalid_attr,""),!1;return(s||e)&&n.trigger("valid"),n.removeAttr(this.invalid_attr),e?!1:!0},parse_patterns:function(t){for(var a=t.length,e=[];a--;)e.push(this.pattern(t[a]));return this.check_validation_and_apply_styles(e)},pattern:function(t){var a=t.getAttribute("type"),e="string"==typeof t.getAttribute("required"),i=t.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(i)&&i.length>0?[t,this.settings.patterns[i],e]:i.length>0?[t,new RegExp(i),e]:this.settings.patterns.hasOwnProperty(a)?[t,this.settings.patterns[a],e]:(i=/.*/,[t,i,e])},check_validation_and_apply_styles:function(a){var e=a.length,i=[],r=this.S(a[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(r.data(this.attr_name(!0)+"-init")||{};e--;){var n,s,d=a[e][0],u=a[e][2],F=d.value.trim(),l=this.S(d).parent(),o=d.getAttribute(this.add_namespace("data-abide-validator")),h="radio"===d.type,v="checkbox"===d.type,_=this.S('label[for="'+d.getAttribute("id")+'"]'),c=u?d.value.length>0:!0;d.getAttribute(this.add_namespace("data-equalto"))&&(o="equalTo"),n=l.is("label")?l.parent():l,h&&u?i.push(this.valid_radio(d,u)):v&&u?i.push(this.valid_checkbox(d,u)):(o&&(s=this.settings.validators[o].apply(this,[d,u,n]),i.push(s)),a[e][1].test(F)&&c||!u&&d.value.length<1||t(d).attr("disabled")?i.push(!0):i.push(!1),i=[i.every(function(t){return t})],i[0]?(this.S(d).removeAttr(this.invalid_attr),n.removeClass("error"),_.length>0&&this.settings.error_labels&&_.removeClass("error"),t(d).triggerHandler("valid")):(n.addClass("error"),this.S(d).attr(this.invalid_attr,""),_.length>0&&this.settings.error_labels&&_.addClass("error"),t(d).triggerHandler("invalid")))}return i},valid_checkbox:function(t,a){var t=this.S(t),e=t.is(":checked")||!a;return e?t.removeAttr(this.invalid_attr).parent().removeClass("error"):t.attr(this.invalid_attr,"").parent().addClass("error"),e},valid_radio:function(t,a){for(var e=t.getAttribute("name"),i=this.S(t).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+e+"']"),r=i.length,n=!1,s=0;r>s;s++)i[s].checked&&(n=!0);for(var s=0;r>s;s++)n?this.S(i[s]).removeAttr(this.invalid_attr).parent().removeClass("error"):this.S(i[s]).attr(this.invalid_attr,"").parent().addClass("error");return n},valid_equal:function(t,a,i){var r=e.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,n=t.value,s=r===n;return s?(this.S(t).removeAttr(this.invalid_attr),i.removeClass("error")):(this.S(t).attr(this.invalid_attr,""),i.addClass("error")),s},valid_oneof:function(t,a,e,i){var t=this.S(t),r=this.S("["+this.add_namespace("data-oneof")+"]"),n=r.filter(":checked").length>0;if(n?t.removeAttr(this.invalid_attr).parent().removeClass("error"):t.attr(this.invalid_attr,"").parent().addClass("error"),!i){var s=this;r.each(function(){s.valid_oneof.call(s,this,null,null,!0)})}return n}}}(jQuery,window,window.document);