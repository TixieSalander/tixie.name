NetlifyCmsApp.registerEditorComponent({
  // Internal id of the component
  id: "image",
  // Visible label
  label: "Image",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
      {name: 'src', label: 'Image', widget: 'image'},
      {name: 'alt', label: 'Alt', widget: 'string'}
    ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^{{<\s*image (?:(src|alt)="([^"]*)")*\s*(?:(src|alt)="([^"]*)")*\s*>}}$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {

    var src = "";
    var alt = "";

    for(var i = 1; i < match.length; i+=2) {
      if (match[i] !== undefined) {
        if (match[i].indexOf("src") !== -1) {
          src = match[i+1];
        } else if (match[i].indexOf("alt") !== -1) {
          alt = match[i+1];
        }
      }
    }

    return {
      src: src,
      alt: alt
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return '{{< image src="' + obj.src + '" alt="'+ obj.alt +'">}}';
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    var output = "";

    if (obj.alt) {
      output =
      '<img src="' + obj.src + '" alt="' + obj.alt + '"/>'
      ;
    } else {
      output =
        '<img src="' + obj.src + '"/>'
      ;
    }

    return ( output );
  }
});
