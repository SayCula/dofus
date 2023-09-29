// 0.1v
$(document).ready(function() {
  
    var minifiedCode = "console.log('Hello, World!'); function init() { alert('Script Loaded!'); }";
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = minifiedCode;

    document.head.appendChild(script);

    script.onload = function() {
        init();
    };
});