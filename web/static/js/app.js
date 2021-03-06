// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"

$(function() {
  var codes = $('code')

  if (codes.length > 0) {
    $.each(codes, function(index, element) {
      var $self = $(element)
      var text = $self.text();
      text = text.replace(new RegExp(/(&quot;)/g), "\"");
      text = text.replace(new RegExp(/(&lt;)/g), "<");
      text = text.replace(new RegExp(/(&gt;)/g), ">");
      text = text.replace(new RegExp(/(&#39;)/g), "'");
      $self.text(text);
    })
  }
})
