You can preview this work [here](https://archie-headless.myshopify.com/). The store password sesame. Bogus payment gateway is active - cardnumber is `1` then valid exp date and security code, any name.

Having not worked with Checkout Extensions and Checkout UI extensions before I chose to attempt this task as I felt it would be a good opportunity to learn a new skill regardless of my success with this application.

I initially did this using metafields and cart validation methods, this proved to be an ineffective implementation as it would prevent the item getting into the cart and therefore make customers unable to verify themselves in checkout.

After I re-read the brief I interpreted it as:

An item marked as restricted cannot be checked out unless the customer self validates. This must be done within the checkout.

So I opted to create a checkbox that would block checking out if unchecked.
Using the tag 'restricted' on products and then if the product has that tag applying the restricted cart attribute as tags are not directly accessible in the checkout.

I followed Shopify docs for the set up for an extension and then stripped the default content down to the barebones. I used the Shopify docs to ascertain the requirements for the toml file in my extension to understand how blocking the checkout works and including the block setting in the checkout editor.

Once I had the checkbox working I needed to tie it into the items in the checkout. I did this using the attribute mentioned above. Created a boolean variable set to false by default and then looped through the products and if there is one item thats restricted it switches to true. When true it loads the checkout block full and allows the validation functionality to work.

I am unsure if I have used the best practices for this and there were instances where having an experienced dev to lean on would have cleared blockers quickly, but I believe I have delivered what was required.

Other method considered for getting product tag was to get the GID from the line item and then use the storefront api to get the actual tags so we aren't reliant on theme alterations for this to work, but it felt like a reasonable trade off.
