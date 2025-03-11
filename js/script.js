/***********************************************/
/* GRADIENT GENERATOR    */
/* **********************************************/
function htmlDecode(input) {
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
(function($) {
  var
    bodyWidth,
    mClass,
    gradientFallbackColor,
    gradientDirection,
    gradientAngle,
    colorOne,
    colorOnePercent,
    colorTwo,
    colorTwoPercent,
    gradient,
    imgUrl,
    imgWidth,
    imgHeight,
    innerDivWidth,
    containerLrPadding,
    containerTbPadding,
    innerDivbgColor,
    innerDivAlign,
    text,
    textDecode,
    image,
    imageDecode,
    vmlWidth,
    vmlHeight,
    vmlgradientAngle,
    vmlgradient,
    vmlDecodegradient,
    vmlColorOnePercent,
    vmlColorTwoPercent,
    generateCode,
    generatePreview,
    generateCss;


  function updateValues() {
    //general html settings
    bodyWidth = $('#bodyWidth').val();
    urlLink = $('#linkUrl').val();
    mClass = $('#mClass').val();
    vmlMClass = '.' + $('#mClass').val();
    gradientFallbackColor = $('#gradientFallbackColor').val();

    colorOne = $('#colorOne').val();
    colorTwo = $('#colorTwo').val();
    imgUrl = $('#imgUrl').val();
    imgWidth = $('#imgWidth').val();
    innerDivWidth = $('#innerDivWidth').val() + 'px';
    innerDivMobWidth = $('#innerDivMobWidth').val() + 'px';
    innerDivAlign = $('#innerDivAlign').val();
    containerLrPadding = $('#containerLrPadding').val() + 'px';
    containerTbPadding = $('#containerTbPadding').val() + 'px';
    vmlColorOnePercent = Math.ceil(100 - $('#colorOnePercent').val()) + '%';
    vmlColorTwoPercent = colorOnePercent + '%';
    vmlWidth = $('#bodyWidth').val() * 0.75 + 'pt';

    if ($('#addDirAngle').is(':not(:checked)') && $('#addPercentage').is(':not(:checked)')) {
      $('#directionBox').hide();
      $('#percent').hide();
      gradientDirection = ''
      vmlgradientAngle = '';
      gradientAngle = '';
      colorOnePercent = '';
      colorTwoPercent = '';
      colors = '';
    } else if ($('#addDirAngle').is(':not(:checked)') && $('#addPercentage').is(':checked')) {
      $('#directionBox').hide();
      $('#percent').show();
      gradientDirection = ''
      vmlgradientAngle = '';
      gradientAngle = '';
      colorOneNoPercent = $('#colorOnePercent').val();
      colorOnePercent = $('#colorOnePercent').val() + '%';
      colorTwoPercent = (100 - colorOneNoPercent) + '%';
      colors = 'colors="' + colorTwoPercent + ' ' + colorTwo + ',' + colorOnePercent + ' ' + colorOne + '"';
    } else if ($('#addDirAngle').is(':checked') && $('#addPercentage').is(':not(:checked)')) {
      if ($('#gradientDirectionCheckBox').is(':checked')) {
        $('#directionBox').show();
        $('#gradientDirectionInput').show();
        $('#angleInput').hide();
        $('#percent').hide();

        gradientDirectionNoComma = $('#gradientDirection').val();
        gradientDirection = $('#gradientDirection').val() + ',';
        if (gradientDirectionNoComma === 'to top') {
          vmlgradientAngle = 'angle="180"';
        } else if (gradientDirectionNoComma === 'to right') {
          vmlgradientAngle = 'angle="-90"';
        } else if (gradientDirectionNoComma === 'to bottom') {
          vmlgradientAngle = 'angle="0"';
        } else if (gradientDirectionNoComma === 'to left') {
          vmlgradientAngle = 'angle="90"';
        }

        gradientAngle = '';
        colorOnePercent = '';
        colorTwoPercent = '';
        colors = 'colors="' + colorTwo + ',' + colorOne + '"';
      } else if ($('#angleCheckBox').is(':checked')) {
        $('#percent').hide();
        $('#directionBox').show();
        $('#gradientDirectionInput').hide();
        $('#angleInput').show();
        gradientAngle = $('#gradientAngle').val() + 'deg,';
        vmlgradientAngle = 'angle="-' + $('#gradientAngle').val() + '"';
        gradientDirection = '';
        colorOnePercent = '';
        colorTwoPercent = '';
        colors = 'colors="' + colorTwo + ',' + colorOne + '"';

      }
    } else if ($('#addDirAngle').is(':checked') && $('#addPercentage').is(':checked')) {
      if ($('#gradientDirectionCheckBox').is(':checked')) {
        $('#directionBox').show();
        $('#gradientDirectionInput').show();
        $('#percent').show();
        $('#angleInput').hide();
        gradientDirectionNoComma = $('#gradientDirection').val();
        gradientDirection = $('#gradientDirection').val() + ',';
        if (gradientDirectionNoComma === 'to top') {
          vmlgradientAngle = 'angle="180"';
        } else if (gradientDirectionNoComma === 'to right') {
          vmlgradientAngle = 'angle="-90"';
        } else if (gradientDirectionNoComma === 'to bottom') {
          vmlgradientAngle = 'angle="0"';
        } else if (gradientDirectionNoComma === 'to left') {
          vmlgradientAngle = 'angle="90"';
        }
        colorOneNoPercent = $('#colorOnePercent').val();
        colorOnePercent = $('#colorOnePercent').val() + '%';
        colorTwoPercent = (100 - colorOneNoPercent) + '%';
        colors = 'colors="' + colorTwoPercent + ' ' + colorTwo + ',' + colorOnePercent + ' ' + colorOne + '"';
        gradientAngle = '';
      } else if ($('#angleCheckBox').is(':checked')) {
        $('#directionBox').show();
        $('#gradientDirectionInput').hide();
        $('#angleInput').show();
        $('#percent').show();
        gradientAngle = $('#gradientAngle').val() + 'deg,';
        vmlgradientAngle = 'angle="-' + $('#gradientAngle').val() + '"';
        colorOneNoPercent = $('#colorOnePercent').val();
        colorOnePercent = $('#colorOnePercent').val() + '%';
        colorTwoPercent = (100 - colorOneNoPercent) + '%';
        colors = 'colors="' + colorTwoPercent + ' ' + colorTwo + ',' + colorOnePercent + ' ' + colorOne + '"';
        gradientDirection = '';
      }
    }




    if ($('#textRadio').is(':checked')) {
      $('#text').show();
      $('#image').hide();
      if ($('#backgroundColor').is(':checked')) {
        $('#backgroundInput').show();
        innerDivbgColor = $('#innerDivbgColor').val();
      } else {
        $('#backgroundInput').hide();
        innerDivbgColor = '';
      }
      text = '&lt;table align=&quot;' + innerDivAlign + '&quot; role=&quot;presentation&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot;  style=&quot;max-width:' + innerDivWidth + ';background-color:' + innerDivbgColor + '&quot;&gt;&lt;tr&gt;&lt;td style=&quot;font-family: Arial, sans-serif;font-size:16px;mso-line-height-rule:exactly;line-height:21px;color:#646464;text-align:center;border-radius: 12px;padding:10px;&quot;&gt;&lt;p style=&quot;margin:0&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&lt;/p&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;';
      image = '';
       vmlHeight = 'auto';

    } else if ($('#imageRadio').is(':checked')) {
      $('#text').hide();
      $('#image').show();
      vmlHeight = Math.ceil($('.' + $('#mClass').val()).outerHeight()).toFixed(1) * 0.75 + 'pt';
      text = '';
      image = '&lt;table align=&quot;' + innerDivAlign + '&quot; role=&quot;presentation&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; style=&quot;max-width:100%&quot;&gt;&lt;tr&gt;&lt;td&gt;&lt;img src=&quot;' + imgUrl + '&quot; alt=&quot;&quot; width=&quot;' + imgWidth + '&quot; style=&quot;width:100%;max-width:' + imgWidth + 'px;height:auto;display:block&quot;&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;';
    };

        generatePreview='\n'
        +'   <!--[if (gte mso 9)|(IE)]>\n'
        +'   <style>          \n'
        +'   .'+$('#mClass').val()+' table{\n'
        +'   width:' + innerDivWidth + ' !important\n'
        +'   }\n'
        +'   </style>\n'
        +'   <![endif]-->\n'
       
        generateCss ='&lt;!--[if (gte mso 9)|(IE)]&gt;<br/>&lt;style&gt;          <br/>.'+$('#mClass').val()+' table{<br/>width:' + innerDivWidth + ' !important<br/>}<br/>&lt;/style&gt;<br/>&lt;![endif]--&gt;';

    

    generatePreview += '\n' +
      '<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width:' + bodyWidth + 'px">\n' +
      '  <tr>\n' +
      '    <td class="' + mClass + '" align="center"  style="padding:' + containerLrPadding + ' ' + containerTbPadding + ';background-color:' + gradientFallbackColor + ';mso-shading:transparent;background:linear-gradient(' + gradientDirection + ' ' + gradientAngle + ' ' + colorOne + ' ' + colorOnePercent + ',' + colorTwo + ' ' + colorTwoPercent + ');">\n' +
      '      <!--[if mso]>\n' +
      '      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:' + vmlWidth + ';height:'+vmlHeight+'" fillcolor="' + colorTwo + '" stroke="f" alt="">\n' +
      '        <v:fill color2="' + colorOne + '" ' + colors + ' ' + vmlgradientAngle + ' type="gradient" />\n' +
      '        <v:textbox inset="' + containerLrPadding + ',' + containerTbPadding + ',' + containerLrPadding + ',' + containerLrPadding + '" style="mso-fit-shape-to-text:true">\n' +
      '          <![endif]-->\n' +
      '          ' + htmlDecode(text) + '\n' +
      '          ' + htmlDecode(image) + '\n' +
      '        <!--[if mso]>\n' +
      '       <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office"> </o:p></p>\n' +
      '      </v:textbox>\n' +
      '      </v:rect>\n' +
      '    <![endif]-->\n' +
      '    </td>\n' +
      '  </tr>\n' +
      '</table>\n'
    generateCode = '&lt;table role=&quot;presentation&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; width=&quot;100%&quot; style=&quot;max-width:' + bodyWidth + 'px&quot;&gt;<br/>  &lt;tr&gt;<br/>    &lt;td class=&quot;' + mClass + '&quot; align=&quot;center&quot;  style=&quot;padding:' + containerLrPadding + ' ' + containerTbPadding + ';background-color:' + gradientFallbackColor + ';mso-shading:transparent;background:linear-gradient(' + gradientDirection + ' ' + gradientAngle + ' ' + colorOne + ' ' + colorOnePercent + ',' + colorTwo + ' ' + colorTwoPercent + ');&quot;&gt;<br/>      &lt;!--[if mso]&gt;<br/>      &lt;v:rect xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot; style=&quot;width:' + vmlWidth + ';height:'+vmlHeight+'&quot; fillcolor=&quot;' + colorTwo + '&quot; stroke=&quot;f&quot; alt=&quot;&quot;&gt;<br/>        &lt;v:fill color2=&quot;' + colorOne + '&quot; ' + colors + ' ' + vmlgradientAngle + ' type=&quot;gradient&quot; /&gt;<br/>        &lt;v:textbox inset=&quot;' + containerLrPadding + ',' + containerTbPadding + ',' + containerLrPadding + ',' + containerLrPadding + '&quot; style=&quot;mso-fit-shape-to-text:true&quot;&gt;<br/>          &lt;![endif]--&gt;<br/>          ' + text + '<br/>          ' + image + '<br/>        &lt;!--[if mso]&gt;<br/>       &lt;p style=&quot;margin:0;mso-hide:all&quot;&gt;&lt;o:p xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;&gt; &lt;/o:p&gt;&lt;/p&gt;<br/>      &lt;/v:textbox&gt;<br/>      &lt;/v:rect&gt;<br/>    &lt;![endif]--&gt;<br/>    &lt;/td&gt;<br/>  &lt;/tr&gt;<br/>&lt;/table&gt;';


    $('#preview').html(generatePreview);
    $('#code').html(generateCode);
    $('#css').html(generateCss);

  }
  updateValues();


  $(document).ready(function() {
    updateValues();
  });

  $("input, select").on('change', function() {
    updateValues();
  });
  $('#mClass').on('change', function() {
    updateValues();
  });

})(jQuery);


/***********************************************/
/* COPY PASTE   */
/* **********************************************/
function copyBegin() {
  var text = document.getElementById("code").innerText;
  navigator.clipboard.writeText(text);
  alert('copied');
}

function copyEnd() {
  var text = document.getElementById("css").innerText;
  navigator.clipboard.writeText(text);
  alert('copied');
}
/***********************************************/
/* TOGGLE PREVIEW DESKTOP/MOBILE VIEW   */
/* **********************************************/

$("#toggle_view").on('click', function() {
  $("#preview").toggleClass('change-view');
  $(this).text(($(this).text() == 'Mobile View') ? 'Desktop View' : 'Mobile View');
})
