# Email Gradient Generator

## An Gradient generator for your emails !

Use this generator to easily create a container with a gradient background. The generator provides test content to get an immediate result. You are free to modify the resulting code later.

Here are the fields in order:
- define the width of your component
-A dd a class if necessary, or leave the default one.
The class is useful to automatically calculate the height of the block, thanks to the OuterHeight() function. This will be used
to define the height of the vml block, in case you choose to insert an image rather than text. The vml attribute mso-fit-shape-to-text no longer works when the content is an image. We must therefore change the "auto" value to height and indicate the height of the block so that the image is displayed correctly.
- Indicate the replacement color, especially for webmails
- indicate the desired padding
- choose the two colors of your gradient. The vml accepts several colors, but the rendering on Outlook may differ from that observed on the browser or all other mailboxes that interpret the gradient. For this reason, I limited it to two colors, which is suitable in most cases.

Add either :
- a direction (top, left, right or bottom) to your gradient.
- or an angle.

To create a sort of separator, add a stop to your main color.

Finally, choose whether you want to insert text content or a simple image. The choice is given because on Outlook, the container can adapt to the content, thanks to the "mso-fit-shape-to-test:true" property.
For the image, this property does not allow the image to stretch to its full height. In the case of an image, we therefore indicate the height of the block, calculated using the outerHeight function.

Enjoy and don't hesitate to give me feedback if you see any areas for improvement or bugs!
