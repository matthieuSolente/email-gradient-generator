# Email Gradient Generator

## An Gradient generator for your emails !

Use this generator to easily create a container with a gradient background. The generator provides test content to get an immediate result. You are free to modify the resulting code later.

Here are the fields in order:
- define the width of your component
- Add a class if necessary, or leave the default one.
The class is useful to automatically calculate the height of the block, thanks to the OuterHeight() function. This will be used
to define the height of the vml block, in case you choose to insert an image rather than text. This allows the image to be displayed correctly, especially on all rendering test tools. The rendering could be perfectly correct without a height set, in which case set the value back to auto in the code.
- Indicate the replacement color, especially for Yahoo/AOL(webmail, iOS, Android), Outlook(webmail, iOS, Android), GMX, Web.de
- indicate the desired padding.for outlook, the padding will be automatically carried over to the inset attribute of the vml textbox component
- choose the two colors of your gradient. The vml accepts several colors, but the rendering on Outlook may differ from that observed on the browser or all other mailboxes that interpret the gradient. From the moment we add percentages to define the share of each color, the differences appear.For this reason, I limited it to two colors, which is suitable in most cases.

Add either :
- a direction (top, left, right or bottom) to your gradient.
- or an angle.

To create a sort of separator, add a stop (percentage) to your main color. The percentage of the second color will be automatically calculated. To have a clear separation, you must leave it at 50%, otherwise on Outlook the separation will be blurred.

Finally, choose whether you want to insert text content or a simple image.

Gradient, by default, doesn't work on : 
- ❌ Yahoo(webmail, iOS and android) 
- ❌ Outlook (webmail and iOS and android)
- ❌ web.de, 
- ❌ GMX,

And other mailboxes. Everything has been tested on Testi@.

Enjoy and don't hesitate to give me feedback if you see any areas for improvement or bugs!
