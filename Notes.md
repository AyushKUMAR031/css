**CSS Selectors**
- Universal Selector (`*`)
    - Selects all elements on the page.
- Element Selector
    - Selects all elements of a specific type.
- Class Selector (`.`)
    - Selects all elements with a particular class attribute.
- ID Selector (`#`)
    - Selects a single element with a specific ID attribute.
- Attribute Selector (`[]`)
    - Selects elements based on the presence or value of a given attribute.
- Pseudo-class Selector (`:`)
    - Selects elements based on their state (e.g., `:hover`) or position (e.g., `:first-child`).
- Pseudo-element Selector (`::`)
    - Selects and styles parts of an element (e.g., `::first-line`).
- Descendant Selector (` `)
    - Selects all elements that are descendants of a specified element.
- Child Selector (`>`)
    - **Symbol:** `parent > child`
    - Selects elements that are direct children of a specified element.
- Adjacent Sibling Selector (`+`)
    - **Symbol:** `previous + next`
    - Selects an element that is directly adjacent to a specified element.
- General Sibling Selector (`~`)
    - **Symbol:** `previous ~ siblings`
    - Selects all elements that are siblings of a specified element.

**Units**
- **Absolute Units**
    - Pixels (px)
- **Relative Units** 
    - Percentages (%)
        - Default Value: Relative to the parent element's corresponding property (e.g., width, height).
    - Ems (em)
        - Default Value: Relative to the font-size of the element itself.
    - Rems (rem)
        - Default Value: Relative to the font-size of the root element (<html> i.e, 1rem).
    - Viewport Width (vw)
        - Default Value: 1vw is equal to 1% of the viewport's width.
    - Viewport Height (vh)
        - Default Value: 1vh is equal to 1% of the viewport's height.

**Display**
- **Block-level Elements**
    - Occupies the full width of its parent element.
    - Can have margins, padding, and borders.
    - Can have a width and height set.
- **Inline Elements**
    - Occupies only the space needed for its content.
    - Cannot have margins, padding, or borders (except for inline-block elements).
    - Cannot have a width and height set.
- **Inline-Block Elements**
    - Combination of block and inline elements.
    - Occupies only the space needed for its content.
    - Can have margins, padding, and borders.
    - Can have a width and height set.
- **none**
    - The element is not displayed.
- **Flexbox** (Flexible Box)
    - A layout mode that allows flexible layout of elements within a container.
- **Grid** (Grid Layout)
    - A layout mode that allows dividing a container into rows and columns to place elements.


**Position**
- Static : by default for elements.
- Relative : It works relative to the Parent element.
- Absolute : It find the parent whoes position is relative or else goes to the HTML(grandParentofALL) and works relative to it.
- fixed : Its relative to the viewport, always stays in the same place even when the page is scrolled.
- Sticky : Acts like relative positioning until an element scrolls to a specified point, then it "sticks" in place (relative to the viewport or nearest scrolling ancestor).

**Z-Index**
- ```It help to get element closer to Screen or away as per required, more the z-index value closer it would be.```