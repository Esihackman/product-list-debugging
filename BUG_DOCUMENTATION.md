## BUGS DOCUMENTATION

**BUG INSIDE ADD TO CART COMPONENT**
1. In the add to cart ts, there was no import decorator and also the style url was without "S".

2. The add to cart decorator had a semi-colon at the end which need to be removed.

**ADD TO CART BEING HARD CODED**
The add to cart html was hard coded instead of them to be dynamically being rendered using directives

**UN USED TITLE PROPERTY**
in the app component.ts, there was a property title which was assign to a product list value. that property does not do anything.

**Confirm modal overflow**
In the cornfirm modal, when too many items are added to the cart, it overflows and the remaining items are not seen so i added overflow -y scroll and also gave a specific height to the modal.