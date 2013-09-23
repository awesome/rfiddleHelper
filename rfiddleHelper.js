$('document').ready(function(){
    renderPage();
});

function renderPage(){
    $('pre.rfiddle').each(function(){
        var url = "http://www.r-fiddle.org/#/query/preview?code=";
        var iframe = document.createElement("iframe");
        var code = $(this).html();


        iframe.src = url + encodeURIComponent(code);
        iframe.width ='100%';
        iframe.height = 19 + 19 * getNumberOfLines(code) + 'px';
        iframe.frameBorder='0';
        iframe.allowFullScreen = 'allowfullscreen'
        $(this).replaceWith(iframe);
    });

    $('pre.rfiddle-interactive').each(function(){
        var url = "http://www.r-fiddle.org/#/query/embed?code=";
        var iframe = document.createElement("iframe");
        var code = $(this).html();


        iframe.src = url + encodeURIComponent(code);
        iframe.width ='100%';
        iframe.height = 85 + 19 + 19 * getNumberOfLines(code) + 'px';
        iframe.frameBorder='0';
        iframe.allowFullScreen = 'allowfullscreen'
        $(this).replaceWith(iframe);
    });
}

function getNumberOfLines(str){
    //get the number of lines
    var lines = str.split(/\r\n|\r|\n/);
    return lines.length;
}