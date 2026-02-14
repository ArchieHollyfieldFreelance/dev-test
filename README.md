You can preview this work [here](https://archie-headless.myshopify.com/). The store password is included in the email this repo link was contained in.

Having not worked with Checkout Extensions and Checkout UI extensions before I chose to attempt this task as I felt it would be a good opportunity to learn a new skill regardless of my success with this application.

I initially did this using metafields and cart validation methods, this proved to be an ineffective implementation as it would prevent the item getting into the cart and therefore make customers unable to verify themselves in checkout.

After I re-read the brief I interpreted it as:

An item marked as restricted cannot be checked out unless the customer self validates. This must be done within the checkout.
So I opted to create a checkbox that would block checking out if unchecked.
Using the tag 'restricted' on products and then if the product has that tag applying the restricted cart attribute as tags are not directly accessible in the checkout.

I followed Shopify docs for the set up for an extension and then stripped the default content down to the barebones. I used the Shopify docs to ascertain the requirements for the toml file in my extension to understand how blocking the checkout works and including the block setting in the checkout editor.

I am unsure if I have used the best practices for this and there were instances where having an experienced dev to lean on would have cleared blockers quickly, but I believe I have delivered what was required.
