import "@shopify/ui-extensions/preact";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";

/*
 To test this extension you need to add the following input to your product add to cart action to apply the attribute restricted if the tag exists on the product:

 {% if product.tags contains 'restricted' %}
      <input type="hidden" name="properties[_restricted]" value="Restricted">
  {% endif %}
*/

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  var eligible = false;
  const lines = shopify.lines.v;
  console.log(lines);
  var restrictedItems = false;

  lines.forEach((line) => {
    console.log(line);
    const attributes = line.attributes;
    attributes.forEach((attribute) => {
      if (attribute.key === "_restricted" && attribute.value === "Restricted") {
        restrictedItems = true;
      }
    });
  });

  if (restrictedItems) {
    useEffect(() => {
      shopify.buyerJourney.intercept(({ canBlockProgress }) => {
        if (!canBlockProgress) {
          return {
            behavior: "allow",
          };
        }

        if (!eligible) {
          return {
            behavior: "block",
            reason: "eligibility_check_failed",
            errors: [
              {
                message:
                  "You must verify your eligibility to purchase this item to proceed.",
              },
            ],
          };
        }

        return {
          behavior: "allow",
        };
      });
    }, [eligible]);

    const checkboxChange = (event) => {
      eligible = event.target.checked;
    };

    return (
      <s-banner heading="checkout-ui">
        <s-stack gap="base">
          <s-checkbox
            checked={eligible}
            label="You are trying to purchase a restricted item. Please verify that you are eligible to purchase this item."
            onChange={checkboxChange}
          />
        </s-stack>
      </s-banner>
    );
  } else {
    return;
  }
}
